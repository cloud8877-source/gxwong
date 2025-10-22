import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white to-slate-50 text-slate-900 py-24 md:py-40">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 section-fade-in" style={{ animationDelay: '0.2s' }}>
          Modern estate planning for today's generations.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto section-fade-in" style={{ animationDelay: '0.4s' }}>
          We make it simple to protect your wealth and secure your family's future with a comprehensive, personalized estate plan.
        </p>
        <div className="section-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;