import { useRef, useState, useCallback, type MouseEvent, type CSSProperties } from 'react';
import { Link } from 'react-router';
import type { Product } from '../../types';
import ShopifyBuyButton from '../commerce/ShopifyBuyButton';

interface ProductCardProps {
  product: Product;
}

const BADGE_STYLES = {
  'best-seller': 'bg-rust text-cream',
  new: 'bg-gold text-navy',
  limited: 'bg-navy text-gold border border-gold/40',
};

const BADGE_LABELS = {
  'best-seller': 'Best Seller',
  new: 'New',
  limited: 'Limited',
};

const MAX_TILT = 8;

function isPointerFine() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!isPointerFine()) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 … 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -ny * MAX_TILT, y: nx * MAX_TILT });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isPointerFine()) return;
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const cardStyle: CSSProperties = {
    transform: hovered
      ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: hovered
      ? 'transform 0.1s ease-out, box-shadow 0.15s ease-out'
      : 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
    boxShadow: hovered
      ? '0 0 0 1px rgba(200,146,42,0.4), 0 20px 40px rgba(0,0,0,0.12)'
      : '0 0 0 0 transparent',
    willChange: 'transform',
  };

  return (
    <article
      ref={cardRef}
      className="group flex flex-col"
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <Link
        to={`/products/${product.slug}`}
        className="block overflow-hidden relative"
        aria-label={`View ${product.name}`}
      >
        {product.imageSrc ? (
          <div
            className="aspect-[4/5] w-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ backgroundColor: product.imageBg ?? '#F5F0E8' }}
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div
            className="aspect-[4/5] w-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ backgroundColor: '#0B1A2E' }}
            aria-hidden="true"
          >
            <span style={{ color: '#C8922A', fontSize: '2rem', lineHeight: 1 }}>✦</span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 font-sans text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 ${
              BADGE_STYLES[product.badge]
            }`}
          >
            {BADGE_LABELS[product.badge]}
          </div>
        )}

        {/* Made to order badge */}
        {product.madeToOrder && (
          <div className="absolute bottom-3 right-3 bg-navy/60 text-cream/70 font-sans text-[9px] tracking-wider uppercase px-2 py-0.5">
            Made to Order
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-3 flex-1 border border-t-0 border-parchment-dark px-4 pb-4">
        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-1" aria-label="Available colors">
          {product.colors.map((color) => (
            <div
              key={color.name}
              title={color.name}
              className="w-3.5 h-3.5 rounded-full border border-navy/20"
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
            />
          ))}
          {product.colors.length > 1 && (
            <span className="font-sans text-navy/40 text-[10px] ml-1">
              {product.colors.length} colors
            </span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-playfair text-navy text-xl font-bold leading-tight">
            <Link
              to={`/products/${product.slug}`}
              className="hover:text-rust transition-colors duration-200"
            >
              {product.name}
            </Link>
          </h3>
          {product.subtitle && (
            <p className="font-sans text-navy/50 text-xs tracking-wide mt-0.5">
              {product.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="font-playfair font-semibold text-[1.25rem] leading-none" style={{ color: '#B94B2C' }}>
            ${product.price}
          </span>
        </div>

        {/* Buy Button slot — quick-buy from the grid */}
        <ShopifyBuyButton product={product} variant="compact" />

        <Link
          to={`/products/${product.slug}`}
          className="w-full text-center font-sans text-xs tracking-[0.15em] uppercase text-cream bg-navy py-3 hover:bg-rust transition-colors duration-200 font-semibold"
        >
          Add to Cart
        </Link>
      </div>
    </article>
  );
}
