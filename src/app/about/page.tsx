import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ExternalLink, ShieldCheck, ArrowRight, CheckCircle2, Cpu, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — AetherBuilt OS by Aetheron.AI",
  description:
    "Learn about Aetheron.AI Technologies Private Limited, the intelligent technology company behind AetherBuilt OS.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#F9F8F4]">
      {/* Header */}
      <section className="py-14 sm:py-20 border-b border-[#EAE7DF] bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>THE COMPANY BEHIND AETHERBUILT</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Engineering intelligence for a world that never stops moving.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Aetheron.AI Technologies Private Limited builds advanced systems, applied intelligence platforms, and AetherBuilt — our flagship operating system for modern industrial manufacturing.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto rounded-3xl border border-[#EAE7DF] bg-white p-8 sm:p-12 lg:p-16 shadow-sm space-y-12">
            {/* Top Identity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-[#EAE7DF]">
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                <div className="relative w-24 h-24 rounded-2xl bg-white border border-[#EAE7DF] shadow-md flex items-center justify-center p-3">
                  <Image
                    src="/images/brand/aetheron-emblem.png"
                    alt="Aetheron.AI Technologies Emblem"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-[#252B33]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Aetheron.AI
                  </h2>
                  <p className="text-xs font-semibold text-[#B45309] mt-0.5">
                    {SITE_CONFIG.company.legalName}
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.aetheronUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-[#EAE7DF] text-xs font-bold text-[#252B33] hover:text-[#B45309] hover:border-[#F59E0B] bg-[#FAF9F5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Visit aetheron.ai</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                <p>
                  At <strong>Aetheron.AI Technologies Private Limited</strong>, we believe intelligent software should do far more than look impressive on a dashboard. It must solve foundational, mission-critical operational challenges where real people, heavy machinery, physical inventory, and complex supply networks meet.
                </p>
                <p>
                  Today, small and medium-sized factories run on an exhausting patchwork of personal WhatsApp groups, paper registers, and unversioned Excel workbooks. When a spindle malfunctions or a supplier delivers delayed raw alloy, the entire shop floor stumbles into firefighting mode.
                </p>
                <p>
                  We engineered <strong>AetherBuilt OS</strong> to end this operational friction. By connecting every facet of plant operations into a single ground truth, manufacturers gain real-time predictability, tighter tolerances, and synchronized floor intelligence.
                </p>
              </div>
            </div>

            {/* Foundational Principles */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  HOW WE OPERATE
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-[#252B33]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Core Engineering Convictions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="text-base font-bold text-[#252B33]">
                    Floor-First Ergonomics
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    Designed for shop-floor supervisors with greasy hands, noisy machine bays, fast shift changeovers, and tablet usability — not generic boardroom slide decks.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="text-base font-bold text-[#252B33]">
                    Mathematical Grounding
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    Our AI models and optimization algorithms are anchored strictly in physical machine limits, raw material chemistry, and real batch telemetry without hallucinated assumptions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="text-base font-bold text-[#252B33]">
                    Unwavering Data Sovereignty
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    Industrial drawings, customer bill-of-materials, and proprietary vendor pricing are safeguarded with strict enterprise-grade privacy controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Registry & Direct Contact */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#EAE7DF] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7280]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="font-semibold text-[#252B33]">
                  Registered Corporate Entity &bull; Republic of India
                </span>
              </div>
              <div>
                Official Contact:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.company.email}`}
                  className="text-[#B45309] font-bold hover:underline"
                >
                  {SITE_CONFIG.company.email}
                </a>{" "}
                &bull; {SITE_CONFIG.company.phones.join(" / ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-[#252B33] text-white">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to discover how AetherBuilt can transform your factory?
          </h2>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm transition-all shadow-md"
            >
              <span>Schedule a Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/why-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all"
            >
              <span>Explore Why Us &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
