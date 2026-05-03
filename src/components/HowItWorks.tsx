"use client";

import { motion } from "framer-motion";
import { ScanText, PenLine, Brain } from "lucide-react";

const items = [
  {
    icon: ScanText,
    title: "Smart extraction",
    description:
      "Ssam.ai scans your material and identifies individual problems, questions, and concepts — even across multiple pages.",
    detail: "Recognizes equations, diagrams, and handwritten text automatically.",
  },
  {
    icon: PenLine,
    title: "Real-time handwriting reading",
    description:
      "Upload a photo of your notebook or scratch paper. Ssam reads it as clearly as printed text.",
    detail: "Works with messy, real-world handwriting — not just clean samples.",
  },
  {
    icon: Brain,
    title: "Conceptual hints, not answers",
    description:
      "When you ask for help, Ssam asks you what you've tried, identifies the underlying concept, and provides a hint that moves you forward.",
    detail: "Designed to build long-term retention, not short-term task completion.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gray-50 overflow-hidden" id="features">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-extrabold tracking-widest text-purple-500 uppercase">
            03 — How It Works
          </span>
          <div className="h-px flex-1 bg-purple-100" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 max-w-xl"
        >
          Intelligence that understands
          <span className="gradient-text"> your specific work.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-gray-500 text-lg mb-16 max-w-2xl"
        >
          Most AI gives generic answers. Ssam is built to understand the
          problem in front of you — the one you wrote, the one your professor
          assigned.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 gradient-btn shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-sm text-gray-400 italic">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
