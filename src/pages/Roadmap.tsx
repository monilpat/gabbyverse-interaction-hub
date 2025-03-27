import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { SectionHeading } from '@/components/ui/custom/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Users,
  Database,
  Calendar,
  BarChart4,
  Building2
} from 'lucide-react';

const Roadmap = () => {
  const whyNowReasons = [
    {
      icon: <Database className="h-6 w-6 text-gabby" />,
      title: "Agent-Based AI is Reaching Maturity",
      description: "Advanced conversational AI systems are now powerful enough to provide consistent, valuable interactions that users are willing to pay for."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-gabby" />,
      title: "Explosion of Monetized Access Models",
      description: "Growing ecosystem of paid interactions (Cameo, MentorCruise) and cryptonative social tokens (friend.tech) proves market demand."
    },
    {
      icon: <Building2 className="h-6 w-6 text-gabby" />,
      title: "Web3 Infrastructure & Culture is Ready",
      description: "BNB Chain microtransactions, wallet adoption, and DeFi literacy have reached critical mass for a project like Gabby."
    },
    {
      icon: <Clock className="h-6 w-6 text-gabby" />,
      title: "Tech Convergence (2025 Sweet Spot)",
      description: "The intersection of AI capabilities, web3 infrastructure, and monetized conversation models creates a unique opportunity."
    },
    {
      icon: <Zap className="h-6 w-6 text-gabby" />,
      title: "First Mover in Per-Message Monetization",
      description: "No existing platform offers true pay-per-message with an AI agent—a huge gap Gabby fills."
    },
    {
      icon: <Users className="h-6 w-6 text-gabby" />,
      title: "User Fatigue with Existing Platforms",
      description: "Growing dissatisfaction with centralized AI models and limited earning opportunities creates demand for Gabby's approach."
    }
  ];

  const roadmapPhases = [
    {
      phase: "Q2 2025 – Launch & Beta",
      items: [
        "Gabby Beta Launch on BNB Chain mainnet",
        "Core token utilities (pay-per-message, session payments)",
        "Initial token distribution, community building",
        "Basic staking mechanisms and reward structure"
      ],
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-700"
    },
    {
      phase: "Q3 2025 – Feature Expansion",
      items: [
        "Video Calls & Avatars",
        "Rumor Mill Implementation",
        "Second Agent Introduction (e.g., Gabe)",
        "Mobile App Alpha"
      ],
      color: "bg-purple-100 border-purple-300",
      textColor: "text-purple-700"
    },
    {
      phase: "Q4 2025 – Monetization & Network Growth",
      items: [
        "Staking Tiers & Governance v1",
        "Agent Marketplace Prototype",
        "Partnerships (time.fun, friend.tech synergy)",
        "Key Metrics Goal: 10,000 active users, 100,000 paid messages"
      ],
      color: "bg-green-100 border-green-300",
      textColor: "text-green-700"
    },
    {
      phase: "2026 – Ecosystem & Scale",
      items: [
        'Additional Agents ("AgentVerse")',
        "Cross-Agent Rumor Staking Game",
        "AI Model Upgrades, Globalization",
        "Enterprise partnerships and API access"
      ],
      color: "bg-amber-100 border-amber-300",
      textColor: "text-amber-700"
    },
    {
      phase: "2027+ – Full Decentralization",
      items: [
        "Community-Driven Agents",
        "DAO Governance",
        "Enterprise Integrations",
        "Full Decentralized Agent Network"
      ],
      color: "bg-red-100 border-red-300",
      textColor: "text-red-700"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Roadmap & Why Now" 
        subtitle="Our development timeline and market opportunity"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <SectionHeading
          title="Why Now?"
          subtitle="The timing is perfect for a Web3-native AI platform like Gabby"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {whyNowReasons.map((reason, index) => (
            <Card key={index} className="bg-white border border-border">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <SectionHeading
          title="Future Roadmap"
          subtitle="Our multi-phase development plan from launch to full ecosystem"
          className="mt-16"
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-secondary md:left-1/2 md:-ml-0.5"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-5 w-8 h-8 rounded-full border-4 z-10 ${index % 2 === 0 ? 'bg-white border-gabby md:left-1/2 md:-ml-4' : 'bg-white border-gabby md:left-1/2 md:-ml-4'}`}></div>
                
                {/* Content */}
                <div className={`ml-16 md:w-5/12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`p-4 rounded-lg border ${phase.color}`}>
                    <h3 className={`text-xl font-bold mb-4 ${phase.textColor}`}>{phase.phase}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <ArrowRight className={`h-4 w-4 mt-1 ${phase.textColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 glass rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Join Us on This Journey</h3>
              <p className="text-lg text-muted-foreground mb-4">
                As we build the future of AI-powered conversations and Web3 monetization, we invite you to be part of this revolutionary platform from the ground up.
              </p>
              <p className="text-lg text-muted-foreground">
                The $Gabby token will be at the center of this ecosystem, powering every interaction and rewarding both users and contributors.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="p-6 rounded-full bg-gabby/10 animate-pulse">
                <Calendar className="h-16 w-16 text-gabby" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
