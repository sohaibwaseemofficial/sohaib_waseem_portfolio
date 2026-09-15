"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";

interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  orgFull: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "ncai",
    role: "Research Intern",
    org: "NCAI",
    orgFull: "National Centre for Artificial Intelligence",
    period: "2023",
    type: "Internship",
    bullets: [
      "Worked within a research-focused AI environment at Pakistan's national AI center.",
      "Exposure to applied ML workflows and research methodology — directly informed the AI preventive maintenance project.",
      "Bridged mechanical engineering domain knowledge with AI/ML tooling.",
    ],
    tags: ["Machine Learning", "AI Research", "Python"],
  },
  {
    id: "psdi",
    role: "Engineering Intern",
    org: "PSDI",
    orgFull: "Pakistan Steel Development Institute",
    period: "2023",
    type: "Internship",
    bullets: [
      "Hands-on exposure to industrial manufacturing and process systems.",
      "Observed and analyzed mechanical systems in production environments.",
      "Gained practical context for the failure modes that predictive maintenance targets.",
    ],
    tags: ["Manufacturing", "Process Systems", "Mechanical Engineering"],
  },
  {
    id: "ssgcl",
    role: "Engineering Intern",
    org: "SSGCL",
    orgFull: "Sui Southern Gas Company Limited",
    period: "2022",
    type: "Internship",
    bullets: [
      "Worked within gas distribution and utility engineering operations.",
      "Exposure to large-scale mechanical and piping systems in an energy utility context.",
      "Developed understanding of maintenance regimes and system reliability in critical infrastructure.",
    ],
    tags: ["Utility Engineering", "Gas Distribution", "Mechanical Systems"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[#26292C]">
      <div className="container-max">
        {/* Section label */}
        <AnimatedSection>
          <span
            className="font-mono text-xs text-[#D68C45] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            04 / Experience
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F1ED] leading-tight mb-12 copper-underline">
            Where I&#39;ve Worked
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection stagger className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#D68C45] via-[#D68C45]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <AnimatedItem key={exp.id}>
                <div
                  id={`exp-${exp.id}`}
                  className="md:pl-10 relative"
                >
                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:block absolute left-0 top-1.5 w-px">
                    <div className="absolute -left-[3px] top-0 w-[7px] h-[7px] rounded-full bg-[#D68C45] border-2 border-[#0B0D0F]" />
                  </div>

                  <div className="border border-[#26292C] rounded-sm p-6 bg-[#14171A] hover:border-[#D68C45]/30 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-[#F2F1ED] font-semibold mb-0.5">{exp.role}</h3>
                        <p className="text-[#D68C45] text-sm font-medium">{exp.org}</p>
                        <p className="text-[#9B9B93] text-xs mt-0.5">{exp.orgFull}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span
                          className="font-mono text-[11px] text-[#9B9B93] tracking-wider"
                          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                        >
                          {exp.period}
                        </span>
                        <Tag variant="dim">{exp.type}</Tag>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-[#9B9B93] leading-relaxed">
                          <span className="text-[#D68C45] mt-0.5 flex-shrink-0">—</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Tag key={tag} variant="default">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
