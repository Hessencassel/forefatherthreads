import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { products } from '../../data/products';
import type { Product } from '../../types';

// Mockup for a given colorway (or the first color if none specified),
// falling back to the product's default hero image if that color has no
// gallery images of its own. Prefers a front-only shot over a combined
// front-and-back one (e.g. the Remnant's two-image colors) so the
// thumbnail reads as a single shirt instead of a cropped pair.
function getProductThumbnail(product: Product, colorName?: string): string | undefined {
  const color = colorName
    ? product.colors.find((c) => c.name === colorName)
    : product.colors[0];

  const images = color?.images;
  if (images && images.length > 0) {
    return images.find((src) => !/and-back/i.test(src)) ?? images[0];
  }

  return product.imageSrc;
}

export default function CartDrawer() {
  const { state, dispatch, removeItem, updateQuantity, totalPrice } = useCart();
  const { isOpen, items } = state;
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Clear stale "redirecting to checkout" state on mount, and again on
  // 'pageshow' — which fires on browser back/forward navigation, including
  // restores from the bfcache where this component never remounts and the
  // effect above wouldn't otherwise re-run. Without this, hitting Back after
  // a successful checkout redirect can leave the button stuck in its
  // loading state, or (previously) resend the user to a stale checkout URL.
  useEffect(() => {
    const resetCheckoutState = () => {
      setIsCheckingOut(false);
      setCheckoutError(null);
    };
    resetCheckoutState();
    window.addEventListener('pageshow', resetCheckoutState);
    return () => window.removeEventListener('pageshow', resetCheckoutState);
  }, []);

  // If the cart drains to empty (e.g. items removed while a checkout
  // request is in flight), drop any redirecting/error state so a stale
  // spinner or message can't linger if items are added back later.
  useEffect(() => {
    if (items.length === 0) {
      setIsCheckingOut(false);
      setCheckoutError(null);
    }
  }, [items.length]);

  const close = () => dispatch({ type: 'CLOSE_CART' });

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setCheckoutError(null);
    setIsCheckingOut(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            handle: item.product.shopifyHandle ?? item.product.slug,
            color: item.color.name,
            size: item.size,
            quantity: item.quantity,
          })),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data?.error ?? 'Checkout failed. Please try again.');
      }
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : 'Checkout failed. Please try again.');
      setIsCheckingOut(false);
    }
  };

  // Suggest a product not already in the cart
  const cartProductIds = items.map((i) => i.product.id);
  const upsellProduct = products.find((p) => !cartProductIds.includes(p.id));

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy/60 z-[var(--z-cart-drawer)] animate-fade-in"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-cream z-[var(--z-cart-drawer)] flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy">
          <h2 className="font-playfair text-cream text-xl">
            Your Cart{' '}
            {items.length > 0 && (
              <span className="font-sans text-sm font-normal text-cream/50">
                ({items.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
            )}
          </h2>
          <button onClick={close} className="text-cream/60 hover:text-cream transition-colors p-1" aria-label="Close cart">
            <XIcon />
          </button>
        </div>

        {/* Free shipping notice */}
        <div className="px-6 py-3 bg-parchment border-b border-parchment-dark">
          <p className="font-sans text-sm text-navy font-semibold flex items-center gap-2">
            <span className="text-gold">✓</span> Free shipping on every order
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <EmptyCartIcon />
              <p className="font-playfair text-xl text-navy">Your cart is empty.</p>
              <p className="font-sans text-navy/60 text-sm">
                The Remnant is equipped, not empty-handed.
              </p>
              <Link
                to="/shop"
                onClick={close}
                className="mt-4 bg-rust text-cream font-sans text-sm tracking-wider uppercase px-6 py-3 hover:bg-rust-dark transition-colors"
              >
                Enter the Armory
              </Link>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-parchment">
                {items.map((item) => (
                  <li key={item.key} className="py-4 flex gap-4">
                    <div className="w-20 h-24 shrink-0 bg-parchment p-1">
                      <img
                        src={getProductThumbnail(item.product, item.color.name)}
                        alt={`${item.product.name} - ${item.color.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-playfair text-navy font-semibold text-sm leading-tight">
                        {item.product.name}
                      </p>
                      {item.product.subtitle && (
                        <p className="font-sans text-navy/50 text-xs mt-0.5">{item.product.subtitle}</p>
                      )}
                      <p className="font-sans text-navy/60 text-xs mt-1">
                        {item.color.name} · Size {item.size}
                      </p>
                      <p className="font-sans text-rust font-semibold text-sm mt-1">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-parchment-dark">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-navy hover:bg-parchment transition-colors text-lg leading-none"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-sans text-sm text-navy">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-navy hover:bg-parchment transition-colors text-lg leading-none"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="font-sans text-xs text-navy/40 hover:text-rust transition-colors tracking-wide uppercase"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Upsell */}
              {upsellProduct && (
                <div className="mt-4 border border-gold/30 bg-parchment/60 p-4">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-navy/50 mb-3">
                    You Might Also Need
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-16 shrink-0 bg-cream p-1">
                      <img
                        src={getProductThumbnail(upsellProduct)}
                        alt={upsellProduct.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-playfair text-navy text-sm font-semibold leading-tight truncate">
                        {upsellProduct.name}
                      </p>
                      <p className="font-sans text-navy/50 text-xs mt-0.5 truncate">
                        {upsellProduct.tagline}
                      </p>
                      <p className="font-sans text-rust text-sm font-bold mt-1">
                        ${upsellProduct.price}
                      </p>
                    </div>
                    <Link
                      to={`/products/${upsellProduct.slug}`}
                      onClick={close}
                      className="shrink-0 bg-navy text-cream font-sans text-xs tracking-wider uppercase px-3 py-2 hover:bg-rust transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-parchment bg-parchment px-6 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-sm text-navy/70 uppercase tracking-wider">Subtotal</span>
              <span className="font-playfair text-xl text-navy font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-gold font-semibold flex items-center gap-1">
              <span>✓</span> Free shipping applied
            </p>
            <p className="font-sans text-xs text-navy/50">
              Taxes calculated at checkout. Use code{' '}
              <span className="font-bold text-navy">PATRIOT15</span> for 15% off.
            </p>
            {checkoutError && (
              <p className="font-sans text-xs text-rust text-center" role="alert">
                {checkoutError}
              </p>
            )}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-rust text-cream font-sans text-sm tracking-[0.1em] uppercase py-4 hover:bg-rust-dark transition-colors font-bold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? 'Redirecting to Checkout…' : 'Proceed to Checkout'}
            </button>
            <button
              onClick={close}
              className="w-full text-center font-sans text-xs text-navy/60 hover:text-navy tracking-wider uppercase underline underline-offset-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function EmptyCartIcon() {
  return (
    <svg className="w-16 h-16 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z" />
    </svg>
  );
}
