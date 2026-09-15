"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const EMAIL = "sohaibwaseem@example.com"; // ← Replace with real email

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback — opens email client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding border-t border-[#26292C]">
      <div className="container-max">
        {/* Section label */}
        <AnimatedSection>
          <span
            className="font-mono text-xs text-[#D68C45] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            05 / Contact
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: copy */}
          <div>
            <AnimatedSection delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F1ED] leading-tight mb-6 copper-underline">
                Let&#39;s talk.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-[#9B9B93] leading-relaxed mb-8">
                Whether it&#39;s a mechanical engineering role, an AI/data project, a collaboration,
                or just a conversation — I&#39;m genuinely interested. Reach out directly or
                use the form.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="flex flex-col gap-4">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                id="contact-email-link"
                className="flex items-center gap-4 p-4 border border-[#26292C] rounded-sm bg-[#14171A] hover:border-[#D68C45]/40 group transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-[#26292C] rounded-sm group-hover:border-[#D68C45]/40 transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm0 0l6 5 6-5"
                      stroke="#D68C45"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-mono text-[10px] text-[#9B9B93] tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Email
                  </p>
                  <p className="text-sm text-[#F2F1ED] group-hover:text-[#D68C45] transition-colors duration-150">
                    {EMAIL}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sohaibwaseem"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-link"
                className="flex items-center gap-4 p-4 border border-[#26292C] rounded-sm bg-[#14171A] hover:border-[#D68C45]/40 group transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-[#26292C] rounded-sm group-hover:border-[#D68C45]/40 transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#D68C45">
                    <path d="M13.5 1.5h-11A1 1 0 001.5 2.5v11A1 1 0 002.5 14.5h11a1 1 0 001-1v-11a1 1 0 00-1-1zM5.5 12.5H3.5v-6h2v6zM4.5 5.5a1 1 0 110-2 1 1 0 010 2zM12.5 12.5h-2V9.25c0-.69-.56-1.25-1.25-1.25S8 8.56 8 9.25v3.25H6v-6h2v.77A2.5 2.5 0 0112.5 9v3.5z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-mono text-[10px] text-[#9B9B93] tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    LinkedIn
                  </p>
                  <p className="text-sm text-[#F2F1ED] group-hover:text-[#D68C45] transition-colors duration-150">
                    linkedin.com/in/sohaibwaseem
                  </p>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Right: form */}
          <AnimatedSection delay={0.1}>
            {submitted ? (
              <div className="border border-[#D68C45]/30 rounded-sm p-8 bg-[#D68C45]/5 flex flex-col items-center justify-center text-center gap-4 min-h-64">
                <div className="w-10 h-10 rounded-full border border-[#D68C45] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9l4 4 6-7" stroke="#D68C45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[#F2F1ED] font-medium">Email client opened.</p>
                <p className="text-sm text-[#9B9B93]">
                  Your message is pre-filled and ready to send.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                id="contact-form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[10px] text-[#9B9B93] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#14171A] border border-[#26292C] rounded-sm px-4 py-3 text-sm text-[#F2F1ED] placeholder:text-[#9B9B93]/40 focus:outline-none focus:border-[#D68C45]/60 transition-colors duration-150"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[10px] text-[#9B9B93] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#14171A] border border-[#26292C] rounded-sm px-4 py-3 text-sm text-[#F2F1ED] placeholder:text-[#9B9B93]/40 focus:outline-none focus:border-[#D68C45]/60 transition-colors duration-150"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[10px] text-[#9B9B93] tracking-widest uppercase block mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#14171A] border border-[#26292C] rounded-sm px-4 py-3 text-sm text-[#F2F1ED] placeholder:text-[#9B9B93]/40 focus:outline-none focus:border-[#D68C45]/60 transition-colors duration-150 resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <Button id="contact-submit" variant="primary" className="w-full justify-center">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>

                <p className="text-xs text-[#9B9B93]/50 text-center">
                  Opens your email client with this message pre-filled.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 pt-8 border-t border-[#26292C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#9B9B93]/50">
              © {new Date().getFullYear()} Sohaib Waseem. All rights reserved.
            </p>
            <p
              className="font-mono text-[11px] text-[#9B9B93]/40 tracking-wider"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
