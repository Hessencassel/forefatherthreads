import { LinkButton } from '../ui/Button';
import AnimatedHeading from '../ui/AnimatedHeading';
import DecorativeText from '../ui/DecorativeText';

const MANIFESTO_QUOTE =
  'There is a peculiar kind of American who still reads the founding documents for pleasure. Not for class. Not for debate prep. Not to score points. For the same reason people still read great literature — because something in it is true, and they need to be reminded.';

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[38fr_62fr] min-h-[600px]">
      <DecorativeText text="1776" size="40vw" opacity={0.05} color="#0B1A2E" position="right" font="bebas" scrollSpeed={-2} />
      {/* Left — navy/manifesto side (38%) */}
      <div className="relative z-10 bg-navy flex flex-col justify-center px-8 lg:px-12 py-20">
        <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase mb-6">
          From the Manifesto
        </p>
        <blockquote className="font-playfair text-cream text-2xl sm:text-3xl leading-snug italic font-medium">
          &ldquo;{MANIFESTO_QUOTE}&rdquo;
        </blockquote>
        <div className="w-12 h-0.5 bg-gold mt-8 mb-6" />
        <LinkButton href="/manifesto" variant="gold-outline" size="sm">
          Read the Full Manifesto
        </LinkButton>
      </div>

      {/* Right — cream/origin story (62%) */}
      <div className="relative z-10 bg-parchment flex flex-col justify-center px-10 lg:px-20 xl:px-24 py-20">
        <p className="font-sans text-navy/40 text-xs tracking-[0.3em] uppercase mb-4">
          Our Origin
        </p>
        <AnimatedHeading
          tag="h2"
          className="font-playfair text-navy text-3xl sm:text-4xl font-bold mb-8 leading-tight"
        >
          Born from Bourbon
          <br />
          &amp; Frustration
        </AnimatedHeading>

        <div className="space-y-5 font-sans text-navy/70 text-[15px] leading-relaxed">
          <p>
            We didn&apos;t start this company to sell clothes. We started it because we
            were tired of watching rights disappear behind red tape.
          </p>
          <p>
            Forefather Threads was born in Waynedale, Indiana. Forged over late-night
            whiskey and uncomfortable truths.
          </p>
          <p>
            We are not here to compromise. We are not here to fit in.{' '}
            <span className="text-navy font-semibold">We are the Remnant.</span>
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
