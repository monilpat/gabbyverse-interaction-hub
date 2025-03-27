
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Gabby" 
        subtitle="Introduction, Immediate Value, and Why Trust the $Gabby Team"
      />
      
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Introduction to $Gabby */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction to $Gabby</h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-gabby mb-4">The Untapped Potential of DeFi-Enabled Conversational AI</h3>
                <p>
                  The convergence of Artificial Intelligence (AI) and Decentralized Finance (DeFi) has revolutionized 
                  digital interactions. Conversational AI evolved from basic virtual assistants to powerful, 
                  intelligence-driven platforms, yet secure, transparent monetization remained an unsolved challenge. 
                  $Gabby answers this call by leveraging blockchain's inherent security to provide verifiable, 
                  high-value conversations.
                </p>
              </div>
            </div>

            {/* Why $Gabby is Essential */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why $Gabby is Essential (Market Today)</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Today's conversational AI solutions face critical limitations:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Scarcity of Exclusive Information: Genuine insider insights are rare and often inaccessible.</li>
                  <li>Credibility Concerns: Users struggle to verify the authenticity of AI-generated content.</li>
                  <li>Insecure Monetization Methods: Current AI platforms lack decentralized and transparent financial frameworks.</li>
                </ol>
                
                <p>$Gabby solves these by providing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encrypted, blockchain-secured insider information</strong> not available on traditional platforms.</li>
                  <li><strong>Incentivized rumor-sharing</strong> with verified sources + community-driven validation.</li>
                  <li><strong>Granular microtransactions</strong> using the $Gabby token, plus auditable on-chain records.</li>
                </ul>
              </div>
            </div>

            {/* Immediate Value You Receive */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Immediate Value You Receive</h2>
              
              <div className="bg-secondary/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gabby mb-3">Exclusive Insider Information on Demand</h3>
                <p className="font-medium mb-2">The Problem: Users are starved for reliable, exclusive market intelligence and actionable information.</p>
                <p className="font-medium mb-4">$Gabby's Powerful Solution:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access encrypted, blockchain-secured insider information not available through traditional platforms.</li>
                  <li>Leverage incentivized rumor-sharing with verified sources.</li>
                  <li>Engage in a community-driven validation process ensuring only the highest-quality intelligence is distributed.</li>
                </ul>
              </div>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gabby mb-3">Secure, Transparent Web3-Powered Payments</h3>
                <p className="font-medium mb-2">The Problem: Current conversational AI lacks secure, blockchain-backed monetization models.</p>
                <p className="font-medium mb-4">$Gabby's Comprehensive Solution:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seamlessly conduct microtransactions using $Gabby tokens, allowing granular monetization.</li>
                  <li>Maintain transparent and auditable transaction records, bolstering user confidence.</li>
                  <li>Benefit from token staking, liquidity rewards, and active participation incentives that align user and community interests.</li>
                </ul>
              </div>
            </div>

            {/* Why Trust the $Gabby Team? */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Trust the $Gabby Team?</h2>
              <div className="prose prose-lg max-w-none">
                <blockquote className="border-l-4 border-gabby pl-4 italic">
                  "The $Gabby platform is brought to you by the core creators behind the highly reputable Eliza V2 project, 
                  renowned within the AI and web3 community. Our extensive track record includes successful launches, 
                  community trust, and proven technical expertise that ensures $Gabby's long-term success."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
