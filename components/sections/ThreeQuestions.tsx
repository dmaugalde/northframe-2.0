"use client";
import { useState } from "react";

const questions = [
  {
    q: "What's eating 3+ hours a week that feels embarrassingly manual?",
    desc: "We find the drag. The thing you do every week that you've told yourself 'I should automate this' but never have. That's where we start.",
    tag: "High ROI target",
  },
  {
    q: "Who else has to touch it before it's done?",
    desc: "We map the handoffs. The places where work stalls, gets lost, or requires back-and-forth. Those friction points are where agents create the most leverage.",
    tag: "Workflow map",
  },
  {
    q: "What would you do with the time if this just happened?",
    desc: "We design toward the outcome. Building a system is only meaningful if it frees you for higher-leverage work. We keep that target in view the whole time.",
    tag: "Leverage clarity",
  },
];

const workflows = [
  { label: "Lead qualification",    time: "4 hrs/wk", status: "automated" },
  { label: "Weekly report draft",   time: "3 hrs/wk", status: "automated" },
  { label: "Onboarding emails",     time: "2 hrs/wk", status: "automated" },
  { label: "Competitor monitoring", time: "2 hrs/wk", status: "in review" },
  { label: "Invoice follow-up",     time: "1 hr/wk",  status: "pending" },
];

export default function ThreeQuestions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="routines" className="min-h-screen flex flex-col justify-center py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            My method
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,50px)] leading-[1.1] tracking-tight text-white">
            I ask three questions about every workflow you bring me.
          </h2>
        </div>

        {/* Question cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {questions.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-[#111115] border rounded-2xl p-7 transition-all duration-300 cursor-default ${
                hovered === i
                  ? "border-lime/30 bg-[#131318]"
                  : "border-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-custom text-[11px] font-bold tracking-widest uppercase text-lime/50">
                  0{i + 1}
                </span>
                <span className="font-mono-custom text-[10px] text-white/25 border border-white/10 rounded-full px-3 py-1">
                  {item.tag}
                </span>
              </div>
              <p className="font-display font-bold text-[16px] text-white leading-snug mb-4">
                {item.q}
              </p>
              <p className="text-white/35 text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Workflow submissions table */}
        <div className="bg-[#0f0f12] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <div>
              <p className="font-display font-bold text-white text-sm">Workflow submissions</p>
              <p className="font-mono-custom text-[11px] text-white/30 mt-0.5">from a sample engagement</p>
            </div>
            <span className="font-mono-custom text-[11px] text-lime/60 bg-lime/[0.08] border border-lime/20 rounded-full px-3 py-1">
              12 hrs/wk recovered
            </span>
          </div>

          <div className="divide-y divide-white/[0.04]">
            {workflows.map((wf, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    wf.status === "automated" ? "bg-lime" :
                    wf.status === "in review" ? "bg-yellow-400" : "bg-white/20"
                  }`} />
                  <span className="text-[14px] text-white/70">{wf.label}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-mono-custom text-[12px] text-white/30">{wf.time}</span>
                  <span className={`font-mono-custom text-[11px] font-semibold px-3 py-1 rounded-full ${
                    wf.status === "automated"
                      ? "text-lime bg-lime/10"
                      : wf.status === "in review"
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-white/30 bg-white/[0.04]"
                  }`}>
                    {wf.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
