import Hero from '../components/sections/Hero';
import ProductGrid from '../components/sections/ProductGrid';
import FeatureShot from '../components/sections/FeatureShot';
import Testimonials from '../components/sections/Testimonials';
import BrandStory from '../components/sections/BrandStory';
import QRFeature from '../components/sections/QRFeature';
import GuaranteeBlock from '../components/sections/GuaranteeBlock';
import EmailSignup from '../components/sections/EmailSignup';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Hero has its own entrance — no scroll reveal needed */}
      <Hero />

      <ScrollReveal>
        <ProductGrid
          title="The Armory"
          subtitle="Standard issue gear for The Remnant."
          showCta={false}
        />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <FeatureShot />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <BrandStory />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <QRFeature />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <GuaranteeBlock />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <EmailSignup />
      </ScrollReveal>
    </>
  );
}
