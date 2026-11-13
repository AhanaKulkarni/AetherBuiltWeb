"use client";

import { useState } from "react";
import { TARGET_AUDIENCES } from "@/config/site";
import {
  Users,
  Briefcase,
  Layers,
  ShoppingBag,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

const ROLE_ICONS: Record<string, React.ElementType> = {
  "Factory Owners": Briefcase,
  "Production Managers": Layers,
  "Procurement & Sourcing Teams": ShoppingBag,
  "Maintenance Teams": Wrench,
  "Operations & Quality Teams": Users,
};

export function AudienceSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const activePersona = TARGET_AUDIENCES[activeRoleIndex];

  return (
    <section id="industries" className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F5] border-t border-[#EAE7DF] relative">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <Users className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>BUILT FOR INDUSTRIAL LEADERS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Designed around the people who keep factories moving.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            From the factory owner tracking weekly shipments to the shift supervisor resolving station bottlenecks, AetherBuilt is engineered for the ground reality of industrial manufacturing.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {TARGET_AUDIENCES.map((persona, idx) => {
            const Icon = ROLE_ICONS[persona.role] || Users;
            const isSelected = activeRoleIndex === idx;

            return (
              <button
                key={persona.role}
                type="button"
                onClick={() => setActiveRoleIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#252B33] text-white shadow-xs"
                    : "bg-white text-[#6B7280] hover:text-[#252B33] border border-[#EAE7DF]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#F59E0B]" : "text-[#9CA3AF]"}`} />
                <span>{persona.role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Showcase Card */}
        <div className="w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto rounded-3xl border border-[#EAE7DF] bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                <span>{activePersona.tagline}</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#252B33]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {activePersona.role}
              </h3>

              {/* Day-to-Day Challenge */}
              <div className="p-4 rounded-xl bg-[#FEF2F2]/60 border border-[#FCA5A5]/60 text-xs">
                <span className="font-bold text-[#DC2626] block uppercase tracking-wider mb-1">
                  The Daily Friction Today:
                </span>
                <p className="text-[#4B5563] leading-relaxed">
                  {activePersona.challenge}
                </p>
              </div>

              {/* How AetherBuilt Solves It */}
              <div className="p-4 rounded-xl bg-[#ECFDF5]/60 border border-[#A7F3D0] text-xs">
                <span className="font-bold text-[#065F46] block uppercase tracking-wider mb-1">
                  How AetherBuilt Simplifies Your Day:
                </span>
                <p className="text-[#374151] leading-relaxed">
                  {activePersona.howAetherBuiltHelps}
                </p>
              </div>
            </div>

            {/* Right KPI / Impact Box */}
            <div className="md:col-span-5">
              <div className="rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] flex items-center justify-center shadow-2xs">
                  {(() => {
                    const Icon = ROLE_ICONS[activePersona.role] || Users;
                    return <Icon className="w-6 h-6" />;
                  })()}
                </div>

                <div
                  className="text-2xl font-extrabold text-[#252B33]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {activePersona.statHighlight}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {activePersona.statDescription}
                </p>

                <div className="pt-3 border-t border-[#EAE7DF]">
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B45309] hover:underline"
                  >
                    <span>Schedule a demo for this role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
