"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
  onClick,
}: CardProps) {
  const baseStyles =
    "";

  // Use the .card class defined in globals.css for consistent styling
  const styles = `card ${className}`.trim();

  const Component: any = onClick ? motion.div : "div";

  const motionProps = onClick
    ? {
        whileHover: { y: -8 },
        className: styles,
        onClick,
      }
    : { className: styles };

  return <Component {...motionProps}>{children}</Component>;
}
