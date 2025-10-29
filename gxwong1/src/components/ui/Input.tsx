"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  className?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <label className={`form-field ${className}`}>
      {label && <span className="label-text">{label}</span>}
      <input
        className={`input ${error ? "input-error" : ""}`}
        {...props}
      />
      {error && typeof error === "string" && (
        <p className="input-help" role="alert">
          {error}
        </p>
      )}
    </label>
  );
}
