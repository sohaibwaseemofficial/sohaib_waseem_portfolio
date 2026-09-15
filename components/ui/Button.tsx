"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

const base =
  "inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D68C45]";

const variants = {
  primary:
    "bg-[#D68C45] text-[#0B0D0F] hover:bg-[#E8A15E]",
  outline:
    "border border-[#D68C45] text-[#D68C45] hover:bg-[#D68C45]/10",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  id,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
