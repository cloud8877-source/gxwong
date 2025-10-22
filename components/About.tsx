import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/professional-malaysia/800/600" 
              alt="Professional Estate Planner in Malaysia" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Your Trusted Partner in Legacy Planning</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              As a dedicated estate planner based in Malaysia, my mission is to provide you with peace of mind. I understand the importance of protecting your hard-earned assets and ensuring your loved ones are cared for according to your wishes.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With years of experience in local laws and financial instruments, I offer personalized, confidential, and comprehensive planning services. I am committed to building lasting relationships with my clients, guiding them through every step of creating a secure and lasting legacy.
            </p>
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
                <p className="text-slate-700 font-medium italic">"Planning is bringing the future into the present so that you can do something about it now."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;