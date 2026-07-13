export const SITE_URL = 'https://forefatherthreads.com';
export const SITE_NAME = 'Forefather Threads';

/**
 * Root-relative path to the shared Open Graph / Twitter card image
 * (1200x628). Individual pages can override via the `image` option.
 */
export const DEFAULT_OG_IMAGE = '/og/default-og-image.jpg';

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

/**
 * Shape of the `meta()` function args React Router passes to every
 * route module (loosely typed here since this project doesn't wire up
 * the generated per-route `+types` imports). `matches` carries each
 * ancestor route's already-computed meta array — see the note on
 * `pageMeta` below for why this matters.
 */
export interface RouteMetaArgs {
  params?: Record<string, string | undefined>;
  matches?: Array<{ meta?: unknown[] }>;
}

export interface PageMetaInput {
  /** Full page title, including any brand suffix. Keep under 60 characters. */
  title: string;
  /** Meta description. Keep under 155 characters. */
  description: string;
  /** Root-relative path, e.g. "/shop" or "/products/the-remnant". */
  path: string;
  /** Root-relative path to a page-specific 1200x628 image. Defaults to DEFAULT_OG_IMAGE. */
  image?: string;
  /**
   * Pass through the `matches` array from this route's own `meta()`
   * args. React Router does NOT concatenate meta across the route
   * tree automatically — a route with its own `meta()` export
   * *replaces* whatever its ancestors returned unless it explicitly
   * re-includes them. Without this, root.tsx's Organization JSON-LD
   * (or anything else set in a layout route) silently disappears on
   * every page that defines its own meta().
   */
  matches?: Array<{ meta?: unknown[] }>;
}

/**
 * Builds a full per-route meta descriptor array — title, description,
 * canonical link, and standard OpenGraph/Twitter card tags — always
 * pinned to the production domain (SITE_URL), never the Netlify
 * staging URL a deploy preview happens to be served from. Prepends
 * whatever ancestor routes (root.tsx) already contributed, via `matches`.
 */
export function pageMeta({ title, description, path, image, matches }: PageMetaInput) {
  if (import.meta.env.DEV) {
    if (title.length > TITLE_LIMIT) {
      console.warn(`[seo] Title is ${title.length} chars (limit ${TITLE_LIMIT}): "${title}"`);
    }
    if (description.length > DESCRIPTION_LIMIT) {
      console.warn(`[seo] Description is ${description.length} chars (limit ${DESCRIPTION_LIMIT}): "${description}"`);
    }
  }

  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}${image ?? DEFAULT_OG_IMAGE}`;
  const inherited = matches?.flatMap((match) => match.meta ?? []) ?? [];

  return [
    ...inherited,
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },

    // OpenGraph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '628' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];
}

/** Wraps a JSON-LD object in React Router's native meta descriptor shape. */
export function jsonLd(schema: Record<string, unknown>) {
  return { 'script:ld+json': schema };
}

/**
 * Site-wide Organization schema. Rendered once, from root.tsx's meta()
 * export, so it appears on every page — safe to combine with per-route
 * script:ld+json entries (e.g. Product on the PDP) since multiple
 * JSON-LD <script> blocks with different @type values are expected.
 */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-icon.webp`,
  description: 'Constitutional apparel for the Remnant. Doctrine, not decoration.',
  foundingLocation: 'Fort Wayne, Indiana',
  sameAs: [
    'https://www.instagram.com/forefather_threads',
    'https://www.facebook.com/forefatherthreads',
    'https://tiktok.com/@forefatherthreads',
    'https://x.com/FFThreads1776',
    'https://www.youtube.com/@ForefatherThreads',
  ],
};

export interface ProductSchemaInput {
  name: string;
  description: string;
  price: number;
  slug: string;
}

/** Product schema for the PDP, matching the live /products/<slug> route. */
export function productSchema({ name, description, price, slug }: ProductSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/products/${slug}`,
    },
  };
}
