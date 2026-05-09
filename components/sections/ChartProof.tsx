"use client";

const bigStats = [
  { num: "36%", label: "avg time saved per week by members with a full Claude system" },
  { num: "83M+", label: "tokens processed across member workflows last quarter" },
  { num: "12×", label: "output leverage reported after completing the four-week build" },
];

export default function ChartProof() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-28 bg-[#0e0e11] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,241,53,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-xl mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            What changes
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,50px)] leading-[1.1] tracking-tight text-white">
            Prompting alone has a ceiling.{" "}
            <span className="font-serif italic font-normal text-lime">
              Building with someone who&apos;s already shipped it doesn&apos;t.
            </span>
          </h2>
        </div>

        {/* Chart area */}
        <div className="bg-[#0b0b0d] border border-white/[0.06] rounded-2xl p-8 mb-12 overflow-hidden relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono-custom text-xs text-white/30 uppercase tracking-widest mb-1">Output over time</p>
              <p className="font-display font-bold text-lg text-white">The compounding effect</p>
            </div>
            <div className="flex items-center gap-5 text-[12px]">
              <span className="flex items-center gap-2 text-white/30">
                <span className="w-8 h-px bg-white/20 inline-block border-dashed border-t border-white/20" />
                Solo prompting
              </span>
              <span className="flex items-center gap-2 text-lime/70">
                <span className="w-8 h-px bg-lime inline-block" />
                With a Claude system
              </span>
            </div>
          </div>

          <div className="relative h-52">
            <svg viewBox="0 0 900 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="limeGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8f135" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#c8f135" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" y1={y} x2="900" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {/* Flat line: solo prompting */}
              <path d="M0 155 C200 148 400 144 600 140 C700 138 800 136 900 134"
                stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
              {/* Curve: with system */}
              <path d="M0 190 C80 185 160 175 240 158 C320 140 400 110 480 80 C560 50 650 28 750 15 C820 6 870 4 900 2"
                stroke="#c8f135" strokeWidth="2.5" fill="none" />
              <path d="M0 190 C80 185 160 175 240 158 C320 140 400 110 480 80 C560 50 650 28 750 15 C820 6 870 4 900 2 L900 200 L0 200 Z"
                fill="url(#limeGrad2)" />
              {/* Milestone dots */}
              {[
                { x: 240, y: 158, label: "Wk 1" },
                { x: 480, y: 80,  label: "Wk 2" },
                { x: 700, y: 18,  label: "Wk 4" },
              ].map((dot) => (
                <g key={dot.label}>
                  <circle cx={dot.x} cy={dot.y} r="5" fill="#c8f135" />
                  <circle cx={dot.x} cy={dot.y} r="10" fill="#c8f135" fillOpacity="0.2" />
                </g>
              ))}
            </svg>
            {/* X axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between font-mono-custom text-[10px] text-white/20 px-2">
              {["Start", "Week 1", "Week 2", "Week 3", "Week 4", "After"].map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Big stat row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {bigStats.map((s, i) => (
            <div key={i} className="bg-[#0b0b0d] hover:bg-[#111115] transition-colors p-8">
              <div className="font-display text-[clamp(40px,5vw,60px)] font-bold tracking-tight text-white leading-none mb-3">
                {s.num}
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Nav dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0,1,2,3,4].map((i) => (
            <div key={i} className={`rounded-full transition-all ${i === 1 ? "w-6 h-1.5 bg-lime" : "w-1.5 h-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
