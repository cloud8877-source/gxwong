import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const imageUrl = "https://i.imgur.com/5y0vnNL.jpeg";

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-green-100">
                <img
                src={imageUrl}
                alt="Professional headshot of the estate planner, framed to focus on the face."
                className="w-full h-full object-cover object-top"
                />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 tracking-tight">{t.about.title}</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.p2}
            </p>
            <div className="border-l-4 border-red-600 pl-4 py-2">
                <p className="text-slate-700 font-medium italic">{t.about.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;