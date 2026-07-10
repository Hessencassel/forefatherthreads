# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## API (Netlify Functions)

API routes live in `netlify/functions/` and are served under `/api/*` (e.g. `netlify/functions/health.ts` → `/api/health`).

- Run `netlify dev` for local development, not `npm run dev` — only `netlify dev` proxies the Vite dev server and executes the functions locally so `/api/*` requests resolve.
- Environment variables are set in the Netlify dashboard under **Site settings → Environment variables**. Never commit them to the repo. Functions that require env vars should read them via `netlify/functions/_lib/env.ts`, which throws a clear error naming any missing variable at cold start.

### Checkout (Shopify Storefront API)

`netlify/functions/checkout.ts` (`/api/checkout`) takes the site's own cart contents, resolves each line item to a Shopify variant by product handle/color/size via the Storefront API, and creates a Shopify cart — returning `checkoutUrl` for the browser to redirect to. The site never mounts Shopify's own cart/buy-button UI; `CartDrawer.tsx` is the only cart surface.

Requires these env vars in Netlify (Site settings → Environment variables, never committed):

- `SHOPIFY_STORE_DOMAIN` — e.g. `kh6exj-bk.myshopify.com`
- `SHOPIFY_STOREFRONT_TOKEN` — a Storefront API access token (Headless/Storefront API access, not the Admin API)

Product handles in Shopify must match each product's `slug` in `src/data/products.ts`, and variant option names/values (e.g. `Color`, `Size`) must match the `color`/`size` sent from the cart.
