"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      <Hero />

      {/* Problem Statement Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why 80% of Malaysians Need Estate Planning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Most Malaysian families are exposed to unnecessary risks and complications when it comes to asset protection and inheritance.
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Asset Loss Risk",
                  description: "Without proper estate planning, your assets may be frozen for months or years, causing financial hardship to your family.",
                  icon: (
                    <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                },
                {
                  title: "Legal Complications",
                  description: "Intestate succession under Malaysian law may not align with your wishes, leading to potential family disputes.",
                  icon: (
                    <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  ),
                },
                {
                  title: "Tax Implications",
                  description: "Without proper planning, your heirs may face unnecessary tax burdens that could have been minimized or avoided.",
                  icon: (
                    <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25 6 12l3-3m0 0 3-3m-3 3V7.5m0 3.75c.53 0 .99-.51 1.155-1.07L14.25 9.75l.25-.25c.53-.53 1.39-.53 1.92 0l.25.25c.53.53.53 1.39 0 1.92l-.25.25c-.53.53-1.39.53-1.92 0l-1.15-.14a48.32 48.32 0 0 1-.95-3.63c0-1.62.95-3.09 2.35-4.03M9.75 15.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card className="h-full">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-50">
                        {feature.icon}
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </Card>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Estate Planning Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive solutions tailored for Malaysian families and businesses.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Will Writing",
                  description: "Draft a legally valid will that reflects your wishes and protects your loved ones according to Malaysian law.",
                  features: ["Custom will drafting", "Legal compliance", "Executor guidance"],
                  href: "/services/will-writing",
                  priority: false,
                },
                {
                  title: "Insurance Review",
                  description: "Analyze your existing insurance policies to ensure optimal coverage and identify potential gaps.",
                  features: ["Policy analysis", "Coverage assessment", "Beneficiary updates"],
                  href: "/services/insurance-review",
                  priority: true,
                },
                {
                  title: "Trust Services",
                  description: "Establish trusts to protect assets and provide for beneficiaries with greater control and flexibility.",
                  features: ["Trust setup", "Asset protection", "Tax optimization"],
                  href: "/services/trust-services",
                  priority: false,
                },
              ].map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full ${service.priority ? 'border-2 border-secondary-400' : ''}`}>
                    {service.priority && (
                      <div className="mb-4 inline-block rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-800">
                        Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-600">{service.description}</p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <svg className="mr-2 h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href={service.href} variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Secure Your Family's Future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Schedule a free consultation with our estate planning experts and take the first step towards protecting your legacy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="outline" size="lg">
                Get Free Consultation
              </Button>
              <Button href="tel:+60312345678" variant="secondary" size="lg">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
