"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONNECTED_WORKFLOW_STEPS } from "@/config/site";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Layers,
  ShoppingCart,
  Package,
  ShoppingBag,
  Cpu,
  Truck,
  Sparkles,
  Zap,
} from "lucide-react";

export function FactoryWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % CONNECTED_WORKFLOW_STEPS.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const activeStep = CONNECTED_WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-[#FAF9F5] border-y border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>CONNECTED OPERATIONAL ARCHITECTURE</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Manufacturing is connected. Your operations should be too.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Follow how a single customer requirement travels through AetherBuilt — automatically synchronizing engineering, inventory buffers, supplier RFQs, machine telemetry, and final logistics.
          </p>

          {/* Interactive Player Controls */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#EAE7DF] text-xs font-semibold text-[#252B33] hover:border-[#F59E0B] shadow-2xs transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Pause Walkthrough</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#F59E0B] fill-current" />
                  <span>Auto-Play Sequence</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex(0);
              }}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-[#EAE7DF] text-xs font-medium text-[#6B7280] hover:text-[#252B33] transition-colors"
              title="Reset to beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Step Progression Bar / Node Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {CONNECTED_WORKFLOW_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                  isActive
                    ? "bg-white border-[#F59E0B] shadow-sm ring-2 ring-[#F59E0B]/20"
                    : isCompleted
                    ? "bg-white/80 border-[#A7F3D0] text-[#065F46]"
                    : "bg-white/40 border-[#EAE7DF] text-[#6B7280] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  <span>STEP {step.step}</span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                  ) : null}
                </div>
                <div
                  className={`text-xs font-semibold truncate ${
                    isActive ? "text-[#252B33]" : "text-[#4B5563]"
                  }`}
                >
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Visual Showcase Card */}
        <div className="rounded-2xl border border-[#EAE7DF] bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle background ambient pulse */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFF4DE]/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[#F59E0B] tracking-wider uppercase">
                  STEP {activeStep.step} OF 06
                </span>
                <span className="text-[#9CA3AF]">&bull;</span>
                <span className="font-semibold text-[#6B7280]">
                  Connected Modules: {activeStep.module}
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

              {/* Action Trigger Box */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Automated Architectural Handoff
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#252B33]">
                  <ArrowRight className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">
                    {activeStep.action}
                  </span>
                </div>
              </div>

              {/* Step Navigation Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepIndex((prev) => Math.max(0, prev - 1));
                  }}
                  className="px-3.5 py-2 rounded-lg border border-[#EAE7DF] text-xs font-semibold text-[#6B7280] disabled:opacity-40 hover:bg-[#FAF9F5] transition-colors"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === CONNECTED_WORKFLOW_STEPS.length - 1}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepIndex((prev) =>
                      Math.min(CONNECTED_WORKFLOW_STEPS.length - 1, prev + 1)
                    );
                  }}
                  className="px-4 py-2 rounded-lg bg-[#252B33] text-white text-xs font-semibold hover:bg-[#1E232A] transition-colors flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Interactive State Visual */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE7DF]">
                  <span className="text-xs font-bold text-[#252B33]">
                    Telemetry Status Monitor
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    {activeStep.state}
                  </span>
                </div>

                {/* Simulated Data Feed */}
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-[#EAE7DF] flex items-center justify-between">
                    <span className="text-[#6B7280]">Phase Identifier:</span>
                    <span className="font-mono font-medium text-[#252B33]">
                      PHASE_0{activeStepIndex + 1}_SYNC
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-[#EAE7DF] flex items-center justify-between">
                    <span className="text-[#6B7280]">Primary Stakeholder:</span>
                    <span className="font-medium text-[#252B33]">
                      {activeStep.module.split("&")[0].trim()} Lead
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-[#EAE7DF] flex items-center justify-between">
                    <span className="text-[#6B7280]">Manual Intervention:</span>
                    <span className="font-semibold text-[#059669]">
                      Zero Re-Keying Required
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#9CA3AF] text-center">
                  *Illustrates structured information flow across AetherBuilt modules
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
