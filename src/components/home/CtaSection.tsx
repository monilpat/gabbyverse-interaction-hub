
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Join the $Gabby Revolution
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Be part of the future of AI-powered conversations and unlock exclusive insights 
            through the most advanced blockchain-secured interaction platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tokenomics" className="btn-primary flex items-center justify-center gap-2">
              Get $GABBY
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/roadmap" className="btn-secondary flex items-center justify-center gap-2">
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
