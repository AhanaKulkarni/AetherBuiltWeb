import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demonstration — AetherBuilt OS",
  description:
    "Schedule a live, personalized walkthrough of AetherBuilt OS tailored to your factory's specific production lines, machinery, and supply chain.",
};

export default function DemoPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#FAF9F5]">
      <DemoForm />
    </div>
  );
}
