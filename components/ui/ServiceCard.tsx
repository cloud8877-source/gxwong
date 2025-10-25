import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, points }) => {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-slate-800 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-base text-slate-400 leading-relaxed mb-6">{description}</p>
      </div>
      <ul className="space-y-3 flex-grow">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 mr-3 mt-1 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className="text-base text-slate-300">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;