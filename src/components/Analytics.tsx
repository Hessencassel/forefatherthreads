import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { GA_MEASUREMENT_ID } from '../lib/analytics';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// gtag's own `config` call (fired from the inline script in root.tsx) already
// sends the initial page_view, so this only reports subsequent client-side
// route changes — skipping the first render avoids double-counting that load.
export default function Analytics() {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      send_to: GA_MEASUREMENT_ID,
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.key]);

  return null;
}
