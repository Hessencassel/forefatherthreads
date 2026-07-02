import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isFirst = useRef(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setActive(true);
  }, [location.key]);

  return (
    <>
      {children}

      {/* Full-screen overlay */}
      <div
        aria-hidden="true"
        onAnimationEnd={() => setActive(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 'var(--z-page-transition)',
          backgroundColor: '#0B1A2E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Off-screen left when idle; keyframe drives it across when active
          transform: 'translateX(-100%)',
          animation: active
            ? 'pageSlide 0.65s cubic-bezier(0.76, 0, 0.24, 1) forwards'
            : 'none',
          pointerEvents: active ? 'all' : 'none',
        }}
      >
        <span
          style={{
            color: '#C8922A',
            fontSize: '2.5rem',
            lineHeight: 1,
            animation: active
              ? 'glyphFade 0.65s cubic-bezier(0.76, 0, 0.24, 1) forwards'
              : 'none',
          }}
        >
          ✦
        </span>
      </div>

      <style>{`
        @keyframes pageSlide {
          0%   { transform: translateX(-100%); }
          46%  { transform: translateX(0);     }
          54%  { transform: translateX(0);     }
          100% { transform: translateX(100%);  }
        }
        @keyframes glyphFade {
          0%, 20%, 80%, 100% { opacity: 0; }
          40%, 60%           { opacity: 1; }
        }
      `}</style>
    </>
  );
}
