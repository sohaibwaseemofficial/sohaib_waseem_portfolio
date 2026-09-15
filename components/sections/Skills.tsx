"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";

const skillGroups = [
  {
    id: "mechanical",
    label: "Mechanical & Simulation",
    skills: [
      "ANSYS Fluent",
      "SolidWorks",
      "AutoCAD",
      "Carrier HAP",
      "McQuay Duct Design",
      "Thermodynamics",
      "Fluid Mechanics",
      "Heat Transfer",
      "HVAC Design",
    ],
  },
  {
    id: "software",
    label: "Software & Data",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "Matplotlib",
      "SQL",
      "Git",
      "REST APIs",
      "TypeScript",
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Data Preprocessing",
      "Feature Engineering",
      "Scikit-learn",
    ],
  },
  {
    id: "tools",
    label: "Tools & Productivity",
    skills: ["LaTeX", "MS Office", "Notion", "Figma (basic)", "Linux CLI"],
  },
  {
    id: "leadership",
    label: "Leadership & Communication",
    skills: [
      "Project Management",
      "Event Direction",
      "Team Coordination",
      "Technical Writing",
      "Public Speaking",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-[#26292C]">
      <div className="container-max">
        {/* Section label */}
        <AnimatedSection>
          <span
            className="font-mono text-xs text-[#D68C45] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            03 / Skills
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F1ED] leading-tight mb-12 copper-underline">
            Technical Toolkit
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <AnimatedItem key={group.id}>
              <div
                id={`skills-${group.id}`}
                className="border border-[#26292C] rounded-sm p-6 bg-[#14171A] hover:border-[#D68C45]/30 transition-colors duration-300"
              >
                <p
                  className="font-mono text-[11px] text-[#D68C45] tracking-widest uppercase mb-4"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill} variant="default">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
