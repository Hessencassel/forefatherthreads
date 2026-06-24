/**
 * PHASE 2 — Shopify Storefront API
 *
 * This file will contain all Shopify API integrations when the store
 * moves to a live backend. In Phase 1, all data comes from src/data/products.ts.
 *
 * To connect Shopify:
 * 1. Set VITE_SHOPIFY_STORE_DOMAIN in your .env file
 * 2. Set VITE_SHOPIFY_STOREFRONT_API_TOKEN in your .env file
 * 3. Replace the mock data imports in components with functions from this file
 *
 * Resources:
 * - Shopify Storefront API: https://shopify.dev/docs/api/storefront
 * - Hydrogen: https://hydrogen.shopify.dev
 */

export interface ShopifyConfig {
  storeDomain: string;
  storefrontApiToken: string;
  apiVersion: string;
}

// Phase 2: Initialize with env vars
// const config: ShopifyConfig = {
//   storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
//   storefrontApiToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN,
//   apiVersion: '2024-07',
// };

// Phase 2: GraphQL fetch helper
// async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
//   const response = await fetch(`https://${config.storeDomain}/api/${config.apiVersion}/graphql.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': config.storefrontApiToken,
//     },
//     body: JSON.stringify({ query, variables }),
//   });
//   const json = await response.json();
//   return json.data as T;
// }

// Phase 2: Product queries
// export async function fetchAllProducts() { ... }
// export async function fetchProductByHandle(handle: string) { ... }
// export async function createCart() { ... }
// export async function addToCart(cartId: string, lines: CartLine[]) { ... }
// export async function updateCartLines(cartId: string, lines: CartLine[]) { ... }
// export async function removeCartLines(cartId: string, lineIds: string[]) { ... }
// export async function fetchCart(cartId: string) { ... }

export {};
