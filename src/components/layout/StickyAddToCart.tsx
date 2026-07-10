import type { Product, ProductColor } from '../../types';

interface StickyAddToCartProps {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
  visible: boolean;
  onAddToCart: () => void;
  addedMsg: boolean;
}

export default function StickyAddToCart({
  product,
  selectedColor,
  selectedSize,
  quantity,
  visible,
  onAddToCart,
  addedMsg,
}: StickyAddToCartProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[var(--z-sticky-buy-bar)] bg-cream border-t border-parchment shadow-2xl transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!visible}
    >
      <div className="px-4 py-3 flex items-center gap-3">
        {/* Color swatch */}
        <div
          className="w-8 h-8 rounded-full shrink-0 border border-navy/20"
          style={{ backgroundColor: selectedColor.hex }}
          aria-hidden="true"
        />

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-playfair text-navy text-sm font-semibold truncate">
            {product.name}
          </p>
          <p className="font-sans text-navy/50 text-xs">
            {selectedColor.name}
            {selectedSize ? ` · ${selectedSize}` : ' · Select a size'}
            {quantity > 1 ? ` · Qty ${quantity}` : ''}
          </p>
        </div>

        {/* Price */}
        <span className="font-playfair text-navy font-bold text-base shrink-0">
          ${(product.price * quantity).toFixed(0)}
        </span>

        {/* Add to cart */}
        <button
          onClick={onAddToCart}
          className={`shrink-0 px-5 py-3 font-sans text-xs tracking-[0.12em] uppercase font-bold transition-all duration-200 ${
            addedMsg
              ? 'bg-navy text-gold'
              : 'bg-rust text-cream hover:bg-rust-dark'
          }`}
        >
          {addedMsg ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
