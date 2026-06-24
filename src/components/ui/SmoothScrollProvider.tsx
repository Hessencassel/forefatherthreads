import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lsRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    lsRef.current = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false, // native scroll on smartphones & tablets
      },
    });
    return () => {
      lsRef.current?.destroy();
      lsRef.current = null;
    };
  }, []);

  useEffect(() => {
    const ls = lsRef.current;
    if (!ls) return;
    // Jump to top immediately on route change, then re-register data-scroll elements
    ls.scrollTo(0, { immediate: true });
    setTimeout(() => ls.addScrollElements(document.body), 120);
  }, [location.pathname]);

  return <>{children}</>;
}
