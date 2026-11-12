"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ShoppingCart,
  Cpu,
  Package,
  ShoppingBag,
  Users,
  Truck,
  Sparkles,
  Activity,
  CheckCircle2,
  Clock,
  ChevronRight,
  Bot,
  Zap,
  ArrowUpRight,
  CircleDot,
  Wrench,
  AlertCircle,
  BarChart3,
  Search,
  Sliders,
  Database,
  ArrowRight,
} from "lucide-react";

type WorkspaceTab = "overview" | "production" | "machines" | "orders";

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("overview");
  const [copilotActive, setCopilotActive] = useState(false);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Subtle outer ambient shadow & sunrise backlight */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F59E0B]/20 via-[#FBBF24]/20 to-[#F59E0B]/10 rounded-2xl blur-xl opacity-70 -z-10" />

      {/* Main Command Center Chassis */}
      <div className="relative rounded-xl border border-[#EAE7DF] bg-[#FFFFFF] shadow-2xl overflow-hidden transition-all duration-300">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#FAF9F5] border-b border-[#EAE7DF] text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
            </div>
            <span className="h-3.5 w-px bg-[#EAE7DF] mx-1" />
            <div className="flex items-center gap-1.5 text-[#252B33] font-medium">
              <span className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                AetherBuilt OS
              </span>
              <span className="text-[#9CA3AF]">/</span>
              <span className="text-[#6B7280]">Plant Hub #01 (Pune Unit)</span>
            </div>
          </div>

          {/* Illustrative data badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              Operational Telemetry Active • Sample Model
            </span>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#6B7280]">
              <Clock className="w-3 h-3 text-[#9CA3AF]" />
              <span>Shift A • 09:42 IST</span>
            </div>
          </div>
        </div>

        {/* Dashboard Body with Sidebar + Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
          {/* Left Mini Sidebar */}
          <aside className="lg:col-span-3 border-r border-[#EAE7DF] bg-[#FAF9F5]/70 p-3 flex flex-col justify-between">
            <div>
              <div className="px-2 py-1 mb-2 text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase">
                Connected Operations
              </div>
              <nav className="space-y-1">
                {[
                  { id: "overview", label: "Overview", icon: BarChart3, badge: "Live" },
                  { id: "production", label: "Production Floor", icon: Layers, badge: "3 Lines" },
                  { id: "orders", label: "Orders & Batches", icon: ShoppingCart, badge: "24 Active" },
                  { id: "machines", label: "Machines & IoT", icon: Cpu, badge: "18/19 OK" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id as WorkspaceTab)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                        isActive
                          ? "bg-white text-[#252B33] shadow-xs border border-[#EAE7DF]"
                          : "text-[#6B7280] hover:text-[#252B33] hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#F59E0B]" : "text-[#9CA3AF]"}`} />
                        <span>{item.label}</span>
                      </div>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                          isActive
                            ? "bg-[#FFF4DE] text-[#B45309]"
                            : "bg-[#F3F4F6] text-[#6B7280]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="px-2 py-1 mt-4 mb-2 text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase">
                Supply & Resources
              </div>
              <div className="space-y-1 text-xs text-[#6B7280]">
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/60 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-[#9CA3AF]" />
                    <span>Inventory</span>
                  </div>
                  <span className="text-[10px] text-[#059669] font-medium">Healthy</span>
                </div>
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/60 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-4 h-4 text-[#9CA3AF]" />
                    <span>Procurement & RFQs</span>
                  </div>
                  <span className="text-[10px] text-[#B45309] font-medium">3 Bids In</span>
                </div>
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/60 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#9CA3AF]" />
                    <span>Shift Workforce</span>
                  </div>
                  <span className="text-[10px] text-[#6B7280]">34 Present</span>
                </div>
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/60 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#9CA3AF]" />
                    <span>Deliveries</span>
                  </div>
                  <span className="text-[10px] text-[#2563EB]">14:30 Dock</span>
                </div>
              </div>
            </div>

            {/* AI Copilot Quick Launcher inside Sidebar */}
            <div className="mt-4 pt-3 border-t border-[#EAE7DF]">
              <div
                onClick={() => setCopilotActive(!copilotActive)}
                className="group p-2.5 rounded-lg bg-gradient-to-br from-[#FFF4DE] to-[#FEF3C7] border border-[#FDE68A] cursor-pointer hover:border-[#F59E0B] transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#92400E]">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>AI Copilot</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-white text-[#B45309]">
                    ACTIVE
                  </span>
                </div>
                <p className="text-[11px] text-[#78350F] leading-tight">
                  Click to query connected plant records
                </p>
              </div>
            </div>
          </aside>

          {/* Main Operational Workspace */}
          <main className="lg:col-span-9 p-4 sm:p-5 flex flex-col justify-between space-y-4 bg-white">
            {/* Top Workspace Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#EAE7DF] gap-2">
              <div>
                <h3
                  className="text-base font-bold text-[#252B33] flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span>Precision Valve Line 03</span>
                  <span className="text-xs font-normal text-[#6B7280]">
                    &bull; Primary CNC Cell
                  </span>
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Connected Job: Batch #AB-842 &bull; Cycle telemetry nominal
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                  <CircleDot className="w-3 h-3 text-[#10B981]" />
                  <span>Shift OEE: 91.8%</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[#F3F4F6] text-[#374151]">
                  <span>420 u/hr</span>
                </span>
              </div>
            </div>

            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                <div className="text-[11px] text-[#6B7280] flex items-center justify-between">
                  <span>Cycle Time</span>
                  <Activity className="w-3.5 h-3.5 text-[#F59E0B]" />
                </div>
                <div className="text-lg font-bold text-[#252B33] mt-1">18.4s</div>
                <div className="text-[10px] text-[#059669] font-medium mt-0.5">
                  &minus;0.6s target margin
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                <div className="text-[11px] text-[#6B7280] flex items-center justify-between">
                  <span>Active Work Order</span>
                  <ShoppingCart className="w-3.5 h-3.5 text-[#2563EB]" />
                </div>
                <div className="text-lg font-bold text-[#252B33] mt-1">#AB-842</div>
                <div className="text-[10px] text-[#6B7280] font-medium mt-0.5">
                  88% completed (Bay 2 QA)
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                <div className="text-[11px] text-[#6B7280] flex items-center justify-between">
                  <span>CNC-04 Spindle</span>
                  <Cpu className="w-3.5 h-3.5 text-[#059669]" />
                </div>
                <div className="text-lg font-bold text-[#252B33] mt-1">0.82 mm/s</div>
                <div className="text-[10px] text-[#059669] font-medium mt-0.5">
                  Vibration safe (&lt;1.5)
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                <div className="text-[11px] text-[#6B7280] flex items-center justify-between">
                  <span>Material Buffer</span>
                  <Package className="w-3.5 h-3.5 text-[#D97706]" />
                </div>
                <div className="text-lg font-bold text-[#252B33] mt-1">14 Days</div>
                <div className="text-[10px] text-[#059669] font-medium mt-0.5">
                  304 Alloy verified
                </div>
              </div>
            </div>

            {/* Central Operational Stream: Workflow Stage Preview */}
            <div className="p-4 rounded-xl border border-[#EAE7DF] bg-[#FAF9F5]/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#252B33]">
                  Connected Manufacturing Flow &bull; Batch #AB-842
                </span>
                <span className="text-[11px] text-[#6B7280]">
                  Target: 1,200 Finished Units
                </span>
              </div>

              {/* Connected stage nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <div className="p-2.5 rounded-lg bg-white border border-[#10B981]/30 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#065F46]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Raw Material</span>
                  </div>
                  <div className="text-[11px] text-[#252B33] font-medium mt-1">
                    Lot #AL-409 Released
                  </div>
                  <div className="text-[10px] text-[#6B7280]">Bay C &bull; MTR Attached</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border-2 border-[#F59E0B] shadow-xs relative">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                      <span>Line 3 Machining</span>
                    </span>
                    <span className="text-[10px] font-bold text-[#B45309]">ACTIVE</span>
                  </div>
                  <div className="text-[11px] text-[#252B33] font-medium mt-1">
                    Station 04 Mill &amp; Bore
                  </div>
                  <div className="text-[10px] text-[#6B7280]">1,056 of 1,200 cut</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-[#EAE7DF] shadow-2xs opacity-80">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280]">
                    <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>QA Tolerance Gate</span>
                  </div>
                  <div className="text-[11px] text-[#252B33] font-medium mt-1">
                    Optical CMM Check
                  </div>
                  <div className="text-[10px] text-[#6B7280]">Queued next shift</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-[#EAE7DF] shadow-2xs opacity-80">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280]">
                    <Truck className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Dispatch Carrier</span>
                  </div>
                  <div className="text-[11px] text-[#252B33] font-medium mt-1">
                    BlueDart Freight Slot
                  </div>
                  <div className="text-[10px] text-[#6B7280]">Scheduled 16:30</div>
                </div>
              </div>
            </div>

            {/* Bottom Row: AI Copilot Contextual Output Banner */}
            <div className="p-3.5 rounded-lg bg-gradient-to-r from-[#FFF4DE] via-[#FFFBEB] to-[#FAF9F5] border border-[#FDE68A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-white shadow-2xs text-[#F59E0B] border border-[#FDE68A]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#92400E]">
                      AetherBuilt Operational Intelligence
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded font-semibold bg-white text-[#B45309] border border-[#FDE68A]">
                      Cross-Module Context
                    </span>
                  </div>
                  <p className="text-xs text-[#78350F] mt-0.5">
                    &ldquo;Batch #AB-842 is on schedule for 16:30 dispatch. Material and machine dependencies are clear. Next preventative lubrication scheduled for 14:00 shift changeover.&rdquo;
                  </p>
                </div>
              </div>

              <a
                href="#ai-copilot"
                className="self-end sm:self-center flex-shrink-0 px-3 py-1.5 text-[11px] font-semibold text-[#92400E] bg-white rounded-md border border-[#FDE68A] hover:border-[#F59E0B] transition-colors flex items-center gap-1 shadow-2xs"
              >
                <span>Ask Copilot</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </main>
        </div>

        {/* Bottom Bar: Operational Breadcrumbs & Integrity Note */}
        <div className="px-4 py-2 bg-[#FAF9F5] border-t border-[#EAE7DF] flex flex-wrap items-center justify-between text-[11px] text-[#6B7280] gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Plant Network Synced</span>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">12 Modules Integrated</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Zero Disconnected Spreadsheets</span>
          </div>
          <span className="text-[10px] text-[#9CA3AF]">
            *Demonstration interface rendered with live React components &bull; Modelled after AetherBuilt OS architecture
          </span>
        </div>
      </div>
    </div>
  );
}
