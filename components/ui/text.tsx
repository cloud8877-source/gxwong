import React from 'react';
import { cn } from '../../lib/utils';

interface TextProps {
  text: string | { regular: string; gradient: string };
  className?: string;
}

export const Text: React.FC<TextProps> = ({ text, className }) => {
  if (typeof text === 'string') {
    return <span className={className}>{text}</span>;
  }

  if (typeof text === 'object' && text !== null && 'regular' in text && 'gradient' in text) {
    return (
      <h1 className={cn("text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center", className)}>
        {text.regular}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
          {text.gradient}
        </span>
      </h1>
    );
  }

  return null;
};
