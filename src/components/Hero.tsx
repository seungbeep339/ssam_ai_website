"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};


export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Background decoration */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #8B5CF6 0%, #4FACFE 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6 inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full"
        >
          <Sparkles size={14} />
          AI-Powered Study Assistant
        </motion.div>

        {/* Logo mark */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <Image
            src="/ssam_ai_logo.png"
            alt="Ssam.ai logo"
            width={80}
            height={80}
            priority
            className="w-20 h-20 mx-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6"
        >
          Study from the work{" "}
          <span className="gradient-text">you already have.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
        >
          Ssam.ai reads your notes, PDFs, and handwritten work — then guides you
          to the answer instead of handing it to you. Deeper learning, not faster
          shortcuts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <Link
            href="#waitlist"
            className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-full text-base flex items-center gap-2 shadow-lg shadow-purple-200"
          >
            Get Early Access
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#features"
            className="text-gray-600 font-medium px-8 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-base"
          >
            See How It Works
          </Link>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}
