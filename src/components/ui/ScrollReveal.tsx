import type { ReactNode, CSSProperties } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scrollSpeed?: number;
}

export default function ScrollReveal({ children, delay = 0, className = '', scrollSpeed }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
  };

  const lsProps = scrollSpeed !== undefined
    ? { 'data-scroll': true, 'data-scroll-speed': scrollSpeed }
    : {};

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className={className}
      {...lsProps}
    >
      {children}
    </div>
  );
}
