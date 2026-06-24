import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import StarRating from './StarRating';

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
  const primaryColor = product.colors[0];

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link
        to={`/products/${product.slug}`}
        className="block overflow-hidden relative"
        aria-label={`View ${product.name}`}
      >
        <div
          className="aspect-[4/5] w-full flex flex-col items-center justify-end p-6 transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundColor: primaryColor.hex }}
          aria-hidden="true"
        >
          <div className="w-full max-w-[160px] flex flex-col items-center gap-3 mb-4">
            <div className="w-full h-px bg-cream/20" />
            <p className="font-bebas text-cream/40 text-3xl tracking-[0.2em] text-center leading-tight">
              {product.name}
            </p>
            <div className="w-12 h-px bg-gold/40" />
            {product.subtitle && (
              <p className="font-sans text-cream/30 text-[10px] tracking-[0.2em] uppercase text-center">
                {product.subtitle}
              </p>
            )}
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
          <div className="absolute bottom-3 right-3 bg-navy/70 text-cream/60 font-sans text-[9px] tracking-wider uppercase px-2 py-0.5">
            Made to Order
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-2 flex-1">
        {/* Color swatches */}
        <div className="flex items-center gap-1.5" aria-label="Available colors">
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
          <h3 className="font-playfair text-navy text-lg leading-tight">
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

          {/* Star rating */}
          <div className="mt-1.5">
            <StarRating
              rating={product.rating}
              reviewCount={product.reviewCount}
              size="sm"
              showCount
            />
          </div>

          <p className="font-sans text-navy/60 text-sm italic mt-1.5 leading-snug">
            {product.tagline}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-playfair text-navy font-semibold text-lg">
            ${product.price}
          </span>
          <Link
            to={`/products/${product.slug}`}
            className="font-sans text-xs tracking-[0.15em] uppercase text-cream bg-navy px-4 py-2.5 hover:bg-rust transition-colors duration-200"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </article>
  );
}
