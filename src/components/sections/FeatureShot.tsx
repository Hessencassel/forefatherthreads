import { Link } from 'react-router-dom';
import { products } from '../../data/products';

export default function FeatureShot() {
  const product = products.find((p) => p.featured) ?? products[0];

  return (
    <section
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[65fr_35fr]"
      style={{ height: '70vh', minHeight: '520px' }}
    >
      {/* LEFT: full-bleed image slot — no padding, bleeds to left edge */}
      <div className="relative" style={{ backgroundColor: '#060E1C' }}>
        {product.imageSrc ? (
          <img
            src={product.imageSrc}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5" aria-hidden="true">
            <span style={{ color: '#C8922A', fontSize: '3.5rem', lineHeight: 1 }}>✦</span>
            <p className="font-sans text-cream/15 text-[10px] tracking-[0.4em] uppercase">
              Product Photography Coming Soon
            </p>
          </div>
        )}
        {/* Right-edge fade into cream panel */}
        <div
          className="absolute inset-y-0 right-0 w-24 hidden md:block"
          style={{ background: 'linear-gradient(to right, transparent, rgba(245,239,224,0.08))' }}
          aria-hidden="true"
        />
      </div>

      {/* RIGHT: vertical cream editorial panel */}
      <div className="relative flex flex-col bg-cream border-l border-parchment-dark">

        {/* Top label */}
        <div className="px-8 pt-8 shrink-0">
          <p className="font-sans text-navy/35 text-[10px] tracking-[0.4em] uppercase">
            Featured Piece
          </p>
        </div>

        {/* Middle: oversized name rotated 90° — magazine vertical text treatment */}
        <div className="flex-1 relative overflow-hidden">
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
              whiteSpace: 'nowrap',
            }}
            aria-hidden="true"
          >
            <span
              className="font-playfair text-navy font-bold"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.75rem)', lineHeight: 1, letterSpacing: '-0.01em' }}
            >
              {product.name}
            </span>
          </div>
          <h2 className="sr-only">{product.name}</h2>
        </div>

        {/* Bottom: divider, tagline, price, CTA */}
        <div className="px-8 pb-8 shrink-0">
          <div className="w-8 h-px mb-5" style={{ backgroundColor: '#C8922A' }} />
          <p className="font-sans text-navy/55 text-xs leading-relaxed mb-4" style={{ letterSpacing: '0.02em' }}>
            {product.tagline}
          </p>
          <p className="font-playfair text-navy font-semibold mb-5" style={{ fontSize: '1.5rem' }}>
            ${product.price}
          </p>
          <Link
            to={`/products/${product.slug}`}
            className="block w-full text-center bg-navy text-cream font-sans font-semibold py-4 hover:bg-rust transition-colors duration-200"
            style={{ fontSize: '11px', letterSpacing: '0.18em' }}
          >
            SHOP NOW
          </Link>
        </div>

      </div>
    </section>
  );
}
