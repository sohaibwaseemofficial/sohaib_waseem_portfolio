"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, ChevronDown, Download, Layers } from "lucide-react";
import { WaveCanvas } from "@/components/ui/WaveCanvas";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 500], [0, 80]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12"
      aria-label="Hero Showcase"
    >
      {/* ─── Reference 1: Flowing Topography Wave Canvas ─── */}
      <WaveCanvas />

      {/* ─── Ambient Glow Lights ─── */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ─── Reference 2: Giant Editorial Engineering Typography Watermark ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden opacity-[0.035] text-center z-0">
        <span className="font-mono text-[16vw] font-black tracking-tighter whitespace-nowrap text-white block">
          ENGINEER • BUILDER
        </span>
      </div>

      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* ─── Main Hero Content ─── */}
      <div className="container-max relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning, Bio, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Glowing Pill Badge (Inspired by Reference 1) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full badge-glow mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 beacon-live" />
              <span className="font-mono text-xs text-cyan-300 font-medium tracking-wide">
                ✦ MECHANICAL SYSTEMS × AI & SOFTWARE ARCHITECTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Building in <span className="text-gradient-copper">Metal</span>, <br className="hidden sm:inline" />
              Designing in <span className="text-gradient-cyan">Code</span>.
            </h1>

            {/* Core Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-4 font-normal">
              I am <span className="text-white font-semibold">Sohaib Waseem</span> — a Mechanical Engineering 
              graduate from NED University who bridges physical thermodynamics and precision machine design 
              with AI models, predictive telemetry, and creative leadership.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-8">
              From high-fidelity <span className="text-slate-200">CFD thermal simulations</span> and 
              precision CAD mechanisms to deploying an <span className="text-slate-200">AI-powered predictive maintenance digital twin</span> and 
              directing high-impact discourse projects (<span className="text-amber-400">Azaad Khayal S2</span>).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("#work")}
                className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10 cursor-pointer group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("#contact")}
                className="px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/15 font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Micro specs / credential tags */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">01.</span>
                <span>NEDUET Mechanical Eng.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">02.</span>
                <span>AI Predictive Maintenance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-400 font-bold">03.</span>
                <span>Creative Director (Azaad Khayal)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Reference 2 Inspired 3D Actuator Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yOffset }}
            className="lg:col-span-5 relative"
          >
            {/* Glow ring behind 3D render */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-amber-500/20 rounded-3xl blur-2xl -z-10" />

            {/* 3D Actuator Card Container */}
            <div className="relative rounded-2xl p-2 bg-[#0E131E]/80 border border-white/15 shadow-2xl backdrop-blur-xl group overflow-hidden">
              
              {/* Top technical badge */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-slate-200 font-semibold">CAD SPEC: ACT-901-T</span>
                </div>
                <span className="text-slate-400 text-[10px]">HYDRAULIC-MECHANICAL</span>
              </div>

              {/* 3D Render Image with gentle floating animation */}
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black/50">
                <Image
                  src="/assets/hero-actuator.jpg"
                  alt="3D Industrial Mechanical Actuator Cylinder Assembly"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Spec callout overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-amber-400 text-[10px] block uppercase tracking-wider">
                      PRECISION ENGINEERING
                    </span>
                    <span className="text-white font-medium">Kinematic Actuator Assembly</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-white/10 text-cyan-300 text-[11px] font-semibold">
                    ISO-9001
                  </span>
                </div>
              </div>

              {/* Bottom engineering note */}
              <div className="p-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Tolerance: ±0.005mm</span>
                <span className="text-amber-400">Manufacturable Assembly</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ─── Bottom Tech Ticker Bar (Inspired by Reference 1 Footer Bar) ─── */}
      <div className="relative z-10 border-y border-white/10 bg-[#07090D]/80 backdrop-blur-md mt-12 py-3 overflow-hidden">
        <div className="container-max flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">ENGINEERING TOOLCHAIN</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px]">
            <span className="hover:text-cyan-400 transition-colors">✦ SolidWorks CAD</span>
            <span className="hover:text-amber-400 transition-colors">✦ ANSYS Fluent CFD</span>
            <span className="hover:text-cyan-400 transition-colors">✦ PyTorch & Scikit-Learn</span>
            <span className="hover:text-amber-400 transition-colors">✦ Python Data Analysis</span>
            <span className="hover:text-cyan-400 transition-colors">✦ React / Next.js</span>
            <span className="hover:text-amber-400 transition-colors">✦ Creative Direction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
