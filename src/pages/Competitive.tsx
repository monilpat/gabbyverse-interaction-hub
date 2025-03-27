
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Competitive = () => {
  return (
    <Layout>
      <PageHeader 
        title="Competitive Analysis" 
        subtitle="Comprehensive analysis of existing platforms and market opportunities"
      />
      <PlaceholderContent 
        title="Competitive Analysis"
        description="A detailed look at existing platforms in the conversational AI and web3 space, including SWOT analysis and market gap identification."
      />
    </Layout>
  );
};

export default Competitive;
