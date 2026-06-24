import { useEffect, useRef, useState } from 'react';

const DOT_SIZE = 8;
const RING_DEFAULT = 32;
const RING_HOVER = 52;
const LERP = 0.12;

const HOVER_SELECTORS = 'a, button, [data-cursor="hover"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Raw cursor position — updated instantly on mousemove
  const target = useRef({ x: -200, y: -200 });
  // Lerped ring position
  const ring = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Bail out completely on touch-primary devices
    if (navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    function onMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    }

    function onOver(e: MouseEvent) {
      if ((e.target as Element).closest(HOVER_SELECTORS)) {
        setHovered(true);
      }
    }

    function onOut(e: MouseEvent) {
      if ((e.target as Element).closest(HOVER_SELECTORS)) {
        setHovered(false);
      }
    }

    function onLeave() {
      setVisible(false);
    }

    function onEnter() {
      setVisible(true);
    }

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // RAF loop — lerp ring toward cursor
    function tick() {
      ring.current.x += (target.current.x - ring.current.x) * LERP;
      ring.current.y += (target.current.y - ring.current.y) * LERP;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  // Never render on touch devices
  if (isTouch) return null;

  const ringSize = hovered ? RING_HOVER : RING_DEFAULT;

  const base: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    willChange: 'left, top',
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        style={{
          ...base,
          width: DOT_SIZE,
          height: DOT_SIZE,
          backgroundColor: '#C8922A',
          left: -200,
          top: -200,
        }}
      />

      {/* Ring — lerp follow */}
      <div
        ref={ringRef}
        style={{
          ...base,
          width: ringSize,
          height: ringSize,
          border: '1.5px solid #C8922A',
          backgroundColor: hovered ? 'rgba(200,146,42,0.15)' : 'transparent',
          transition: `width 0.2s ease, height 0.2s ease, background-color 0.2s ease, opacity 0.3s ease`,
          left: -200,
          top: -200,
        }}
      />
    </>
  );
}
