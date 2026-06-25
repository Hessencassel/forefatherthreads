import ScrollReveal from '../ui/ScrollReveal';

export default function SleeveConversation() {
  return (
    <ScrollReveal>
      <section
        style={{
          backgroundColor: '#EDE5CC',
          padding: '6rem 2rem',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <p
            className="font-sans text-center"
            style={{
              color: '#B94B2C',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            What Happens When You Wear It
          </p>

          <h2
            className="font-playfair text-center"
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              color: '#0B1A2E',
              marginBottom: '2rem',
              lineHeight: 1.1,
            }}
          >
            The Conversation Starts<br />on Your Sleeve.
          </h2>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            {[
              "Picture this. You're standing in line, at a tailgate, across the table from someone who wants to argue about rights they can't cite. They ask about your shirt. You don't reach for a talking point. You reach for your sleeve.",
              "Three seconds later they're holding the full text of the United States Constitution on their phone. Every article. Every amendment. Every word as ratified. The argument just changed. Because now it's grounded in the document, not the noise.",
              "That's what Forefather Threads was built for. Not to win arguments. To end them — with the primary source.",
            ].map((para, i) => (
              <p
                key={i}
                className="font-sans"
                style={{
                  color: '#1A1008',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '1.5rem',
                }}
              >
                {para}
              </p>
            ))}
          </div>

          <blockquote
            className="font-playfair italic text-center"
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              color: '#B94B2C',
              padding: '2rem 0',
              borderTop: '1px solid rgba(11,26,46,0.15)',
              borderBottom: '1px solid rgba(11,26,46,0.15)',
              margin: '2.5rem auto',
              maxWidth: '600px',
            }}
          >
            Know Your Rights. Wear the Document.
          </blockquote>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2.5rem',
              marginTop: '1.5rem',
            }}
          >
            {[
              '✦ QR code on every garment, for life',
              '✦ Links to constitution.congress.gov — official, permanent, unedited',
            ].map((text) => (
              <span
                key={text}
                className="font-sans"
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#0B1A2E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {text}
              </span>
            ))}
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
}
