"use client";

import Link from "next/link";
import {
  Layers,
  Cpu,
  Package,
  ShoppingCart,
  Wrench,
  ShoppingBag,
  Building2,
  FileSpreadsheet,
  Users,
  Truck,
  FolderGit2,
  BarChart3,
  ArrowRight,
  Sparkles,
  Bot,
  FileCode,
  CheckCircle2,
} from "lucide-react";

export function PlatformHighlights() {
  const pillars = [
    {
      title: "Floor Execution & Orders",
      badge: "Execution Flow",
      description:
        "Connect incoming customer requirements with digital station job cards, cycle-time telemetry, and real-time dispatch logistics.",
      modules: ["Orders", "Production", "Workforce", "Deliveries"],
      metric: "91.8% OEE Benchmark",
      tone: "orange",
    },
    {
      title: "Plant Assets & IoT Telemetry",
      badge: "Asset Health",
      description:
        "Continuous multi-axis vibration and thermal telemetry. Preventative maintenance synced automatically during shift changeovers.",
      modules: ["Machines", "Maintenance", "Documents", "Performance"],
      metric: "0 Unplanned Stoppages",
      tone: "amber",
    },
    {
      title: "Supply Chain & Material Buffers",
      badge: "Demand Sourcing",
      description:
        "Live raw material inventory balances, lot-level heat tracking, supplier scorecards, and multi-vendor RFQ quote comparison matrices.",
      modules: ["Inventory", "Procurement", "Vendor Management", "RFQs"],
      metric: "14-Day Reserve Buffer",
      tone: "blue",
    },
  ];

  return (
    <section id="platform" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>UNIFIED MANUFACTURING SUITE</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything your factory needs to stay connected.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            AetherBuilt OS connects your people, floor machines, warehouse stock, and supplier network into one single operational environment.
          </p>
        </div>

        {/* 3 Expansive Architectural Pillars */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7 mb-14">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-[#EAE7DF] bg-white p-8 sm:p-10 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#F59E0B] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#F59E0B] tracking-wider uppercase font-mono">
                    PILLAR 0{idx + 1}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF9F5] text-[#252B33] border border-[#EAE7DF]">
                    {pillar.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl font-extrabold text-[#252B33] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Modules Included Pill Badges */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block">
                    Core Modules:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.modules.map((mod) => (
                      <span
                        key={mod}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FAF9F5] text-[#252B33] border border-[#EAE7DF]"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#EAE7DF] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#9CA3AF] uppercase block font-semibold">
                    Simulated Telemetry
                  </span>
                  <span className="text-sm font-bold text-[#059669]">
                    {pillar.metric}
                  </span>
                </div>
                <Link
                  href="/modules#all-modules"
                  className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-1"
                >
                  <span>Details &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Teaser Banner: AI Copilot & CAD Pipeline */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto rounded-3xl bg-gradient-to-r from-[#252B33] to-[#1A1F26] text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/30">
              <Bot className="w-3.5 h-3.5" />
              <span>AI COPILOT &amp; CAD AUTOMATION INCLUDED</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore the complete AetherBuilt OS suite.
            </h3>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              Step into the dedicated Modules Hub to test the interactive Command Center, query the conversational AI Copilot, inspect the CAD-to-quotation pipeline, and walk through all 12 operational modules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              href="/modules"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore All Modules Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Request a Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
