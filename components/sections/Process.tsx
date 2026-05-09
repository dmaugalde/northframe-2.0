"use client";
import { useState } from "react";

const weeks = [
  {
    wk: "WK1",
    label: "Filter",
    desc: "A written Install Plan — every workflow worth building, sorted and scoped.",
    highlight: true,
  },
  {
    wk: "WK2",
    label: "Build",
    desc: "The first pieces running without you touching them.",
    highlight: true,
  },
  {
    wk: "WK3",
    label: "Automate",
    desc: "A system, not a demo. First week you feel time come back.",
    highlight: true,
  },
  {
    wk: "WK4",
    label: "Handoff",
    desc: "You leave able to extend it — for years, without me.",
    highlight: true,
  },
];

// Calendar days for the month (5 weeks visible)
const calRows = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
];
const sessionDays = new Set([3, 10, 17, 24]);
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function Process() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  return (
    <section id="four-weeks" className="py-28 bg-[#0b0b0d] dark-section relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50">
            The Mechanism
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-white mb-10">
              Four weeks. One call each. You at the keyboard every time.
            </h2>

            <div className="space-y-7">
              {weeks.map((w, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center">
                      <span className="font-mono-custom text-[10px] font-bold text-black">{w.wk}</span>
                    </div>
                    {i < weeks.length - 1 && (
                      <div className="w-px flex-1 min-h-[32px] mt-2 bg-white/[0.08]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="font-mono-custom text-[11px] font-bold tracking-widest uppercase text-lime/70 mb-1">
                      {w.label}
                    </p>
                    <p className="text-white/50 text-[14px] leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendar */}
          <div className="bg-[#111115] border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Calendar header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-sm bg-lime" />
                </div>
                <span className="font-mono-custom text-[11px] font-semibold text-white/60 uppercase tracking-widest">
                  Your Four-Week Build
                </span>
              </div>
              <span className="font-mono-custom text-[10px] text-lime/50 uppercase tracking-widest">
                Proposed · You Pick the Days
              </span>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-white/[0.06]">
              {days.map((d) => (
                <div key={d} className="py-2 text-center">
                  <span className="font-mono-custom text-[10px] font-semibold text-white/25 uppercase tracking-widest">
                    {d}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar rows */}
            <div>
              {calRows.map((row, ri) => (
                <div key={ri} className="grid grid-cols-7">
                  {row.map((day, di) => {
                    const isSession = sessionDays.has(day);
                    const isValid = day <= 31;
                    const wkNum = isSession ? weeks[Array.from(sessionDays).indexOf(day)] : null;

                    return (
                      <div
                        key={di}
                        className={`relative py-3 flex flex-col items-center justify-center border-b border-r border-white/[0.04] transition-colors ${
                          isSession
                            ? "bg-lime/10 cursor-pointer"
                            : isValid
                            ? "hover:bg-white/[0.02] cursor-default"
                            : "opacity-0"
                        }`}
                        onMouseEnter={() => isSession && setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        {isValid && (
                          <>
                            <span className={`font-mono-custom text-[13px] font-semibold ${
                              isSession ? "text-lime" : "text-white/25"
                            }`}>
                              {day}
                            </span>
                            {isSession && wkNum && (
                              <span className="font-mono-custom text-[8px] text-lime/60 uppercase mt-0.5">
                                {wkNum.wk}
                              </span>
                            )}
                          </>
                        )}
                        {isSession && (
                          <div className="absolute inset-0 ring-1 ring-lime/40 rounded-sm pointer-events-none" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/[0.06]">
              <p className="font-mono-custom text-[10px] text-white/20 text-center mb-3">
                † Hover a day to see what happens
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime" />
                  <span className="font-mono-custom text-[10px] text-white/40">60-min live with me</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded border border-white/30" />
                  <span className="font-mono-custom text-[10px] text-white/40">Your build time · 2–4 hrs/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
