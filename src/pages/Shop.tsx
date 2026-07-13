import ProductGrid from '../components/sections/ProductGrid';
import AnimatedHeading from '../components/ui/AnimatedHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import qrCode from '../assets/Constitution-QR.webp';
import { pageMeta, type RouteMetaArgs } from '../lib/seo';

export function meta({ matches }: RouteMetaArgs) {
  return pageMeta({
    matches,
    title: 'The Armory | Shop Constitutional Apparel',
    description:
      'Standard issue gear for the Remnant. Small-batch, made-to-order shirts — each equipped with the U.S. Constitution on the sleeve.',
    path: '/shop',
  });
}

export default function Shop() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy py-20 px-6 text-center">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Standard Issue Gear for The Remnant
        </p>
        <AnimatedHeading tag="h1" className="font-playfair text-cream text-5xl md:text-6xl font-bold mb-4">
          The Armory
        </AnimatedHeading>
        <p className="font-sans text-cream/60 text-lg max-w-md mx-auto">
          Standalone. Worn, used, and kept. Not seasonal. Not disposable. Every piece
          equipped with the source code on the left sleeve.
        </p>
        <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-8" />
      </div>

      {/* QR banner */}
      <a
        href="https://constitution.congress.gov/constitution/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          backgroundColor: '#0B1A2E',
          padding: '1.5rem 2rem',
          width: '100%',
          textDecoration: 'none',
        }}
      >
        <img
          src={qrCode}
          alt="QR code linking to the U.S. Constitution"
          style={{ width: '80px', height: '80px', display: 'block', filter: 'invert(1)', flexShrink: 0 }}
        />
        <div>
          <p style={{ fontFamily: 'sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#C8922A', fontVariant: 'small-caps', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            Every Garment
          </p>
          <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#F5F0E8', lineHeight: 1.6, marginBottom: '0.35rem' }}>
            Every garment ships with this QR code printed on the left sleeve — scan it to access the full text of the U.S. Constitution instantly. No app required.
          </p>
          <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: '#C8922A' }}>
            Know Your Rights.
          </p>
        </div>
      </a>

      {/* System Spec banner */}
      <div style={{ backgroundColor: '#0B1A2E', padding: '1.5rem 2rem', width: '100%', fontSize: '0.85rem', letterSpacing: '0.08em', lineHeight: 1.7 }}>
        <span style={{ fontFamily: 'sans-serif', color: '#C8922A', fontVariant: 'small-caps', textTransform: 'uppercase', fontWeight: 600 }}>
          System Spec: The Living Document
        </span>
        <span style={{ fontFamily: 'sans-serif', color: '#F5F0E8' }}>
          {' '}— Every garment in the Armory features a high-density QR code on the left sleeve. Scan to access the full source code of the U.S. Constitution instantly. Troubleshoot the system. Carry the document.
        </span>
      </div>

      {/* Products — ProductGrid already has per-card ScrollReveal stagger */}
      <ScrollReveal>
        <ProductGrid title="" subtitle="" showCta={false} />
      </ScrollReveal>

      {/* Bottom callout */}
      <ScrollReveal delay={100}>
        <div className="bg-parchment py-16 px-6 text-center border-t border-parchment-dark">
          <p className="font-playfair text-navy text-2xl font-semibold mb-3">
            More designs coming.
          </p>
          <p className="font-sans text-navy/60 text-sm max-w-sm mx-auto leading-relaxed">
            We release slowly and deliberately. Join the Intelligence Brief to hear first.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
