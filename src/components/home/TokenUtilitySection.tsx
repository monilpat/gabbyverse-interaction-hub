
import { MessageSquare, Clock, FileCheck, LockKeyhole } from 'lucide-react';
import { SectionHeading } from '../ui/custom/SectionHeading';

export function TokenUtilitySection() {
  const utilityItems = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Pay-Per-Message",
      description: "A flagship feature that sets Gabby apart with true per-message microtransactions with an AI agent."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Pay-For-Time",
      description: "Book timed sessions with Gabby – akin to booking a human consultant, with secure smart contract escrow."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Pay-For-Task/Deliverables",
      description: "Pay Gabby for completing specific tasks or producing deliverables with outcome-oriented pricing."
    },
    {
      icon: <LockKeyhole className="h-6 w-6" />,
      title: "Pay-For-Rumor",
      description: "Access token-gated rumors, secrets, or exclusive insights for a fixed price in $GABBY tokens."
    }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="$GABBY Token Utility"
          subtitle="$GABBY offers diverse monetization models for flexible AI interactions"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {utilityItems.map((item, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-gabby/10 flex items-center justify-center text-gabby mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Staking Tiers */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/30 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Staking Tiers for Special Features</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Bronze", amount: "1,000", color: "from-amber-600 to-amber-800" },
              { name: "Silver", amount: "10,000", color: "from-gray-400 to-gray-600" },
              { name: "Gold", amount: "100,000", color: "from-yellow-400 to-yellow-600" },
              { name: "Whale", amount: "1,000,000", color: "from-blue-500 to-blue-700" }
            ].map((tier, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden"
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
      </div>
    </section>
  );
}
