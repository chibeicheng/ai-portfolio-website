'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]",
        hover && "hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:border-indigo-100 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
