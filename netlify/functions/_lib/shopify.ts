import { requireEnv } from './env';

const API_VERSION = '2024-10';

const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_TOKEN } = requireEnv(
  'SHOPIFY_STORE_DOMAIN',
  'SHOPIFY_STOREFRONT_TOKEN',
);

interface ShopifyGraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Shopify Storefront API request failed: ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as ShopifyGraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(`Shopify Storefront API error: ${json.errors.map((e) => e.message).join('; ')}`);
  }

  if (!json.data) {
    throw new Error('Shopify Storefront API returned no data');
  }

  return json.data;
}
