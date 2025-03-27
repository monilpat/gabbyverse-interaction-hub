
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the Gabby AI team"
      />
      <PlaceholderContent 
        title="Contact Information"
        description="Ways to reach out to our team for support, partnerships, or general inquiries."
      />
    </Layout>
  );
};

export default Contact;
