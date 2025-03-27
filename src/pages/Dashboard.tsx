
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Layout>
      <PageHeader 
        title="Dashboard" 
        subtitle="Stake tokens, chat with Gabby, and manage your account"
      />
      
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Coming Q2 2025</h2>
          <p className="text-xl text-muted-foreground mb-8">
            The $GABBY Dashboard is launching with our Beta release in Q2 2025
          </p>
          
          <div className="bg-secondary/20 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-medium mb-4">Features to Expect:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gabby mb-2">Staking Portal</h4>
                <p className="text-muted-foreground">Connect your wallet to view your $GABBY balance and stake tokens for tier benefits</p>
              </div>
              <div>
                <h4 className="font-bold text-gabby mb-2">AI Chat Interface</h4>
                <p className="text-muted-foreground">Directly interact with Gabby through text, voice, and video with pay-per-message functionality</p>
              </div>
              <div>
                <h4 className="font-bold text-gabby mb-2">Rumor Mill</h4>
                <p className="text-muted-foreground">Access exclusive AI-curated insider content through token-gated mechanisms</p>
              </div>
              <div>
                <h4 className="font-bold text-gabby mb-2">Task Commission</h4>
                <p className="text-muted-foreground">Commission Gabby for custom outputs with smart contract escrow payments</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roadmap" className="btn-primary">
              View Full Roadmap
            </Link>
            <Link to="/tokenomics" className="btn-secondary">
              Get $GABBY Tokens
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
