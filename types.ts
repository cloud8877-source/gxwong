import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: 'featured' | 'default' }[];
  stats: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string; }[];
  avatarGradient: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AboutContent {
    title: string;
    paragraphs: string[];
    quote: string;
    image: string;
}
