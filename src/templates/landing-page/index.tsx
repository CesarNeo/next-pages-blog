import CallToAction from './sections/call-to-action';
import CustomerStorySection from './sections/customer-story-section';
import FeatureSection from './sections/feature-section';
import HeroSection from './sections/hero-section';
import SupportSection from './sections/support-section';

function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
}

export default LandingPage;
