import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// --- Local SVG Icon Components ---
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
);


const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    LinkedIn: LinkedInIcon,
    Facebook: FacebookIcon,
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-stone-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">EstateWealth MY</h3>
            <p className="text-slate-400 max-w-xs">{t.footer.tagline}</p>
            {t.footer.socialLinks && (
              <div className="mt-6 flex items-center space-x-4">
                {t.footer.socialLinks.map((social) => {
                  const Icon = socialIcons[social.name];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {t.navLinks.map(link => (
                 <li key={link.label}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-400 hover:text-white transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="mailto:cloud8877@gmail.com" className="hover:text-white">cloud8877@gmail.com</a></li>
              <li><a href="tel:+60108828127" className="hover:text-white">+60 10-8828127</a></li>
              <li>Johor Bahru, Malaysia</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.disclaimer.title}</h3>
            <p className="text-sm text-slate-500">
              {t.footer.disclaimer.text}
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} EstateWealth MY. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;