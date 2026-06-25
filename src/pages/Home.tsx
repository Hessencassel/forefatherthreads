import Hero from '../components/sections/Hero';
import WhyWeExist from '../components/sections/WhyWeExist';
import ProductGrid from '../components/sections/ProductGrid';
import WhoIsTheRemnant from '../components/sections/WhoIsTheRemnant';
import BrandStory from '../components/sections/BrandStory';
import QRFeature from '../components/sections/QRFeature';
import SleeveConversation from '../components/sections/SleeveConversation';
import ChallengeTeaser from '../components/sections/ChallengeTeaser';
import InconvenientTruth from '../components/sections/InconvenientTruth';
import GuaranteeBlock from '../components/sections/GuaranteeBlock';
import EmailSignup from '../components/sections/EmailSignup';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />

      <WhyWeExist />

      <ScrollReveal>
        <ProductGrid
          title="The Armory"
          subtitle="Standard issue gear for The Remnant."
          showCta={false}
        />
      </ScrollReveal>

      <WhoIsTheRemnant />

      <ScrollReveal delay={50}>
        <BrandStory />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <QRFeature />
      </ScrollReveal>

      <SleeveConversation />

      <ScrollReveal delay={50}>
        <ChallengeTeaser />
      </ScrollReveal>

      <InconvenientTruth />

      <ScrollReveal delay={50}>
        <GuaranteeBlock />
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <EmailSignup />
      </ScrollReveal>
    </>
  );
}
