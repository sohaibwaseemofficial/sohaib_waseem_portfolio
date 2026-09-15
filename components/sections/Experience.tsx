"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "AI & Signal Processing Fellow",
    organization: "National Center of Artificial Intelligence (NCAI)",
    period: "2023 - 2024",
    location: "Karachi, Pakistan",
    badge: "AI & RESEARCH",
    glow: "cyan",
    description:
      "Researched and built machine learning models for anomaly classification on industrial telemetry feeds. Developed signal processing pipelines converting raw accelerometer outputs to Fast Fourier Transform (FFT) spectrograms for predictive maintenance.",
    achievements: [
      "Engineered an automated Python pipeline for time-series vibration feature extraction (kurtosis, skewness, crest factor).",
      "Achieved 98.4% anomaly classification accuracy on benchmark bearing degradation datasets using PyTorch.",
      "Collaborated with senior research scientists to benchmark model latency on edge computing devices.",
    ],
  },
  {
    role: "Mechanical CAD & Simulation Engineer",
    organization: "Precision Systems & Design Initiative (PSDI)",
    period: "2023",
    location: "Karachi, Pakistan",
    badge: "MECHANICAL & CAD",
    glow: "copper",
    description:
      "Executed 3D CAD modeling, kinematic linkage synthesis, and finite element stress analysis for precision mechanical mechanisms adhering to ASME standards.",
    achievements: [
      "Authored 2D engineering drawings with comprehensive ASME Y14.5 Geometric Dimensioning & Tolerancing (GD&T).",
      "Conducted static structural and cyclic fatigue FEA in SolidWorks Simulation, achieving safety factors > 2.5.",
      "Optimized mechanical component mass by 14% via topology optimization while preserving structural stiffness.",
    ],
  },
  {
    role: "Industrial Operations & Piping Trainee",
    organization: "Sui Southern Gas Company Limited (SSGCL)",
    period: "2022",
    location: "Karachi, Pakistan",
    badge: "THERMAL & PIPING",
    glow: "copper",
    description:
      "Trained across high-pressure natural gas transmission pipelines, compressor stations, and industrial metering equipment.",
    achievements: [
      "Analyzed thermodynamic pressure-drop and flow velocity distributions across transmission pipeline loops.",
      "Studied industrial preventive maintenance protocols for high-capacity centrifugal gas compressors and turbine meters.",
      "Documented safety compliance audits following international ASME B31.8 gas transmission standards.",
    ],
  },
  {
    role: "Project Director (Azaad Khayal S2) & Executive",
    organization: "NED Debating Society / SENTEC / TEDxNED",
    period: "2022 - 2024",
    location: "NED University",
    badge: "LEADERSHIP & DIRECTION",
    glow: "copper",
    description:
      "Spearheaded creative and operational leadership across premier university platforms. Directed Season 2 of Azaad Khayal, curating high-level intellectual discourse, sound design, and media production.",
    achievements: [
      "Directed end-to-end production of Azaad Khayal S2, resulting in 10,000+ vocal plays across digital platforms.",
      "Managed multidisciplinary student teams across audiovisual production, marketing, and panelist moderation.",
      "Coordinated logistics and executive communications for major institutional symposiums including SENTEC and TEDx.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[#07090D] border-t border-white/5">
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              Professional Trajectory
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Industrial & <span className="text-gradient-copper">Research Track</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A track record spanning national AI research centers, mechanical CAD labs, industrial gas infrastructure, and high-stakes media direction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Illuminated Timeline Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.glow === "cyan"
                    ? "border-cyan-400 bg-cyan-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                    : "border-amber-400 bg-amber-950 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                }`}
              />

              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 group-hover:border-white/20 transition-all shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-full font-semibold ${
                      exp.glow === "cyan"
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                        : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {exp.badge}
                  </span>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-mono text-slate-400 mb-4 font-medium">
                  {exp.organization}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          exp.glow === "cyan" ? "text-cyan-400" : "text-amber-400"
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
