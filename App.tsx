import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CtaSection from './components/CtaSection';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
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
          <ContactForm />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default App;