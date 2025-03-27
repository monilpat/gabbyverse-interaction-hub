
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { PlaceholderContent } from '@/components/ui/custom/PlaceholderContent';

const Dashboard = () => {
  return (
    <Layout>
      <PageHeader 
        title="Dashboard" 
        subtitle="Stake tokens, chat with Gabby, and manage your account"
      />
      <PlaceholderContent 
        title="User Dashboard"
        description="The central hub for interacting with Gabby, managing your tokens, and accessing exclusive content."
      />
    </Layout>
  );
};

export default Dashboard;
