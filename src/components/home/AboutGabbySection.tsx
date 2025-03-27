
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/custom/SectionHeading';

export function AboutGabbySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Introduction to $Gabby"
              subtitle="The Untapped Potential of DeFi-Enabled Conversational AI"
            />
            
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="text-muted-foreground">
                The convergence of Artificial Intelligence (AI) and Decentralized Finance (DeFi) has revolutionized 
                digital interactions. Conversational AI evolved from basic virtual assistants to powerful, 
                intelligence-driven platforms, yet secure, transparent monetization remained an unsolved challenge.
              </p>
              
              <p className="text-muted-foreground">
                $Gabby answers this call by leveraging blockchain's inherent security to provide verifiable, 
                high-value conversations with exclusive insights not available through traditional platforms.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/about"
                  className="inline-flex items-center text-gabby font-medium hover:underline"
                >
                  Learn more about Gabby
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Background gradients */}
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gabby/10 filter blur-3xl"></div>
              
              {/* Card with quote */}
              <div className="relative glass rounded-2xl p-8 shadow-lg border border-gabby/20">
                <svg className="h-10 w-10 text-gabby/30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-lg mb-6">
                  The $Gabby platform is brought to you by the core creators behind the highly reputable Eliza V2 project, 
                  renowned within the AI and web3 community. Our extensive track record includes successful launches, 
                  community trust, and proven technical expertise that ensures $Gabby's long-term success.
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gabby/20 flex items-center justify-center text-gabby font-bold">
                    G
                  </div>
                  <div>
                    <h4 className="font-bold">Gabby Team</h4>
                    <p className="text-sm text-muted-foreground">Why Trust the $Gabby Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
