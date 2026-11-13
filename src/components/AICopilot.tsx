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
  Sliders,
  Check,
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
    setTimeout(() => {
      setIsTyping(false);
      setCustomInput("");
    }, 400);
  };

  return (
    <section id="ai-copilot" className="py-20 sm:py-28 lg:py-32 bg-[#F4F1EA]/60 border-t border-[#EAE7DF] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>OPERATIONAL INTELLIGENCE LAYER</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ask your factory. Understand what is happening.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            A conversational intelligence layer designed to help manufacturers interact with operational records, engineering drawings, and shop floor workflows naturally.
          </p>
        </div>

        {/* Expansive 2-Column AI Copilot Interface (Fills Laptop Screen) */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto rounded-3xl border border-[#EAE7DF] bg-white shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#FAF9F5] border-b border-[#EAE7DF] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] shadow-2xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-base font-bold text-[#252B33]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    AetherBuilt Copilot
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                    Connected to Plant Hub #01 (Pune Unit)
                  </span>
                </div>
                <div className="text-xs text-[#6B7280]">
                  Grounded on live work orders, machine sensors, and material inventories
                </div>
              </div>
            </div>

            <span className="text-xs px-3 py-1.5 rounded-lg font-semibold bg-white text-[#6B7280] border border-[#EAE7DF] shadow-2xs">
              Demonstration Mode &bull; Active Roadmap
            </span>
          </div>

          {/* Split Content: Preset Scenarios (Left) + Interactive Live Chat Stream (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Column: Preset Operational Prompts */}
            <div className="lg:col-span-4 border-r border-[#EAE7DF] bg-[#FAF9F5]/70 p-5 sm:p-6 space-y-4">
              <div className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">
                Select Operational Scenario:
              </div>

              <div className="space-y-3">
                {COPILOT_DEMO_QUERIES.map((demo) => {
                  const isSelected = selectedQueryId === demo.id;
                  return (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => handleSelectQuery(demo.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white border-[#F59E0B] shadow-sm ring-2 ring-[#F59E0B]/20"
                          : "bg-white/60 border-[#EAE7DF] text-[#6B7280] hover:bg-white hover:text-[#252B33]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                          SCENARIO {demo.id.toUpperCase().replace("-", " ")}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#F59E0B]" />}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#252B33] leading-snug">
                        {demo.question}
                      </div>
                      <div className="text-[11px] text-[#6B7280] mt-2 flex items-center gap-1.5">
                        <span>Modules: {demo.response.connectedModules.join(", ")}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE7DF] text-xs text-[#6B7280] space-y-1">
                <span className="font-bold text-[#252B33] block">Cross-Module Grounding</span>
                <p>
                  Unlike generic AI chatbots, AetherBuilt Copilot parses shop floor telemetry, vendor lead times, and CAD dimension tolerances in a unified context graph.
                </p>
              </div>
            </div>

            {/* Right Column: Live Copilot Workspace */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-5">
                {/* User Message Bubble */}
                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-2xl rounded-2xl rounded-tr-xs bg-[#252B33] text-white px-5 py-3.5 text-xs sm:text-sm font-medium shadow-xs">
                    {activeDemo.question}
                  </div>
                </div>

                {/* Copilot Response Bubble */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center flex-shrink-0 mt-1 shadow-2xs">
                    <Sparkles className="w-4 h-4" />
                  </div>

                  <div className="flex-1 rounded-2xl rounded-tl-xs bg-[#FAF9F5] border border-[#EAE7DF] p-5 sm:p-6 shadow-2xs space-y-4">
                    {isTyping ? (
                      <div className="flex items-center gap-2 py-4 text-xs text-[#6B7280]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-ping" />
                        <span>Synthesizing cross-module plant telemetry...</span>
                      </div>
                    ) : (
                      <>
                        <div className="text-sm font-semibold text-[#252B33] leading-relaxed">
                          {activeDemo.response.answer}
                        </div>

                        {/* Grounded Points */}
                        <div className="space-y-2.5 pt-1">
                          {activeDemo.response.points.map((pt, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] text-xs text-[#374151] flex items-start gap-3 leading-relaxed shadow-2xs"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                              <span className="font-medium">{pt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Next Action Box */}
                        <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] space-y-1">
                          <span className="font-bold text-sm block">Recommended Operational Action:</span>
                          <p className="leading-relaxed">{activeDemo.response.recommendation}</p>
                        </div>

                        {/* Module Citation Tags */}
                        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#EAE7DF] text-xs text-[#6B7280]">
                          <span className="font-bold text-[#9CA3AF] uppercase text-[10px] tracking-wider">
                            Verified Across:
                          </span>
                          {activeDemo.response.connectedModules.map((m) => (
                            <span
                              key={m}
                              className="px-2.5 py-1 rounded-md font-semibold bg-white text-[#252B33] border border-[#EAE7DF] shadow-2xs"
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

              {/* Input Form */}
              <form onSubmit={handleCustomSubmit} className="pt-4 border-t border-[#EAE7DF]">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Ask a question about orders, machine telemetry, inventory, or drawing specs..."
                    className="w-full px-5 py-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] text-xs sm:text-sm text-[#252B33] placeholder-[#9CA3AF] focus:bg-white focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] outline-none transition-all pr-28"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 px-4 py-2 rounded-lg bg-[#252B33] hover:bg-[#1E232A] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Query</span>
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[#9CA3AF] mt-2 text-center">
                  *The AetherBuilt Copilot is a conversational intelligence layer currently under active engineering. Illustrative demonstration queries shown.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
