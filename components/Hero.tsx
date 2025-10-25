import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { AuroraBackground } from './ui/aurora-background';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    const words = [
        ...t.hero.subtitle.regular.split(' ').map(word => ({ text: word, className: "text-white" })),
        {
          text: t.hero.subtitle.gradient,
          className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500",
        },
    ];
    
    const handleBookingClick = () => {
        const url = 'https://calendar.app.google/4chX2wjD3m5xkovz8';
        const windowName = 'googleCalendarBooking';
        const width = 800;
        const height = 700;
        // Center the popup on the screen
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

        window.open(url, windowName, windowFeatures);
    };


    return (
        <AuroraBackground className="bg-slate-950 dark">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center px-4"
            >
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                     <TypewriterEffectSmooth words={words} className="justify-center" />
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mt-4">
                        {t.hero.description}
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4">
                        <button
                            onClick={handleBookingClick}
                            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-amber-400 text-slate-900 transition-all duration-300 ease-in-out sm:w-auto py-3 px-8 text-base font-semibold hover:bg-amber-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                        >
                            {t.hero.ctaButton}
                        </button>
                    </div>
                </div>
            </motion.div>
        </AuroraBackground>
    );
};

export default Hero;