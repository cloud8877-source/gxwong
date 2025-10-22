import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col items-start text-left h-full">
    <div className="mb-4 bg-cyan-50 text-cyan-500 rounded-lg p-3">
        {service.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
    <ul className="space-y-2 text-slate-600 list-disc list-inside flex-grow">
      {service.description.map((point, index) => (
        <li key={index} className="leading-relaxed">{point}</li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Expertise</h2>
          <p className="text-slate-600 mt-3 text-lg">Comprehensive solutions to secure your legacy and protect your loved ones.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;