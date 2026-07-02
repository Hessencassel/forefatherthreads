import type { Product } from '../../types';

type BuyButtonVariant = 'primary' | 'sticky' | 'compact';

interface ShopifyBuyButtonProps {
  product: Product;
  variant?: BuyButtonVariant;
  className?: string;
}

const FRAME_STYLES: Record<BuyButtonVariant, string> = {
  primary: 'border border-gold/30 px-5 pt-4 pb-5',
  sticky: 'px-4 py-2.5',
  compact: 'px-3 py-2',
};

const MOUNT_MIN_HEIGHT: Record<BuyButtonVariant, string> = {
  primary: 'min-h-[56px]',
  sticky: 'min-h-[44px]',
  compact: 'min-h-[40px]',
};

export function shopifyBuyButtonId(product: Product, variant: BuyButtonVariant = 'primary'): string {
  // Variant is part of the id because a single page (e.g. the PDP's main
  // panel + its mobile sticky bar) can mount two slots for the same product.
  return `shopify-buy-button-${product.id}-${variant}`;
}

/**
 * Mount point for the Shopify Buy Button embed (buybutton.js). Renders the
 * on-brand tactical frame now; Phase 2 drops in the actual script.
 *
 * Wiring (Phase 2):
 *   1. Load https://sdks.shopifycdn.com/buy-button/latest/buybutton.js once, site-wide.
 *   2. Per product:
 *        ShopifyBuy.UI.onReady(client).then((ui) => {
 *          ui.createComponent('product', {
 *            id: product.shopifyProductId,
 *            node: document.getElementById(shopifyBuyButtonId(product, variant)),
 *            options: { product: { buttonDestination: 'checkout' } },
 *          });
 *        });
 *   3. Deliberately use only the `product` component — never `cart`. This
 *      site's own CartDrawer (src/components/layout/CartDrawer.tsx) is the
 *      single slide-out cart overlay; mounting Shopify's `cart` component
 *      here would spawn a second, competing slide-out on top of it.
 *
 * The mount div below must stay React-children-free. The Buy Button SDK
 * writes directly into that DOM node, which would fight React's own
 * reconciliation if the node ever had rendered children of its own.
 */
export default function ShopifyBuyButton({ product, variant = 'primary', className = '' }: ShopifyBuyButtonProps) {
  return (
    <div
      className={`w-full ${FRAME_STYLES[variant]} ${className}`}
      style={{ backgroundColor: '#0B1A2E' }}
      data-buy-button-frame={variant}
    >
      {variant === 'primary' && (
        <p className="eyebrow text-gold/70 mb-2">Secure Checkout</p>
      )}
      <div
        id={shopifyBuyButtonId(product, variant)}
        data-shopify-product-id={product.shopifyProductId ?? ''}
        className={`w-full ${MOUNT_MIN_HEIGHT[variant]}`}
      />
    </div>
  );
}
