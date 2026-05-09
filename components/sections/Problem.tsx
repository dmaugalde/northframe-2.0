"use client";

const stats = [
  { num: "73%", label: "of Claude users can't describe what it actually saved them last week" },
  { num: "6 hrs", label: "average weekly time lost to prompts that almost worked" },
  { num: "$0", label: "in recurring revenue from AI for most people using it daily" },
  { num: "0", label: "production workflows built from most $20/mo subscriptions" },
];

export default function Problem() {
  return (
    <section id="problem" className="min-h-screen flex flex-col justify-center py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            The problem
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white mb-5">
            You&apos;re already using Claude.{" "}
            <span className="text-white/40">
              You&apos;re not sure any of it is landing.
            </span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed">
            You paste things in. You get things out. But nothing is connected,
            nothing is repeatable, and you couldn&apos;t explain to anyone why you pay
            for it.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0b0b0d] p-7 hover:bg-[#111115] transition-colors duration-200">
              <div className="font-display text-4xl font-bold tracking-tight text-lime mb-3">
                {s.num}
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center border border-white/[0.06] rounded-2xl p-8 bg-[#0f0f12]">
          <div className="flex-1">
            <p className="font-display font-bold text-xl text-white mb-2">
              Prompting alone has a ceiling.
            </p>
            <p className="text-white/40 text-[15px] leading-relaxed">
              Building with someone who&apos;s already shipped it doesn&apos;t.
              The gap between &quot;I use Claude&quot; and &quot;Claude runs my business&quot; isn&apos;t
              a knowledge gap — it&apos;s a build gap.
            </p>
          </div>
          <div className="shrink-0 lg:w-64">
            {/* Mini chart visual */}
            <div className="relative h-20">
              <svg viewBox="0 0 256 80" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c8f135" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#c8f135" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* "Prompting alone" flat line */}
                <path d="M0 60 L256 55" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
                {/* "With system" curve */}
                <path d="M0 72 C40 70 80 60 120 42 C160 24 200 12 256 4"
                  stroke="#c8f135" strokeWidth="2" fill="none" />
                <path d="M0 72 C40 70 80 60 120 42 C160 24 200 12 256 4 L256 80 L0 80 Z"
                  fill="url(#chartGrad)" />
              </svg>
              <div className="absolute top-0 right-0 font-mono-custom text-[10px] text-lime/60">
                with system
              </div>
              <div className="absolute bottom-4 right-0 font-mono-custom text-[10px] text-white/25">
                prompting alone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
