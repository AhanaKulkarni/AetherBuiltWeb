import type { Metadata } from "next";
import Link from "next/link";
import { PlatformOverview } from "@/components/PlatformOverview";
import { FactoryWorkflow } from "@/components/FactoryWorkflow";
import { CommandCenter } from "@/components/CommandCenter";
import { AICopilot } from "@/components/AICopilot";
import { CADWorkflow } from "@/components/CADWorkflow";
import { ArrowRight, Layers, Zap, BarChart3, Bot, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Modules & Architecture — AetherBuilt OS",
  description:
    "Explore the 12 connected modules, live command center, conversational AI Copilot, and CAD-to-quotation automation pipeline in AetherBuilt OS.",
};

export default function ModulesPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#F9F8F4]">
      {/* Hub Header */}
      <section className="py-12 sm:py-16 border-b border-[#EAE7DF] bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>OPERATIONAL ARCHITECTURE &amp; SUITE</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Modules &amp; Intelligence Behind AetherBuilt OS
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            From shop floor CNC telemetry to supplier RFQ bidding and engineering CAD takeoffs, explore each connected capability designed for modern manufacturing.
          </p>

          {/* Quick Anchor Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            <a
              href="#all-modules"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#EAE7DF] text-[#252B33] hover:border-[#F59E0B] hover:text-[#B45309] transition-all shadow-2xs flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#F59E0B]" />
              <span>12 Core Modules</span>
            </a>

            <a
              href="#workflow"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#EAE7DF] text-[#252B33] hover:border-[#F59E0B] hover:text-[#B45309] transition-all shadow-2xs flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#F59E0B]" />
              <span>Connected Workflow</span>
            </a>

            <a
              href="#command-center"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#EAE7DF] text-[#252B33] hover:border-[#F59E0B] hover:text-[#B45309] transition-all shadow-2xs flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
              <span>Command Center</span>
            </a>

            <a
              href="#ai-copilot"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#EAE7DF] text-[#252B33] hover:border-[#F59E0B] hover:text-[#B45309] transition-all shadow-2xs flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-[#F59E0B]" />
              <span>AI Copilot</span>
            </a>

            <a
              href="#cad-automation"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-[#EAE7DF] text-[#252B33] hover:border-[#F59E0B] hover:text-[#B45309] transition-all shadow-2xs flex items-center gap-2"
            >
              <FileCode className="w-4 h-4 text-[#F59E0B]" />
              <span>CAD Automation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. The 12 Core Modules */}
      <PlatformOverview />

      {/* 2. Connected Factory Workflow Engine */}
      <FactoryWorkflow />

      {/* 3. AetherBuilt Command Center */}
      <CommandCenter />

      {/* 4. AI Copilot Intelligence Simulator */}
      <AICopilot />

      {/* 5. CAD-to-Quotation Pipeline */}
      <CADWorkflow />

      {/* Bottom Conversion Banner */}
      <section className="py-20 bg-[#252B33] text-white">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to bring these capabilities into your factory?
          </h2>
          <p className="text-sm sm:text-base text-[#D1D5DB] max-w-2xl mx-auto leading-relaxed">
            Experience an interactive demonstration configured for your plant&apos;s specific production lines, machines, and operational dependencies.
          </p>
          <div className="pt-2">
            <Link
              href="/#demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm transition-all shadow-md"
            >
              <span>Schedule a Personalized Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
