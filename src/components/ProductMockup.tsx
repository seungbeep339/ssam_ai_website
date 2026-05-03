import Image from "next/image";
import { FileText, Sparkles } from "lucide-react";

const extractedQuestions = [
  { id: 1, text: "Find the derivative of f(x) = 3x² + 2x", done: true },
  { id: 2, text: "Evaluate the limit as x → 0 of sin(x)/x", done: true },
  { id: 3, text: "Solve the integral ∫(2x + 1)dx from 0 to 3", done: false, active: true },
  { id: 4, text: "Determine if f(x) = x³ is continuous at x = 2", done: false },
];

const hints = [
  { step: 1, text: "Use the power rule: ∫xⁿ dx = xⁿ⁺¹ / (n+1) + C" },
  { step: 2, text: "Apply it to each term separately: ∫2x dx and ∫1 dx" },
  { step: 3, text: "Then plug in your bounds: F(3) − F(0)" },
];

export default function ProductMockup() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-16">
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
        <div className="bg-white flex h-[460px]">

          {/* Left panel — PDF questions (hidden on mobile) */}
          <div className="hidden sm:flex w-56 border-r border-gray-100 bg-gray-50 flex-col shrink-0">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <FileText size={14} className="text-red-400 shrink-0" />
              <span className="text-xs font-medium text-gray-600 truncate">Calculus_HW3.pdf</span>
            </div>

            <div className="px-3 py-3 flex flex-col gap-1.5 overflow-y-auto">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1 mb-1">
                Extracted Questions
              </p>
              {extractedQuestions.map((q) => (
                <div
                  key={q.id}
                  className={`px-3 py-2.5 rounded-lg cursor-pointer ${
                    q.active
                      ? "bg-white border border-purple-200 shadow-sm"
                      : q.done
                      ? "opacity-50"
                      : "hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${
                      q.done ? "bg-green-400 border-green-400" : q.active ? "border-purple-400" : "border-gray-300"
                    }`}>
                      {q.done && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {q.active && <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </div>
                    <p className={`text-[10px] leading-relaxed line-clamp-2 ${
                      q.active ? "text-gray-800 font-medium" : "text-gray-500"
                    }`}>
                      {q.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel — notebook */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div>
                <span className="text-xs font-semibold text-gray-800">Question 3</span>
                <span className="ml-2 text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full border border-purple-100">
                  AI Extracted
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Image src="/ssam_ai_logo.png" alt="Ssam" width={14} height={14} className="w-3.5 h-3.5" />
                Ssam.ai
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {/* Extracted question */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">Problem</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Solve the integral ∫(2x + 1)dx from 0 to 3
                </p>
              </div>

              {/* User handwriting */}
              <div className="border border-gray-100 rounded-xl px-4 py-3 bg-white">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Your Work</p>
                <div
                  className="text-sm text-gray-700 leading-loose"
                  style={{ fontFamily: "'Segoe Print', 'Comic Sans MS', cursive", letterSpacing: "0.02em" }}
                >
                  <span>∫(2x + 1)dx</span>
                  <br />
                  <span>= x² + x + C</span>
                  <br />
                  <span className="text-gray-400">= [3² + 3] - [0² + 0]</span>
                  <br />
                  <span className="text-gray-400">= 12 - 0 = ?</span>
                </div>
              </div>

              {/* AI hints */}
              <div className="border border-purple-100 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-purple-50 border-b border-purple-100 flex items-center gap-2">
                  <Sparkles size={12} className="text-purple-500" />
                  <p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                    Ssam Hints
                  </p>
                </div>
                <div className="px-4 py-3 flex flex-col gap-2.5">
                  {hints.map((hint) => (
                    <div key={hint.step} className="flex gap-2.5 items-start">
                      <div className="w-4 h-4 rounded-full gradient-btn flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[8px] font-bold text-white">{hint.step}</span>
                      </div>
                      <p className="text-[10px] text-gray-600 leading-relaxed">{hint.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
