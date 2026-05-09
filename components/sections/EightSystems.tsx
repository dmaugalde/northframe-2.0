"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is this just expensive prompting coaching?",
    a: "No. Prompting is a tactic. We're building infrastructure — Skills that run in your Claude account, agents that trigger without you, routines that execute on a schedule. You leave with a system, not a library of prompts.",
  },
  {
    q: "What if I'm not technical at all?",
    a: "Good. Most of my best builders aren't. Claude Skills don't require code. You need to be able to think clearly about your own business — that's it. I'll handle everything else on the first call.",
  },
  {
    q: "What if I don't have a clear workflow to build?",
    a: "That's what Week 1 is for. We run the filter on everything on your plate and find what belongs in Claude. Most founders come in with no idea and leave with 6 candidates. The filter does the work.",
  },
  {
    q: "What does 'you at the keyboard every call' mean exactly?",
    a: "You're the one doing the building — I'm watching, guiding, correcting. It's not a demo and it's not passive. The reason you stay capable after we finish is because you built it yourself.",
  },
  {
    q: "What happens after the four weeks?",
    a: "You know how to extend the system. The Skills you built keep running. You have the recordings, the documentation, and the ability to add new workflows on your own. Most people don't need me again — that's the point.",
  },
  {
    q: "Is $2,950 the right investment right now?",
    a: "Only you can answer that. But ask yourself what one bad hire costs, or one quarter of doing admin manually. If your time is worth $150/hr and we save 5 hours a week, you're break-even in under a month.",
  },
  {
    q: "What if Claude releases something new mid-build?",
    a: "We've already been through several major releases. Skills is stable and the patterns we're building on have a long shelf life. If something significant drops, we adjust — that's part of having someone alongside who's tracking it full-time.",
  },
  {
    q: "Can you just build it for me instead?",
    a: "That's agency work, and the answer is no. The reason this works long-term is because you built it. If you want someone to hand you a finished system with no understanding of how it runs, that's a freelancer — not what this is.",
  },
];

export default function EightSystems() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
            Before You Apply
          </span>
        </div>

        <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-ink mb-12 max-w-2xl">
          The eight questions you&apos;re already running in your head.
        </h2>

        {/* Divider */}
        <div className="h-px bg-cream-dark mb-8" />

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-cream-dark">
              <button
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono-custom text-[11px] font-bold text-ink-mid/30 tracking-widest shrink-0 mt-0.5">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-[17px] text-ink leading-snug group-hover:text-ink/70 transition-colors">
                    {faq.q}
                  </span>
                </div>
                <span className={`font-mono-custom text-[20px] text-ink-mid shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-6 pl-[52px]">
                  <p className="text-ink-mid text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
