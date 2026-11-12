"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ProductPreview } from "./ProductPreview";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-blueprint-grid">
      {/* Soft Sunrise Ambient Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-sunrise-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow, Headlines & CTAs */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#EAE7DF] shadow-xs text-xs font-semibold text-[#B45309]"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#252B33] leading-[1.12]"
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
            className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {SITE_CONFIG.heroSubheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href="#demo"
              className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#252B33] hover:bg-[#1A1F26] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#platform"
              className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-[#252B33] bg-white hover:bg-[#FFF4DE]/50 border border-[#EAE7DF] rounded-xl transition-all duration-200 shadow-2xs hover:border-[#F59E0B] flex items-center justify-center gap-2"
            >
              <span>Explore the Platform</span>
              <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
            </a>
          </motion.div>

          {/* Supporting Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-xs text-[#6B7280] pt-1"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              {SITE_CONFIG.heroFootnote}
            </span>
            <span className="text-[#D1D5DB]">&bull;</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
              Enterprise-grade industrial security
            </span>
          </motion.div>
        </div>

        {/* Hero Visual: Native React Command Center preview */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="pt-2"
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
