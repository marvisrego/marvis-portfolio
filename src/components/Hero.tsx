"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-primary text-sm mb-5"
        >
          hi, i'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tight"
        >
          Marvis Stewart Rego.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary mb-7"
        >
          I build things that think.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-text-secondary text-lg max-w-xl leading-relaxed mb-9"
        >
          ML Engineer at{" "}
          <span className="text-foreground">Global Hotel Alliance</span>, shipping
          production AI on Databricks. From fraud detection to LLM-powered scoring
          systems, I turn messy data into decisions that move the business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary hover:bg-primary-hover text-background font-medium rounded transition-colors duration-200"
          >
            See what I've built
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-text-secondary hover:text-foreground hover:border-primary/50 rounded transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
