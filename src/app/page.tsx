import { Hero } from "@/components/Hero";
import { ManufacturingProblem } from "@/components/ManufacturingProblem";
import { PlatformOverview } from "@/components/PlatformOverview";
import { FactoryWorkflow } from "@/components/FactoryWorkflow";
import { CommandCenter } from "@/components/CommandCenter";
import { AICopilot } from "@/components/AICopilot";
import { CADWorkflow } from "@/components/CADWorkflow";
import { AudienceSection } from "@/components/AudienceSection";
import { Differentiators } from "@/components/Differentiators";
import { AboutAetheron } from "@/components/AboutAetheron";
import { DemoForm } from "@/components/DemoForm";

export default function Home() {
  return (
    <>
      {/* 04. Hero Section with Interactive Native Command Center Preview */}
      <Hero />

      {/* 05. The Problem: Disconnected Silos vs Connected AetherBuilt OS */}
      <ManufacturingProblem />

      {/* 06. The AetherBuilt Platform: The 12 Connected Modules */}
      <div id="platform">
        <PlatformOverview />
      </div>

      {/* 07. How AetherBuilt Connects the Factory: Interactive Workflow Engine */}
      <FactoryWorkflow />

      {/* 08. AetherBuilt Command Center: Unified Factory Cockpit */}
      <CommandCenter />

      {/* 09. AI Copilot: Operational Intelligence Layer */}
      <AICopilot />

      {/* 10. CAD-to-Quotation: Engineering Automation Direction */}
      <CADWorkflow />

      {/* 11. Who is AetherBuilt For: Factory Roles & Stakeholders */}
      <AudienceSection />

      {/* 12. Why AetherBuilt: Core Architectural Differentiators */}
      <Differentiators />

      {/* 13. About the Company: Built by Aetheron.AI Technologies */}
      <AboutAetheron />

      {/* 14. Request a Demo / Contact Form */}
      <DemoForm />
    </>
  );
}
