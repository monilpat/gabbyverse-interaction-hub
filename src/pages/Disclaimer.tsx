
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Disclaimer = () => {
  return (
    <Layout>
      <PageHeader 
        title="Risk Disclaimer" 
        subtitle="Important information about potential risks"
      />
      <PlaceholderContent 
        title="Risk Disclaimer"
        description="Essential information about the risks associated with cryptocurrency investments and AI-generated content."
      />
    </Layout>
  );
};

export default Disclaimer;
