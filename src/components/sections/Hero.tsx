import { LinkButton } from '../ui/Button';
import DecorativeText from '../ui/DecorativeText';
import remnantBlackFront from '../../assets/products/Remnant-unisex-garment-dyed-heavyweight-t-shirt-black-front-.webp';

const TRUST_BADGES = ['Printed in USA', 'Small-Batch', 'Secure Checkout', 'Ships from USA'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[52fr_48fr] min-h-screen">

      {/* LEFT: content column — navy gradient */}
      <div
        className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-28 overflow-hidden min-h-screen"
        style={{ background: 'linear-gradient(to bottom, #0a1628, #0f2240, #0a1628)' }}
      >
        {/* Texture */}
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

        <DecorativeText text="1776" size="35vw" opacity={0.07} color="#0B1A2E" position="right" font="bebas" />

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-px bg-gold" aria-hidden="true" />
            <p className="font-sans text-gold uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.25em' }}>
              Est. 1776
            </p>
            <div className="w-9 h-px bg-gold" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h1
            className="font-playfair text-cream font-bold mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 6rem)',
              lineHeight: '0.92',
              textShadow: '0 2px 40px rgba(0,0,0,0.5)',
            }}
          >
            Wear Your
            <br />
            <span className="italic" style={{ color: '#C8922A' }}>
              Principles.
            </span>
          </h1>

          {/* Subhead */}
          <p className="font-sans text-cream/70 text-lg leading-relaxed mb-4 mt-6">
            Small-batch constitutional apparel grounded in the document, not the noise.
            Built for the Remnant.
          </p>

          <p className="font-sans text-gold/60 text-xs tracking-[0.3em] uppercase mb-10">
            Originalist · Anti-Partisan · Unapologetically Constitutional
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton href="/shop" variant="rust" size="lg">
              Enter the Armory
            </LinkButton>
            <LinkButton href="/manifesto" variant="gold-outline" size="lg">
              Read the Manifesto
            </LinkButton>
          </div>

          {/* Sleeve QR callout — placed after the CTAs so it never affects their fold position */}
          <div className="mt-6 flex items-start gap-3 border-l-2 border-gold pl-4 max-w-md">
            <p className="font-sans text-cream/80 text-sm leading-relaxed">
              Every garment carries the Constitution on its sleeve.{' '}
              <span className="text-gold font-semibold">Scan it. Read the source.</span>
            </p>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
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
      </div>

      {/* RIGHT: full-height image slot — desktop only, no padding, bleeds to edge */}
      <div className="relative hidden md:block" style={{ minHeight: '100vh' }}>
        <img
          src={remnantBlackFront}
          alt="The Remnant shirt"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>

    </section>
  );
}
