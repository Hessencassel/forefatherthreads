export const SITE_URL = 'https://forefatherthreads.com';
export const SITE_NAME = 'Forefather Threads';

/**
 * Root-relative path to the shared Open Graph / Twitter card image.
 * PLACEHOLDER — swap for a real 1200x628 asset (e.g. in /public/og/)
 * before launch. Individual pages can override via the `image` option.
 */
export const DEFAULT_OG_IMAGE = '/og/default-og-image.jpg';

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

export interface PageMetaInput {
  /** Full page title, including any brand suffix. Keep under 60 characters. */
  title: string;
  /** Meta description. Keep under 155 characters. */
  description: string;
  /** Root-relative path, e.g. "/shop" or "/products/the-remnant". */
  path: string;
  /** Root-relative path to a page-specific 1200x628 image. Defaults to DEFAULT_OG_IMAGE. */
  image?: string;
}

/**
 * Builds a full per-route meta descriptor array — title, description,
 * canonical link, and standard OpenGraph/Twitter card tags — always
 * pinned to the production domain (SITE_URL), never the Netlify
 * staging URL a deploy preview happens to be served from.
 *
 * Every route module should call this from its own `meta` export.
 * root.tsx deliberately exports no meta() of its own: React Router
 * concatenates every matched route's meta array without deduping, so
 * a root-level default would produce duplicate <title>/canonical tags
 * alongside whatever each page sets here.
 */
export function pageMeta({ title, description, path, image }: PageMetaInput) {
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

  return [
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
