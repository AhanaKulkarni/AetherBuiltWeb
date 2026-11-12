"use client";

import Link from "next/link";
import Image from "next/image";

interface AetherBuiltLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function AetherBuiltLogo({
  className = "",
  showTagline = false,
  size = "md",
}: AetherBuiltLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg p-0.5 ${className}`}
      aria-label="AetherBuilt OS - Home"
    >
      {/* Precision Sunrise Geometric Mark */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-[#252B33] text-white shadow-sm border border-[#EAE7DF] group-hover:border-[#F59E0B] transition-colors`}
      >
        {/* Subtle inner grid lines */}
        <div className="absolute inset-0 rounded-lg opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:6px_6px]" />
        
        {/* Core Sunrise Diamond & Circle */}
        <div className="relative w-4 h-4 flex items-center justify-center">
          <div className="absolute inset-0 rotate-45 border border-[#FBBF24]/80 rounded-[3px] bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] opacity-90 transition-transform group-hover:rotate-90 duration-500" />
          <div className="relative w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-semibold tracking-tight text-[#252B33] ${textSizes[size]}`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AetherBuilt
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#FFF4DE] text-[#B45309] border border-[#FDE68A]">
            OS
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] text-[#6B7280] tracking-normal mt-0.5">
            The Manufacturing Operating System
          </span>
        )}
      </div>
    </Link>
  );
}
