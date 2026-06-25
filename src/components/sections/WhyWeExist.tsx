import ScrollReveal from '../ui/ScrollReveal';
import { LinkButton } from '../ui/Button';

export default function WhyWeExist() {
  return (
    <section
      style={{
        backgroundColor: '#0B1A2E',
        padding: '6rem 2rem',
        textAlign: 'center',
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
          fontSize: '22vw',
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
        DOCUMENT
      </span>

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <ScrollReveal delay={0}>
          <p
            className="font-sans"
            style={{
              color: '#C8922A',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Why Forefather Threads Exists
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#F5EFE0',
              marginBottom: '1rem',
            }}
          >
            This Is Not a Patriotic T-Shirt.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            className="font-playfair italic"
            style={{
              color: '#C8922A',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              marginBottom: '3rem',
            }}
          >
            It&rsquo;s a wearable document.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div
            style={{
              width: '60px',
              height: '1px',
              background: '#C8922A',
              margin: '0 auto 3rem',
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p
            className="font-sans"
            style={{
              color: '#F5EFE0',
              fontSize: '1rem',
              lineHeight: 1.85,
              maxWidth: '640px',
              margin: '0 auto 1.5rem',
            }}
          >
            Every brand in this space will sell you a flag, an eagle, or a slogan. We respect all
            of that. But Forefather Threads was built on a different premise — that the most
            patriotic thing an American can wear is not a symbol of the founding, but the founding
            itself.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p
            className="font-sans"
            style={{
              color: '#F5EFE0',
              fontSize: '1rem',
              lineHeight: 1.85,
              maxWidth: '640px',
              margin: '0 auto 1.5rem',
            }}
          >
            Printed on the left sleeve of every garment is a high-density QR code linking directly
            to the full text of the United States Constitution. All seven articles. All 27
            amendments. Every word as written and ratified. When someone asks what your shirt means,
            you don&rsquo;t give them a bumper sticker. You hand them the primary source.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p
            className="font-sans"
            style={{
              color: '#F5EFE0',
              fontSize: '1rem',
              lineHeight: 1.85,
              maxWidth: '640px',
              margin: '0 auto 3rem',
            }}
          >
            Everyone else sells you the idea of America. We sell you the operating manual.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <blockquote
            className="font-playfair italic"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#C8922A',
              lineHeight: 1.3,
              maxWidth: '600px',
              margin: '0 auto 3rem',
              padding: '2rem 0',
              borderTop: '1px solid rgba(200,146,42,0.3)',
              borderBottom: '1px solid rgba(200,146,42,0.3)',
            }}
          >
            Know Your Rights. Wear the Document.
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '2.5rem',
            }}
          >
            <LinkButton href="/shop" variant="rust" size="lg">
              Enter the Armory
            </LinkButton>
            <LinkButton href="/manifesto" variant="gold-outline" size="lg">
              Read the Manifesto
            </LinkButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
