import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">EstateWealth MY</h3>
            <p className="text-slate-400 max-w-xs">Securing legacies across Malaysia with professional and personalized estate planning.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                 <li key={link.label}><a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="mailto:cloud8877@gmail.com" className="hover:text-cyan-400">cloud8877@gmail.com</a></li>
              <li><a href="tel:+60108828127" className="hover:text-cyan-400">+60 10-8828127</a></li>
              <li>Johor Bahru, Malaysia</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Disclaimer</h3>
            <p className="text-sm text-slate-500">
              The information on this site is for informational purposes only and does not constitute legal or financial advice. Please consult a qualified professional.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} EstateWealth MY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;