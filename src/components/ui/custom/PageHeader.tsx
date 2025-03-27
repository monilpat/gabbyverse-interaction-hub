
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: string;
}

export function PageHeader({ title, subtitle, background = "bg-secondary/50" }: PageHeaderProps) {
  return (
    <div className={`py-16 ${background}`}>
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
}
