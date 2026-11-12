"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Cpu,
  Package,
  ShoppingCart,
  AlertCircle,
  Clock,
  CheckCircle2,
  Activity,
  Layers,
  ArrowUpRight,
  Filter,
  Maximize2,
  Calendar,
  Sparkles,
} from "lucide-react";

type CenterView = "plant" | "telemetry" | "supply" | "alerts";

export function CommandCenter() {
  const [activeView, setActiveView] = useState<CenterView>("plant");

  return (
    <section id="command-center" className="py-20 sm:py-28 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <BarChart3 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>EXECUTIVE &amp; FLOOR CONTROL ROOM</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            One command centre for your entire factory.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Eliminate conflicting reports. The AetherBuilt Command Center brings live production, asset telemetry, inventory buffers, and procurement activities into one unified cockpit.
          </p>

          {/* Interactive View Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "plant", label: "Plant Floor Overview", icon: Layers },
              { id: "telemetry", label: "Machine Telemetry & Health", icon: Cpu },
              { id: "supply", label: "Supply Chain & Material Buffers", icon: Package },
              { id: "alerts", label: "Operational Alerts & Shift Handover", icon: AlertCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveView(tab.id as CenterView)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                    activeView === tab.id
                      ? "bg-[#252B33] text-white shadow-xs"
                      : "bg-white text-[#6B7280] hover:text-[#252B33] border border-[#EAE7DF]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Command Center Chassis */}
        <div className="rounded-2xl border border-[#EAE7DF] bg-white shadow-xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="px-5 py-3.5 bg-[#FAF9F5] border-b border-[#EAE7DF] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#252B33]" style={{ fontFamily: "var(--font-heading)" }}>
                AetherBuilt Command Center &bull; Control Hub
              </span>
              <span className="h-4 w-px bg-[#EAE7DF]" />
              <span className="inline-flex items-center gap-1.5 text-[#059669] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Live Plant Feed Active
              </span>
            </div>

            <div className="flex items-center gap-3 text-[#6B7280]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>Today: Shift A / B Transition</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A] font-semibold">
                Illustrative Model
              </span>
            </div>
          </div>

          {/* Dynamic Content Panel by Active Tab */}
          <div className="p-6 sm:p-8">
            {activeView === "plant" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF]">
                    <div className="text-xs text-[#6B7280]">Overall Equipment Effectiveness</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">91.8%</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">+3.2% above benchmark</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF]">
                    <div className="text-xs text-[#6B7280]">Active Batches on Floor</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">18 Batches</div>
                    <div className="text-[11px] text-[#6B7280] font-medium mt-1">100% on delivery track</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF]">
                    <div className="text-xs text-[#6B7280]">Current Shift Throughput</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">420 units/hr</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">Cycle pace 18.4s</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF]">
                    <div className="text-xs text-[#6B7280]">Optical Quality Pass Rate</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">99.82%</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">0.18% scrap deviation</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#252B33]">Production Lines In Operation</span>
                      <span className="text-[11px] text-[#6B7280]">3 Lines Running</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Line 1: High Pressure Valves</div>
                          <div className="text-[11px] text-[#6B7280]">Work Order #AB-842 &bull; 1,056/1,200 done</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-[#065F46]">RUNNING</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Line 2: Flange Turning Cell</div>
                          <div className="text-[11px] text-[#6B7280]">Work Order #AB-840 &bull; 480/500 done</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-[#065F46]">RUNNING</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Line 3: Optical Inspection &amp; Wash</div>
                          <div className="text-[11px] text-[#6B7280]">Bay 2 Packaging Queue &bull; 920 done</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-[#065F46]">RUNNING</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#252B33]">Upcoming Dispatch Window</span>
                      <span className="text-[11px] text-[#6B7280]">Today&apos;s Dock Logistics</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Pune Automotive Consignment</div>
                          <div className="text-[11px] text-[#6B7280]">Batch #AB-840 &bull; Carrier: BlueDart Freight</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EFF6FF] text-[#1E40AF]">14:30 DOCK</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Gujarat Valve Assemblies</div>
                          <div className="text-[11px] text-[#6B7280]">Batch #AB-838 &bull; Carrier: SafeX Logistics</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EFF6FF] text-[#1E40AF]">17:00 DOCK</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#252B33]">Export Flange Crates</div>
                          <div className="text-[11px] text-[#6B7280]">Customs Cleared &bull; Port Container Slot</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF9F5] text-[#6B7280]">TOMORROW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === "telemetry" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Machine Synchronized</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">18 of 19 Active</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">1 in scheduled maintenance</div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Mean Time Between Failure</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">428 Hours</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">Zero unplanned halts this week</div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Preventative Compliance</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">96.4%</div>
                    <div className="text-[11px] text-[#B45309] font-medium mt-1">Next ticket due in 14h</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white">
                  <div className="text-xs font-bold text-[#252B33] mb-3">Live Vibration &amp; Thermal Telemetry</div>
                  <div className="space-y-2 text-xs">
                    {[
                      { name: "5-Axis CNC Cell (CNC-04)", vib: "0.82 mm/s", temp: "41.2°C", status: "Optimal", tone: "green" },
                      { name: "Heavy Turning Lathe (TL-02)", vib: "0.95 mm/s", temp: "44.0°C", status: "Optimal", tone: "green" },
                      { name: "Loom Unit B-04", vib: "1.10 mm/s", temp: "46.1°C", status: "Grease PM Due", tone: "amber" },
                      { name: "Hydraulic Press (HP-01)", vib: "0.45 mm/s", temp: "39.5°C", status: "Optimal", tone: "green" },
                    ].map((m) => (
                      <div key={m.name} className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-[#252B33]">{m.name}</span>
                        <div className="flex items-center gap-4 text-[#6B7280]">
                          <span>Vibration: <strong className="text-[#252B33]">{m.vib}</strong></span>
                          <span>Core Temp: <strong className="text-[#252B33]">{m.temp}</strong></span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            m.tone === "green" ? "bg-[#ECFDF5] text-[#065F46]" : "bg-[#FFF4DE] text-[#B45309]"
                          }`}>
                            {m.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "supply" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Raw Material Buffer</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">14 Days Reserve</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">Safety stock threshold met</div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Active Sourcing Rounds</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">3 RFQs Open</div>
                    <div className="text-[11px] text-[#B45309] font-medium mt-1">Bids in review for tooling</div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]">
                    <div className="text-xs text-[#6B7280]">Inbound Freight in Transit</div>
                    <div className="text-2xl font-extrabold text-[#252B33] mt-1">2 Shipments</div>
                    <div className="text-[11px] text-[#059669] font-medium mt-1">ETA tomorrow morning</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#EAE7DF] bg-white">
                  <div className="text-xs font-bold text-[#252B33] mb-3">Key Warehouse Staging &amp; Stock Levels</div>
                  <div className="space-y-2 text-xs">
                    {[
                      { item: "Stainless 304 Round Bar Ø40mm", onHand: "4,200 kg", allocated: "2,650 kg", buffer: "14 Days", status: "Healthy" },
                      { item: "Alloy 316L Sheet Plate (6mm)", onHand: "1,800 kg", allocated: "1,100 kg", buffer: "9 Days", status: "Adequate" },
                      { item: "CNC Carbide Milling Inserts", onHand: "450 pcs", allocated: "320 pcs", buffer: "18 Days", status: "RFQ Open" },
                    ].map((row) => (
                      <div key={row.item} className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-[#252B33]">{row.item}</span>
                        <div className="flex items-center gap-4 text-[#6B7280]">
                          <span>On Hand: <strong className="text-[#252B33]">{row.onHand}</strong></span>
                          <span>Allocated: <strong className="text-[#252B33]">{row.allocated}</strong></span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-[#065F46]">
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "alerts" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="text-xs font-bold text-[#252B33]">Shift Handover &amp; Operational Events</div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#B45309] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#92400E]">14:00 Scheduled Changeover Greasing</div>
                      <div className="text-[#78350F] text-[11px] mt-0.5">
                        Loom Unit B-04 lubrication ticket #MNT-119 assigned to technician R. Sharma during 15-minute operator shift pause.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#065F46] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#065F46]">Lot #AL-409 Released from Inbound QA</div>
                      <div className="text-[#047857] text-[11px] mt-0.5">
                        Material test certificate verified against ISO 9001 specs. 400kg moved to Line 3 staging buffer.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-start gap-3">
                    <Activity className="w-4 h-4 text-[#6B7280] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#252B33]">Shift A Station Coverage at 100%</div>
                      <div className="text-[#6B7280] text-[11px] mt-0.5">
                        34 operators present. Cell 3 lead M. Khan confirmed station calibration.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
