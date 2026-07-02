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

export interface ProductReview {
  author: string;
  location: string;
  rating: number;
  body: string;
  date: string;
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
  badge?: 'best-seller' | 'new' | 'limited';
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
  /** Shopify product GID — populated in Phase 2 to target the Buy Button embed (see src/components/commerce/ShopifyBuyButton.tsx). */
  shopifyProductId?: string;
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
