"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Secure Your Legacy. <br />
            <span className="text-primary-500">Protect Your Family's Future</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional estate planning services in Malaysia including will writing, trust setup, and insurance review. Secure your legacy with expert guidance tailored for Malaysian families.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="/contact" size="lg">
              Free Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Our Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center rounded-full bg-secondary-50 px-6 py-3">
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full bg-primary-500 ring-2 ring-white"></div>
              ))}
            </div>
            <p className="ml-3 text-sm font-medium text-gray-900">
              <span className="text-primary-500 font-bold">500+</span> families protected
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative background */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary-200 to-primary-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
