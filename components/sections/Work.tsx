"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Tag, InProgressTag } from "@/components/ui/Tag";

interface Project {
  id: string;
  title: string;
  description: string;
  detail?: string;
  tags: string[];
  link?: string;
  inProgress?: boolean;
  featured?: boolean;
}

const engineeringProjects: Project[] = [
  {
    id: "cfd-corrugated",
    title: "CFD Corrugated Channel Study",
    description:
      "Final-year CFD investigation comparing flow and heat-transfer performance across sinusoidal, triangular, and trapezoidal corrugated channel geometries using ANSYS Fluent.",
    detail:
      "Directly applicable to heat-exchanger design in process industries. Results quantify Nusselt number and friction factor trade-offs across Reynolds number ranges — providing data-backed geometry selection criteria.",
    tags: ["ANSYS Fluent", "CFD", "Heat Transfer", "Fluid Mechanics", "Final Year Project"],
  },
  {
    id: "hvac-hap",
    title: "HVAC System Design — Carrier HAP",
    description:
      "Full-cycle HVAC design exercise: cooling load calculation, equipment selection with COP and GWP comparison, and duct sizing via McQuay.",
    detail:
      "Covered the complete design chain from envelope load → equipment shortlist → refrigerant comparison → duct distribution network → cost justification. Not a simulation exercise — a real engineering decision workflow.",
    tags: ["Carrier HAP", "McQuay", "HVAC", "Thermodynamics", "Load Calculation"],
  },
  {
    id: "envelope-optimization",
    title: "Building Envelope Optimization",
    description:
      "Energy performance study analyzing how building envelope parameters (insulation, glazing, orientation) affect cooling loads — used to identify optimization targets before equipment sizing.",
    tags: ["Energy Analysis", "Thermal Modeling", "Building Systems", "Optimization"],
  },
];

const softwareProjects: Project[] = [
  {
    id: "ai-maintenance",
    title: "AI-Based Preventive Maintenance App",
    description:
      "Machine learning application that predicts equipment failure risk from operational data — enabling maintenance scheduling before failure rather than after.",
    detail:
      "Built at the intersection of mechanical domain knowledge and ML: uses sensor/operational data as inputs, trained classification model to flag risk levels, and outputs actionable maintenance windows. This is the direct application of understanding both what breaks and why.",
    tags: ["Python", "Machine Learning", "Predictive Modeling", "Data Preprocessing", "AI"],
    featured: true,
  },
  {
    id: "personal-website",
    title: "Personal Portfolio Website",
    description:
      "This site. Built with Next.js, Tailwind CSS, and Framer Motion — designed from scratch with a deliberate visual language rather than a template.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: "data-analysis",
    title: "Data Analysis Coursework",
    description:
      "Building structured data analysis skills — Python, pandas, NumPy, and visualization — with direct application to engineering datasets.",
    detail:
      "Applying this to real-world engineering problems: performance data from HVAC systems, sensor readings from maintenance scenarios, and academic datasets from CFD studies.",
    tags: ["Python", "pandas", "NumPy", "Matplotlib", "SQL"],
    inProgress: true,
  },
];

const leadershipProjects: Project[] = [
  {
    id: "azaad-khayal",
    title: "Azaad Khayal — Season 2",
    description:
      "Directed and led Season 2 of Azaad Khayal, a spoken word and creative performance showcase at NED University — from performer curation and rehearsal direction through to production and stage management.",
    detail:
      "Responsible for the full creative direction: selecting performers, shaping the narrative arc of the show, running rehearsals, and managing the production. The discipline involved in directing a creative showcase — where the 'specification' is a feeling, not a spec sheet — translates directly into how I run technical projects.",
    tags: ["Creative Direction", "Event Production", "Leadership", "NED University"],
  },
  {
    id: "sentec-vp",
    title: "SENTEC — Vice President",
    description:
      "Served as VP of SENTEC (Society of Engineering and Technology), overseeing operations, events, and team coordination across the society's activities.",
    tags: ["Leadership", "Operations", "Team Management", "Student Society"],
  },
  {
    id: "tedx",
    title: "TEDx NEDUniversity — Lead Organizer",
    description:
      "Led the organization of TEDx NEDUniversity — coordinating speakers, managing the event logistics, and directing the production from planning through to execution.",
    tags: ["TEDx", "Event Management", "Speaker Curation", "Leadership"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className={`card-glow border rounded-sm p-6 bg-[#14171A] flex flex-col gap-4 cursor-default transition-colors duration-300 group ${
        project.featured
          ? "border-[#D68C45]/30 bg-gradient-to-br from-[#14171A] to-[#1a1710]"
          : "border-[#26292C]"
      }`}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      id={`card-${project.id}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-semibold leading-snug ${
            project.featured ? "text-[#F2F1ED]" : "text-[#F2F1ED]"
          } group-hover:text-[#E8A15E] transition-colors duration-200`}
        >
          {project.title}
        </h3>
        <div className="flex gap-2 flex-shrink-0 mt-0.5">
          {project.featured && (
            <span
              className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm bg-[#D68C45]/15 text-[#D68C45] border border-[#D68C45]/30"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              Featured
            </span>
          )}
          {project.inProgress && <InProgressTag />}
          {project.link && (
            <a
              href={project.link}
              className="text-[#9B9B93] hover:text-[#D68C45] transition-colors duration-150"
              aria-label="View project"
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4H4a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-2M9 3h4v4M13 3L7.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#9B9B93] leading-relaxed">{project.description}</p>

      {/* Detail (expandable on hover concept — shown directly for simplicity) */}
      {project.detail && (
        <p className="text-xs text-[#9B9B93]/60 leading-relaxed border-t border-[#26292C] pt-3 mt-1">
          {project.detail}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <Tag key={tag} variant={project.featured ? "copper" : "default"}>
            {tag}
          </Tag>
        ))}
      </div>
    </motion.div>
  );
}

function WorkGroup({
  label,
  number,
  projects,
  columns = 3,
}: {
  label: string;
  number: string;
  projects: Project[];
  columns?: 2 | 3;
}) {
  return (
    <div className="mb-16 last:mb-0">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-8">
          <span
            className="font-mono text-[11px] text-[#D68C45] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            {number}
          </span>
          <h3 className="text-xl font-semibold text-[#F2F1ED]">{label}</h3>
          <span className="flex-1 h-px bg-[#26292C]" />
        </div>
      </AnimatedSection>

      <AnimatedSection stagger className={`grid gap-4 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {projects.map((project) => (
          <AnimatedItem key={project.id}>
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="section-padding border-t border-[#26292C]">
      <div className="container-max">
        {/* Section label */}
        <AnimatedSection>
          <span
            className="font-mono text-xs text-[#D68C45] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            02 / Work
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F1ED] leading-tight mb-12 copper-underline">
            Projects & Initiatives
          </h2>
        </AnimatedSection>

        <WorkGroup
          number="A"
          label="Engineering Projects"
          projects={engineeringProjects}
          columns={3}
        />
        <WorkGroup
          number="B"
          label="Software & AI"
          projects={softwareProjects}
          columns={3}
        />
        <WorkGroup
          number="C"
          label="Leadership & Creative Direction"
          projects={leadershipProjects}
          columns={3}
        />
      </div>
    </section>
  );
}
