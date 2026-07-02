import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { CartProvider } from './context/CartContext';
import PageTransition from './components/ui/PageTransition';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Nav from './components/layout/Nav';
import CartDrawer from './components/layout/CartDrawer';
import Footer from './components/layout/Footer';
import logoIcon from './assets/logo-icon.png';
import { jsonLd, ORGANIZATION_SCHEMA } from './lib/seo';
import './index.css';

/**
 * Site-wide Organization JSON-LD only — no title/description/canonical
 * here; those live in each route's own meta() (see src/lib/seo.ts).
 *
 * React Router does NOT concatenate meta across the route tree — each
 * route's meta() *replaces* what its ancestors returned. This array
 * only reaches other pages because every page's meta() calls pageMeta()
 * with its own `matches` arg, which explicitly re-includes it. If a
 * route ever skips that, this schema silently drops off that page.
 */
export function meta() {
  return [jsonLd(ORGANIZATION_SCHEMA)];
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href={logoIcon} />
        <link rel="apple-touch-icon" href={logoIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0B1A2E" />
        {/* title, description, canonical, and OG/Twitter tags come from each
            route's own `meta` export (see src/lib/seo.ts) — not hardcoded here. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.29.0/dist/tabler-icons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300..600;1,9..40,300..600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <CartProvider>
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <AnnouncementBar />
          <Nav />
          <CartDrawer />
          <main id="main-content" className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </CartProvider>
  );
}
