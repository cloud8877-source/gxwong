import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
    </svg>
);

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
    </svg>
);

const SubmitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
    </svg>
);

const ContactForm: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

        if (formData.name && formData.email && formData.message) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Clear form
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };
    
    const StatusMessage = () => {
        const baseClasses = "text-center p-4 rounded-lg my-4";
        switch (status) {
            case 'success':
                return <div className={`${baseClasses} bg-green-100 text-green-800`}>{t.contact.status.success}</div>;
            case 'error':
                 return <div className={`${baseClasses} bg-red-100 text-red-800`}>{t.contact.status.error}</div>;
            case 'loading':
                return <div className={`${baseClasses} bg-green-100 text-green-800`}>{t.contact.status.loading}</div>;
            default:
                return null;
        }
    };


    return (
        <section id="contact" className="py-20 md:py-28 bg-white">
            <form className="flex flex-col items-center text-sm text-stone-800" onSubmit={handleSubmit}>
                <p className="text-xs bg-green-200 text-green-800 font-medium px-3 py-1 rounded-full">{t.navLinks.find(l => l.href ==='#contact')?.label}</p>
                <h2 className="text-4xl font-bold py-4 text-center text-green-900">{t.contact.title}</h2>
                <p className="max-md:text-sm text-stone-500 pb-10 text-center">
                    {t.contact.subtitleManual} <a href="mailto:cloud8877@gmail.com" className="text-amber-600 hover:underline">cloud8877@gmail.com</a>
                </p>

                <div className="max-w-md w-full px-4">
                     <StatusMessage />

                     {status !== 'success' && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="name" className="font-medium sr-only">{t.contact.form.name}</label>
                                <div className="flex items-center mt-2 h-12 pl-4 border border-stone-300 rounded-full focus-within:ring-2 focus-within:ring-amber-400 transition-all overflow-hidden">
                                    <UserIcon />
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="h-full px-3 w-full outline-none bg-transparent" placeholder={t.contact.form.name} required />
                                </div>
                            </div>
                    
                            <div className="mb-4">
                                <label htmlFor="email" className="font-medium sr-only">{t.contact.form.email}</label>
                                <div className="flex items-center mt-2 h-12 pl-4 border border-stone-300 rounded-full focus-within:ring-2 focus-within:ring-amber-400 transition-all overflow-hidden">
                                    <EmailIcon />
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="h-full px-3 w-full outline-none bg-transparent" placeholder={t.contact.form.email} required />
                                </div>
                            </div>
                    
                            <div className="mb-4">
                                <label htmlFor="message" className="font-medium sr-only">{t.contact.form.message}</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full mt-2 p-4 bg-transparent border border-stone-300 rounded-2xl resize-none outline-none focus:ring-2 focus-within:ring-amber-400 transition-all" placeholder={t.contact.form.message} required></textarea>
                            </div>
                            
                            <button type="submit" disabled={status === 'loading'} className="flex items-center justify-center gap-2 mt-5 bg-green-700 hover:bg-green-800 text-white py-3 w-full rounded-full transition disabled:bg-stone-400">
                                {status === 'loading' ? t.contact.status.loading : t.contact.form.submit}
                                {status !== 'loading' && <SubmitIcon />}
                            </button>
                        </>
                    )}
                </div>
            </form>
        </section>
    );
};

export default ContactForm;