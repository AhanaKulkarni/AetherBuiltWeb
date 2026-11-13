import { Hero } from "@/components/Hero";
import { ManufacturingProblem } from "@/components/ManufacturingProblem";
import { PlatformHighlights } from "@/components/PlatformHighlights";
import { AudienceSection } from "@/components/AudienceSection";
import { AboutAetheron } from "@/components/AboutAetheron";
import { Differentiators } from "@/components/Differentiators";
import { DemoForm } from "@/components/DemoForm";

export default function Home() {
  return (
    <>
      {/* 04. Hero Section with Expansive Command Center Preview */}
      <Hero />

      {/* 05. The Problem: Fragmented Factory vs Synchronized OS */}
      <ManufacturingProblem />

      {/* 06. Platform Highlights & Architecture */}
      <PlatformHighlights />

      {/* 11. Industries & Target Roles */}
      <AudienceSection />

      {/* 13. About the Company (Aetheron.AI Technologies Pvt Ltd) - BEFORE Why Us */}
      <AboutAetheron />

      {/* 12. Why Us: Core Architectural Differentiators - AFTER About */}
      <Differentiators />

      {/* 14. Request a Demo / Contact Form */}
      <DemoForm />
    </>
  );
}
