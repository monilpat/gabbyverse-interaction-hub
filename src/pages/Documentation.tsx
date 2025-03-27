
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Documentation = () => {
  return (
    <Layout>
      <PageHeader 
        title="Documentation" 
        subtitle="Technical specifications, guides, and resources"
      />
      <PlaceholderContent 
        title="Technical Documentation"
        description="Comprehensive guides, API references, and technical resources for developers and users."
      />
    </Layout>
  );
};

export default Documentation;
