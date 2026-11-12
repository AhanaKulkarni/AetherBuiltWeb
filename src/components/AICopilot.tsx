"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COPILOT_DEMO_QUERIES } from "@/config/site";
import {
  Bot,
  Sparkles,
  Send,
  CornerDownLeft,
  CheckCircle2,
  AlertCircle,
  FileText,
  Layers,
  Cpu,
  Package,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";

export function AICopilot() {
  const [selectedQueryId, setSelectedQueryId] = useState(COPILOT_DEMO_QUERIES[0].id);
  const [customInput, setCustomInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeDemo =
    COPILOT_DEMO_QUERIES.find((q) => q.id === selectedQueryId) ||
    COPILOT_DEMO_QUERIES[0];

  const handleSelectQuery = (id: string) => {
    setIsTyping(true);
    setSelectedQueryId(id);
    setTimeout(() => {
      setIsTyping(false);
    }, 350);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsTyping(true);
    // Find closest match or default to first
    setTimeout(() => {
      setIsTyping(false);
      setCustomInput("");
    }, 400);
  };

  return (
    <section id="ai-copilot" className="py-20 sm:py-28 bg-[#F4F1EA]/50 border-t border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>OPERATIONAL INTELLIGENCE LAYER</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ask your factory. Understand what is happening.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            A conversational intelligence layer designed to help manufacturers interact with operational records, engineering drawings, and shop floor workflows naturally.
          </p>
        </div>

        {/* Interactive Copilot Container */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#EAE7DF] bg-white shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#FAF9F5] border-b border-[#EAE7DF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-bold text-[#252B33]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    AetherBuilt Copilot
                  </span>
                  <span className="text-[10px] px-2 py-0.2 rounded-full font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                    Connected to Plant Hub #01
                  </span>
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  Grounded on live work orders, machine sensors, and material inventories
                </div>
              </div>
            </div>

            <span className="text-[10px] px-2.5 py-1 rounded-md font-semibold bg-[#FAF9F5] text-[#6B7280] border border-[#EAE7DF] hidden sm:inline-block">
              Demonstration Mode &bull; Active Roadmap
            </span>
          </div>

          {/* Quick Preset Prompts */}
          <div className="px-5 py-3 bg-[#FAF9F5]/60 border-b border-[#EAE7DF] flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider">
              Sample queries:
            </span>
            {COPILOT_DEMO_QUERIES.map((demo) => (
              <button
                key={demo.id}
                type="button"
                onClick={() => handleSelectQuery(demo.id)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all text-left truncate max-w-xs ${
                  selectedQueryId === demo.id
                    ? "bg-[#252B33] text-white shadow-xs font-medium"
                    : "bg-white text-[#6B7280] hover:text-[#252B33] border border-[#EAE7DF]"
                }`}
              >
                {demo.question}
              </button>
            ))}
          </div>

          {/* Conversation Body */}
          <div className="p-5 sm:p-7 space-y-5 min-h-[380px] bg-white flex flex-col justify-between">
            <div className="space-y-4">
              {/* User Question Bubble */}
              <div className="flex items-start justify-end gap-3">
                <div className="max-w-xl rounded-2xl rounded-tr-xs bg-[#252B33] text-white px-4 py-3 text-xs sm:text-sm font-medium shadow-xs">
                  {activeDemo.question}
                </div>
              </div>

              {/* Copilot Response Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                  <Sparkles className="w-4 h-4" />
                </div>

                <div className="flex-1 max-w-2xl rounded-2xl rounded-tl-xs bg-[#FAF9F5] border border-[#EAE7DF] p-4 sm:p-5 shadow-2xs space-y-3">
                  {isTyping ? (
                    <div className="flex items-center gap-1.5 py-2 text-xs text-[#6B7280]">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                      <span>Synthesizing cross-module plant telemetry...</span>
                    </div>
                  ) : (
                    <>
                      <div className="text-xs font-semibold text-[#252B33] leading-relaxed">
                        {activeDemo.response.answer}
                      </div>

                      {/* Key Grounded Data Points */}
                      <div className="space-y-2 pt-1">
                        {activeDemo.response.points.map((pt, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-white border border-[#EAE7DF] text-xs text-[#374151] flex items-start gap-2 leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Proactive Operational Recommendation */}
                      <div className="p-3 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E]">
                        <span className="font-bold">Next Action: </span>
                        <span>{activeDemo.response.recommendation}</span>
                      </div>

                      {/* Source Citations */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EAE7DF] text-[11px] text-[#6B7280]">
                        <span className="font-medium text-[#9CA3AF]">
                          Synthesized across:
                        </span>
                        {activeDemo.response.connectedModules.map((m) => (
                          <span
                            key={m}
                            className="px-2 py-0.5 rounded font-medium bg-white text-[#252B33] border border-[#EAE7DF]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <form onSubmit={handleCustomSubmit} className="pt-4 border-t border-[#EAE7DF]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask a question about orders, machines, inventory, or drawing specs..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] focus:bg-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] outline-none transition-all pr-24"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#252B33] hover:bg-[#1E232A] text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Query</span>
                  <CornerDownLeft className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[10px] text-[#9CA3AF] mt-2 text-center">
                *The AetherBuilt Copilot is a conversational intelligence layer currently under active engineering. Illustrative demonstration queries shown.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
