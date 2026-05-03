"use client";

import { motion } from "framer-motion";
import { Upload, MessageCircle, Lightbulb } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Bring your own materials",
    description:
      "Upload your notes, PDFs, photos of handwritten work, or screenshots. Ssam.ai understands all of it.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Ask what you're stuck on",
    description:
      "Ask any question about your specific material — a problem you wrote, an assignment you received, a concept you don't get yet.",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Get guided to the answer",
    description:
      "Instead of spoiling the answer, Ssam nudges you toward it — asking what you already know, pointing to the relevant concept, building real understanding.",
  },
];

export default function Solution() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-extrabold tracking-widest text-purple-500 uppercase">
            02 — Solution
          </span>
          <div className="h-px flex-1 bg-purple-100" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              A better learning flow,
              <br />
              <span className="gradient-text">not faster answers.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-gray-500 text-lg leading-relaxed"
            >
              Ssam.ai works with your actual materials. It doesn&apos;t replace
              thinking — it coaches it. Three simple steps to actually understand
              what you&apos;re studying.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center gradient-btn shadow-md">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                      STEP {s.step}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 mt-0.5 mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
