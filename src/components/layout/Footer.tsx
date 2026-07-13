import { Link } from 'react-router';
import logoIcon from '../../assets/logo-icon.webp';

// Mirrors NAV_LINKS in Nav.tsx — same pages, order, and labels in both.
const NAV_LINKS = [
  { label: 'Armory', to: '/shop' },
  { label: 'Our Story', to: '/about' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'The Document', to: '/constitution' },
  { label: 'The Challenge', to: '/constitution-challenge' },
  { label: 'The Founders', to: '/founders-words' },
  { label: 'Take the Oath', to: '/oath' },
  { label: 'Contact', to: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/forefatherthreads', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/forefather_threads', icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com/@forefatherthreads', icon: TikTokIcon },
  { label: 'X', href: 'https://x.com/FFThreads1776', icon: XIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@ForefatherThreads', icon: YouTubeIcon },
];

const POLICY_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Shipping Policy', to: '/shipping' },
  { label: 'Returns & Exchanges', to: '/refunds' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Information', to: '/contact-info' },
];

const MARQUEE_STRIP =
  "✦ PRINTED IN THE REPUBLIC · ✦ UNAPOLOGETICALLY AMERICAN · ✦ NO COMPROMISE · ✦ PRINTED IN THE REPUBLIC · ✦ UNAPOLOGETICALLY AMERICAN · ✦ NO COMPROMISE · ";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Scrolling strip — opposite direction to announcement bar */}
      <div className="bg-navy-dark border-t border-gold/20 border-b border-gold/20 py-2.5 overflow-hidden" aria-hidden="true">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee-reverse 24s linear infinite' }}
        >
          <span className="font-sans text-xs tracking-[0.18em] text-gold px-4">{MARQUEE_STRIP}</span>
          <span className="font-sans text-xs tracking-[0.18em] text-gold px-4">{MARQUEE_STRIP}</span>
        </div>
        <style>{`
          @keyframes marquee-reverse {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0%); }
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src={logoIcon} alt="" aria-hidden="true" style={{ height: '64px', width: 'auto' }} className="mb-3" />
              <span className="font-bebas text-gold text-2xl tracking-[0.15em]">Forefather Threads</span>
            </Link>
            <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-xs">
              Small-batch constitutional apparel for the Remnant. Printed in the Republic.
              Unapologetically American. No Compromise.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + info */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-5">
              Policies
            </h3>
            <ul className="space-y-3">
              {POLICY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand motto */}
        <div className="border-t border-cream/10 py-4 text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/70">
            Printed in the Republic&nbsp;&nbsp;·&nbsp;&nbsp;Unapologetically American&nbsp;&nbsp;·&nbsp;&nbsp;No Compromise
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40 text-center sm:text-left">
            © {new Date().getFullYear()} Forefather Threads. All rights reserved.
            Fort Wayne, Indiana.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((card) => (
              <div
                key={card}
                className="border border-cream/20 text-cream/50 font-sans text-[9px] px-1.5 py-0.5 tracking-wider"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
