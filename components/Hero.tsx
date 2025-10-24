import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { AuroraBackground } from './ui/aurora-background';

const ChevronRightIcon = () => (
    <svg className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


const Hero: React.FC = () => {
    const { t } = useLanguage();

    const words = [
        ...t.hero.subtitle.regular.split(' ').map(word => ({ text: word, className: "text-white" })),
        {
          text: t.hero.subtitle.gradient,
          className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500",
        },
    ];

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
                    <h1 className="text-sm text-stone-300 group font-sans mx-auto px-5 py-2 bg-slate-800/50 border-[1px] border-slate-700/50 rounded-3xl w-fit">
                        {t.hero.preTitle}
                        <ChevronRightIcon />
                    </h1>
                     <TypewriterEffectSmooth words={words} className="justify-center" />
                    <p className="max-w-2xl mx-auto text-slate-400">
                        {t.hero.description}
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4">
                        <a
                            href="#contact"
                            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-amber-400 text-slate-900 transition-all duration-300 ease-in-out sm:w-auto py-3 px-8 text-base font-semibold hover:bg-amber-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                        >
                            {t.hero.ctaButton}
                        </a>
                    </div>
                </div>
            </motion.div>
        </AuroraBackground>
    );
};

export default Hero;