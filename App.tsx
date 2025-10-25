import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CtaSection from './components/CtaSection';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ContactSection } from './components/ui/contact';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-950 text-stone-200">
      <Header />
      <main>
        <Hero />
        <CtaSection />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactSection
          title={t.contact.title}
          contactEmail="cloud8877@gmail.com"
          socialLinks={t.footer.socialLinks}
        />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;