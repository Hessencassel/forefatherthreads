import { LinkButton } from '../ui/Button';

const TRUST_BADGES = [
  'Printed in USA',
  'Small-Batch',
  'Secure Checkout',
  'Ships from USA',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — navy gradient placeholder for real photography */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-[#0f2240]" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #C8922A 0px, #C8922A 1px, transparent 0px, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto py-24">
        {/* Eyebrow */}
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-8">
          Originalist · Anti-Partisan · Unapologetically Constitutional
        </p>

        {/* Headline */}
        <h1 className="font-playfair text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-bold mb-6 text-balance">
          Wear Your
          <br />
          <span className="italic text-gold">Principles.</span>
        </h1>

        {/* Subhead */}
        <p className="font-sans text-cream/70 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
          Small-batch constitutional apparel grounded in the document, not the noise.
          Built for the Remnant.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <LinkButton href="/shop" variant="rust" size="lg">
            Enter the Armory
          </LinkButton>
          <LinkButton href="/manifesto" variant="gold-outline" size="lg">
            Read the Manifesto
          </LinkButton>
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_BADGES.map((badge, i) => (
            <div key={badge} className="flex items-center gap-8">
              <span className="font-sans text-cream/40 text-xs tracking-[0.2em] uppercase">
                {badge}
              </span>
              {i < TRUST_BADGES.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-cream/20" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
        <div className="w-1 h-1 bg-cream/30 rounded-full" />
      </div>
    </section>
  );
}
