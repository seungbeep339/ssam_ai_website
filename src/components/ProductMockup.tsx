"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const messages = [
  {
    role: "user",
    text: "I don't understand how to solve this integral from my homework.",
  },
  {
    role: "assistant",
    text: "Let's work through it together. What technique have you tried so far — substitution or integration by parts?",
  },
  {
    role: "user",
    text: "I tried substitution but got stuck.",
  },
  {
    role: "assistant",
    text: "Good instinct! Look at the inner function. If you let u = x² + 1, what does du become?",
  },
];

export default function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="w-full max-w-3xl mx-auto mt-16"
    >
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-100 border border-gray-200">
        {/* Title bar */}
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
            app.ssam.ai
          </div>
        </div>

        {/* App layout */}
        <div className="bg-white flex h-[420px]">
          {/* Sidebar */}
          <div className="w-52 border-r border-gray-100 bg-gray-50 p-4 flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/ssam_ai_logo.png" alt="Ssam" width={22} height={22} className="w-5 h-5" />
              <span className="text-sm font-semibold text-gray-700">Ssam.ai</span>
            </div>
            {["Calculus HW 3", "Physics Notes", "Chem Lab Report"].map((item, i) => (
              <div
                key={item}
                className={`text-xs px-3 py-2 rounded-lg cursor-pointer truncate ${
                  i === 0
                    ? "bg-white border border-purple-100 text-purple-700 font-medium shadow-sm"
                    : "text-gray-500 hover:bg-white"
                }`}
              >
                {item}
              </div>
            ))}
            <div className="mt-auto">
              <div className="text-xs px-3 py-2 rounded-lg text-gray-400 border border-dashed border-gray-200 text-center cursor-pointer hover:border-purple-200">
                + Upload file
              </div>
            </div>
          </div>

          {/* Main area */}
          <div className="flex-1 flex flex-col">
            {/* Top bar */}
            <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Calculus HW 3.pdf</span>
              <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full font-medium">
                Guided mode
              </span>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full shrink-0 overflow-hidden mt-0.5">
                      <Image src="/ssam_ai_logo.png" alt="Ssam" width={24} height={24} />
                    </div>
                  )}
                  <div
                    className={`text-xs leading-relaxed px-3 py-2 rounded-2xl max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-gray-100 text-gray-700 rounded-tr-sm"
                        : "bg-purple-50 text-gray-700 rounded-tl-sm border border-purple-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex gap-2.5 items-center"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                  <Image src="/ssam_ai_logo.png" alt="Ssam" width={24} height={24} />
                </div>
                <div className="bg-purple-50 border border-purple-100 px-3 py-2 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-purple-400"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                <span className="text-xs text-gray-400 flex-1">Ask about your notes…</span>
                <div className="w-6 h-6 rounded-lg gradient-btn flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
