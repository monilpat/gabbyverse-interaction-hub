
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle and protect your data"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-xl font-bold mb-4">1. Data Collection</h2>
              <p className="mb-4">
                $Gabby AI collects the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Blockchain wallet addresses and transaction histories on the platform</li>
                <li>Content of conversations with the AI agent</li>
                <li>Usage patterns and interaction metrics</li>
                <li>Staking and token activity</li>
                <li>Optional profile information if provided</li>
              </ul>
              
              <h2 className="text-xl font-bold mb-4">2. Data Storage</h2>
              <p className="mb-4">
                While all financial transactions are recorded on-chain for transparency, the actual content of conversations is never stored on the blockchain. Only payment references and metadata are recorded on-chain, with conversation content encrypted and stored off-chain using secure database systems.
              </p>
              
              <h2 className="text-xl font-bold mb-4">3. Data Usage</h2>
              <p className="mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve the $Gabby AI service</li>
                <li>Process transactions and distribute tokens</li>
                <li>Improve the AI model and response quality</li>
                <li>Analyze platform usage patterns to enhance features</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
              
              <h2 className="text-xl font-bold mb-4">4. Data Sharing</h2>
              <p className="mb-4">
                We do not sell your personal data to third parties. Data sharing is limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Necessary blockchain transactions visible on the public ledger (wallet addresses and payment amounts only)</li>
                <li>Service providers who help us operate the platform under strict confidentiality agreements</li>
                <li>Legal requirements where we are obligated to disclose information</li>
              </ul>
              
              <h2 className="text-xl font-bold mb-4">5. User Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your conversation history and personal data</li>
                <li>Request deletion of your off-chain data (note that blockchain transactions cannot be deleted)</li>
                <li>Opt-out of non-essential data collection</li>
                <li>Export your data in a portable format</li>
              </ul>
              
              <h2 className="text-xl font-bold mb-4">6. Security Measures</h2>
              <p className="mb-4">
                We implement security measures including encryption, access controls, and regular security audits to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-xl font-bold mb-4">7. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify users of significant changes through the platform.
              </p>
              
              <p className="mt-8 text-sm text-muted-foreground">
                Last updated: May 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
