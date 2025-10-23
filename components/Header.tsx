import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-green-900 tracking-tight">
          Estate<span className="text-red-600">Wealth</span> MY
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {t.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-red-600 transition duration-300 font-medium">
              {link.label}
            </a>
          ))}
           <button onClick={toggleLanguage} className="text-slate-600 hover:text-red-600 transition duration-300 font-medium border border-slate-300 rounded-full px-3 py-1 text-sm">
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {t.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-red-600 transition duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
             <button onClick={toggleLanguage} className="text-slate-600 hover:text-red-600 transition duration-300 font-medium border border-slate-300 rounded-full px-3 py-1 text-sm mt-2">
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;