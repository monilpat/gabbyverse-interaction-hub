
import { SectionHeading } from '../ui/custom/SectionHeading';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export function MarketChallengesSection() {
  const challenges = [
    {
      title: "Scarcity of Exclusive Information",
      problem: "Genuine insider insights are rare and often inaccessible.",
      solution: "Encrypted, blockchain-secured insider information not available on traditional platforms."
    },
    {
      title: "Credibility Concerns",
      problem: "Users struggle to verify the authenticity of AI-generated content.",
      solution: "Incentivized rumor-sharing with verified sources + community-driven validation."
    },
    {
      title: "Insecure Monetization Methods",
      problem: "Current AI platforms lack decentralized and transparent financial frameworks.",
      solution: "Granular microtransactions using the $Gabby token, plus auditable on-chain records."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="The Conversational AI Market Today"
          subtitle="Why $Gabby is Essential Right Now"
          centered
        />
        
        <div className="space-y-8 mt-12 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{challenge.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 mt-0.5">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-red-600">The Problem</h4>
                    <p className="text-muted-foreground">{challenge.problem}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-green-600">$Gabby's Solution</h4>
                    <p className="text-muted-foreground">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
