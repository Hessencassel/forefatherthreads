import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Line {
  content: ReactNode;
  className?: string;
}

interface RevealHeadlineProps {
  lines: Line[];
  tag?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function RevealHeadline({
  lines,
  tag = 'h2',
  className = '',
}: RevealHeadlineProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
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

  return (
    <div ref={wrapperRef}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span
            key={i}
            style={{ display: 'block', overflow: 'hidden' }}
          >
            <span
              className={line.className}
              style={{
                display: 'block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.5s ease-out ${i * 0.12}s, transform 0.5s ease-out ${i * 0.12}s`,
              }}
            >
              {line.content}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
