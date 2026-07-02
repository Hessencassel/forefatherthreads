import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { CartProvider } from './context/CartContext';
import PageTransition from './components/ui/PageTransition';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Nav from './components/layout/Nav';
import CartDrawer from './components/layout/CartDrawer';
import Footer from './components/layout/Footer';
import logoIcon from './assets/logo-icon.png';
import './index.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href={logoIcon} />
        <link rel="apple-touch-icon" href={logoIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Forefather Threads — Constitutional apparel built for the Remnant. Doctrine, not decoration."
        />
        <meta name="theme-color" content="#0B1A2E" />
        <meta property="og:title" content="Forefather Threads" />
        <meta property="og:description" content="Doctrine, not decoration. Small-batch constitutional apparel." />
        <meta property="og:type" content="website" />
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
        <title>Forefather Threads — Doctrine, not decoration.</title>
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
          <AnnouncementBar />
          <Nav />
          <CartDrawer />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </CartProvider>
  );
}
