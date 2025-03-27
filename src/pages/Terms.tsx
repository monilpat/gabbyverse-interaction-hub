
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Terms = () => {
  return (
    <Layout>
      <PageHeader 
        title="Terms of Use" 
        subtitle="Legal terms governing the use of our platform"
      />
      <PlaceholderContent 
        title="Terms of Use"
        description="Detailed terms and conditions for using the Gabby AI platform and services."
      />
    </Layout>
  );
};

export default Terms;
