"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated background orbs */}
      {!shouldReduceMotion && (
        <>
          <div
            className="hero-orb"
            style={{
              width: 480,
              height: 480,
              background: "radial-gradient(circle, rgba(214,140,69,0.12) 0%, transparent 70%)",
              top: "10%",
              right: "-5%",
              animationDuration: "9s",
            }}
          />
          <div
            className="hero-orb"
            style={{
              width: 320,
              height: 320,
              background: "radial-gradient(circle, rgba(214,140,69,0.07) 0%, transparent 70%)",
              bottom: "15%",
              left: "-5%",
              animationDuration: "11s",
              animationDelay: "2s",
            }}
          />
        </>
      )}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(38,41,44,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(38,41,44,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />

      <div className="container-max relative z-10 pt-24 pb-16">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="font-mono text-xs text-[#D68C45] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              Mechanical Engineer / Builder
            </span>
            <span className="block w-8 h-px bg-[#D68C45]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#F2F1ED] leading-[1.05] tracking-tight mb-6"
          >
            Sohaib
            <br />
            <span className="text-[#D68C45]">Waseem</span>
          </motion.h1>

          {/* Positioning statement */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-lg sm:text-xl text-[#9B9B93] leading-relaxed max-w-2xl mb-4"
          >
            A mechanical engineer who builds —{" "}
            <span className="text-[#F2F1ED]">in metal, in code,</span> and in the rooms where
            ideas get organized.
          </motion.p>

          {/* Sub-headline */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-base text-[#9B9B93]/80 leading-relaxed max-w-xl mb-10"
          >
            CFD & thermal systems. AI-powered engineering tools. Creative direction.
            NED University of Engineering & Technology, Mechanical Engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button
              id="hero-cta-work"
              variant="primary"
              href="#work"
              onClick={() => handleNavClick("#work")}
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button
              id="hero-cta-contact"
              variant="outline"
              href="#contact"
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="font-mono text-[10px] text-[#9B9B93]/50 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-[#D68C45] to-transparent"
              animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
