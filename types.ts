import React from 'react';

export interface Service {
  icon: string; // Changed from React.ReactNode
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
  stats: { icon: string; text: string; }[]; // Changed from ComponentType
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