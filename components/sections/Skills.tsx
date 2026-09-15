"use client";

import React, { useState } from "react";
import { Wrench, Wind, Brain, Code, Award, CheckCircle2 } from "lucide-react";

const SKILL_DOMAINS = [
  {
    id: "mechanical",
    title: "CAD & Kinematics",
    icon: Wrench,
    skills: [
      { name: "SolidWorks CAD (Advanced 3D Modeling)", level: "Proficient" },
      { name: "ASME Y14.5 Geometric Dimensioning & Tolerancing (GD&T)", level: "Proficient" },
      { name: "Kinematic Synthesis & Multi-Link Assemblies", level: "Advanced" },
      { name: "Design for Manufacturing & Assembly (DFMA)", level: "Proficient" },
      { name: "Autodesk Inventor & Fusion 360", level: "Experienced" },
      { name: "CNC Machining & Tooling Documentation", level: "Experienced" },
    ],
  },
  {
    id: "simulation",
    title: "CFD & Thermal Analysis",
    icon: Wind,
    skills: [
      { name: "ANSYS Fluent (Navier-Stokes Turbulent Flow)", level: "Advanced" },
      { name: "Conjugate Heat Transfer (CHT) & Thermodynamics", level: "Proficient" },
      { name: "Polyhedral & Poly-Hexcore Meshing (y+ < 1)", level: "Proficient" },
      { name: "Structural Finite Element Analysis (FEA)", level: "Proficient" },
      { name: "MATLAB & Simulink Mathematical Modeling", level: "Proficient" },
      { name: "Boundary Layer Separation & Aerodynamics", level: "Advanced" },
    ],
  },
  {
    id: "ai",
    title: "AI & Signal Intelligence",
    icon: Brain,
    skills: [
      { name: "PyTorch & Deep Learning Architectures", level: "Proficient" },
      { name: "Fast Fourier Transform (FFT) & Vibration DSP", level: "Advanced" },
      { name: "Predictive Maintenance & Anomaly Detection", level: "Specialized" },
      { name: "Python Data Science (NumPy, SciPy, Pandas)", level: "Proficient" },
      { name: "Scikit-Learn Machine Learning Classifiers", level: "Proficient" },
      { name: "Sensor Telemetry & Time-Series Analysis", level: "Advanced" },
    ],
  },
  {
    id: "software",
    title: "Software & Web Engineering",
    icon: Code,
    skills: [
      { name: "Next.js & React Full-Stack Development", level: "Proficient" },
      { name: "TypeScript & Modern JavaScript (ESNext)", level: "Proficient" },
      { name: "Tailwind CSS & High-End Visual Animation", level: "Advanced" },
      { name: "Interactive HTML5 Canvas & WebGL Shaders", level: "Experienced" },
      { name: "Git & Collaborative Version Control (GitHub)", level: "Proficient" },
      { name: "REST APIs & Real-time WebSockets", level: "Proficient" },
    ],
  },
  {
    id: "leadership",
    title: "Creative Direction & Ops",
    icon: Award,
    skills: [
      { name: "Directing 'Azaad Khayal Season 2' (Vocal Archive)", level: "Director" },
      { name: "NED Debating Society Leadership & Rhetoric", level: "Lead" },
      { name: "Audio Master Engineering & Studio Production", level: "Producer" },
      { name: "Conference & Event Organizing (SENTEC / TEDx)", level: "Executive" },
      { name: "Technical Storytelling & Keynote Speaking", level: "Accomplished" },
      { name: "Cross-Disciplinary Team Orchestration", level: "Experienced" },
    ],
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#07090D] border-t border-white/5">
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
                Technical Capability Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Tools, Systems & <span className="text-gradient-cyan">Expertise</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            A comprehensive matrix of mechanical simulation tools, machine learning libraries, web technologies, and production leadership.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 rounded-2xl bg-[#0B0F17] border border-white/10 mb-8">
          {SKILL_DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/15 text-white font-bold border border-white/20 shadow-lg shadow-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{domain.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Skills Display */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              {React.createElement(SKILL_DOMAINS[activeTab].icon, {
                className: "w-6 h-6 text-cyan-400",
              })}
              <div>
                <h3 className="text-xl font-bold text-white font-sans">
                  {SKILL_DOMAINS[activeTab].title}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Verified Technical Competency Domain
                </span>
              </div>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hidden sm:inline-block">
              {SKILL_DOMAINS[activeTab].skills.length} Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_DOMAINS[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 text-amber-300 border border-amber-500/20 shrink-0 ml-2">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
