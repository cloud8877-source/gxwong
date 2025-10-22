import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-green-50/30 rounded-lg p-8 shadow-sm border border-green-200/50 text-left h-full flex flex-col">
      <div className="flex-shrink-0 text-green-700 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-green-900 mb-3">{service.title}</h3>
      <ul className="space-y-2 text-slate-600 list-disc list-inside flex-grow">
        {service.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.services.title}</h2>
          <p className="text-slate-600 mt-3 text-lg">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;