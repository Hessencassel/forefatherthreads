export interface ProductColor {
  name: string;
  hex: string;
  images?: string[]; // per-color image URLs, index 0 = primary
}

export interface ProductMaterial {
  fabric: string;
  weight: string;
  construction: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  quote: string;
  price: number;
  description: string;
  story: string;
  material: ProductMaterial;
  madeToOrder: boolean;
  colors: ProductColor[];
  sizes: string[];
  featured: boolean;
  imageCount: number;
  imageSrc?: string;
  imageBg?: string;
  badge?: 'flagship' | 'signature' | 'new' | 'limited';
  /** Lowercase colorway names available for this product (e.g. "black", "navy"). Distinct from `colors`, which carries swatch hex + per-color gallery images. */
  colorway: string[];
  /** Optional merchandising grouping (e.g. "Rights", "Founding Era") — not yet surfaced in the UI. */
  lane?: string;
  /** Shopify product handle, when it differs from this product's site `slug` (see netlify/functions/checkout.ts). Falls back to `slug` if unset. */
  shopifyHandle?: string;
}

export interface CartItem {
  product: Product;
  color: ProductColor;
  size: string;
  quantity: number;
  key: string; // `${productId}-${colorName}-${size}`
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { key: string; quantity: number } }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE_CART'; payload: CartItem[] };
