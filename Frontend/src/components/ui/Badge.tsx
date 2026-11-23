import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "green" | "dark" | "outline";
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  dot = false,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#e8e3d8] text-[#17150f] border-[#ddd7ca]",
    orange: "bg-[#f0532b]/10 text-[#f0532b] border-[#f0532b]/20",
    green: "bg-[#1e3a32]/10 text-[#1e3a32] border-[#1e3a32]/20",
    dark: "bg-[#17150f] text-[#f4f1ea] border-[#17150f]",
    outline: "bg-transparent text-[#7a746a] border-[#ddd7ca]",
  };

  const dotColors = {
    default: "bg-[#17150f]",
    orange: "bg-[#f0532b]",
    green: "bg-[#1e3a32]",
    dark: "bg-[#f0532b]",
    outline: "bg-[#7a746a]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`}
        />
      )}
      {children}
    </span>
  );
}
