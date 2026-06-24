import { Link } from 'react-router-dom';
import type { Product } from '../../types';

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

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <Link
        to={`/products/${product.slug}`}
        className="block overflow-hidden relative"
        aria-label={`View ${product.name}`}
      >
        <div
          className="aspect-[4/5] w-full flex flex-col items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundColor: '#F5EFE0' }}
          aria-hidden="true"
        >
          <div className="w-full max-w-[200px] flex flex-col items-center gap-3">
            <div className="w-16 h-px bg-navy/20" />
            <p className="font-playfair text-navy text-2xl font-bold tracking-wide text-center leading-tight">
              {product.name}
            </p>
            {product.subtitle && (
              <p className="font-sans text-navy/40 text-[10px] tracking-[0.2em] uppercase text-center">
                {product.subtitle}
              </p>
            )}
            <div className="w-8 h-px bg-gold/60" />
            <p className="font-sans text-navy/30 text-xs italic text-center leading-snug max-w-[140px]">
              {product.tagline}
            </p>
          </div>
        </div>

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
