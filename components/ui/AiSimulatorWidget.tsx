"use client";

import React, { useState, useEffect, useRef } from "react";
import { Activity, AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react";

export function AiSimulatorWidget() {
  const [isFaultState, setIsFaultState] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const render = () => {
      step += isFaultState ? 0.22 : 0.09;
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      ctx.stroke();

      // Vibration wave
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = isFaultState ? "#EF4444" : "#06B6D4";

      for (let x = 0; x < w; x += 3) {
        let y: number;
        if (isFaultState) {
          // Chaotic high frequency + amplitude vibration fault
          const f1 = Math.sin(x * 0.08 + step * 1.5) * 22;
          const f2 = Math.sin(x * 0.25 - step * 2) * 12;
          const noise = (Math.random() - 0.5) * 10;
          y = centerY + f1 + f2 + noise;
        } else {
          // Smooth baseline vibration
          const f1 = Math.sin(x * 0.04 + step) * 12;
          const f2 = Math.cos(x * 0.02 - step * 0.5) * 5;
          y = centerY + f1 + f2;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isFaultState]);

  return (
    <div className="p-4 rounded-xl bg-[#090D14] border border-white/10 text-xs font-mono">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Activity className={`w-4 h-4 ${isFaultState ? "text-red-400" : "text-cyan-400"}`} />
          <span className="font-semibold text-slate-200">LIVE SENSOR TELEMETRY</span>
        </div>
        <button
          onClick={() => setIsFaultState((prev) => !prev)}
          className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
            isFaultState
              ? "bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30"
              : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30"
          }`}
        >
          <RefreshCw className="w-3 h-3" />
          {isFaultState ? "Reset to Baseline" : "Inject Bearing Fault"}
        </button>
      </div>

      <div className="relative h-20 w-full mb-3 rounded-lg bg-black/40 overflow-hidden border border-white/5">
        <canvas
          ref={canvasRef}
          width={320}
          height={80}
          className="w-full h-full block"
        />
        <span className="absolute bottom-1 left-2 text-[10px] text-slate-400">
          RMS Vib: {isFaultState ? "0.68 g (HIGH)" : "0.08 g (NOMINAL)"}
        </span>
        <span className="absolute bottom-1 right-2 text-[10px] text-slate-400">
          Peak FFT: {isFaultState ? "245 Hz" : "48 Hz"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="p-2 rounded bg-white/5 flex items-center justify-between">
          <span className="text-slate-400">Health Index:</span>
          <span className={`font-bold ${isFaultState ? "text-red-400" : "text-emerald-400"}`}>
            {isFaultState ? "34.2%" : "98.4%"}
          </span>
        </div>
        <div className="p-2 rounded bg-white/5 flex items-center justify-between">
          <span className="text-slate-400">Neural Model:</span>
          <span className="flex items-center gap-1 font-semibold text-slate-200">
            {isFaultState ? (
              <>
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span>FAULT DETECTED</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>OPTIMAL</span>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
