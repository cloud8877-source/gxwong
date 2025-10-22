import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
            <div className="bg-green-50/30 p-12 rounded-lg shadow-sm max-w-2xl mx-auto border border-green-200">
                <h2 className="text-3xl font-bold text-green-700 mb-4">{t.contactForm.success.title}</h2>
                <p className="text-slate-700 text-lg">{t.contactForm.success.message}</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-green-50/30 p-8 md:p-12 rounded-lg shadow-sm border border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-900 tracking-tight">{t.contactForm.title}</h2>
            <p className="text-slate-600 mt-2">{t.contactForm.subtitle}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">{t.contactForm.labels.name}</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">{t.contactForm.labels.email}</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">{t.contactForm.labels.phone}</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700">{t.contactForm.labels.service}</label>
              <select id="service" name="service" required className="mt-1 block w-full pl-4 pr-10 py-2.5 text-base border-slate-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md" value={formData.service} onChange={handleChange}>
                <option value="" disabled>{t.contactForm.placeholders.selectService}</option>
                {t.services.items.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                 <option value="General Inquiry">{t.contactForm.placeholders.generalInquiry}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">{t.contactForm.labels.message}</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder={t.contactForm.placeholders.message} value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300">
                {t.contactForm.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;