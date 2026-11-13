"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AetherBuiltLogo } from "./AetherBuiltLogo";
import { SITE_CONFIG, NAV_LINKS, NavLink } from "@/config/site";
import {
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Layers,
  Zap,
  BarChart3,
  Bot,
  FileCode,
  Sparkles,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Zap,
  BarChart3,
  Bot,
  FileCode,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModulesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9F8F4]/95 backdrop-blur-md border-b border-[#EAE7DF] shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <AetherBuiltLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EAE7DF] shadow-xs"
          >
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setModulesDropdownOpen(true)}
                    onMouseLeave={() => setModulesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
                      className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-semibold transition-all rounded-full flex items-center gap-1.5 ${
                        modulesDropdownOpen
                          ? "bg-[#FFF4DE] text-[#B45309]"
                          : "text-[#252B33] hover:text-[#B45309] hover:bg-[#FFF4DE]/60"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          modulesDropdownOpen ? "rotate-180 text-[#B45309]" : "text-[#9CA3AF]"
                        }`}
                      />
                    </Link>

                    {/* Rich Dropdown Panel */}
                    {modulesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 lg:w-96 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="rounded-2xl border border-[#EAE7DF] bg-white p-3 shadow-xl space-y-1">
                          <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#9CA3AF] uppercase">
                            Operational Architecture &amp; Modules
                          </div>

                          {link.dropdown.map((sub) => {
                            const SubIcon = ICON_MAP[sub.iconName] || Layers;
                            return (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setModulesDropdownOpen(false)}
                                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF9F5] transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] group-hover:bg-[#FFF4DE] group-hover:text-[#B45309] group-hover:border-[#FDE68A] flex items-center justify-center text-[#252B33] transition-colors flex-shrink-0 mt-0.5">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-[#252B33] group-hover:text-[#B45309] transition-colors">
                                      {sub.title}
                                    </span>
                                    {sub.badge && (
                                      <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#F59E0B] text-white">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}

                          <div className="pt-2 mt-1 border-t border-[#EAE7DF] px-2 py-1 flex items-center justify-between text-[11px]">
                            <span className="text-[#6B7280]">All 12 Modules Integrated</span>
                            <Link
                              href="/modules"
                              onClick={() => setModulesDropdownOpen(false)}
                              className="font-semibold text-[#B45309] hover:underline flex items-center gap-1"
                            >
                              <span>Explore Hub &rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium text-[#252B33] hover:text-[#B45309] transition-colors rounded-full hover:bg-[#FFF4DE]/60 flex items-center gap-1.5"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#F59E0B] text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
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

            <Link
              href="/#demo"
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#252B33] hover:bg-[#1E232A] rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/#demo"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#252B33] rounded-md shadow-xs"
            >
              Demo
            </Link>
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
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                      {link.label}
                    </div>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={closeMobileMenu}
                        className="px-4 py-2 text-xs font-semibold text-[#252B33] hover:bg-[#FFF4DE] rounded-md transition-colors flex items-center justify-between"
                      >
                        <span>{sub.title}</span>
                        {sub.badge && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#F59E0B] text-white">
                            {sub.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
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
                </Link>
              );
            })}
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
              <Link
                href="/#demo"
                onClick={closeMobileMenu}
                className="w-full px-3 py-2.5 text-sm font-semibold text-white bg-[#252B33] hover:bg-[#1E232A] text-center rounded-md shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
