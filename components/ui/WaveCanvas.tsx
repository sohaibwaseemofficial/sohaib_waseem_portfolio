"use client";

import React, { useEffect, useRef } from "react";

interface WaveCanvasProps {
  className?: string;
}

export function WaveCanvas({ className = "" }: WaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let time = 0;
    let isVisible = true;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Pause rendering when scrolled out of viewport
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const checkReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const linesCount = 28;
    const stepX = 22;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!checkReducedMotion) {
        time += 0.012;
      }

      ctx.clearRect(0, 0, width, height);

      // Render flowing topographic perspective lines
      const baseY = height * 0.65;

      for (let i = 0; i < linesCount; i++) {
        const lineProgress = i / linesCount;
        const yOffset = baseY + i * 16;
        
        ctx.beginPath();

        // Calculate gradient color: blends from emerald/cyan (06B6D4) to copper/amber (E07A5F)
        const alpha = Math.max(0.04, (1 - lineProgress * 0.7) * 0.35);
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.8;

        for (let x = 0; x <= width + stepX; x += stepX) {
          // Dynamic wave physics
          const wave1 = Math.sin(x * 0.0035 + time + i * 0.2) * 28;
          const wave2 = Math.cos(x * 0.006 - time * 0.8 + i * 0.15) * 16;
          
          // Mouse proximity effect
          const distToMouse = Math.hypot(x - mouseX, yOffset - mouseY);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 320);
          const mouseElevation = Math.sin(mouseInfluence * Math.PI) * -38;

          const perspectiveScale = 0.5 + lineProgress * 0.8;
          const y = yOffset + (wave1 + wave2) * perspectiveScale + mouseElevation;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
}
