"use client";

import Link from "next/link";
import { AetherBuiltLogo } from "./AetherBuiltLogo";
import { CurrentYear } from "./CurrentYear";
import { SITE_CONFIG, PLATFORM_MODULES } from "@/config/site";
import { ArrowUpRight, ShieldCheck, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#EAE7DF] bg-[#F4F1EA]/70 text-[#252B33] text-xs">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <AetherBuiltLogo size="md" showTagline />

            <p className="text-xs text-[#6B7280] leading-relaxed max-w-sm pt-2">
              AetherBuilt OS is an AI-native manufacturing operating system engineered to bring factory orders, floor execution, machine telemetry, inventory, procurement, and logistics into one unified control cockpit.
            </p>

            <div className="pt-2 text-xs text-[#6B7280] space-y-1">
              <div>
                Developed by{" "}
                <strong className="text-[#252B33]">
                  {SITE_CONFIG.company.legalName}
                </strong>
              </div>
              <div>
                Official Product Inquiries:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.company.email}`}
                  className="text-[#B45309] hover:underline"
                >
                  {SITE_CONFIG.company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Platform & Core Sections */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] block">
              Platform
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#modules" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  The 12 Modules
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  Connected Workflow
                </a>
              </li>
              <li>
                <a href="#command-center" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  Command Center
                </a>
              </li>
              <li>
                <a href="#ai-copilot" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  AI Copilot
                </a>
              </li>
              <li>
                <a href="#cad-workflow" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  CAD Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Modules Direct Access */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] block">
              Core Modules
            </span>
            <ul className="space-y-2">
              {PLATFORM_MODULES.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <a
                    href="#modules"
                    className="text-[#6B7280] hover:text-[#252B33] transition-colors"
                  >
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Company & Quick Links */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] block">
              Organization
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.aetheronUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B7280] hover:text-[#252B33] transition-colors inline-flex items-center gap-1"
                >
                  <span>Aetheron.AI Corporate</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  About the Team
                </a>
              </li>
              <li>
                <a href="#audience" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  Industries &amp; Personas
                </a>
              </li>
              <li>
                <a href="#demo" className="text-[#6B7280] hover:text-[#252B33] transition-colors">
                  Request a Demo
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B7280] hover:text-[#252B33] transition-colors inline-flex items-center gap-1"
                >
                  <span>App Login</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Attribution Row */}
        <div className="mt-12 pt-8 border-t border-[#EAE7DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div>
            &copy; <CurrentYear /> {SITE_CONFIG.company.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>AetherBuilt OS is an enterprise product by Aetheron.AI</span>
            </span>
            <span>&bull;</span>
            <span className="hover:text-[#252B33] cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#252B33] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
