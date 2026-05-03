"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/api/waitlist`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, school }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setErrorMsg("Could not connect. Please try again.");
      setState("error");
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-50" id="waitlist">
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
            05 — Early Access
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </motion.div>

        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Be the first to
            <span className="gradient-text"> study smarter.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-gray-500 text-lg mb-10"
          >
            Join the waitlist to get early access to Ssam.ai. We&apos;re
            onboarding students now — share your email and we&apos;ll reach out
            when your spot is ready.
          </motion.p>

          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl p-5"
            >
              <CheckCircle size={22} className="flex-shrink-0" />
              <div>
                <p className="font-semibold">You&apos;re on the list!</p>
                <p className="text-sm text-green-600 mt-0.5">
                  We&apos;ll email you at <strong>{email}</strong> when your
                  access is ready.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white text-sm transition-all"
              />
              <input
                type="text"
                placeholder="School or university (optional)"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white text-sm transition-all"
              />

              {state === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="gradient-btn text-white font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-100 disabled:opacity-70"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                No spam. We&apos;ll only email you when your access is ready.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
