import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const RetroGrid: React.FC = () => {
  const gridStyles = {
    '--grid-angle': `65deg`,
    '--cell-size': `60px`,
    '--opacity': 0.3,
    '--line-color': 'rgba(16, 185, 129, 0.2)', // A green color from the theme
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="[animation:grid_20s_linear_infinite] [background-image:linear-gradient(to_right,var(--line-color)_1px,transparent_0),linear-gradient(to_bottom,var(--line-color)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90%" />
    </div>
  );
};

const ChevronRightIcon = () => (
    <svg className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="relative">
            <div className="absolute top-0 z-[-1] h-screen w-screen bg-green-950/5 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(4,_120,_87,_0.15),rgba(255,255,255,0))]" />
            <section className="relative max-w-full mx-auto">
                <RetroGrid />
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
                        <h1 className="text-sm text-green-700 group font-sans mx-auto px-5 py-2 bg-gradient-to-tr from-green-300/20 via-green-400/20 to-transparent border-[1px] border-black/5 rounded-3xl w-fit">
                            {t.hero.preTitle}
                            <ChevronRightIcon />
                        </h1>
                        <h2 className="text-4xl tracking-tighter font-sans mx-auto md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-900 to-green-700">
                             {t.hero.subtitle.regular}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-500">
                                {t.hero.subtitle.gradient}
                            </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-600">
                            {t.hero.description}
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4">
                            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                                <span className="absolute inset-[-1000%] [animation:spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1fae5_0%,#065f46_50%,#d1fae5_100%)]" />
                                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-xs font-medium backdrop-blur-3xl">
                                    <a
                                        href="#contact"
                                        className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-green-300/20 via-green-400/30 to-transparent text-green-900 border-green-900/10 border-[1px] hover:bg-gradient-to-tr hover:from-green-300/30 hover:via-green-400/40 hover:to-transparent transition-all sm:w-auto py-3 px-8 text-base font-semibold"
                                    >
                                        {t.hero.ctaButton}
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
