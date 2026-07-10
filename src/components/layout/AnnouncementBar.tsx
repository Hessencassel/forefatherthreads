const MARQUEE_TEXT =
  'GRAND OPENING: Use code PATRIOT15 for 15% off orders $50+ ✦ Free shipping on every order ✦ GRAND OPENING: Use code PATRIOT15 for 15% off orders $50+ ✦ Free shipping on every order ✦ ';

export default function AnnouncementBar() {
  return (
    <div className="bg-rust text-cream py-2.5 overflow-hidden" aria-label="Site announcements">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 20s linear infinite' }}
        aria-hidden="true"
      >
        {/* Duplicate content for seamless loop */}
        <span className="font-sans text-sm tracking-wide px-4">{MARQUEE_TEXT}</span>
        <span className="font-sans text-sm tracking-wide px-4">{MARQUEE_TEXT}</span>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Accessible static text for screen readers */}
      <p className="sr-only">
        Free shipping on every order. Use code PATRIOT15 for 15% off. Printed in the Republic. Small-batch constitutional apparel.
      </p>
    </div>
  );
}
