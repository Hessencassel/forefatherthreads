const GUARANTEES = [
  {
    icon: ShieldIcon,
    title: '30-Day Returns',
    body: 'Not satisfied? We make it right — no interrogation, no hoops. The Remnant doesn\'t sell problems.',
  },
  {
    icon: FlagIcon,
    title: 'Printed in the Republic',
    body: 'Made to order in the United States. Not in a warehouse overseas. Not by the pallet.',
  },
  {
    icon: QRIcon,
    title: 'The QR Promise',
    body: 'Every garment ships with the full U.S. Constitution on the left sleeve. Hosted for the life of the garment.',
  },
  {
    icon: StarIcon,
    title: 'Quality Guaranteed',
    body: 'If something is wrong with your order, we fix it. Period. That\'s what standing behind your work looks like.',
  },
];

export default function GuaranteeBlock() {
  return (
    <section className="bg-parchment border-t border-parchment-dark py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-navy/40 text-xs tracking-[0.3em] uppercase mb-2">
            Our Commitment
          </p>
          <h2 className="font-playfair text-navy text-3xl font-bold">
            The Remnant Guarantee
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUARANTEES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                <Icon />
              </div>
              <h3 className="font-playfair text-navy font-semibold text-base">{title}</h3>
              <p className="font-sans text-navy/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Military callout */}
        <div className="mt-12 border border-gold/30 bg-navy/5 p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="shrink-0">
            <div className="w-10 h-10 bg-navy flex items-center justify-center mx-auto sm:mx-0">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-playfair text-navy font-semibold">
              Active Military &amp; Veterans — 10% off, always.
            </p>
            <p className="font-sans text-navy/60 text-sm mt-1">
              Email{' '}
              <a
                href="mailto:duty@forefatherthreads.com"
                className="text-rust underline underline-offset-2 hover:text-rust-dark transition-colors"
              >
                duty@forefatherthreads.com
              </a>{' '}
              with proof of service. No bureaucracy. Just respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V5m0 0l9-3 9 3-9 3-9-3z" />
    </svg>
  );
}

function QRIcon() {
  return (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}
