import type { ReactNode } from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

export interface PolicySection {
  heading: string;
  body: ReactNode;
}

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  sections: PolicySection[];
}

/**
 * Shared header + prose layout for the legal/utility pages (privacy,
 * refunds, terms, shipping, contact info). Navy background with
 * cream/gold text — every text color used here (cream, cream/80,
 * cream/60, gold) has been checked against #0B1A2E and clears the
 * 4.5:1 contrast minimum. Don't drop body text below cream/60 or this
 * breaks.
 */
export default function PolicyPage({ eyebrow, title, intro, lastUpdated, sections }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-gold/20">
        <p className="font-sans text-gold text-[0.65rem] tracking-[0.22em] uppercase mb-4" style={{ fontVariant: 'small-caps' }}>
          {eyebrow}
        </p>
        <AnimatedHeading tag="h1" className="font-playfair text-cream text-5xl md:text-6xl font-bold mb-6">
          {title}
        </AnimatedHeading>
        {intro && (
          <p className="font-sans text-cream/80 text-base max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        )}
        <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-8" />
        {lastUpdated && (
          <p className="font-sans text-cream/60 text-xs tracking-[0.15em] uppercase mt-6">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-playfair text-cream text-2xl font-bold mb-4">
              {section.heading}
            </h2>
            <div className="font-sans text-cream/80 text-sm leading-relaxed space-y-4">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Highlights a bracketed placeholder so it's easy to find and replace later. */
export function Fill({ children }: { children: ReactNode }) {
  return <span className="text-gold bg-gold/10 px-1 rounded-sm">{children}</span>;
}
