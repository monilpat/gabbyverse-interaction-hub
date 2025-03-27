
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  tag?: keyof JSX.IntrinsicElements;  
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className = '', 
  children,
  tag: Tag = 'h2' 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-10 space-y-2',
      centered && 'text-center',
      className
    )}>
      <Tag className={cn(
        'text-3xl sm:text-4xl font-bold tracking-tight',
        centered && 'mx-auto'
      )}>
        {title}
      </Tag>
      
      {subtitle && (
        <p className={cn(
          'text-muted-foreground text-lg max-w-3xl',
          centered && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}
