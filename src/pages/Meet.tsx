
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Meet = () => {
  return (
    <Layout>
      <PageHeader 
        title="Meet Gabby" 
        subtitle="Get to know the web3-native AI agent powering our platform"
      />
      <PlaceholderContent 
        title="Meet Gabby"
        description="Learn about Gabby's personality, capabilities, use cases, and how she leverages web3 technology."
      />
    </Layout>
  );
};

export default Meet;
