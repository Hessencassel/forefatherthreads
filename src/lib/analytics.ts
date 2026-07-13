import type { CartItem } from '../types';

export const GA_MEASUREMENT_ID = 'G-M64NL5977F';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** GA4 ecommerce `items[]` entry. */
interface GA4Item {
  item_id: string;
  item_name: string;
  item_variant?: string;
  price: number;
  quantity: number;
}

// gtag is loaded by the inline snippet in root.tsx and is absent during the
// prerender pass, when an ad blocker drops the script, or before it finishes
// loading — so every send goes through this guard rather than assuming it.
function sendEvent(name: string, params: Record<string, unknown>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, { send_to: GA_MEASUREMENT_ID, ...params });
}

function toGA4Item(item: CartItem): GA4Item {
  return {
    item_id: item.product.slug,
    item_name: item.product.name,
    item_variant: `${item.color.name} / ${item.size}`,
    price: item.product.price,
    quantity: item.quantity,
  };
}

export function trackAddToCart(item: CartItem): void {
  sendEvent('add_to_cart', {
    currency: 'USD',
    value: item.product.price * item.quantity,
    items: [toGA4Item(item)],
  });
}

export function trackBeginCheckout(items: CartItem[], value: number): void {
  sendEvent('begin_checkout', {
    currency: 'USD',
    value,
    items: items.map(toGA4Item),
  });
}
