"use client";

import { motion } from "framer-motion";
import React from "react";

// FadeInText Component
export const FadeInText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// SlideInText Component
export const SlideInText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 100,
      duration: 0.7,
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ScaleFadeText Component
export const ScaleFadeText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      type: "tween",
      duration: 0.4,
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// SlideUpText Component
export const SlideUpText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 100,
      duration: 0.7,
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// SlideDownText Component
export const SlideDownText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 100,
      duration: 0.7,
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Exporting All Animations as an Object
export const TextAnimations = {
  FadeInText,
  SlideInText,
  ScaleFadeText,
  SlideUpText,
  SlideDownText,
};
