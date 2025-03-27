
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { SectionHeading } from '@/components/ui/custom/SectionHeading';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CompetitiveAnalysis = () => {
  const platforms = [
    {
      name: "Cameo",
      category: "Web2 Paid Celebrity",
      strengths: "Strong brand recognition; Proven celebrity-fan monetization model; High-profile talent roster",
      weaknesses: "Limited by human availability; High per-interaction cost; No continuity or ongoing engagement",
      opportunities: "Could expand to more business-oriented use cases; Potential for token model; Integration with NFTs",
      threats: "Novelty might wear off; Emerging AI celebrity clones; Web3 alternatives offering better economics"
    },
    {
      name: "MentorCruise",
      category: "Web2 Mentorship Marketplace",
      strengths: "Quality professional network; Proven recurring revenue model; Clear value proposition",
      weaknesses: "High barrier to entry (cost); Limited by mentor time; No token/ownership aspects",
      opportunities: "Adding AI-assisted mentorship options; Tokenized mentor equity; Community pools",
      threats: "Growing competition in professional learning; AI mentors replacing humans; Web3 platforms offering token incentives"
    },
    {
      name: "friend.tech",
      category: "Web3 SocialFi",
      strengths: "Novel tokenization model; Strong network effects; Easy to understand bonding curve mechanics",
      weaknesses: "Dependent on influencer activity; Purely speculative value; High volatility",
      opportunities: "Expand to more utility beyond chat; Decentralized governance; Cross-platform integration",
      threats: "Regulatory concerns; Loss of user interest; Competing protocols with more utility"
    },
    {
      name: "Character.AI",
      category: "AI-native Consumer",
      strengths: "Massive user base; High engagement metrics; Strong AI character creation tools",
      weaknesses: "Limited monetization options; No user ownership; Centralized control",
      opportunities: "Creator monetization features; Integration with Web3; Premium character marketplaces",
      threats: "Open-source alternatives; Content moderation challenges; User privacy concerns"
    },
    {
      name: "Delphi.ai",
      category: "AI Clone Platform",
      strengths: "Specialized AI clone technology; Multiple monetization options; Established expert network",
      weaknesses: "Dependency on quality of training data; Centralized platform control; No secondary markets",
      opportunities: "Web3 integration for ownership; Creator token economies; Cross-platform presence",
      threats: "Ethical concerns over AI representation; Technical barriers to quality; Regulatory challenges"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Competitive Analysis" 
        subtitle="Comprehensive analysis of existing platforms and market opportunities"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <SectionHeading
          title="Platform Comparison"
          subtitle="A detailed SWOT analysis of key competitors in the conversational AI and tokenized interaction space"
        />

        <div className="overflow-x-auto mt-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary/70">
                <th className="p-3 text-left">Platform</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Interaction Model</th>
                <th className="p-3 text-left">Monetization</th>
                <th className="p-3 text-left">Tokenization</th>
                <th className="p-3 text-left">Key Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3">Cameo</td>
                <td className="p-3">Web2 Paid Celebrity</td>
                <td className="p-3">Asynchronous video messages with celebrities</td>
                <td className="p-3">One-off payment per video; platform takes ~25% cut</td>
                <td className="p-3">None (fiat payments only)</td>
                <td className="p-3">Not scalable (human fulfillment); novelty fading; no micro-interactions</td>
              </tr>
              <tr className="border-b border-border bg-secondary/20">
                <td className="p-3">MentorCruise</td>
                <td className="p-3">Web2 Mentorship</td>
                <td className="p-3">Ongoing 1:1 mentorship via chat/video calls</td>
                <td className="p-3">Monthly subscriptions ($200–$400/mo)</td>
                <td className="p-3">None (fiat payments)</td>
                <td className="p-3">Limited by mentor availability; cannot scale beyond small mentee loads</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">friend.tech</td>
                <td className="p-3">Web3 SocialFi</td>
                <td className="p-3">Private chat with influencers (manual texting)</td>
                <td className="p-3">Purchase of "keys" (social tokens) to join chat</td>
                <td className="p-3">Keys trade on bonding curve; highly speculative market value</td>
                <td className="p-3">Human influencer must engage; no guarantee of responses</td>
              </tr>
              <tr className="border-b border-border bg-secondary/20">
                <td className="p-3">Character.AI</td>
                <td className="p-3">AI-native Consumer</td>
                <td className="p-3">Chat with AI characters (text, some voice)</td>
                <td className="p-3">Freemium: free with limits; ~$10/mo subscription</td>
                <td className="p-3">None (closed platform)</td>
                <td className="p-3">No user monetization or ownership; content moderation limits</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Delphi.ai</td>
                <td className="p-3">AI Clone Platform</td>
                <td className="p-3">AI "clones" of real people chatting with fans</td>
                <td className="p-3">Creators charge per message, per minute, or monthly</td>
                <td className="p-3">None (Web2 payments)</td>
                <td className="p-3">Platform-dependent; no secondary market for access</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SectionHeading
          title="SWOT Analysis"
          subtitle="Strengths, Weaknesses, Opportunities and Threats of key competitors"
          className="mt-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-secondary/30">
                <CardTitle>{platform.name}</CardTitle>
                <CardDescription>{platform.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-600 mb-1">Strengths</h4>
                    <p className="text-sm text-muted-foreground">{platform.strengths}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-red-600 mb-1">Weaknesses</h4>
                    <p className="text-sm text-muted-foreground">{platform.weaknesses}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-600 mb-1">Opportunities</h4>
                    <p className="text-sm text-muted-foreground">{platform.opportunities}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-amber-600 mb-1">Threats</h4>
                    <p className="text-sm text-muted-foreground">{platform.threats}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gabby/10 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Market Gap Analysis</h3>
          <p className="text-lg mb-4">
            Across these analyses, a recurring observation is that no existing solution combines the 
            scalability and consistency of AI with the granular monetization and ownership of Web3.
          </p>
          <p className="text-lg font-medium text-gabby">
            $Gabby aims to fill that gap by providing:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
              <p>AI-powered conversations without human availability constraints</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
              <p>True microtransactions through token-based pay-per-message and pay-per-task models</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
              <p>Decentralized ownership models through the $GABBY token</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
              <p>Exclusive information with community validation mechanisms</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitiveAnalysis;
