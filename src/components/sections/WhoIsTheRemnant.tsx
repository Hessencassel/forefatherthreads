import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { LinkButton } from '../ui/Button';

const PARAGRAPHS = [
  "You are the Remnant if you've ever been the only person in the room who actually read the amendment being debated.",
  "You are the Remnant if you believe the Constitution is a primary source — not a partisan weapon, not a living suggestion, not a document to be reinterpreted into something the founders would not recognize.",
  "You are the Remnant if you're tired of watching people wave the flag without knowing what it protects. If you've sat across from someone arguing about the Second Amendment who cannot name the First. If you've watched constitutional language get weaponized by people on both sides who have never read past the headlines.",
  "You are the Remnant if you think the founders were imperfect men who built something extraordinary — and that what they built deserves to be defended with knowledge, not just emotion.",
];

function RemnantParagraph({ text, delay }: { text: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <p
        className="font-sans"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontSize: '1rem',
          lineHeight: 1.85,
          color: '#F5EFE0',
          maxWidth: '640px',
          margin: '0 auto 1.5rem',
          paddingLeft: '1.25rem',
          borderLeft: `2px solid ${hovered ? '#C8922A' : 'transparent'}`,
          transition: 'border-left-color 0.2s ease',
        }}
      >
        {text}
      </p>
    </ScrollReveal>
  );
}

export default function WhoIsTheRemnant() {
  return (
    <section
      style={{
        backgroundColor: '#0B1A2E',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background word */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          fontFamily: '"Playfair Display", serif',
          fontSize: '28vw',
          color: 'rgba(200,146,42,0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        REMNANT
      </span>

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <ScrollReveal delay={0}>
          <p
            className="font-sans text-center"
            style={{
              color: '#C8922A',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Are You the Remnant?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="font-playfair text-center"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#F5EFE0',
              marginBottom: '2.5rem',
            }}
          >
            You&rsquo;ll Know If You Are.
          </h2>
        </ScrollReveal>

        {PARAGRAPHS.map((text, i) => (
          <RemnantParagraph key={i} text={text} delay={200 + i * 150} />
        ))}

        <ScrollReveal delay={200 + PARAGRAPHS.length * 150}>
          <p
            className="font-playfair italic text-center"
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: '#F5EFE0',
              marginTop: '2.5rem',
            }}
          >
            We didn&rsquo;t build this brand for everyone. We built it for you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200 + PARAGRAPHS.length * 150 + 100}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <LinkButton href="/oath" variant="rust" size="lg">
              Take the Oath — Join the Remnant
            </LinkButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
