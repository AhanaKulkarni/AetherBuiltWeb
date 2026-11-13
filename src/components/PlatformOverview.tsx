"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PLATFORM_MODULES,
  ModuleItem,
} from "@/config/site";
import {
  ShoppingCart,
  Layers,
  Cpu,
  Wrench,
  Package,
  ShoppingBag,
  Building2,
  FileSpreadsheet,
  Users,
  Truck,
  FolderGit2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  Sparkles,
  Info,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingCart,
  Layers,
  Cpu,
  Wrench,
  Package,
  ShoppingBag,
  Building2,
  FileSpreadsheet,
  Users,
  Truck,
  FolderGit2,
  BarChart3,
};

type CategoryFilter = "all" | "Execution" | "Assets" | "Supply Chain";

export function PlatformOverview() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const filteredModules = PLATFORM_MODULES.filter(
    (m) => activeFilter === "all" || m.category === activeFilter
  );

  return (
    <section id="all-modules" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>UNIFIED PLATFORM ARCHITECTURE</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything your factory needs to stay connected.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            One platform designed around the way manufacturing businesses actually operate — bridging floor execution, plant assets, and supply chain coordination.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            {[
              { id: "all", label: "All 12 Modules" },
              { id: "Execution", label: "Production & Execution" },
              { id: "Assets", label: "Plant Assets & Maintenance" },
              { id: "Supply Chain", label: "Supply Chain & Sourcing" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeFilter === tab.id
                    ? "bg-[#252B33] text-white shadow-xs"
                    : "bg-white text-[#6B7280] hover:text-[#252B33] border border-[#EAE7DF]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Module Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModules.map((mod) => {
            const IconComponent = ICON_MAP[mod.iconName] || Layers;
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className="group relative rounded-2xl border border-[#EAE7DF] bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#F59E0B] cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row with Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-center text-[#252B33] group-hover:bg-[#FFF4DE] group-hover:text-[#B45309] group-hover:border-[#FDE68A] transition-colors shadow-2xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#9CA3AF] tracking-wider uppercase block">
                          MODULE {mod.number}
                        </span>
                        <h3
                          className="text-lg font-bold text-[#252B33] group-hover:text-[#B45309] transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {mod.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF9F5] text-[#6B7280] border border-[#EAE7DF]">
                      {mod.shortTag}
                    </span>
                  </div>

                  {/* Headline & Concise Description */}
                  <p className="text-xs font-semibold text-[#30343B] mb-2 leading-snug">
                    {mod.headline}
                  </p>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                    {mod.description}
                  </p>
                </div>

                {/* Micro Interface Preview inside Card */}
                <div className="mt-5 pt-4 border-t border-[#EAE7DF] space-y-3">
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#9CA3AF] block uppercase font-medium">
                        {mod.interfaceMetric.label}
                      </span>
                      <span className="font-bold text-[#252B33]">
                        {mod.interfaceMetric.value}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#059669] font-medium text-right max-w-[140px] truncate">
                      {mod.interfaceMetric.sublabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-[#B45309] group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect module capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Development Roadmap & Product Scope Notice */}
        <div className="mt-12 p-4 rounded-xl border border-[#EAE7DF] bg-white/70 max-w-4xl mx-auto flex items-start gap-3 text-xs text-[#6B7280]">
          <Info className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#252B33]">Platform Scope Note: </span>
            <span>
              The modules above define the functional architecture and design scope of AetherBuilt OS. Capabilities reflect the product roadmap and are rolled out progressively across core operational releases.
            </span>
          </div>
        </div>
      </div>

      {/* Deep-Dive Module Modal */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#252B33]/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#EAE7DF] shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#6B7280] hover:text-[#252B33] hover:bg-[#FAF9F5] border border-transparent hover:border-[#EAE7DF] transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Module Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center shadow-xs">
                  {(() => {
                    const IconComponent =
                      ICON_MAP[selectedModule.iconName] || Layers;
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F59E0B] tracking-wider uppercase">
                      MODULE {selectedModule.number} &bull; {selectedModule.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-extrabold text-[#252B33]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {selectedModule.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#30343B] mt-1">
                    {selectedModule.headline}
                  </p>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                {selectedModule.description}
              </p>

              {/* Key Capabilities List */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33]">
                  Key Operational Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedModule.keyCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#374151]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Interface Record Preview */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] mb-6">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">
                  Connected Record Preview (Sample Model)
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-[11px] text-[#6B7280]">
                      {selectedModule.sampleRecord.code}
                    </span>
                    <div className="font-semibold text-[#252B33]">
                      {selectedModule.sampleRecord.title}
                    </div>
                    <div className="text-[11px] text-[#6B7280] mt-0.5">
                      {selectedModule.sampleRecord.detail}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
                    {selectedModule.sampleRecord.status}
                  </span>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EAE7DF]">
                <span className="text-xs text-[#6B7280]">
                  Integrated into the AetherBuilt Command Center
                </span>
                <a
                  href="#demo"
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 rounded-lg bg-[#252B33] hover:bg-[#1E232A] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Request a Factory Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
