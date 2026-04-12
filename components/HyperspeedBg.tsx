"use client";

import { useMemo } from "react";

export function HyperspeedBg({ className }: { className?: string }) {
  const stars = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${(i * 7 + 3) % 100}%`,
      top: `${(i * 11 + 3) % 100}%`,
      size: i % 5 === 0 ? 2 : 1,
      color: i % 3 === 0 ? "rgba(0, 255, 255, 0.9)" : i % 3 === 1 ? "rgba(168, 85, 247, 0.7)" : "rgba(255, 0, 255, 0.5)",
      glow: i % 4 === 0 ? "0 0 8px rgba(0, 255, 255, 1)" : i % 4 === 1 ? "0 0 6px rgba(168, 85, 247, 0.8)" : "0 0 4px rgba(255, 0, 255, 0.6)",
    })), 
  []);

  const vLines = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${(i + 1) * 11}%`,
      color: i % 2 === 0 ? "rgba(0, 255, 255, 0.12)" : "rgba(168, 85, 247, 0.08)",
    })), 
  []);

  const hLines = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: 15 + i * 14,
      color: i % 2 === 0 ? "rgba(0, 255, 255, 0.06)" : "rgba(255, 0, 255, 0.04)",
    })), 
  []);

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #030308, #0a0a1a, #0f0f2a)",
        }}
      />
      
      <div className="absolute inset-0" style={{ perspective: "600px" }}>
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {vLines.map((line) => (
            <div
              key={line.id}
              className="absolute left-0 top-0 h-[150vh] w-px"
              style={{
                left: line.left,
                background: line.color,
                transform: "rotateX(70deg)",
                transformOrigin: "top center",
              }}
            />
          ))}
        </div>
      </div>

      {hLines.map((line) => (
        <div
          key={line.id}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${line.top}%`,
            background: `linear-gradient(to right, transparent, ${line.color}, transparent)`,
            transform: "rotateX(50deg)",
            transformOrigin: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
            filter: "blur(80px)",
            animation: "warpPulse 6s ease-in-out infinite",
          }}
        />
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: star.color,
            boxShadow: star.glow,
          }}
        />
      ))}

      <style>{`
        @keyframes warpPulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.3); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}