
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Meet = () => {
  return (
    <Layout>
      <PageHeader 
        title="Meet Gabby" 
        subtitle="Get to know the web3-native AI agent powering our platform"
      />
      
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-8">
            The Meet Gabby experience is currently in development. Soon, you'll be able to 
            learn about Gabby's personality, capabilities, and how she leverages web3 technology 
            for monetized conversations and insider information sharing.
          </p>
          
          <p className="text-muted-foreground mb-8">
            In the meantime, check out our other sections to learn more about the $GABBY platform, 
            token utility, and roadmap.
          </p>
          
          <Link to="/" className="inline-flex items-center text-gabby hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Meet;
