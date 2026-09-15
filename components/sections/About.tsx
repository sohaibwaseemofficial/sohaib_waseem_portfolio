"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, BrainCircuit, Users, Check, Sparkles, Award } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const PILLARS = [
  {
    icon: Wrench,
    glow: "copper",
    badge: "PILLAR 01",
    title: "The Physical & Mechanical",
    description:
      "Grounded in core mechanical principles from NED University. Designing manufacturable assemblies, analyzing turbulent CFD fluid flows, and executing precision CAD kinematics that obey the laws of physics.",
    skills: [
      "SolidWorks CAD & ASME GD&T",
      "ANSYS Fluent CFD & Thermal Analysis",
      "Conjugate Heat Transfer & Fluid Mechanics",
      "CNC Machining & Manufacturing Feasibility",
    ],
  },
  {
    icon: BrainCircuit,
    glow: "cyan",
    badge: "PILLAR 02",
    title: "The Digital & Intelligent",
    description:
      "A passionate computer science practitioner bridging physical hardware with machine intelligence. Engineering AI predictive maintenance digital twins, processing high-speed FFT telemetry, and building web applications.",
    skills: [
      "PyTorch Neural Networks & Scikit-Learn",
      "Vibration Telemetry & FFT Signal Analysis",
      "Python Data Science & Automated Pipelines",
      "Full-Stack Web Architectures (React, Next.js)",
    ],
  },
  {
    icon: Users,
    glow: "copper",
    badge: "PILLAR 03",
    title: "Leadership & Creative Direction",
    description:
      "Engineering is ineffective without human alignment. Leading high-impact intellectual discourse, directing cinematic audio-visual productions (Azaad Khayal S2), and orchestrating multi-team student initiatives.",
    skills: [
      "Directing 'Azaad Khayal Season 2' (NED Debating Society)",
      "Cross-Functional Team & Production Leadership",
      "Executive Organizing at SENTEC & TEDx",
      "Rhetoric, Debate & Technical Storytelling",
    ],
  },
];

const STATS = [
  { label: "Graduated", value: "NEDUET", sub: "Mechanical Engineering" },
  { label: "AI & Signal Models", value: "98.4%", sub: "Anomaly Detection Accuracy" },
  { label: "Vocal Production", value: "10K+", sub: "Listeners (Azaad Khayal S2)" },
  { label: "CFD Mesh Fidelity", value: "2.4M", sub: "Polyhedral Cells Simulated" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#07090D] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              The Polymath Engineering Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Not just an engineer. <br />
            <span className="text-gradient-copper">A builder across physical & digital realms.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most engineers choose between atoms and bits. I believe the most transformative breakthroughs occur at their convergence—where mechanical thermodynamics and kinematic mechanisms are augmented by machine learning algorithms, and brought to life through visionary leadership.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <TiltCard
                key={idx}
                glowColor={pillar.glow as "cyan" | "copper"}
                className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        pillar.glow === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Core Disciplines:
                  </span>
                  {pillar.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 ${
                          pillar.glow === "cyan" ? "text-cyan-400" : "text-amber-400"
                        }`}
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Technical Stats Strip */}
        <div className="p-8 rounded-2xl bg-[#0B0F17] border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col font-mono">
              <span className="text-xs text-slate-400 mb-1">{stat.label}</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-cyan-400 font-sans">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
