import type { Metadata } from "next";
import Link from "next/link";
import { Differentiators } from "@/components/Differentiators";
import { ShieldCheck, ArrowRight, CheckCircle2, XCircle, Zap, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Why AetherBuilt — Built for Manufacturing Realities",
  description:
    "Discover why modern manufacturing enterprises choose AetherBuilt OS over disconnected spreadsheets and rigid legacy ERPs.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#F9F8F4]">
      {/* Header */}
      <section className="py-14 sm:py-20 border-b border-[#EAE7DF] bg-[#FAF9F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>PURPOSE-BUILT FOR MODERN MANUFACTURING</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why AetherBuilt OS?
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Built from the ground up for the realities of the factory floor — dirty hands, fast shift changes, noisy shops, and multi-step assembly lines — not generic office collaboration.
          </p>
        </div>
      </section>

      {/* Differentiators & Comparison Component */}
      <Differentiators />

      {/* Deep Architectural Advantages */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#EAE7DF]">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                THE CORE BOTTLENECK
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#252B33]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why Legacy ERPs Fail Small &amp; Medium Manufacturers
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Traditional enterprise software takes months to configure, charges prohibitive per-user licenses, requires tedious manual data entry, and fails to capture real-time machine telemetry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#252B33]">
                  Zero Double-Handling
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  In AetherBuilt, an order entry automatically draws down CAD specs and checks warehouse stock buffers without re-typing data across 3 separate portals.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#252B33]">
                  Telemetry-Informed Scheduling
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  Production schedules adjust automatically to spindle vibration anomalies and preventative service windows before unexpected halts occur.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#EAE7DF] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#252B33]">
                  Contextual AI Copilot
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  Ask natural language questions like &ldquo;Why is batch #AB-842 delayed?&rdquo; and receive cross-module diagnoses linking maintenance, materials, and dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-20 bg-[#252B33] text-white">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            See how AetherBuilt OS fits into your factory.
          </h2>
          <p className="text-sm sm:text-base text-[#D1D5DB] max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute tailored walkthrough with our solutions engineering team.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm transition-all shadow-md"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all"
            >
              <span>Explore All Modules &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
