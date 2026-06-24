import { useState, useEffect } from 'react';

const MESSAGES = [
  { text: 'GRAND OPENING — Use Code ', highlight: 'PATRIOT15', suffix: ' for 15% Off Your First Order' },
  { text: 'FREE SHIPPING on orders over ', highlight: '$75', suffix: ' — No code needed' },
  { text: 'Every garment ships with the ', highlight: 'U.S. Constitution', suffix: ' on the left sleeve' },
  { text: 'Made to order in the Republic · ', highlight: 'Ships in 3–5 business days', suffix: '' },
  { text: 'Active military & veterans get ', highlight: '10% off', suffix: ' — Email us at duty@forefatherthreads.com' },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % MESSAGES.length);
        setVisible(true);
      }, 300);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const msg = MESSAGES[current];

  return (
    <div className="bg-rust text-cream text-center py-2.5 px-4 text-sm font-sans tracking-wide overflow-hidden">
      <p
        className="transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {msg.text}
        <span className="font-bold">{msg.highlight}</span>
        {msg.suffix}
      </p>
    </div>
  );
}
