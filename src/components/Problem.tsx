"use client";

import { motion } from "framer-motion";
import { Clock, FolderOpen, Bot } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Help disappears after hours",
    description:
      "Professors and TAs aren't available at midnight when you're stuck. Real learning shouldn't stop when office hours do.",
  },
  {
    icon: FolderOpen,
    title: "Your materials are scattered everywhere",
    description:
      "Notes in one app, PDFs in another, screenshots in a folder you can't find. There's no single place to study from everything.",
  },
  {
    icon: Bot,
    title: "Generic AI doesn't make you think",
    description:
      "Tools that just hand you the answer skip the part that actually builds understanding. You pass the problem — not the concept.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: EASE },
  }),
};

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-50">
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
            01 — Problem
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
          Students are stuck with broken
          <span className="gradient-text"> study habits.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-gray-500 text-lg mb-16 max-w-xl"
        >
          The tools students rely on either aren&apos;t available, aren&apos;t
          organized, or don&apos;t actually help them learn.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-purple-100 to-pink-50">
                  <Icon size={20} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
