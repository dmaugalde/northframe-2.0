"use client";

const filters = [
  {
    tag: "Filter / Volume",
    question: "\"Does it happen 2+ times a week?\"",
    pass: "Monday inbox triage",
    fail: "Quarterly strategy memo",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-mid">
        <rect x="3" y="4" width="4" height="16" rx="1"/>
        <rect x="10" y="8" width="4" height="12" rx="1"/>
        <rect x="17" y="2" width="4" height="20" rx="1"/>
      </svg>
    ),
  },
  {
    tag: "Filter / Shape",
    question: "\"Does the output have the same shape every time?\"",
    pass: "Weekly content post",
    fail: "One-off investor deck",
    icon: (
      <div className="w-5 h-5 bg-ink rounded-sm" />
    ),
  },
  {
    tag: "Filter / Judgment",
    question: "\"Can Claude make the call — or only you?\"",
    pass: "Invoice chasing",
    fail: "Client trust call",
    icon: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded-full border-2 border-ink flex items-center justify-center">
          <span className="text-[7px] font-bold text-ink">C</span>
        </div>
        <div className="w-5 h-5 rounded-full border-2 border-ink/50 flex items-center justify-center">
          <span className="text-[7px] font-bold text-ink/50">YO</span>
        </div>
      </div>
    ),
  },
];

const buildCol = ["Monday inbox triage", "Lead follow-ups (day 3 + 7)", "Invoice chasing", "Weekly content draft", "Sales call prep briefs", "Newsletter send"];
const hybridCol = ["Monthly financial brief", "Proposal drafts", "Hiring screening"];
const manualCol = ["Student 1:1 calls", "Pricing decisions"];

export default function ThreeQuestions() {
  return (
    <section id="examples" className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
            How Session 1 Works
          </span>
        </div>

        <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-ink mb-4">
          I ask three questions about every workflow you bring me.
        </h2>
        <p className="text-ink-mid text-[15px] leading-relaxed mb-12 max-w-xl">
          After 18 months of trial and error — across every AI tool worth trying
          — I&apos;ve got a filter. It saves founders hundreds of hours automating the
          wrong things. Here&apos;s how it runs on a real founder&apos;s week — yours will
          look different.
        </p>

        {/* Filter question cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {filters.map((f, i) => (
            <div key={i} className="bg-white border border-cream-dark rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark">
                <span className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-ink-mid/50">
                  {f.tag}
                </span>
                <div className="shrink-0">{f.icon}</div>
              </div>
              {/* Question */}
              <div className="px-5 py-5">
                <p className="font-display font-bold text-[16px] text-ink leading-snug mb-5">
                  {f.question}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-custom text-[10px] font-bold text-white bg-ink rounded px-2 py-0.5">PASS</span>
                    <span className="font-mono-custom text-[12px] text-ink-mid">{f.pass}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-custom text-[10px] font-bold text-ink-mid border border-ink-mid/30 rounded px-2 py-0.5">FAIL</span>
                    <span className="font-mono-custom text-[12px] text-ink-mid/50">{f.fail}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* After filter runs */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-ink-mid/50 mb-2">
                After the Filter Runs
              </p>
              <h3 className="font-display font-bold text-[clamp(22px,3vw,34px)] text-ink">
                Every workflow lands somewhere.
              </h3>
            </div>
            <p className="font-mono-custom text-[11px] text-ink-mid/50 text-right max-w-[200px]">
              3 dots below each workflow = the 3 filters.
              <br />Filled = pass. Hollow = fail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream-dark rounded-2xl overflow-hidden">
            {/* Build */}
            <div className="bg-cream p-7">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-custom text-[10px] text-ink-mid/50">/ 01</span>
                <span className="font-display font-bold text-[40px] leading-none text-ink/10">6</span>
              </div>
              <p className="font-display font-bold text-[20px] text-ink mb-1">Build</p>
              <p className="font-mono-custom text-[11px] text-ink-mid/50 mb-5">Claude runs it end-to-end.</p>
              <div className="space-y-2">
                {buildCol.map((item) => (
                  <div key={item} className="bg-ink rounded-lg px-4 py-2.5">
                    <span className="font-mono-custom text-[12px] text-cream/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hybrid */}
            <div className="bg-cream p-7">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-custom text-[10px] text-ink-mid/50">/ 02</span>
                <span className="font-display font-bold text-[40px] leading-none text-ink/10">3</span>
              </div>
              <p className="font-display font-bold text-[20px] text-ink mb-1">Hybrid</p>
              <p className="font-mono-custom text-[11px] text-ink-mid/50 mb-5">Claude drafts. You decide.</p>
              <div className="space-y-2">
                {hybridCol.map((item) => (
                  <div key={item} className="bg-white border border-cream-dark rounded-lg px-4 py-2.5">
                    <span className="font-mono-custom text-[12px] text-ink">{item}</span>
                    <div className="flex gap-1 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-ink" />
                      <div className="w-2 h-2 rounded-full bg-ink" />
                      <div className="w-2 h-2 rounded-full border border-ink/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keep manual */}
            <div className="bg-cream p-7">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-custom text-[10px] text-ink-mid/50">/ 03</span>
                <span className="font-display font-bold text-[40px] leading-none text-ink/10">2</span>
              </div>
              <p className="font-display font-bold text-[20px] text-ink mb-1">Keep manual</p>
              <p className="font-mono-custom text-[11px] text-ink-mid/50 mb-5">Your taste. Your trust. Your call.</p>
              <div className="space-y-2">
                {manualCol.map((item) => (
                  <div key={item} className="bg-white/60 border border-cream-dark/60 rounded-lg px-4 py-2.5">
                    <span className="font-mono-custom text-[12px] text-ink/50">{item}</span>
                    <div className="flex gap-1 mt-1.5">
                      <div className="w-2 h-2 rounded-full border border-ink/30" />
                      <div className="w-2 h-2 rounded-full border border-ink/30" />
                      <div className="w-2 h-2 rounded-full border border-ink/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-ink-mid/50 text-[13px] leading-relaxed mt-6 italic">
            This founder came out with 6 to build, 3 hybrid, 2 manual. Some come out with 3. Some with 8. The
            number isn&apos;t the point — the right fit for your week is. Whatever clears the filter, we build. Whatever
            doesn&apos;t, you keep.
          </p>
        </div>
      </div>
    </section>
  );
}
