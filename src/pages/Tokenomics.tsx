
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tokenomics = () => {
  return (
    <Layout>
      <PageHeader 
        title="Tokenomics" 
        subtitle="Supply, allocation, emissions, and token flow for $GABBY"
      />
      
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Token Supply & Allocation */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Token Supply & Allocation</h2>
              
              <div className="bg-secondary/20 rounded-xl p-6 mb-8">
                <p className="text-xl font-bold mb-4">Total Supply: 1,000,000,000 $Gabby</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Community & Staking Rewards", percent: "40%", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                    { name: "Liquidity and Market Making", percent: "20%", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                    { name: "Team and Development", percent: "20%", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
                    { name: "Partnerships & Ecosystem Growth", percent: "10%", color: "bg-gradient-to-r from-green-500 to-green-600" },
                    { name: "Advisors & Early Backers", percent: "5%", color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
                    { name: "Treasury & Future AI Research", percent: "5%", color: "bg-gradient-to-r from-red-500 to-red-600" }
                  ].map((allocation, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-3 h-12 rounded-full ${allocation.color}`}></div>
                      <div>
                        <p className="font-medium">{allocation.name}</p>
                        <p className="text-xl font-bold">{allocation.percent}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emissions & Burns */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Emissions & Burns</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Deflationary Mechanism</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Part of each transaction is burned or distributed to stakers, ensuring a deflationary aspect to the
                    token economics. This creates a direct correlation between platform usage and token flow that users
                    can observe in real-time.
                  </p>
                  <p className="text-muted-foreground">
                    As adoption increases, the burn mechanism is designed to reduce circulating supply while usage raises demand,
                    creating natural price appreciation pressure for long-term participants.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Treasury & Reserve */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Treasury & Reserve</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Sustainable Development Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A multi-signature wallet or DAO-controlled treasury will eventually fund ongoing operations, pay
                    developers, support marketing initiatives, and sponsor community events. This ensures the platform's
                    long-term sustainability and continuous development without requiring additional fundraising rounds.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Example Token Flows */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Example Token Flows</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="font-medium text-lg mb-2">User sends a message</h3>
                  <p className="text-muted-foreground">
                    0.1 $GABBY might be deducted from the user's wallet. Of this amount, 0.03 $GABBY is burned
                    (removing it from circulation permanently), and 0.07 $GABBY is deposited to the treasury.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="font-medium text-lg mb-2">User starts voice call</h3>
                  <p className="text-muted-foreground">
                    When a user initiates a voice session, the session manager smart contract locks a predetermined
                    amount of tokens. Upon successful completion, these tokens are distributed according to the
                    platform's fee structure.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="font-medium text-lg mb-2">Staking</h3>
                  <p className="text-muted-foreground">
                    Users lock tokens in the staking contract, potentially receiving an NFT representing their tier
                    level. These staked tokens are removed from circulation during the staking period, further
                    reducing available supply.
                  </p>
                </div>
              </div>
            </div>
            
            {/* How to Acquire $GABBY */}
            <div>
              <h2 className="text-2xl font-bold mb-6">How to Acquire $GABBY</h2>
              <div className="bg-gabby/10 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Participate in our exclusive launch event</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  The $GABBY token will be available during our initial launch event, followed by listings on selected
                  decentralized exchanges. A potential airdrop or fair launch scenario may also be implemented to ensure
                  wide distribution.
                </p>
                <Link 
                  to="/dashboard" 
                  className="inline-flex items-center text-gabby font-medium hover:underline"
                >
                  Join the waitlist for token launch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tokenomics;
