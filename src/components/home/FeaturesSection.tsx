
import { Shield, Zap, Sparkles, Users } from 'lucide-react';
import { SectionHeading } from '../ui/custom/SectionHeading';
import { GabbyGradientCard } from '../ui/custom/GabbyGradientCard';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <GabbyGradientCard animationDelay={delay}>
      <div className="h-12 w-12 rounded-lg bg-gabby/10 flex items-center justify-center text-gabby mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GabbyGradientCard>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure, Transparent Web3 Payments",
      description: "Every message or interaction can be trustlessly settled using the $GABBY token on BNB Chain.",
      delay: 100
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Insider Information on Demand",
      description: "Get exclusive rumors, insights, and AI-curated data behind a token paywall.",
      delay: 200
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Granular Monetization",
      description: "Pay-per-message, pay-for-time, or pay-for-task — no outdated subscription model.",
      delay: 300
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community-Driven Validation",
      description: "Earn from actively sharing or verifying rumor content in the ecosystem.",
      delay: 400
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Why It Matters"
          subtitle="The convergence of Artificial Intelligence and Decentralized Finance has revolutionized digital interactions. $Gabby answers the call for secure, transparent monetization in the AI space."
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
