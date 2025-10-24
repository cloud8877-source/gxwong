
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline"
    >
      {wordsArray.map((word, idx) => (
        <motion.div key={`word-${idx}`} variants={wordVariants} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`text-white`, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("my-6 flex justify-center", className)}>
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        {renderWords()}
      </div>
    </div>
  );
};