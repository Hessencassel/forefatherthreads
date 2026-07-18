import AnimatedHeading from '../ui/AnimatedHeading';
import DecorativeText from '../ui/DecorativeText';
import qrCode from '../../assets/Constitution-QR.webp';

export default function QRFeature() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 px-6">
      <DecorativeText text="DOCTRINE" size="24vw" opacity={0.06} color="#0B1A2E" position="left" font="bebas" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* QR code image */}
        <div className="flex flex-col items-center mb-10">
          <a
            href="https://constitution.congress.gov/constitution/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scan to access the full U.S. Constitution"
            style={{ outline: 'none' }}
          >
            <img
              src={qrCode}
              alt="QR code linking to the full U.S. Constitution"
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'contain',
                display: 'block',
                filter: 'invert(1)',
                border: '1.5px solid rgba(200,146,42,0.5)',
              }}
            />
          </a>
          <p
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              color: '#C8922A',
              textAlign: 'center',
              marginTop: 12,
              fontVariant: 'small-caps',
            }}
            className="font-sans uppercase"
          >
            Scan or Click to Read the Constitution
          </p>
        </div>

        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-5">
          High-Density QR Code · Left Sleeve · Every Garment
        </p>

        <AnimatedHeading
          tag="h2"
          className="font-playfair text-cream text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          The Constitution.
          <br />
          <span className="italic text-gold">On Your Sleeve.</span>
        </AnimatedHeading>

        <p className="font-sans text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed mb-5">
          Every Forefather Threads garment carries a high-density QR code on the left sleeve.
          One scan opens the U.S. Constitution as ratified — the whole document, not our
          summary of it.
        </p>

        <p className="font-sans text-cream/50 text-base max-w-xl mx-auto leading-relaxed mb-10">
          Not a gimmick. The point. When someone asks what your shirt means, you hand them
          the primary source.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left max-w-3xl mx-auto">
          {[
            {
              title: 'Zero Paraphrasing',
              body: 'Uncut, unedited, exact ratified text. Every article, every amendment.',
            },
            {
              title: 'Built to Last',
              body: 'The QR destination is hosted and permanently maintained for the lifetime of the garment.',
            },
            {
              title: 'No App Required',
              body: 'Any phone camera. No app, no account, no download.',
            },
          ].map((feature) => (
            <div key={feature.title} className="border-t border-gold/20 pt-5">
              <h3 className="font-playfair text-gold text-base font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-cream/50 text-sm leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
