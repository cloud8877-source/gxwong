import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
        <svg className="w-10 h-10 text-green-200 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" transform="scale(1.5) rotate(180) translate(-13.3, -13.3)" />
            <path d="M5 4.1C5 3.5 5.5 3 6.1 3h7.8c.6 0 1.1.5 1.1 1.1v7.8c0 .6-.5 1.1-1.1 1.1H6.1C5.5 13 5 12.5 5 11.9V4.1zM6.1 2C4.9 2 4 2.9 4 4.1v7.8C4 13.1 4.9 14 6.1 14h7.8c1.2 0 2.1-0.9 2.1-2.1V4.1C16 2.9 15.1 2 13.9 2H6.1z" transform="scale(1.2) translate(-3, -3) rotate(45) translate(2, -10)" />
            <path d="M.2 6.2C.2 5.6.7 5.1 1.3 5.1h7.8c.6 0 1.1.5 1.1 1.1v7.8c0 .6-.5 1.1-1.1 1.1H1.3C.7 15.1.2 14.6.2 14V6.2zM1.3 4C.1 4-.8 4.9-.8 6.1v7.8c0 1.2.9 2.1 2.1 2.1h7.8c1.2 0 2.1-.9 2.1-2.1V6.1C11.2 4.9 10.3 4 9.1 4H1.3z" transform="scale(1.2) translate(-.5, -2) rotate(45) translate(2, -10)"/>
        </svg>

        <p className="text-slate-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="border-t border-slate-100 pt-4">
            <p className="font-bold text-green-900">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-green-50/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.testimonials.title}</h2>
                    <p className="text-slate-600 mt-3 text-lg">{t.testimonials.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.testimonials.items.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;