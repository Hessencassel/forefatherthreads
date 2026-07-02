import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type Variant = 'rust' | 'gold-outline' | 'navy' | 'cream' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
}

interface LinkButtonProps {
  variant?: Variant;
  size?: Size;
  href: string;
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  external?: boolean;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  rust: 'bg-rust text-cream hover:bg-rust-dark border border-rust hover:border-rust-dark',
  'gold-outline': 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-navy',
  navy: 'bg-navy text-cream hover:bg-navy-dark border border-navy',
  cream: 'bg-cream text-navy hover:bg-parchment border border-cream',
  ghost: 'bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.12em]',
  md: 'px-6 py-3 text-sm tracking-[0.1em]',
  lg: 'px-8 py-4 text-sm tracking-[0.12em]',
};

function baseClasses(variant: Variant, size: Size, fullWidth?: boolean): string {
  return [
    'inline-flex items-center justify-center font-sans font-semibold uppercase transition-all duration-200',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button({
  variant = 'rust',
  size = 'md',
  fullWidth,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses(variant, size, fullWidth)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'rust',
  size = 'md',
  fullWidth,
  href,
  children,
  className = '',
  external,
}: LinkButtonProps) {
  const classes = `${baseClasses(variant, size, fullWidth)} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
