
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Roadmap = () => {
  return (
    <Layout>
      <PageHeader 
        title="Roadmap & Why Now" 
        subtitle="Our development timeline and market opportunity"
      />
      <PlaceholderContent 
        title="Roadmap & Market Timing"
        description="Discover our phased development plan and why the timing is perfect for a web3-native AI platform."
      />
    </Layout>
  );
};

export default Roadmap;
