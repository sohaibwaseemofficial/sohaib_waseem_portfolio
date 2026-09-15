"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", href: "#home" },
  { label: "Dossiers", href: "#work" },
  { label: "Philosophy", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Trajectory", href: "#experience" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full transition-all duration-300 w-full max-w-4xl ${
            scrolled
              ? "bg-[#0A0E17]/85 backdrop-blur-xl border border-white/15 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(6,182,212,0.15)]"
              : "bg-[#0A0E17]/50 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#07090D] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                  SW
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xs font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Sohaib Waseem
              </span>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest hidden sm:block">
                Mechanical Eng. × AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-black font-semibold border border-cyan-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Transmission</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl glass-panel border border-white/15 p-5 shadow-2xl bg-[#0B0F17]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3 font-mono text-xs">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2.5 rounded-xl text-left text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>Connect / Transmit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
