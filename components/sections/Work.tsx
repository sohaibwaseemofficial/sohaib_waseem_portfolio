"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Cpu,
  Flame,
  Radio,
  Box,
  Maximize2,
  Code2,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AiSimulatorWidget } from "@/components/ui/AiSimulatorWidget";
import { AudioWaveformPlayer } from "@/components/ui/AudioWaveformPlayer";
import { ProjectModal, type ProjectDetail } from "@/components/ui/ProjectModal";

const PROJECTS: ProjectDetail[] = [
  {
    id: "ai-maintenance",
    title: "AI-Powered Industrial Preventive Maintenance",
    subtitle: "Digital Twin, FFT Vibration Telemetry & Neural Anomaly Detection",
    category: "AI & Software",
    image: "/assets/project-ai-maintenance.jpg",
    overview:
      "Engineered an end-to-end predictive maintenance system combining mechanical vibration analysis with deep learning anomaly detection. The platform processes high-frequency accelerometer sensor feeds, performs real-time Fast Fourier Transform (FFT) spectrum extraction, and classifies bearing fault degradation before catastrophic machine failure occurs.",
    specs: [
      { label: "Anomaly Accuracy", value: "98.4%" },
      { label: "FFT Resolution", value: "1024 pt" },
      { label: "Latency", value: "<12ms" },
      { label: "Sampling Rate", value: "10 kHz" },
    ],
    engineeringHighlights: [
      "Extracted spectral kurtosis, crest factor, and RMS velocity features from raw accelerometer signals conforming to ISO 10816 standards.",
      "Trained autoencoder and convolutional neural networks in PyTorch to detect subtle bearing inner/outer race spalling.",
      "Built a full-stack real-time web telemetry dashboard with interactive 3D digital twin motor status visualization.",
    ],
    techStack: ["PyTorch", "Python", "FFT Analysis", "NumPy & SciPy", "React", "Next.js", "WebSockets"],
  },
  {
    id: "cfd-thermal",
    title: "CFD Aerodynamic & Thermal Manifold Analysis",
    subtitle: "Navier-Stokes Turbulent Flow & Conjugate Heat Transfer Simulation",
    category: "Mechanical & CFD",
    image: "/assets/project-cfd-thermal.jpg",
    overview:
      "Conducted extensive computational fluid dynamics (CFD) modeling of a high-performance turbine manifold and heat exchanger. Evaluated pressure drop characteristics, boundary layer separation, and turbulent thermal dissipation under extreme aerodynamic flow velocities.",
    specs: [
      { label: "Max Velocity", value: "650 m/s" },
      { label: "Mesh Cells", value: "2.4M Hex" },
      { label: "Turbulence Model", value: "k-ω SST" },
      { label: "Thermal Delta", value: "ΔT 185°C" },
    ],
    engineeringHighlights: [
      "Generated structured poly-hexcore volume meshes with y+ < 1 inflation layers for precise wall-bounded shear stress prediction.",
      "Optimized manifold volute curvature, reducing localized vortex recirculation and cutting pressure loss by 18.2%.",
      "Conducted conjugate heat transfer (CHT) analysis simulating conduction through nickel-alloy casing and convection to fluid.",
    ],
    techStack: ["ANSYS Fluent", "SolidWorks Flow", "Meshing (y+)", "Thermal FEA", "MATLAB"],
  },
  {
    id: "azaad-khayal",
    title: "Azaad Khayal Season 2",
    subtitle: "Vocal Production & Creative Direction • NED Debating Society",
    category: "Creative & Leadership",
    image: "/assets/project-azaad-khayal.jpg",
    overview:
      "Directed and produced Season 2 of 'Azaad Khayal', the flagship vocal and intellectual discourse project of the NED Debating Society. Led multidisciplinary teams covering sound engineering, cinematic videography, script development, and post-production release strategy.",
    specs: [
      { label: "Role", value: "Director & Lead" },
      { label: "Reach", value: "10k+ Listeners" },
      { label: "Episodes", value: "Full Season" },
      { label: "Production", value: "Multi-Cam 4K" },
    ],
    engineeringHighlights: [
      "Directed end-to-end creative vision: curated discourse topics, panelist curation, acoustic stage lighting, and audio master design.",
      "Managed cross-functional teams of 15+ student creators, videographers, sound mixers, and marketing leads under tight production schedules.",
      "Established brand identity and social media release pipeline that achieved the society's highest audience engagement record.",
    ],
    techStack: ["Creative Direction", "Audio Engineering", "Stage Lighting", "Project Management", "Public Discourse"],
  },
  {
    id: "cad-mechanism",
    title: "Precision Multi-Link Gear Transmission Assembly",
    subtitle: "CAD Kinematic Synthesis, GD&T & Manufacturing Tolerancing",
    category: "Mechanical & CFD",
    image: "/assets/project-cad-mechanism.jpg",
    overview:
      "Designed a complete multi-link robotic gear transmission mechanism in SolidWorks with full tolerance stack-up analysis and manufacturing documentation. Verified gear tooth contact stress and cyclic fatigue endurance through Finite Element Analysis (FEA).",
    specs: [
      { label: "Tolerance", value: "±0.005 mm" },
      { label: "Gear Ratio", value: "4.2 : 1" },
      { label: "Factor of Safety", value: "2.8" },
      { label: "Material", value: "Ti-6Al-4V" },
    ],
    engineeringHighlights: [
      "Modeled precision bevel gears, planetary carriers, planetary shafts, and custom titanium connecting links in SolidWorks.",
      "Conducted kinematic motion studies to eliminate backlash and prevent interference across extreme angular stroke limits.",
      "Authored complete ASME Y14.5 GD&T 2D engineering drawings for CNC 5-axis milling and EDM wire cutting.",
    ],
    techStack: ["SolidWorks CAD", "ASME Y14.5 GD&T", "FEA Stress Analysis", "Kinematic Synthesis", "CNC Machining Specs"],
  },
];

const CATEGORIES = ["All", "AI & Software", "Mechanical & CFD", "Creative & Leadership"];

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="section-padding relative overflow-hidden bg-[#07090D]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
                Featured Engineering & Software Dossiers
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-cyan">Work & Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-[#0E131E] border border-white/10 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <TiltCard
              key={project.id}
              glowColor={project.category.includes("Creative") ? "copper" : "cyan"}
              className="rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 items-center">
                {/* Left Column: Visual Presentation */}
                <div className="lg:col-span-6 relative">
                  <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10 group bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />

                    {/* Category chip */}
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-cyan-300 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Expand Modal Trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                      title="Expand Engineering Dossier"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Information, Specs & Live Interactive Widget */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
                        0{index + 1}. ARCHITECTURE SPEC
                      </span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect Dossier</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.overview}
                    </p>

                    {/* Interactive Live Element if applicable */}
                    {project.id === "ai-maintenance" && (
                      <div className="mb-6">
                        <AiSimulatorWidget />
                      </div>
                    )}

                    {project.id === "azaad-khayal" && (
                      <div className="mb-6">
                        <AudioWaveformPlayer />
                      </div>
                    )}

                    {/* Quick Specs Grid if no interactive widget */}
                    {project.id !== "ai-maintenance" && project.id !== "azaad-khayal" && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                        {project.specs.map((s, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 font-mono"
                          >
                            <span className="block text-[10px] text-slate-400 mb-0.5">
                              {s.label}
                            </span>
                            <span className="font-bold text-xs text-white">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech stack pills & dossier button */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="font-mono text-[11px] px-2 py-1 rounded bg-white/5 text-slate-400">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Full Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Dossier Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
