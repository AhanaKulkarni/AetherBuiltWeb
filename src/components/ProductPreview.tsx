"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  TrendingUp,
} from "lucide-react";

type WorkspaceTab = "overview" | "production" | "machines" | "orders";

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("overview");
  const [copilotActive, setCopilotActive] = useState(false);

  return (
    <div className="relative w-full max-w-[1360px] 2xl:max-w-[1500px] mx-auto">
      {/* Expansive Sunrise Backlight Atmosphere */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#F59E0B]/25 via-[#FBBF24]/20 to-[#F59E0B]/15 rounded-3xl blur-2xl opacity-75 -z-10" />

      {/* Main Command Center Chassis */}
      <div className="relative rounded-2xl border border-[#EAE7DF] bg-[#FFFFFF] shadow-2xl overflow-hidden transition-all duration-300">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#FAF9F5] border-b border-[#EAE7DF] text-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
            </div>
            <span className="h-4 w-px bg-[#EAE7DF] mx-1.5" />
            <div className="flex items-center gap-2 text-[#252B33]">
              <span className="font-bold text-sm tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                AetherBuilt OS
              </span>
              <span className="text-[#9CA3AF]">/</span>
              <span className="text-xs font-semibold text-[#6B7280]">
                Plant Operations Hub &bull; Pune Unit 01
              </span>
            </div>
          </div>

          {/* Illustrative data badge & live clock */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Connected Floor Telemetry &bull; Sample Model
            </span>
            <div className="hidden md:flex items-center gap-1.5 text-xs text-[#6B7280] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span>Shift A Handover &bull; 09:42:18 IST</span>
            </div>
          </div>
        </div>

        {/* Dashboard Body with Sidebar + Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-3 border-r border-[#EAE7DF] bg-[#FAF9F5]/80 p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="px-2 py-1 mb-2 text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase">
                  Connected Floor Operations
                </div>
                <nav className="space-y-1.5">
                  {[
                    { id: "overview", label: "Executive Overview", icon: BarChart3, badge: "Live Sync" },
                    { id: "production", label: "Production Floor", icon: Layers, badge: "3 Lines Running" },
                    { id: "orders", label: "Work Orders & Batches", icon: ShoppingCart, badge: "24 Active" },
                    { id: "machines", label: "Machine IoT Telemetry", icon: Cpu, badge: "18 / 19 Synced" },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveTab(item.id as WorkspaceTab)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? "bg-white text-[#252B33] shadow-xs border border-[#EAE7DF] ring-1 ring-[#F59E0B]/20"
                            : "text-[#6B7280] hover:text-[#252B33] hover:bg-white/70"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? "text-[#F59E0B]" : "text-[#9CA3AF]"}`} />
                          <span>{item.label}</span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${
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
              </div>

              <div>
                <div className="px-2 py-1 mb-2 text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase">
                  Supply Chain &amp; Logistics
                </div>
                <div className="space-y-1 text-xs text-[#6B7280]">
                  <Link
                    href="/modules#all-modules"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="font-medium text-[#252B33]">Raw Material Inventory</span>
                    </div>
                    <span className="text-[10px] text-[#059669] font-bold bg-[#ECFDF5] px-1.5 py-0.2 rounded border border-[#A7F3D0]">
                      14d Buffer
                    </span>
                  </Link>

                  <Link
                    href="/modules#all-modules"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="font-medium text-[#252B33]">Procurement &amp; RFQs</span>
                    </div>
                    <span className="text-[10px] text-[#B45309] font-bold bg-[#FFF4DE] px-1.5 py-0.2 rounded border border-[#FDE68A]">
                      3 Bids In
                    </span>
                  </Link>

                  <Link
                    href="/modules#all-modules"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="font-medium text-[#252B33]">Shift Workforce</span>
                    </div>
                    <span className="text-[10px] text-[#252B33] font-bold bg-[#FAF9F5] px-1.5 py-0.2 rounded">
                      34 Present
                    </span>
                  </Link>

                  <Link
                    href="/modules#all-modules"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="font-medium text-[#252B33]">Dispatch Logistics</span>
                    </div>
                    <span className="text-[10px] text-[#2563EB] font-bold bg-[#EFF6FF] px-1.5 py-0.2 rounded">
                      14:30 Dock
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* AI Copilot Quick Launcher inside Sidebar */}
            <div className="mt-6 pt-4 border-t border-[#EAE7DF]">
              <Link
                href="/modules#ai-copilot"
                className="group block p-3.5 rounded-xl bg-gradient-to-br from-[#FFF4DE] via-[#FEF3C7] to-[#FAF9F5] border border-[#FDE68A] hover:border-[#F59E0B] transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#92400E]">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>AI Copilot Active</span>
                  </div>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white text-[#B45309] border border-[#FDE68A]">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-[#78350F] leading-tight font-medium">
                  Ask questions about orders, machine telemetry, and drawings
                </p>
              </Link>
            </div>
          </aside>

          {/* Main Operational Workspace (Expansive Canvas) */}
          <main className="lg:col-span-9 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6 bg-white">
            {/* Top Workspace Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE7DF] gap-3">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3
                    className="text-lg sm:text-xl font-extrabold text-[#252B33] tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Precision CNC Cell &bull; Line 03
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    RUNNING
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Assigned Order: <strong className="text-[#252B33]">#AB-842 (Automotive Castings)</strong> &bull; Station 04 Milling &amp; Bore
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                  <CircleDot className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Floor OEE: 91.8%</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAF9F5] text-[#374151] border border-[#EAE7DF]">
                  <span>420 units / hr</span>
                </span>
              </div>
            </div>

            {/* 4 Large KPI Cards Across Viewport */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] hover:border-[#F59E0B]/50 transition-colors">
                <div className="text-xs font-semibold text-[#6B7280] flex items-center justify-between">
                  <span>Cycle Telemetry</span>
                  <Activity className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div className="text-2xl font-extrabold text-[#252B33] mt-2">18.4s</div>
                <div className="text-[11px] text-[#059669] font-medium mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>&minus;0.6s below target cycle</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] hover:border-[#F59E0B]/50 transition-colors">
                <div className="text-xs font-semibold text-[#6B7280] flex items-center justify-between">
                  <span>Batch Completion</span>
                  <ShoppingCart className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="text-2xl font-extrabold text-[#252B33] mt-2">88% Done</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">
                  1,056 of 1,200 units machined
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] hover:border-[#F59E0B]/50 transition-colors">
                <div className="text-xs font-semibold text-[#6B7280] flex items-center justify-between">
                  <span>Spindle Health</span>
                  <Cpu className="w-4 h-4 text-[#059669]" />
                </div>
                <div className="text-2xl font-extrabold text-[#252B33] mt-2">0.82 mm/s</div>
                <div className="text-[11px] text-[#059669] font-medium mt-1">
                  Nominal vibration (&lt;1.5 mm/s)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] hover:border-[#F59E0B]/50 transition-colors">
                <div className="text-xs font-semibold text-[#6B7280] flex items-center justify-between">
                  <span>Material Buffer</span>
                  <Package className="w-4 h-4 text-[#D97706]" />
                </div>
                <div className="text-2xl font-extrabold text-[#252B33] mt-2">14 Days</div>
                <div className="text-[11px] text-[#059669] font-medium mt-1">
                  Alloy 304 lot verified in Bay 4
                </div>
              </div>
            </div>

            {/* Expansive Operational Pipeline: Connected Order Progress */}
            <div className="p-5 rounded-2xl border border-[#EAE7DF] bg-[#FAF9F5]/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#252B33] tracking-wide uppercase">
                    Connected Manufacturing Flow &bull; Work Order #AB-842
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#6B7280]">
                  Target Delivery: Today 16:30 IST
                </span>
              </div>

              {/* 4 Connected Operational Stations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#10B981]/40 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#065F46]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>01. Raw Material</span>
                    </span>
                    <span className="text-[10px] font-semibold text-[#059669]">CLEARED</span>
                  </div>
                  <div className="text-xs font-bold text-[#252B33] mt-2">
                    Lot #AL-409 Verified
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">
                    MTR attached &bull; Heat #H-7741
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border-2 border-[#F59E0B] shadow-xs relative">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                      <span>02. CNC Machining</span>
                    </span>
                    <span className="text-[10px] font-bold text-[#B45309] bg-[#FFF4DE] px-1.5 py-0.2 rounded border border-[#FDE68A]">
                      IN PROGRESS
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#252B33] mt-2">
                    Line 03 CNC Cell
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">
                    1,056 cut &bull; Cycle 18.4s
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] shadow-2xs opacity-90">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#6B7280]">
                      <Clock className="w-4 h-4 text-[#9CA3AF]" />
                      <span>03. Quality Gate</span>
                    </span>
                    <span className="text-[10px] text-[#9CA3AF]">QUEUED</span>
                  </div>
                  <div className="text-xs font-bold text-[#252B33] mt-2">
                    Optical CMM Check
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">
                    Bay 2 QA &bull; ISO 9001 specs
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] shadow-2xs opacity-90">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#6B7280]">
                      <Truck className="w-4 h-4 text-[#9CA3AF]" />
                      <span>04. Dispatch Hub</span>
                    </span>
                    <span className="text-[10px] text-[#2563EB]">14:30 DOCK</span>
                  </div>
                  <div className="text-xs font-bold text-[#252B33] mt-2">
                    BlueDart Freight Slot
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">
                    Consignment packed &bull; Gate pass ready
                  </div>
                </div>
              </div>
            </div>

            {/* Wide AI Copilot Contextual Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF4DE] via-[#FFFBEB] to-[#FAF9F5] border border-[#FDE68A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white shadow-2xs text-[#F59E0B] border border-[#FDE68A] flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#92400E]">
                      AetherBuilt Operational Intelligence Feed
                    </span>
                    <span className="text-[10px] px-2 py-0.2 rounded font-bold bg-white text-[#B45309] border border-[#FDE68A]">
                      Cross-Module Context
                    </span>
                  </div>
                  <p className="text-xs text-[#78350F] mt-1 leading-relaxed">
                    &ldquo;Batch #AB-842 is on schedule for 16:30 dispatch. Material and machine dependencies are clear. Next preventative lubrication scheduled for 14:00 shift changeover.&rdquo;
                  </p>
                </div>
              </div>

              <Link
                href="/modules#ai-copilot"
                className="self-end sm:self-center flex-shrink-0 px-4 py-2 text-xs font-bold text-[#92400E] bg-white rounded-lg border border-[#FDE68A] hover:border-[#F59E0B] transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Query Copilot</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </main>
        </div>

        {/* Bottom Bar: Operational Breadcrumbs */}
        <div className="px-5 py-2.5 bg-[#FAF9F5] border-t border-[#EAE7DF] flex flex-wrap items-center justify-between text-xs text-[#6B7280] gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#059669] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Plant Telemetry Synced</span>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">12 Modules Synchronized</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Zero Disconnected Spreadsheets</span>
          </div>
          <span className="text-[11px] text-[#9CA3AF]">
            *Demonstration interface rendered with live React components &bull; Modelled after AetherBuilt OS architecture
          </span>
        </div>
      </div>
    </div>
  );
}
