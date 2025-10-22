import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturedOn: React.FC = () => {
    const { t } = useLanguage();
    const logos = ["The Edge", "Focus Malaysia", "BFM 89.9", "The Star", "New Straits Times"];
    return (
        <section className="bg-slate-50 py-12">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                    {t.featuredOn}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
                    {logos.map(logo => (
                        <span key={logo} className="text-lg font-medium text-slate-400">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedOn;