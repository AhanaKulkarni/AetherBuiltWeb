"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";

export function AboutAetheron() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FAF9F5] border-t border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#EAE7DF] bg-white p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#EAE7DF]">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl bg-white border border-[#EAE7DF] shadow-xs flex items-center justify-center p-2 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/brand/aetheron-emblem.png"
                  alt="Aetheron.AI Technologies Emblem"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase block">
                  THE COMPANY BEHIND AETHERBUILT
                </span>
                <h3
                  className="text-xl sm:text-2xl font-extrabold text-[#252B33]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Built by Aetheron.AI
                </h3>
                <span className="text-xs text-[#6B7280]">
                  {SITE_CONFIG.company.legalName}
                </span>
              </div>
            </div>

            <a
              href={SITE_CONFIG.aetheronUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#EAE7DF] text-xs font-semibold text-[#252B33] hover:text-[#B45309] hover:border-[#F59E0B] bg-[#FAF9F5] hover:bg-white transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Visit Aetheron Corporate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-6 space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            <p>
              {SITE_CONFIG.company.description}
            </p>
            <p>
              Aetheron.AI focuses on foundational engineering — combining applied machine intelligence, resilient systems architecture, and human-centered design to help industrial enterprises replace disconnected manual practices with dependable operational clarity.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#EAE7DF] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Registered Industrial Technology Entity &bull; Republic of India</span>
            </div>
            <div className="text-[11px] text-[#9CA3AF]">
              CIN / Corporate Registry verified &bull; Dedicated Flagship: AetherBuilt OS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
