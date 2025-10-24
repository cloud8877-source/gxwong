import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// --- Local Icon Definitions for Robustness ---
const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.75M9 12l2.25 2.25L15 9" />
    </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Icon Mapper ---
const iconMap: { [key: string]: React.ReactElement } = {
    document: <DocumentTextIcon className="w-10 h-10" />,
    shield: <ShieldCheckIcon className="w-10 h-10" />,
    heart: <HeartIcon className="w-10 h-10" />,
};
  
const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.services.title}</h2>
                    <p className="text-stone-600 mt-3 text-lg">{t.services.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => (
                        <div key={index} className="h-full bg-green-50/30 border border-green-200/50 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-300/50">
                            <div className="p-8 h-full">
                                <div className="text-green-700 mb-6">
                                    {iconMap[service.icon] || null}
                                </div>
                                <h3 className="text-xl font-bold text-green-900 mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.description.map((desc, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircleIcon className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-stone-600">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;