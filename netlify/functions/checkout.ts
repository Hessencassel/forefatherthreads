import { shopifyFetch } from './_lib/shopify';

export const config = {
  path: '/api/checkout',
};

interface CheckoutItemInput {
  handle: string;
  color: string;
  size: string;
  quantity: number;
}

interface ProductByHandleResponse {
  product: {
    id: string;
    title: string;
    variants: {
      nodes: Array<{
        id: string;
        selectedOptions: Array<{ name: string; value: string }>;
      }>;
    };
  } | null;
}

interface CartCreateResponse {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null;
    userErrors: Array<{ field: string[] | null; message: string }>;
  };
}

const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      variants(first: 100) {
        nodes {
          id
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

class CheckoutError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// Shopify option names vary by store setup ("Color" vs "Colour"); match
// loosely on name and case-insensitively on value rather than hardcoding
// an exact option label.
function optionKind(optionName: string): 'color' | 'size' | null {
  const normalized = optionName.trim().toLowerCase();
  if (normalized === 'color' || normalized === 'colour') return 'color';
  if (normalized === 'size') return 'size';
  return null;
}

async function resolveVariantId(item: CheckoutItemInput): Promise<string> {
  const data = await shopifyFetch<ProductByHandleResponse>(PRODUCT_BY_HANDLE_QUERY, {
    handle: item.handle,
  });

  const product = data.product;
  if (!product) {
    throw new CheckoutError(400, `No Shopify product found for handle "${item.handle}".`);
  }

  const variant = product.variants.nodes.find((v) =>
    v.selectedOptions.every((opt) => {
      const kind = optionKind(opt.name);
      if (kind === 'color') return opt.value.trim().toLowerCase() === item.color.trim().toLowerCase();
      if (kind === 'size') return opt.value.trim().toLowerCase() === item.size.trim().toLowerCase();
      return true; // unrecognized option — don't let it block the match
    }),
  );

  if (!variant) {
    throw new CheckoutError(
      400,
      `No matching variant for "${product.title}" (handle "${item.handle}") in color "${item.color}", size "${item.size}".`,
    );
  }

  return variant.id;
}

function isValidItem(item: unknown): item is CheckoutItemInput {
  if (!item || typeof item !== 'object') return false;
  const i = item as Record<string, unknown>;
  return (
    typeof i.handle === 'string' && i.handle.length > 0 &&
    typeof i.color === 'string' && i.color.length > 0 &&
    typeof i.size === 'string' && i.size.length > 0 &&
    typeof i.quantity === 'number' && i.quantity > 0
  );
}

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  let body: { items?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const rawItems = body.items;
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return Response.json(
      { error: 'Request body must include a non-empty "items" array.' },
      { status: 400 },
    );
  }

  const invalidIndex = rawItems.findIndex((item) => !isValidItem(item));
  if (invalidIndex !== -1) {
    return Response.json(
      { error: `Item at index ${invalidIndex} is missing a required field (handle, color, size, quantity).` },
      { status: 400 },
    );
  }
  const items = rawItems as CheckoutItemInput[];

  try {
    const lines = await Promise.all(
      items.map(async (item) => ({
        merchandiseId: await resolveVariantId(item),
        quantity: item.quantity,
      })),
    );

    const cartData = await shopifyFetch<CartCreateResponse>(CART_CREATE_MUTATION, { lines });
    const { cart, userErrors } = cartData.cartCreate;

    if (userErrors.length > 0) {
      return Response.json(
        { error: `Shopify cart error: ${userErrors.map((e) => e.message).join('; ')}` },
        { status: 502 },
      );
    }

    if (!cart) {
      return Response.json({ error: 'Shopify did not return a cart.' }, { status: 502 });
    }

    return Response.json({ checkoutUrl: cart.checkoutUrl });
  } catch (err) {
    if (err instanceof CheckoutError) {
      return Response.json({ error: err.message }, { status: err.status });
    }
    const message = err instanceof Error ? err.message : 'Unknown checkout error';
    return Response.json({ error: message }, { status: 500 });
  }
};
