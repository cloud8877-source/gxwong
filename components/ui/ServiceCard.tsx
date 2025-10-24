import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-slate-800 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;