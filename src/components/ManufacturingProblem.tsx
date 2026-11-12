"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  FileSpreadsheet,
  MessageSquare,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Package,
  ShoppingBag,
  Truck,
  Users,
  Wrench,
  RefreshCw,
  Zap,
} from "lucide-react";

export function ManufacturingProblem() {
  const [viewMode, setViewMode] = useState<"fragmented" | "connected">("fragmented");

  const workflowStages = [
    { id: "orders", label: "Customer Order", icon: FileText, delayReason: "Specs stuck in email attachments" },
    { id: "production", label: "Production", icon: Layers, delayReason: "Line stopped; waiting on material confirmation" },
    { id: "materials", label: "Material Needs", icon: FileSpreadsheet, delayReason: "Excel spreadsheet un-synced across shifts" },
    { id: "inventory", label: "Inventory", icon: Package, delayReason: "Stockout discovered after setup begins" },
    { id: "procurement", label: "Procurement", icon: ShoppingBag, delayReason: "Urgent spot PO; vendor lead time unknown" },
    { id: "vendor", label: "Vendor", icon: MessageSquare, delayReason: "Chasing status on personal WhatsApp chats" },
    { id: "delivery", label: "Delivery", icon: Truck, delayReason: "Customer shipment delayed by 4 days" },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#F4F1EA]/60 border-y border-[#EAE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>THE REALITY OF MODERN FACTORIES</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252B33] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Running a factory shouldn&apos;t mean managing a hundred disconnected things.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Manufacturing operations are intrinsically interconnected. Yet the tools used to run them remain hopelessly fragmented — scattered across WhatsApp chats, unversioned Excel files, paper registers, and disconnected silos.
          </p>

          {/* Interactive State Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-xl bg-white border border-[#EAE7DF] shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("fragmented")}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  viewMode === "fragmented"
                    ? "bg-[#252B33] text-white shadow-xs"
                    : "text-[#6B7280] hover:text-[#252B33]"
                }`}
              >
                The Fragmented Factory (Today)
              </button>
              <button
                type="button"
                onClick={() => setViewMode("connected")}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === "connected"
                    ? "bg-[#F59E0B] text-white shadow-xs"
                    : "text-[#6B7280] hover:text-[#252B33]"
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>With AetherBuilt OS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Diagram Container */}
        <div className="rounded-2xl border border-[#EAE7DF] bg-white p-6 sm:p-8 shadow-sm">
          {viewMode === "fragmented" ? (
            /* Fragmented Silos View */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE7DF] gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                    Operational Reality &bull; Fragmented Tools
                  </span>
                  <p className="text-sm text-[#6B7280] mt-0.5">
                    A delay in one department cascades unchecked because nobody sees the complete picture in time.
                  </p>
                </div>
                <div className="text-xs text-[#DC2626] font-semibold bg-[#FEF2F2] px-3 py-1.5 rounded-lg border border-[#FCA5A5] self-start sm:self-auto">
                  High Risk of Unplanned Delays &amp; Idle Spindles
                </div>
              </div>

              {/* Workflow Chain with Disconnect Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-7 gap-3 relative">
                {workflowStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <div
                      key={stage.id}
                      className="p-3.5 rounded-xl border border-[#FCA5A5]/60 bg-[#FEF2F2]/40 flex flex-col justify-between space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#DC2626]">
                          0{idx + 1}
                        </span>
                        <div className="p-1.5 rounded-md bg-white text-[#DC2626] shadow-2xs border border-[#FCA5A5]">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-[#252B33]">
                          {stage.label}
                        </div>
                        <div className="text-[11px] text-[#DC2626] font-medium mt-1 leading-snug">
                          {stage.delayReason}
                        </div>
                      </div>

                      <div className="text-[10px] text-[#9CA3AF] pt-1 border-t border-[#FCA5A5]/40 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#DC2626]" />
                        <span>Siloed information</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dependencies Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#EAE7DF] text-[#D97706] shadow-2xs">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#252B33]">
                      Machine Maintenance Blindspot
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                      Maintenance logs sit in a paper register on the technician&apos;s desk. Production schedulers assign rush batches to a lathe that requires urgent spindle greasing.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#EAE7DF] text-[#D97706] shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#252B33]">
                      Workforce &amp; Skill Mismatch
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                      Shift operators called in via phone calls. Qualified 5-axis machinists aren&apos;t aligned with critical incoming order tolerances, causing costly scrap rework.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reveal Banner */}
              <div className="p-4 rounded-xl bg-[#FFF4DE] border border-[#FDE68A] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h4 className="text-sm font-bold text-[#92400E]">
                    See how AetherBuilt OS connects every single node into one shared reality.
                  </h4>
                  <p className="text-xs text-[#B45309] mt-0.5">
                    Click &ldquo;With AetherBuilt OS&rdquo; to visualize synchronized factory operations.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setViewMode("connected")}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#F59E0B] text-white hover:bg-[#D97706] transition-colors shadow-2xs flex items-center gap-1.5"
                >
                  <span>Reveal Connected OS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Connected AetherBuilt OS View */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE7DF] gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#059669] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    Synchronized Operations &bull; AetherBuilt OS
                  </span>
                  <p className="text-sm text-[#252B33] font-medium mt-0.5">
                    Every order, machine, material lot, and delivery milestone connects automatically in real time.
                  </p>
                </div>
                <div className="text-xs text-[#065F46] font-semibold bg-[#ECFDF5] px-3 py-1.5 rounded-lg border border-[#A7F3D0] self-start sm:self-auto flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Synchronized Across 12 Modules</span>
                </div>
              </div>

              {/* Synchronized Flow Cards */}
              <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                {[
                  { title: "Order Confirmed", desc: "CAD specs & delivery schedule locked", tone: "green" },
                  { title: "Capacity Routed", desc: "Line 2 CNC stations reserved automatically", tone: "green" },
                  { title: "BOM Evaluated", desc: "Instant stock deduction & gap detection", tone: "green" },
                  { title: "Alloy Allocated", desc: "Lot #AL-409 staged in Bay 4 racks", tone: "green" },
                  { title: "Auto Requisition", desc: "PO generated directly from shortfall", tone: "green" },
                  { title: "Supplier Synced", desc: "Tier-1 vendor confirms delivery ETA", tone: "green" },
                  { title: "On-Time Dispatch", desc: "Carrier gate pass & live client tracking", tone: "green" },
                ].map((step, idx) => (
                  <div
                    key={step.title}
                    className="p-3.5 rounded-xl border border-[#A7F3D0] bg-[#ECFDF5]/50 flex flex-col justify-between space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#059669]">
                        0{idx + 1}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#065F46]">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-[#374151] mt-1 leading-snug">
                        {step.desc}
                      </div>
                    </div>
                    <div className="text-[10px] text-[#059669] font-medium pt-1 border-t border-[#A7F3D0]/60">
                      Zero Manual Phone Calls
                    </div>
                  </div>
                ))}
              </div>

              {/* Connected Operational Dependents */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#FDE68A] text-[#B45309] shadow-2xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#92400E]">
                      Connected Asset Telemetry
                    </h4>
                    <p className="text-xs text-[#78350F] mt-1 leading-relaxed">
                      Machine health, spindle vibrations, and maintenance schedules feed directly into floor job dispatch. Maintenance occurs during shift handovers before breakdowns happen.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#FDE68A] text-[#B45309] shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#92400E]">
                      Smart Shift &amp; Skill Coordination
                    </h4>
                    <p className="text-xs text-[#78350F] mt-1 leading-relaxed">
                      Operators and QA technicians are matched directly to certified machine cells, ensuring full station coverage and zero delay in optical inspections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Conclusion */}
              <div className="p-5 rounded-xl bg-[#252B33] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4
                    className="text-base font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    AetherBuilt brings your entire factory together.
                  </h4>
                  <p className="text-xs text-[#D1D5DB] max-w-xl">
                    One unified operational environment. Clear handoffs between departments. Every stakeholder works from the exact same real-time ground truth.
                  </p>
                </div>
                <a
                  href="#modules"
                  className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs font-semibold transition-colors shadow-2xs flex items-center gap-1.5"
                >
                  <span>Explore the 12 Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
