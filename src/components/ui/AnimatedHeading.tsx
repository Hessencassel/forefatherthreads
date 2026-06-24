import { useEffect, useRef, useState, Children, isValidElement, type ReactNode } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3';

interface AnimatedHeadingProps {
  children: ReactNode;
  tag?: HeadingTag;
  className?: string;
}

// Split flat children on <br> elements so each visual line can stagger independently.
function splitOnBr(children: ReactNode): ReactNode[][] {
  const flat = Children.toArray(children);
  const lines: ReactNode[][] = [[]];
  for (const child of flat) {
    if (isValidElement(child) && child.type === 'br') {
      lines.push([]);
    } else {
      lines[lines.length - 1].push(child);
    }
  }
  return lines.filter((l) => l.length > 0);
}

export default function AnimatedHeading({
  children,
  tag = 'h2',
  className = '',
}: AnimatedHeadingProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = tag;
  const lines = splitOnBr(children);

  return (
    <div ref={wrapRef}>
      <Tag className={className}>
        {lines.map((lineNodes, i) => (
          <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
            <span
              style={{
                display: 'block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.5s ease-out ${i * 0.12}s, transform 0.5s ease-out ${i * 0.12}s`,
              }}
            >
              {lineNodes}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
