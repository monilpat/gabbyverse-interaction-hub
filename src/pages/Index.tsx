
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { MarketChallengesSection } from '@/components/home/MarketChallengesSection';
import { AboutGabbySection } from '@/components/home/AboutGabbySection';
import { TokenUtilitySection } from '@/components/home/TokenUtilitySection';
import { CtaSection } from '@/components/home/CtaSection';
import { Layout } from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <MarketChallengesSection />
      <AboutGabbySection />
      <TokenUtilitySection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
