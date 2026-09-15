"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, Mic, Radio } from "lucide-react";

const QUOTES = [
  "Episode 01: 'The Intersection of Logic, Rhetoric & Civil Discourse'",
  "Episode 03: 'Engineers as Cultural Architects in the Modern Age'",
  "Episode 06: 'Vocal Freedom — Debating Identity & Modern Philosophy'",
];

export function AudioWaveformPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="p-4 rounded-xl bg-[#0F141C] border border-amber-500/20 text-xs font-mono">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-amber-400">
          <Radio className="w-4 h-4 animate-pulse" />
          <span className="font-semibold text-slate-200">AZAAD KHAYAL S2 • VOCAL ARCHIVE</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
          STUDIO PRODUCTION
        </span>
      </div>

      {/* Interactive Player Controls & Visualizer */}
      <div className="flex items-center gap-4 p-3 rounded-lg bg-black/40 border border-white/5 mb-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause audio preview" : "Play audio preview"}
          className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-amber-400 transition-all shrink-0 cursor-pointer shadow-lg shadow-amber-500/20"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Animated Sound Wave Equalizer */}
        <div className="flex-1 flex items-end gap-1 h-8">
          {[40, 75, 55, 90, 65, 80, 100, 70, 85, 45, 95, 60, 80, 50, 90, 70, 60, 85, 40].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-150"
              style={{
                height: isPlaying ? `${Math.max(15, (h * (0.4 + Math.random() * 0.6)))}%` : "20%",
                backgroundColor: isPlaying ? "#F59E0B" : "rgba(245, 158, 11, 0.25)",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
          <Volume2 className="w-4 h-4 text-amber-400" />
          <span className="text-[10px]">PREVIEW</span>
        </div>
      </div>

      <div className="flex items-start gap-2 p-2.5 rounded bg-white/5 text-slate-300 text-[11px] leading-relaxed">
        <Mic className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-amber-400 font-semibold block text-[10px] uppercase">
            Curated Discourse Sample:
          </span>
          <p className="italic">{QUOTES[activeQuoteIndex]}</p>
        </div>
      </div>
    </div>
  );
}
