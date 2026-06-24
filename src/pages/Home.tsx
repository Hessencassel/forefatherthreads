import Hero from '../components/sections/Hero';
import ProductGrid from '../components/sections/ProductGrid';
import Testimonials from '../components/sections/Testimonials';
import BrandStory from '../components/sections/BrandStory';
import QRFeature from '../components/sections/QRFeature';
import GuaranteeBlock from '../components/sections/GuaranteeBlock';
import EmailSignup from '../components/sections/EmailSignup';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid
        title="The Armory"
        subtitle="Standard issue gear for The Remnant."
        showCta={false}
      />
      <Testimonials />
      <BrandStory />
      <QRFeature />
      <GuaranteeBlock />
      <EmailSignup />
    </>
  );
}
