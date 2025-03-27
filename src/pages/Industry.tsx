
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Industry = () => {
  return (
    <Layout>
      <PageHeader 
        title="Industry Overview" 
        subtitle="Exploring Web2, Web3, and AI-native conversation platforms"
      />
      
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Tabs defaultValue="web2" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="web2">Web2 Platforms</TabsTrigger>
              <TabsTrigger value="web3">Web3 Social</TabsTrigger>
              <TabsTrigger value="ai">AI-Native</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web2" className="mt-6">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Cameo</h3>
                  <p className="text-muted-foreground mb-4">
                    A marketplace where fans pay celebrities for personalized video shoutouts and messages. 
                    The platform connects users with actors, athletes, musicians, and other public figures 
                    willing to create custom videos for a fee.
                  </p>
                  <p className="text-muted-foreground">
                    Users submit requests detailing what they'd like the celebrity to say, the occasion, 
                    and any other special instructions. After payment, the celebrity records a short video 
                    fulfilling the request, which is then delivered to the customer.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">MentorCruise</h3>
                  <p className="text-muted-foreground mb-4">
                    A professional mentorship platform connecting mentees with expert mentors in various fields,
                    particularly technology, business, and creative industries. The service provides ongoing
                    1:1 mentorship through chat, email, and video calls.
                  </p>
                  <p className="text-muted-foreground">
                    Mentees pay a monthly subscription fee to access their chosen mentor's expertise, guidance,
                    and feedback on their projects or career development. Mentors set their own rates and
                    availability, and the platform handles the payments and scheduling.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Intro.co</h3>
                  <p className="text-muted-foreground mb-4">
                    A platform that facilitates live 1:1 video calls with experts or celebrities. Users can
                    book time slots with professionals in various fields for consultation, advice, or simply
                    a conversation.
                  </p>
                  <p className="text-muted-foreground">
                    Sessions typically range from 15 to 60 minutes, with prices varying based on the expert's
                    profile and demand. The platform handles scheduling, payment processing, and video
                    conferencing infrastructure.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="web3" className="mt-6">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">friend.tech</h3>
                  <p className="text-muted-foreground mb-4">
                    A SocialFi app on Base that tokenizes influencers' social presence via 'keys'. Users purchase
                    keys to join private chat rooms with influencers, creators, and thought leaders in the web3 space.
                  </p>
                  <p className="text-muted-foreground">
                    The platform operates on a bonding curve model, where the price of keys increases as more are purchased.
                    A 10% fee is charged on trades, with 5% going to the creator. The value of keys is primarily speculative,
                    based on the perceived value of access to the influencer.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">time.fun</h3>
                  <p className="text-muted-foreground mb-4">
                    A Web3 platform on Solana that tokenizes creators' time. Fans can buy creators' time tokens and spend
                    them for interactions such as text messages, voice calls, or video chats.
                  </p>
                  <p className="text-muted-foreground">
                    Each creator has their own personal token economy, with tokens tradable on decentralized exchanges once they
                    become popular. The system requires creators to honor their commitments for interactions, and users must
                    manage multiple token economies if they want to interact with different creators.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Orb Land</h3>
                  <p className="text-muted-foreground mb-4">
                    An experimental NFT-based approach to monetize personal interactions using Harberger taxes. Users
                    purchase "Orb" NFTs that grant the ability to ask questions or seek consulting from the creator.
                  </p>
                  <p className="text-muted-foreground">
                    Orb holders pay a continuous Harberger tax to the creator, with only one holder allowed at a time.
                    The price is set by the holder under tax pressure, creating a dynamic market for access. However,
                    the model proved too complex and niche, ultimately failing to attract sufficient users.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-6">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Character.AI</h3>
                  <p className="text-muted-foreground mb-4">
                    A popular AI chatbot platform that allows users to chat with user-created characters based on
                    fictional personalities, historical figures, or original creations. The service offers text-based
                    conversations with some voice features.
                  </p>
                  <p className="text-muted-foreground">
                    Character.AI operates on a freemium model, with free usage subject to limits and a subscription
                    option (around $10/month) for faster and unlimited access. The platform is closed, with no user
                    ownership of assets or content.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Auren (Elysian)</h3>
                  <p className="text-muted-foreground mb-4">
                    A newer AI companion app launched in 2025, focusing on providing personal AI friends and coaches
                    through a mobile application with text and voice capabilities.
                  </p>
                  <p className="text-muted-foreground">
                    Auren is a paid app with a subscription cost of approximately $20/month and no free tier. While
                    the AI scaling is robust, the high monthly cost creates adoption barriers. The platform lacks
                    community or content sharing features.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Xiaoice</h3>
                  <p className="text-muted-foreground mb-4">
                    Originally developed by Microsoft in China, Xiaoice is one of the longest-running AI conversation
                    agents. It operates across multiple platforms with text and voice capabilities, emphasizing
                    emotional engagement.
                  </p>
                  <p className="text-muted-foreground">
                    Xiaoice is largely free for users, with monetization occurring indirectly through B2B services
                    and content. The platform faces challenges in directly monetizing its huge user base and provides
                    no user ownership. Its operations are also market-specific, primarily focused on China.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Delphi.ai</h3>
                  <p className="text-muted-foreground mb-4">
                    A platform enabling experts and creators to create AI clones of themselves for chatting with
                    fans and users. These digital replicas maintain the personality and knowledge of their human
                    counterparts.
                  </p>
                  <p className="text-muted-foreground">
                    Creators can charge per message, per minute, or through monthly memberships using fiat currency.
                    The platform is centralized, with no secondary market for access. The quality of interactions
                    varies significantly based on the training of each clone.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-secondary/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Market Trends & Challenges Summary</h2>
            <p className="text-muted-foreground mb-4">
              Across all analyzed platforms, several clear trends and challenges emerge:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web2 platforms struggle with scalability due to human fulfillment requirements</li>
              <li>Web3 social platforms introduce tokenization but rely heavily on speculation</li>
              <li>AI-native platforms solve scalability but lack transparent monetization</li>
              <li>No current solution successfully combines AI scalability with Web3 ownership and incentives</li>
            </ul>
            <p className="mt-4 font-medium">
              $Gabby aims to bridge this gap by offering the best of both worlds: AI-powered scalability with 
              Web3-enabled ownership, transparency, and incentive alignment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industry;
