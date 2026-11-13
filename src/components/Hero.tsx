"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Sparkles, Activity, Layers, Cpu } from "lucide-react";
import { ProductPreview } from "./ProductPreview";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-blueprint-grid">
      {/* Expansive Sunrise Ambient Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[720px] bg-sunrise-glow pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Editorial Eyebrow, Headlines & CTAs */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center space-y-6 mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#EAE7DF] shadow-xs text-xs font-bold text-[#B45309]"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="tracking-wider uppercase">
              {SITE_CONFIG.heroEyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#252B33] leading-[1.08]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your entire factory.{" "}
            <span className="text-[#B45309] block sm:inline">Finally, in sync.</span>
          </motion.h1>

          {/* Supporting Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-xl lg:text-2xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto font-normal"
          >
            {SITE_CONFIG.heroSubheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3"
          >
            <Link
              href="/#demo"
              className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#252B33] hover:bg-[#1A1F26] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/modules"
              className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold text-[#252B33] bg-white hover:bg-[#FFF4DE]/60 border border-[#EAE7DF] rounded-xl transition-all duration-200 shadow-2xs hover:border-[#F59E0B] flex items-center justify-center gap-2"
            >
              <span>Explore the 12 Modules</span>
              <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
            </Link>
          </motion.div>

          {/* Supporting Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#6B7280] pt-2"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              {SITE_CONFIG.heroFootnote}
            </span>
            <span className="text-[#D1D5DB] hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              Enterprise ISO &amp; Plant Security
            </span>
            <span className="text-[#D1D5DB] hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              12 Connected Operational Modules
            </span>
          </motion.div>
        </div>

        {/* Hero Visual: Expansive React Command Center Preview */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="pt-2 w-full"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
