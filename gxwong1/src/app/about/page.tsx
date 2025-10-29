"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function AboutPage() {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="text-primary-500">EstateWealthMY</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional estate planning services in Malaysia, helping families secure their legacy and protect their loved ones' future through expert legal guidance.
            </motion.p>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary-200 to-primary-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              To provide comprehensive estate planning services that ensure Malaysian families can preserve their wealth, protect their loved ones, and create lasting legacies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Legal Guidance",
                description: "Our team consists of qualified professionals with deep understanding of Malaysian inheritance law and estate planning regulations.",
                icon: (
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                ),
              },
              {
                title: "Cultural Sensitivity",
                description: "We understand Malaysian family structures and cultural considerations, ensuring plans align with your values and traditions.",
                icon: (
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.725.736 3.97 3.97 0 0 0 2.364-.946 3.27 3.27 0 0 0-.948-2.265 3.75 3.75 0 0 0-.948-2.265 3.27 3.27 0 0 0-.948 2.265 3.75 3.75 0 0 0 .948 2.265 3.75 3.75 0 0 0 .948 2.265 3.27 3.27 0 0 0 .948-2.265 3.75 3.75 0 0 0 .948-2.265 3.27 3.27 0 0 0-.948-2.265 3.75 3.75 0 0 0-.948 2.265 3.97 3.97 0 0 0-.736 2.725L12 22.247l-2.725-1.119Z" />
                  </svg>
                ),
              },
              {
                title: "Personalized Solutions",
                description: "Every family is unique. We create customized estate plans that reflect your specific circumstances, goals, and family dynamics.",
                icon: (
                  <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75m3.75V21h-3.75v-4.5m0-4.5h3.75M9 21V12h-3.75v9M3 21V12H.75v9" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-50">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose EstateWealthMY?
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our combination of legal expertise, cultural understanding, and personalized service sets us apart in the Malaysian estate planning industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Local Expertise",
                description: "Deep understanding of Malaysian inheritance law, tax regulations, and cultural considerations that affect estate planning for local families.",
              },
              {
                title: "Comprehensive Services",
                description: "From will writing to trust setup and insurance reviews, we provide complete estate planning solutions under one roof.",
              },
              {
                title: "Proven Track Record",
                description: "Over 500 families have trusted us with their estate planning needs, and we maintain a 100% client satisfaction rate.",
              },
              {
                title: "Ongoing Support",
                description: "We don't just create your plan and disappear. We provide ongoing support and regular reviews to ensure your estate plan stays current.",
              },
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="h-full">
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Schedule a free consultation with our estate planning experts. We'll assess your current situation and recommend the best strategies for your family.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="outline" size="lg">
                Schedule Free Consultation
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
