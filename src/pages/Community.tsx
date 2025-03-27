
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Community = () => {
  return (
    <Layout>
      <PageHeader 
        title="Community & Support" 
        subtitle="Join our community and get assistance"
      />
      <PlaceholderContent 
        title="Community Resources"
        description="Access community channels, support resources, FAQs, and tutorials."
      />
    </Layout>
  );
};

export default Community;
