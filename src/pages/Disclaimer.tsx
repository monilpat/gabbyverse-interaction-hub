
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <Layout>
      <PageHeader 
        title="Risk Disclaimer" 
        subtitle="Important information about potential risks"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <Card className="w-full max-w-4xl mx-auto border-amber-300">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <h2 className="text-xl font-bold mb-4 text-center">Risk Disclaimer</h2>
              
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
                <p className="font-medium text-amber-800">
                  $GABBY is a utility token. Nothing on this website constitutes financial advice. Cryptocurrency investments involve risk. Always do your own research.
                </p>
              </div>
              
              <h3 className="text-lg font-bold mb-3">Cryptocurrency Risks</h3>
              <p className="mb-4">
                Cryptocurrencies, including the $GABBY token, are subject to high market volatility and risk. The value of tokens can significantly fluctuate and may be affected by factors outside our control. There is no guarantee that you will receive any return on your investment, and you may lose part or all of your investment.
              </p>
              
              <h3 className="text-lg font-bold mb-3">AI-Generated Content Disclaimer</h3>
              <p className="mb-4">
                The $Gabby AI is not a human. Information provided by the AI, including "rumors" or "insider information," should not be considered as professional advice or guaranteed to be accurate. Such information is provided for entertainment and informational purposes only. Always verify any information received from the AI before making decisions.
              </p>
              
              <h3 className="text-lg font-bold mb-3">No Professional Advice</h3>
              <p className="mb-4">
                $Gabby is not a licensed financial advisor, legal expert, or medical professional. The platform does not provide investment, legal, tax, or medical advice. Always consult with qualified professionals before making any financial, legal, or health-related decisions.
              </p>
              
              <h3 className="text-lg font-bold mb-3">Technical Risks</h3>
              <p className="mb-4">
                Blockchain technology and smart contracts may be subject to technical vulnerabilities, hacks, or other unforeseen issues. Despite our security measures, we cannot guarantee complete security of the platform or your digital assets.
              </p>
              
              <h3 className="text-lg font-bold mb-3">Regulatory Uncertainty</h3>
              <p className="mb-4">
                The regulatory landscape for cryptocurrencies and AI is evolving. Future regulatory changes may impact the operation of the $Gabby platform or the value of $GABBY tokens. We cannot predict or guarantee how regulatory developments might affect the platform.
              </p>
              
              <h3 className="text-lg font-bold mb-3">User Responsibility</h3>
              <p className="mb-4">
                Users are solely responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Securing their own wallet and private keys</li>
                <li>Verifying any information received through the platform</li>
                <li>Complying with applicable laws and regulations in their jurisdiction</li>
                <li>Making informed decisions about their token usage and investments</li>
              </ul>
              
              <p className="mt-8 text-sm text-muted-foreground">
                By using the $Gabby platform, you acknowledge and accept these risks.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Disclaimer;
