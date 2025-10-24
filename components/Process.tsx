import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const features = t.process.steps;
  const autoPlayInterval = 5000;

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [features.length, autoPlayInterval]);

  return (
    <section id="process" className="py-20 md:py-28 bg-green-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.process.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => setCurrentFeature(index)}
              >
                <div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-green-600 border-green-700 text-white scale-110"
                      : "bg-white border-slate-300 text-slate-500",
                  )}
                >
                  {index <= currentFeature ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  ) : (
                    <span className="text-xl font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className={cn("transition-opacity duration-300", index === currentFeature ? 'opacity-100' : 'opacity-60 hover:opacity-100')}>
                  <h3 className="text-xl md:text-2xl font-bold text-green-900">{feature.title}</h3>
                  <p className="text-md text-slate-600 mt-1">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="order-1 md:order-2 relative h-[300px] md:h-[450px] overflow-hidden"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-500 ease-in-out",
                  index === currentFeature ? "opacity-100 transform-none" : "opacity-0 transform translate-y-10"
                )}
                style={{ zIndex: index === currentFeature ? 1 : 0 }}
              >
                 <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    loading="lazy"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
