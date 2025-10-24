import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { FAQItem as FAQItemType } from '../types';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const FAQItem: React.FC<{
  item: FAQItemType;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-green-200/50">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-green-900">{item.question}</span>
        <svg
          className={cn(
            'w-6 h-6 text-green-700 transition-transform duration-300',
            isOpen ? 'transform rotate-180' : ''
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-5 pr-10">
          <p className="text-stone-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.faq.title}</h2>
          <p className="text-stone-600 mt-3 text-lg">{t.faq.subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {t.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;