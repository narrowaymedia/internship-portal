"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-mono tracking-wider",
    md: "px-5 py-2.5 text-sm font-medium",
    lg: "px-7 py-3.5 text-base font-medium",
  };

  const variantStyles = {
    primary:
      "bg-[#f0532b] text-white hover:bg-[#dc451d] border border-transparent shadow-sm active:translate-y-0.5",
    secondary:
      "bg-[#17150f] text-[#f4f1ea] hover:bg-[#2a2720] border border-transparent active:translate-y-0.5",
    outline:
      "bg-transparent text-[#17150f] border border-[#17150f] hover:bg-[#17150f] hover:text-[#f4f1ea] active:translate-y-0.5",
    ghost:
      "bg-transparent text-[#17150f] hover:bg-[#e8e3d8] border border-transparent",
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={baseStyles}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
