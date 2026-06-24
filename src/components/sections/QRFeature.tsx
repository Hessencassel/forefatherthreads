export default function QRFeature() {
  return (
    <section className="bg-navy-dark py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* QR icon placeholder */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 border-2 border-gold/40 flex items-center justify-center relative">
            {/* Stylized QR placeholder */}
            <div className="grid grid-cols-3 gap-1 w-12 h-12" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={`${[0, 2, 6, 8, 4].includes(i) ? 'bg-gold/60' : 'bg-gold/20'}`}
                />
              ))}
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold -translate-x-px -translate-y-px" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold -translate-x-px translate-y-px" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold translate-x-px translate-y-px" />
          </div>
        </div>

        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-5">
          High-Density QR Code · Left Sleeve · Every Garment
        </p>

        <h2 className="font-playfair text-cream text-4xl md:text-5xl font-bold mb-6 leading-tight">
          The Constitution.
          <br />
          <span className="italic text-gold">On Your Sleeve.</span>
        </h2>

        <p className="font-sans text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed mb-5">
          Every Forefather Threads garment is equipped with a high-density QR code printed
          on the left sleeve — linking directly to the full text of the U.S. Constitution.
          In a world of partisan noise, we provide the source code.
        </p>

        <p className="font-sans text-cream/50 text-base max-w-xl mx-auto leading-relaxed mb-10">
          Not a gimmick. The point. When someone asks what your shirt means, you hand them
          the primary source. Every article. Every amendment. Every word, exactly as
          ratified. No paraphrasing. No interpretation.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left max-w-3xl mx-auto">
          {[
            {
              title: 'Full Constitutional Text',
              body: 'All seven articles, all 27 amendments. Nothing cut. Nothing paraphrased.',
            },
            {
              title: 'Permanent Link',
              body: 'The QR destination is hosted and maintained for the lifetime of the garment.',
            },
            {
              title: 'No App Required',
              body: 'Any smartphone camera reads it instantly. The document loads in seconds.',
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
