"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AetherBuiltLogo } from "./AetherBuiltLogo";
import { SITE_CONFIG, NAV_LINKS } from "@/config/site";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9F8F4]/90 backdrop-blur-md border-b border-[#EAE7DF] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <AetherBuiltLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#EAE7DF] shadow-xs"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs lg:text-[13px] font-medium text-[#252B33] hover:text-[#B45309] transition-colors rounded-full hover:bg-[#FFF4DE]/60 flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#F59E0B] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-[#252B33] hover:text-[#B45309] transition-colors flex items-center gap-1.5"
            >
              <span>Login</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="#demo"
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#252B33] hover:bg-[#1E232A] rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#demo"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#252B33] rounded-md shadow-xs"
            >
              Demo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#252B33] hover:bg-white border border-[#EAE7DF] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#252B33]" />
              ) : (
                <Menu className="w-5 h-5 text-[#252B33]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE7DF] bg-[#F9F8F4] px-4 pt-4 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-2 text-sm font-medium text-[#252B33] hover:bg-[#FFF4DE] rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F59E0B] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAE7DF] flex flex-col gap-2">
              <a
                href={SITE_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full px-3 py-2 text-sm font-medium text-[#252B33] text-center border border-[#EAE7DF] rounded-md bg-white flex items-center justify-center gap-1.5"
              >
                <span>Login</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="#demo"
                onClick={closeMobileMenu}
                className="w-full px-3 py-2.5 text-sm font-semibold text-white bg-[#252B33] hover:bg-[#1E232A] text-center rounded-md shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
