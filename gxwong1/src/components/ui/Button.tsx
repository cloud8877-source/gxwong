"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  // Use CSS-first classes defined in globals.css so we don't depend on Tailwind
  // utility generation during the PostCSS step.
  const variantClass = variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-outline";
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "btn-md";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim();

  if (href) {
    return (
      <motion.div whileHover={disabled ? {} : { scale: 1.02 }} whileTap={disabled ? {} : { scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={disabled ? {} : { scale: 1.02 }} whileTap={disabled ? {} : { scale: 0.98 }}>
      <button onClick={onClick} disabled={disabled} className={classes} type="button">
        {children}
      </button>
    </motion.div>
  );
}
