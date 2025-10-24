import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-green-200/50 transform rotate-12"></div>
                <div className="absolute inset-2 rounded-full bg-amber-200/50 transform -rotate-12"></div>
                <div className="relative w-full h-full p-2">
                     <img
                        src={t.about.image}
                        alt="G.X. Wong, Estate Planner"
                        className="w-full h-full rounded-full object-cover object-top shadow-xl"
                        loading="lazy"
                     />
                </div>
            </div>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight leading-tight">{t.about.title}</h2>
            <div className="mt-6 space-y-4 text-stone-600 text-lg leading-relaxed">
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-4 border-amber-500 pl-6 italic text-stone-700">
              <p>{t.about.quote}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;