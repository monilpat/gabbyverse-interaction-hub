
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-gabby mb-4 reveal-delay-100">
              The Future of AI Interaction
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight reveal-delay-200">
              <span>Unlock Exclusive AI Insights and </span>
              <span className="text-gradient">Monetize Conversations</span>
              <span> with $GABBY</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl reveal-delay-300">
              $Gabby is transforming conversational AI by uniquely combining blockchain technology 
              with monetized interactions, providing exclusive access to actionable insider intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal-delay-400">
              <Link to="/tokenomics" className="btn-primary flex items-center justify-center gap-2">
                Get $GABBY Tokens
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Hero image/animation */}
          <div className="lg:w-1/2 reveal-delay-500">
            <div className="relative w-full h-[480px]">
              {/* Purple gradient blob in background */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gabby/20 filter blur-3xl animate-pulse-light"></div>
              
              {/* Main illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="glass rounded-2xl p-6 shadow-xl w-full max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gabby flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <h3 className="font-bold">Gabby AI</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-secondary rounded-lg p-3 ml-auto max-w-[80%]">
                      <p className="text-sm">I'm interested in learning about new DeFi projects. Any insider info?</p>
                    </div>
                    
                    <div className="bg-gabby/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">I can share exclusive insights for 10 $GABBY tokens. Would you like to proceed?</p>
                    </div>
                    
                    <div className="bg-secondary rounded-lg p-3 ml-auto max-w-[80%]">
                      <p className="text-sm">Yes, please share the insights.</p>
                    </div>
                    
                    <div className="bg-gabby/10 rounded-lg p-3 max-w-[80%]">
                      <div className="text-sm mb-2">
                        <span className="font-medium block">Payment received: 10 $GABBY</span>
                        <span className="text-xs text-muted-foreground">Transaction verified on BNB Chain</span>
                      </div>
                      <p className="text-sm">According to my sources, Project X is planning to launch a major update next week that will include...</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border flex">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="w-full bg-transparent text-sm focus:outline-none"
                      disabled
                    />
                    <button className="text-gabby opacity-50 cursor-not-allowed">Send</button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-20 right-12 glass rounded-xl p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gabby"></div>
                  <span className="text-sm font-medium">$GABBY Token</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-6 glass rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <span className="text-xs">Verified Rumor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
