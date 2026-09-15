"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Terminal, Sparkles, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const emailAddress = "sohaibwaseemofficial@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#07090D] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-live" />
              <span className="font-mono text-xs text-emerald-300 font-semibold tracking-wide">
                CURRENTLY OPEN TO ROLES & COLLABORATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build something <br />
              <span className="text-gradient-cyan">exceptional together.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need mechanical CFD & thermal design, machine learning models for telemetry & predictive systems, or visionary creative direction—my inbox is open.
            </p>

            {/* Quick action buttons */}
            <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Direct Communication:</span>
                <span className="text-cyan-400">PGP/Verified</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-slate-200 font-medium truncate mr-2">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white text-white hover:text-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Directly</span>
              </a>

              <a
                href="https://linkedin.com/in/sohaibwaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs font-mono transition-all flex items-center gap-2 border border-white/10"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
                </svg>
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal-Grade Direct Message Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-slate-200 font-bold tracking-wider">
                    TRANSMIT MESSAGE DOSSIER
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1.5 uppercase tracking-wider">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1.5 uppercase tracking-wider">
                      Sender Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5 uppercase tracking-wider">
                    Project Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your engineering project, role opportunity, or creative collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Transmission via Mail</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-400 font-medium">
              Sohaib Waseem • Mechanical Engineer & Builder
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>NED University of Engineering & Technology</span>
            <span className="text-slate-600">•</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
