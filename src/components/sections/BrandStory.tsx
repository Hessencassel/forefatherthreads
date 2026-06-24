import { LinkButton } from '../ui/Button';

const MANIFESTO_QUOTE =
  'There is a peculiar kind of American who still reads the founding documents for pleasure. Not for class. Not for debate prep. Not to score points. For the same reason people still read great literature — because something in it is true, and they need to be reminded.';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Left — navy/manifesto side */}
      <div className="bg-navy flex flex-col justify-center px-10 lg:px-16 py-20">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-6">
          From the Manifesto
        </p>
        <blockquote className="font-playfair text-cream text-xl sm:text-2xl leading-relaxed italic font-medium">
          &ldquo;{MANIFESTO_QUOTE}&rdquo;
        </blockquote>
        <div className="w-12 h-0.5 bg-gold mt-8 mb-6" />
        <LinkButton href="/manifesto" variant="gold-outline" size="sm">
          Read the Full Manifesto
        </LinkButton>
      </div>

      {/* Right — cream/origin story */}
      <div className="bg-parchment flex flex-col justify-center px-10 lg:px-16 py-20">
        <p className="font-sans text-navy/40 text-xs tracking-[0.3em] uppercase mb-4">
          Our Origin
        </p>
        <h2 className="font-playfair text-navy text-3xl sm:text-4xl font-bold mb-8 leading-tight">
          Born from Bourbon
          <br />
          &amp; Frustration
        </h2>

        <div className="space-y-5 font-sans text-navy/70 text-[15px] leading-relaxed">
          <p>
            There wasn&apos;t a &ldquo;eureka&rdquo; moment. There was a Tuesday night in
            Waynedale, Indiana, and a kitchen table, and too much bourbon, and a
            conversation about rights.
          </p>
          <p>
            We&apos;d watched a decade of slow, steady drift — not one catastrophic event,
            but a series of small decisions, each one defensible in isolation, accumulating
            into something that would have been unrecognizable to anyone who read the
            founding documents with any seriousness.
          </p>
          <p>
            So we made a shirt. Not because a shirt changes anything by itself — but
            because wearing one starts conversations, and conversations change things.
            We built it for the Remnant: the people who still care about primary sources
            when everyone else has moved on to hot takes.
          </p>
        </div>

        <div className="mt-8">
          <LinkButton href="/about" variant="ghost" size="sm">
            Read Our Full Story
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
