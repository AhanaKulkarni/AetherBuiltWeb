"use client";

import { CORE_DIFFERENTIATORS } from "@/config/site";
import { Check, ShieldCheck, Zap } from "lucide-react";

export function Differentiators() {
  return (
    <section id="differentiators" className="py-20 sm:py-28 bg-[#F9F8F4] border-t border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>ARCHITECTURAL ADVANTAGES</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built around manufacturing. Not retrofitted from generic software.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Generic CRM or task management tools don&apos;t understand spindle feeds, material heat numbers, or ISO tolerance gates. AetherBuilt is purpose-engineered for modern industrial plants.
          </p>
        </div>

        {/* 6 Core Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.number}
              className="p-6 sm:p-7 rounded-2xl border border-[#EAE7DF] bg-white shadow-2xs hover:shadow-sm transition-all duration-300 hover:border-[#F59E0B] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#F59E0B] font-mono">
                    {diff.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-center text-[#B45309]">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-[#252B33] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {diff.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE7DF] flex items-center text-[11px] font-semibold text-[#B45309]">
                <span>Purpose-built for shop floors</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
