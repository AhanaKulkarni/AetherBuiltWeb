"use client";

import { CORE_DIFFERENTIATORS } from "@/config/site";
import { Check, ShieldCheck, Zap, XCircle, CheckCircle2 } from "lucide-react";

export function Differentiators() {
  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] border-t border-[#EAE7DF] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>ARCHITECTURAL ADVANTAGES</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built around manufacturing. Not retrofitted from generic software.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            Generic CRM or office task tools don&apos;t understand spindle feeds, alloy lot heat numbers, or ISO tolerance gates. AetherBuilt is purpose-engineered from the shop floor up.
          </p>
        </div>

        {/* 6 Core Differentiators Grid (Expansive & Screen Filling) */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CORE_DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.number}
              className="p-7 sm:p-8 rounded-3xl border border-[#EAE7DF] bg-white shadow-2xs hover:shadow-md transition-all duration-300 hover:border-[#F59E0B] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold text-[#F59E0B] font-mono tracking-wider">
                    PILLAR {diff.number}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-center text-[#B45309] shadow-2xs">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-[#252B33] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {diff.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#EAE7DF] flex items-center text-xs font-semibold text-[#B45309]">
                <span>Engineered for plant operations</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Comparison Matrix: Disconnected Tools vs AetherBuilt OS */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto rounded-3xl border border-[#EAE7DF] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] block mb-1">
              THE STRUCTURAL DIFFERENCE
            </span>
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-[#252B33]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How AetherBuilt compares to traditional factory workflows
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FEF2F2]/50 border border-[#FCA5A5]/60 space-y-4">
              <div className="flex items-center gap-2.5 text-[#DC2626] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>The Traditional Factory Reality</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">&bull;</span>
                  <span>Scattered updates across personal WhatsApp threads and phone calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">&bull;</span>
                  <span>Unversioned Excel spreadsheets that drift out of sync between shifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">&bull;</span>
                  <span>Machine maintenance records trapped in paper logs on technician desks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">&bull;</span>
                  <span>Material shortages discovered only after machine setup has begun</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#ECFDF5]/60 border border-[#A7F3D0] space-y-4">
              <div className="flex items-center gap-2.5 text-[#065F46] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#10B981]" />
                <span>The AetherBuilt OS Standard</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#374151]">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">&bull;</span>
                  <span>Single connected operating system with synchronized shift feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">&bull;</span>
                  <span>Live ground truth over active work orders, inventory buffers, and machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">&bull;</span>
                  <span>Preventative maintenance synced automatically with scheduled changeovers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">&bull;</span>
                  <span>Automated PO requisitions triggered the second shortfall is detected</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
