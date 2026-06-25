import ScrollReveal from '../ui/ScrollReveal';

export default function InconvenientTruth() {
  return (
    <ScrollReveal>
      <section
        style={{
          backgroundColor: '#0B1A2E',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <p
            className="font-sans"
            style={{
              color: '#C8922A',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            The Inconvenient Truth
          </p>

          <blockquote
            className="font-playfair italic"
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
              color: '#C8922A',
              lineHeight: 1.4,
              maxWidth: '660px',
              margin: '0 auto 2.5rem',
              padding: '2.5rem 0',
              borderTop: '1px solid rgba(200,146,42,0.3)',
              borderBottom: '1px solid rgba(200,146,42,0.3)',
            }}
          >
            The biggest threat to the Constitution isn&rsquo;t any politician. It&rsquo;s the
            millions of Americans who will argue about it passionately without ever having read it.
          </blockquote>

          <p
            className="font-sans"
            style={{
              color: '#F5EFE0',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            That&rsquo;s not a partisan statement. It&rsquo;s a factual one. Constitutional
            literacy has been declining for decades across the political spectrum. Forefather Threads
            exists because we believe you cannot defend what you do not know. The QR code on your
            sleeve is not a gimmick. It is a direct response to a real crisis — one conversation,
            one scan, one primary source at a time.
          </p>

        </div>
      </section>
    </ScrollReveal>
  );
}
