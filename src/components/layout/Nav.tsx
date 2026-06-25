import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import logoIcon from '../../assets/logo-icon.png';

interface NavLinkItem {
  label: string;
  to: string;
  highlight?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Armory', to: '/shop' },
  { label: 'Our Story', to: '/about' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'The Document', to: '/constitution' },
  { label: 'The Challenge', to: '/constitution-challenge', highlight: true },
  { label: "Founders'", to: '/founders-words' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav() {
  const { totalItems, dispatch } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy shadow-lg" style={{ borderBottom: '1px solid rgba(200, 146, 42, 0.25)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            style={{ gap: '12px' }}
          >
            <img src={logoIcon} alt="" aria-hidden="true" style={{ height: '52px', width: 'auto' }} />
            <span
              className="font-bebas text-gold text-xl sm:text-2xl leading-none"
              style={{ letterSpacing: '0.18em', fontWeight: 700 }}
            >
              Forefather ✦ Threads
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => {
                  if (isActive) return 'font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 text-gold';
                  if (link.highlight) return 'font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 text-gold/80 hover:text-gold';
                  return 'font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 text-cream/75 hover:text-cream';
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side — cart + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch({ type: 'OPEN_CART' })}
              className="relative text-cream hover:text-gold transition-colors duration-200 p-1"
              aria-label={`Open cart — ${totalItems} items`}
            >
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rust text-cream text-[10px] font-bold w-4.5 h-4.5 min-w-[1.1rem] min-h-[1.1rem] rounded-full flex items-center justify-center font-sans leading-none px-0.5">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-cream hover:text-gold transition-colors p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light border-t border-cream/10 animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => {
                  if (isActive) return 'font-sans text-sm tracking-[0.15em] uppercase text-gold';
                  if (link.highlight) return 'font-sans text-sm tracking-[0.15em] uppercase text-gold/80';
                  return 'font-sans text-sm tracking-[0.15em] uppercase text-cream/75';
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function CartIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
