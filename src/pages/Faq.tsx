
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Faq = () => {
  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Answers to common questions about Gabby AI"
      />
      <PlaceholderContent 
        title="FAQ"
        description="Comprehensive answers to the most frequently asked questions about our platform and services."
      />
    </Layout>
  );
};

export default Faq;
