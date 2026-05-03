"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Camera,
  Layers,
  Target,
  Zap,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Handwriting Recognition",
    description:
      "Photograph your handwritten notes and problem sets. Ssam reads them accurately in real time.",
  },
  {
    icon: FileText,
    title: "PDF Support",
    description:
      "Upload lecture slides, textbooks, or scanned documents. Ask questions directly tied to the content.",
  },
  {
    icon: Layers,
    title: "Smart Problem Extraction",
    description:
      "Ssam identifies individual questions and concepts within your materials automatically.",
  },
  {
    icon: Target,
    title: "Guided Hints",
    description:
      "Hints are grounded in the underlying concept — not random suggestions. Each hint moves you one step closer.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Ask a question and get context-aware help in seconds, any time — no waiting for office hours.",
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description:
      "Ssam adapts to what you already know, adjusting hints and explanations to your level.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            04 — Features
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 max-w-xl"
        >
          Everything you need to
          <span className="gradient-text"> actually learn.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-gray-500 text-lg mb-16 max-w-lg"
        >
          Built specifically for students who want to understand deeply, not just
          complete assignments.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-purple-100 hover:shadow-md hover:shadow-purple-50 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-purple-100 to-pink-50">
                  <Icon size={18} className="text-purple-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
