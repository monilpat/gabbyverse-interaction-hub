
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GabbyGradientCardProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
}

export function GabbyGradientCard({ 
  children, 
  className, 
  animationDelay = 0 
}: GabbyGradientCardProps) {
  const delayStyle = {
    animationDelay: `${animationDelay}ms`
  };
  
  return (
    <div 
      className={cn(
        'relative rounded-2xl overflow-hidden p-px opacity-0 animate-fade-in',
        className
      )}
      style={delayStyle}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 gradient-gabby opacity-70"></div>
      
      {/* Card content with glass effect */}
      <div className="relative h-full glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px]">
        {children}
      </div>
    </div>
  );
}
