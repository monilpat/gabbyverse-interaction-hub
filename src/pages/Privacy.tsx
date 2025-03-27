
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Privacy = () => {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle and protect your data"
      />
      <PlaceholderContent 
        title="Privacy Policy"
        description="Information about data collection, storage, processing, and your privacy rights."
      />
    </Layout>
  );
};

export default Privacy;
