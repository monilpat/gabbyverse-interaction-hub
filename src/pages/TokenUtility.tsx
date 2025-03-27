
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Clock, FileCheck, LockKeyhole, Users, Sparkles } from 'lucide-react';

const TokenUtility = () => {
  return (
    <Layout>
      <PageHeader 
        title="$GABBY Token Utility" 
        subtitle="Explore the diverse monetization models enabled by the $GABBY token"
      />
      
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Pay-Per-Message */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle>Pay-Per-Message</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a flagship feature that sets Gabby apart from competitors. Users pay a very small amount of
                  $GABBY tokens for each message sent to the AI agent, enabling true microtransactions. None of the
                  competitors offer true pay-per-message with an AI agent, making this a unique value proposition.
                </p>
              </CardContent>
            </Card>
            
            {/* Pay-For-Time */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Pay-For-Time (Session-Based)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond per-message payments, users can book timed sessions with Gabby – akin to booking a human consultant.
                  Payment for sessions is handled via a smart contract escrow, ensuring transparent and secure 
                  transactions for both short and extended consultations.
                </p>
              </CardContent>
            </Card>
            
            {/* Pay-For-Task/Deliverables */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby mb-4">
                  <FileCheck className="h-6 w-6" />
                </div>
                <CardTitle>Pay-For-Task/Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Users pay Gabby for completing specific tasks or producing deliverables like reports, analyses, or creative
                  content. This pay-for-deliverable model is outcome-oriented rather than time-based, allowing users
                  to commission exactly what they need.
                </p>
              </CardContent>
            </Card>
            
            {/* Pay-For-Rumor */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby mb-4">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <CardTitle>Pay-For-Rumor (Token-Gated Insights)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gabby can offer rumors, secrets, or exclusive insights for a fixed price in $GABBY tokens. For example:
                  "I have a rumor about an upcoming project... pay 10 $GABBY to unlock this information." This creates
                  a unique token-gated content system for high-value intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Agent-to-Agent Token Interactions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Agent-to-Agent Token Interactions</h2>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Machine Economy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Within the ELIZA V2 framework, multiple AI agents can exist and interact with each other. The $GABBY
                  token enables these interactions between agents, creating a true machine economy where specialized
                  agents can provide services to each other.
                </p>
                <p className="text-muted-foreground">
                  For example, Gabby might pay another agent specialized in data analysis to process complex datasets,
                  using $GABBY tokens as the medium of exchange. This opens up possibilities for a network of
                  interconnected AI agents with economic relationships.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Staking Tiers for Special Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Staking Tiers for Special Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Bronze", amount: "1,000", color: "from-amber-600 to-amber-800" },
                { name: "Silver", amount: "10,000", color: "from-gray-400 to-gray-600" },
                { name: "Gold", amount: "100,000", color: "from-yellow-400 to-yellow-600" },
                { name: "Whale", amount: "1,000,000", color: "from-blue-500 to-blue-700" }
              ].map((tier, index) => (
                <div 
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <div className={`bg-gradient-to-r ${tier.color} p-4 text-white text-center`}>
                    <h4 className="font-bold text-lg">{tier.name}</h4>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Stake</p>
                    <p className="text-xl font-bold text-foreground mb-4">{tier.amount} $GABBY</p>
                    <ul className="text-sm text-left space-y-2">
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gabby mr-2"></span>
                        {index >= 0 && "Access to basic features"}
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gabby mr-2"></span>
                        {index >= 1 ? "Priority responses" : "Standard responses"}
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gabby mr-2"></span>
                        {index >= 2 ? "Exclusive rumors" : "Limited rumors"}
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-gabby mr-2"></span>
                        {index >= 3 ? "Governance voting" : "No governance"}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Speculative & Social Layers */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Speculative & Social Layers</h2>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle>Beyond Pure Utility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  $GABBY isn't just a utility token; it's expected to have a social and memetic life of its own.
                  Trading on exchanges creates speculative value, while "whale" token holders may have significant
                  influence in the ecosystem and governance decisions.
                </p>
                <div className="bg-secondary/30 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold mb-4">Influencer Mode</h3>
                  <p className="text-muted-foreground">
                    Gabby can operate in a special mode where selected individuals can review or augment Gabby's messages,
                    or sign endorsements from their known wallets. This creates a hybrid model where human experts can
                    validate or enhance AI-generated content, further increasing its value and credibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TokenUtility;
