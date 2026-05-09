"use client";
import { useState } from "react";

const weeks = [
  {
    num: "Week 1",
    title: "Audit & Architecture",
    desc: "We map every workflow you run, identify the highest-leverage automation targets, and design the full system before writing a single prompt.",
    terminal: [
      "$ analyzing current workflows...",
      "✓ 14 repeatable tasks identified",
      "✓ 3 high-leverage agents scoped",
      "✓ Skills library structure defined",
      "→ ready to build",
    ],
  },
  {
    num: "Week 2",
    title: "Skills & Voice",
    desc: "We build your Skills library — the core instructions that make Claude sound like you, know your domain, and output in your preferred formats.",
    terminal: [
      "$ building skills library...",
      "✓ tone_and_voice.md — done",
      "✓ domain_knowledge.md — done",
      "✓ output_formats.md — done",
      "✓ decision_framework.md — done",
      "→ testing against real inputs",
    ],
  },
  {
    num: "Week 3",
    title: "Agents & Pipelines",
    desc: "We build the automated pipelines — connected to your actual tools, running in your accounts, handling your highest-volume repeatable tasks.",
    terminal: [
      "$ deploying agents...",
      "✓ lead_qualifier.agent — live",
      "✓ content_repurposer.agent — live",
      "✓ weekly_report.agent — live",
      "→ running 3 agents in production",
    ],
  },
  {
    num: "Week 4",
    title: "Routines & Handoff",
    desc: "We embed your system into daily operating rhythms, document everything, and make sure you can run and extend it yourself after the engagement ends.",
    terminal: [
      "$ finalizing system...",
      "✓ morning_briefing.routine — active",
      "✓ weekly_review.routine — active",
      "✓ system documentation — complete",
      "✓ you own everything",
      "→ system handoff complete ✓",
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="min-h-screen flex flex-col justify-center py-28 bg-[#0e0e11] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(200,241,53,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-xl mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            How it works
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white">
            Four weeks. One call each.{" "}
            <span className="font-serif italic font-normal text-lime">
              We&apos;re at the keyboard every time.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps list */}
          <div className="space-y-0">
            {weeks.map((w, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left flex gap-5 py-7 border-b transition-all duration-200 ${
                  i === active
                    ? "border-lime/30"
                    : "border-white/[0.06] hover:border-white/10"
                }`}
              >
                {/* Indicator */}
                <div className="flex flex-col items-center pt-1 shrink-0">
                  <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all ${
                    i === active ? "bg-lime border-lime" : "bg-transparent border-white/20"
                  }`} />
                  {i < weeks.length - 1 && (
                    <div className={`w-px flex-1 mt-2 min-h-[40px] transition-colors ${
                      i < active ? "bg-lime/30" : "bg-white/[0.06]"
                    }`} />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono-custom text-[11px] font-semibold tracking-widest uppercase text-lime/60">
                      {w.num}
                    </span>
                  </div>
                  <p className={`font-display font-bold text-lg mb-2 transition-colors ${
                    i === active ? "text-white" : "text-white/40"
                  }`}>
                    {w.title}
                  </p>
                  <p className={`text-[14px] leading-relaxed transition-all duration-300 ${
                    i === active ? "text-white/50 max-h-24 opacity-100" : "text-transparent max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    {w.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Terminal preview */}
          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl overflow-hidden sticky top-24">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-[#0f0f13]">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="ml-3 font-mono-custom text-[11px] text-white/20 tracking-wide">
                founder-os — {weeks[active].num.toLowerCase().replace(" ", "_")}.sh
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono-custom text-[13px] space-y-2 min-h-[260px]">
              {weeks[active].terminal.map((line, i) => (
                <div
                  key={`${active}-${i}`}
                  className={`leading-relaxed ${
                    line.startsWith("✓")
                      ? "text-lime/70"
                      : line.startsWith("→")
                      ? "text-lime font-semibold"
                      : line.startsWith("$")
                      ? "text-white/40"
                      : "text-white/30"
                  }`}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-1 mt-4">
                <span className="text-lime/40">$</span>
                <span className="w-2 h-4 bg-lime/40 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
