import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative aspect-square">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 -rotate-45"></div>
                 <div className="absolute inset-2 rounded-full bg-slate-900 p-2">
                    <img
                      src={t.about.profilePictureUrl}
                      alt="Garry Wong, Estate Planner in Malaysia"
                      className="w-full h-full rounded-full object-cover object-top"
                      loading="lazy"
                    />
                 </div>
              </div>
            </div>
          </div>
          <div className="md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.about.title}</h2>
            <div className="mt-6 space-y-4 text-lg text-slate-400">
                {t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <blockquote className="mt-8 pl-6 border-l-4 border-amber-500 italic text-stone-300">
              <p>{t.about.quote}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;