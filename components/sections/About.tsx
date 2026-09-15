"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const stats = [
  { label: "Degree", value: "B.E. Mechanical Engineering" },
  { label: "University", value: "NED University of Engineering & Technology" },
  { label: "Graduated", value: "2024" },
  { label: "Focus", value: "Thermal Systems · CFD · AI Tools" },
];

export function About() {
  return (
    <section id="about" className="section-padding border-t border-[#26292C]">
      <div className="container-max">
        {/* Section label */}
        <AnimatedSection>
          <span
            className="font-mono text-xs text-[#D68C45] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            01 / About
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: narrative */}
          <div>
            <AnimatedSection delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F1ED] leading-tight mb-8 copper-underline">
                Engineering depth meets
                <br />
                builder&#39;s instinct.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-[#9B9B93] leading-relaxed mb-5">
                My mechanical engineering foundation runs from first principles — thermodynamics,
                fluid mechanics, heat transfer — through the tools that turn those principles into
                real systems: ANSYS Fluent for CFD studies, Carrier HAP for full-cycle HVAC design,
                SolidWorks for geometry. The kind of background that means I don't just simulate
                a corrugated channel, I understand why sinusoidal geometry performs differently from
                trapezoidal under the same Reynolds number.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-[#9B9B93] leading-relaxed mb-5">
                The CS side came out of a genuine problem: I wanted to build tools that didn't exist.
                That led to an AI-powered preventive maintenance application — putting machine learning
                directly on a mechanical engineering problem — and a growing data analysis practice
                in Python. This isn't a pivot; it's a multiplier. Hardware-and-physics thinking plus
                software-and-AI thinking is a combination that's rarer than either alone.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[#9B9B93] leading-relaxed">
                Beyond the technical work: I directed Azaad Khayal Season 2, led operations as VP
                of SENTEC, and organized TEDx NEDUniversity. These aren't resume padding — they're
                where I learned that the quality of an outcome is inseparable from the quality of
                how the room gets organized. That thinking carries into every project.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: stats */}
          <AnimatedSection delay={0.1} stagger={false}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#26292C] rounded-sm p-5 bg-[#14171A] hover:border-[#D68C45]/30 transition-colors duration-300"
                >
                  <p
                    className="font-mono text-[11px] text-[#D68C45] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-[#F2F1ED] text-sm">{stat.value}</p>
                </div>
              ))}

              {/* Availability */}
              <div className="border border-[#D68C45]/30 rounded-sm p-5 bg-[#D68C45]/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#D68C45] animate-pulse" />
                  <p
                    className="font-mono text-[11px] text-[#D68C45] tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Status
                  </p>
                </div>
                <p className="text-[#F2F1ED] text-sm">Open to opportunities</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
