import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AIPartnerSection from '@/components/sections/AIPartnerSection';
import ResearchInterfaceSection from '@/components/sections/ResearchInterfaceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FooterCTASection from '@/components/sections/FooterCTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AIPartnerSection />
      <ResearchInterfaceSection />
      <TestimonialsSection />
      <FooterCTASection />
    </div>
  );
}
