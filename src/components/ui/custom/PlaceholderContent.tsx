
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderContentProps {
  title: string;
  description?: string;
}

export function PlaceholderContent({ title, description }: PlaceholderContentProps) {
  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground max-w-md mx-auto mb-6">{description}</p>}
      <div className="bg-secondary/20 rounded-xl p-8 max-w-xl mx-auto">
        <p className="text-muted-foreground mb-6">
          This page is currently under development. Please check back soon for more information
          about {title.toLowerCase()}.
        </p>
        <Link to="/" className="inline-flex items-center text-gabby hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
