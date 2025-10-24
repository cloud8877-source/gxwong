import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CtaSection: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.ctaSection.headline}
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              {t.ctaSection.subtext}
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={t.ctaSection.buttonLink}
              onClick={(e) => handleScrollClick(e, t.ctaSection.buttonLink)}
              className="inline-flex rounded-full text-center group items-center justify-center bg-amber-400 text-slate-900 transition-colors sm:w-auto py-3 px-8 text-base font-semibold hover:bg-amber-500"
            >
              {t.ctaSection.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;