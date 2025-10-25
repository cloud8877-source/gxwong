export interface TestimonialStat {
  icon: string;
  text: string;
}

export interface TestimonialTag {
  type: 'featured' | 'default';
  text: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarGradient: string;
  quote: string;
  tags: TestimonialTag[];
  stats: TestimonialStat[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface ProcessStep {
  title: string;
  content: string;
  image: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface AboutContent {
    title: string;
    profilePictureUrl: string;
    paragraphs: string[];
    quote: string;
}

export interface CtaSectionContent {
    headline: string;
    subtext: string;
    buttonText: string;
    buttonLink: string;
}