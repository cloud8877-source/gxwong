import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// This icon component is defined locally as it is not exported from content.ts and new files cannot be added.
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
  
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
                                    {service.icon}
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