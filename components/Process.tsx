import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Simple Process</h2>
          <p className="text-slate-600 mt-3 text-lg">We've streamlined estate planning to be as clear and straightforward as possible.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200" aria-hidden="true"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="text-center md:text-left bg-white z-10 p-4">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="flex-shrink-0 bg-cyan-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                        {step.icon}
                    </div>
                    <div>
                        <span className="text-slate-400 font-semibold">STEP {step.step}</span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
