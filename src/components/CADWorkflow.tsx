"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAD_WORKFLOW_STEPS } from "@/config/site";
import {
  FileCode,
  Sparkles,
  Layers,
  Calculator,
  FileSpreadsheet,
  FileCheck,
  ArrowRight,
  Info,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function CADWorkflow() {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const activeStep = CAD_WORKFLOW_STEPS[selectedStepIndex];

  return (
    <section id="cad-workflow" className="py-20 sm:py-28 bg-[#F9F8F4] border-t border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <FileCode className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>ENGINEERING AUTOMATION ROADMAP</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From engineering drawings to manufacturing quotations.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Eliminate tedious manual drawing takeoffs. AetherBuilt is pioneering an end-to-end engineering pipeline that translates customer CAD blueprints directly into structured bills of materials, cycle time estimates, and commercial quotations.
          </p>
        </div>

        {/* 6-Stage Visual Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CAD_WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-white border-[#F59E0B] shadow-sm ring-2 ring-[#F59E0B]/20"
                    : "bg-white/60 border-[#EAE7DF] hover:bg-white text-[#6B7280]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                  <span>STAGE {step.step}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[9px] font-semibold ${
                      step.status.includes("Active Capability")
                        ? "bg-[#ECFDF5] text-[#065F46]"
                        : "bg-[#FFF4DE] text-[#B45309]"
                    }`}
                  >
                    {step.status.includes("Active Capability") ? "Live" : "Dev"}
                  </span>
                </div>
                <div
                  className={`text-xs font-bold leading-tight ${
                    isSelected ? "text-[#252B33]" : "text-[#4B5563]"
                  }`}
                >
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Technical Showcase Card */}
        <div className="rounded-2xl border border-[#EAE7DF] bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Detail Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[#F59E0B] uppercase tracking-wider">
                  STAGE {activeStep.step} &bull; {activeStep.phase}
                </span>
                <span className="text-[#9CA3AF]">&bull;</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
                  {activeStep.status}
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#252B33]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-2 text-xs text-[#374151]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Transformation Output
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>
                    Eliminates manual re-entry errors between technical sales, estimation estimators, and CAD drafters.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>
                    Synchronizes directly with warehouse inventory buffers to evaluate alloy availability on hand.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  disabled={selectedStepIndex === 0}
                  onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-lg border border-[#EAE7DF] text-xs font-semibold text-[#6B7280] disabled:opacity-40 hover:bg-[#FAF9F5]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={selectedStepIndex === CAD_WORKFLOW_STEPS.length - 1}
                  onClick={() =>
                    setSelectedStepIndex((prev) =>
                      Math.min(CAD_WORKFLOW_STEPS.length - 1, prev + 1)
                    )
                  }
                  className="px-4 py-2 rounded-lg bg-[#252B33] text-white text-xs font-semibold hover:bg-[#1E232A] flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Blueprint Technical Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#D1D5DB] bg-[#1E2530] text-white p-5 shadow-inner font-mono text-xs relative overflow-hidden">
                {/* Blueprint Grid Lines */}
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#38BDF8_1px,transparent_1px),linear-gradient(to_bottom,#38BDF8_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700 text-[11px] text-gray-400">
                    <span>AETHERBUILT // CAD_ANALYZER_V1.2</span>
                    <span className="text-[#FBBF24]">TOLERANCE: ISO 2768-mK</span>
                  </div>

                  {/* Blueprint Geometry Callout Box */}
                  <div className="p-3.5 rounded-lg bg-gray-900/80 border border-gray-700 space-y-2">
                    <div className="flex items-center justify-between text-gray-300">
                      <span className="text-[#38BDF8]">PART_GEO: HIGH_PRESSURE_VALVE_V3.STEP</span>
                      <span className="text-[10px] text-gray-400">STATUS: PARSED</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400">
                      <div>Material: <span className="text-white">SS 304 Alloy</span></div>
                      <div>Blank Size: <span className="text-white">Ø42mm &times; 140mm</span></div>
                      <div>Rough Weight: <span className="text-white">1.52 kg</span></div>
                      <div>Net Weight: <span className="text-white">0.98 kg</span></div>
                    </div>
                  </div>

                  {/* Automated Feature Table */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Extracted Machining Steps:
                    </div>
                    <div className="p-2 rounded bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                      <span>01. CNC Lathe Rough Facing &amp; Turn</span>
                      <span className="text-[#34D399]">3.2 mins</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                      <span>02. 4-Axis Bore &amp; Thread M24 &times; 1.5</span>
                      <span className="text-[#34D399]">4.8 mins</span>
                    </div>
                    <div className="p-2 rounded bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                      <span>03. Surface Finish Ra 0.8 &micro;m</span>
                      <span className="text-[#34D399]">2.1 mins</span>
                    </div>
                  </div>

                  {/* Summary Quotation Estimate */}
                  <div className="p-3 rounded-lg bg-[#252B33] border border-gray-700 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-gray-400">ESTIMATED BATCH QUOTE (QTY: 500)</div>
                      <div className="text-base font-bold text-[#FBBF24]">₹1,84,500 <span className="text-[11px] font-normal text-gray-400">(₹369/unit)</span></div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40">
                      ROADMAP FEATURE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accuracy and Roadmap Statement */}
        <div className="mt-8 p-4 rounded-xl border border-[#EAE7DF] bg-white/70 max-w-4xl mx-auto flex items-start gap-3 text-xs text-[#6B7280]">
          <Info className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#252B33]">Roadmap Transparency: </span>
            <span>
              CAD ingestion and technical feature extraction are under active engineering. Automated quotation generation is planned for subsequent enterprise editions. Full automated estimation is not currently claimed as production-ready.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
