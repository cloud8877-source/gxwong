import React from 'react';
import type { Service, Testimonial, NavLink, ProcessStep } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Will Drafting',
    description: [
        'Ensure your assets are distributed according to your wishes.',
        'Protect your loved ones from future complications.',
        'Minimize potential disputes among heirs.',
        'Appoint legal guardians for your minor children.',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.789-2.756 9.356-1.747 2.567-2.744 4.144-2.744 4.144M12 11c0 3.517.936 6.789 2.686 9.356 1.75 2.567 2.686 4.144 2.686 4.144M12 11v-5a4 4 0 00-4-4H8a4 4 0 00-4 4v5" />
        <path d="M12 11c0 3.517.936 6.789 2.686 9.356 1.75 2.567 2.686 4.144 2.686 4.144M12 11v-5a4 4 0 014-4h.016a4 4 0 014 4v5" />
      </svg>
    ),
    title: 'Trust Setup',
    description: [
        'Manage and protect your assets for your beneficiaries.',
        "Provide for your family's long-term financial security.",
        'Ensure seamless and private wealth transfer.',
        'Potentially reduce estate taxes and avoid probate.',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3.04-8.618z" />
      </svg>
    ),
    title: 'Insurance Review & Trust Setup',
    description: [
        'Maximize the benefits of your life insurance policies.',
        'Ensure proceeds are managed and distributed effectively.',
        "Provide immediate liquidity for your family's needs.",
        'Protect insurance payouts from creditors.',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: '01',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: 'Initial Consultation',
        description: 'We start with a complimentary, no-obligation consultation to understand your unique situation, goals, and concerns.',
    },
    {
        step: '02',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v-5.5m6 5.5v-5.5m0 0V7" />
            </svg>
        ),
        title: 'Strategy & Plan Design',
        description: 'Based on our discussion, we design a customized estate plan and present a clear strategy tailored to your needs.',
    },
    {
        step: '03',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        title: 'Implementation & Review',
        description: 'We draft all necessary documents and guide you through the signing process. We also schedule periodic reviews to ensure your plan remains up-to-date.',
    },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The entire process was handled with such professionalism and care. I feel a great sense of relief knowing my family\'s future is secure. Highly recommended for anyone in Malaysia.',
    name: 'Ahmad bin Abdullah',
    role: 'Business Owner, Kuala Lumpur',
  },
  {
    quote: 'Incredibly knowledgeable and patient. They took the time to explain complex concepts in a simple way, helping us make the best decisions for our estate.',
    name: 'Susan Tan',
    role: 'Retired Teacher, Penang',
  },
  {
    quote: 'Setting up a trust seemed daunting, but their expert guidance made it a smooth and straightforward experience. A truly invaluable service.',
    name: 'Rajesh Kumar',
    role: 'IT Professional, Johor Bahru',
  },
];