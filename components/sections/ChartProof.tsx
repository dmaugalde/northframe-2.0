"use client";

const stats = [
  {
    num: "36%",
    label: "Solo founders",
    sub: "up from 24% in 2019",
    visual: "bars",
  },
  {
    num: "$3M+",
    label: "One-person businesses on AI",
    sub: "no team",
    visual: "bubble",
  },
  {
    num: "12%",
    label: "What Founder OS costs vs the boutique AI consulting floor",
    sub: null,
    visual: "bar-compare",
  },
];

export default function ChartProof() {
  return (
    <section id="shift" className="py-28 bg-[#0b0b0d] relative dark-section overflow-hidden">
      <div className="relative z-10">
        {/* Header — centered */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
            <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50">
              What Changed
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,54px)] leading-[1.1] tracking-tight text-white mb-6">
            Prompting alone has a ceiling.
            <br />
            Building with someone who&apos;s already shipped it doesn&apos;t.
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed max-w-2xl mx-auto">
            There&apos;s a point you can&apos;t self-teach past. You could spend six months
            figuring out which combination of skills, agents, and schedules actually
            ships — or you could do it with me in four weeks. Same system. A lot less of
            your time.
          </p>
        </div>

        {/* Chart */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="bg-[#0f0f12] border border-white/[0.07] rounded-2xl p-8 overflow-hidden">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <p className="font-mono-custom text-[10px] text-white/30 uppercase tracking-widest mb-1">Output per hour</p>
              </div>
              <div className="flex items-center gap-6 text-[12px]">
                <span className="flex items-center gap-2 text-white/30">
                  <span className="w-6 h-px bg-white/25 inline-block" style={{ borderTop: "2px dashed rgba(255,255,255,0.25)" }} />
                  You, still prompting by hand
                </span>
                <span className="flex items-center gap-2 text-lime/70">
                  <span className="w-6 h-px bg-lime inline-block" />
                  You, running a Claude system
                </span>
              </div>
            </div>

            <div className="relative">
              <svg viewBox="0 0 900 220" preserveAspectRatio="none" className="w-full h-52">
                <defs>
                  <linearGradient id="limeGradChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c8f135" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c8f135" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Y axis label */}
                <text x="8" y="20" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="Space Grotesk">HIGH</text>
                <text x="8" y="210" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="Space Grotesk">LOW</text>
                {/* Grid lines */}
                {[44, 88, 132, 176].map((y) => (
                  <line key={y} x1="40" y1={y} x2="900" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                ))}
                {/* NOW vertical line */}
                <line x1="640" y1="10" x2="640" y2="210" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 3" />
                <text x="644" y="22" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Space Grotesk">NOW</text>
                {/* Flat dashed line: still prompting */}
                <path d="M40 165 C200 163 400 160 640 158 C750 157 820 155 860 154"
                  stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
                {/* Curve: running system */}
                <path d="M40 200 C120 198 200 192 300 182 C400 172 480 155 560 132 C620 114 640 105 700 72 C760 40 820 20 860 8"
                  stroke="#c8f135" strokeWidth="2.5" fill="none" />
                <path d="M40 200 C120 198 200 192 300 182 C400 172 480 155 560 132 C620 114 640 105 700 72 C760 40 820 20 860 8 L860 220 L40 220 Z"
                  fill="url(#limeGradChart)" />
                {/* Dot at "now" on curve */}
                <circle cx="640" cy="105" r="6" fill="#c8f135" />
                <circle cx="640" cy="105" r="12" fill="#c8f135" fillOpacity="0.2" />
                {/* Labels */}
                <text x="720" y="65" fill="rgba(200,241,53,0.7)" fontSize="11" fontFamily="Space Grotesk">You, running a Claude system</text>
                <text x="720" y="148" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="Space Grotesk">You, still prompting by hand</text>
              </svg>

              {/* X axis labels */}
              <div className="flex justify-between font-mono-custom text-[10px] text-white/20 px-10 mt-2">
                {["2019", "2022", "2024", "2026", "2028"].map((l) => (
                  <span key={l} className={l === "2026" ? "text-white/40" : ""}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 36% */}
            <div className="bg-[#111115] border border-white/[0.07] rounded-2xl p-7">
              <div className="font-display text-[clamp(44px,5vw,64px)] font-bold tracking-tight text-lime leading-none mb-2">
                36%
              </div>
              <p className="text-white/50 text-[13px] mb-6">Solo founders — up from 24% in 2019</p>
              <div className="flex items-end gap-2 h-8">
                {[0.3, 0.45, 0.55, 0.65, 0.82, 1].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${i === 5 ? "bg-lime" : "bg-white/15"}`}
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* $3M+ */}
            <div className="bg-[#111115] border border-white/[0.07] rounded-2xl p-7">
              <div className="font-display text-[clamp(44px,5vw,64px)] font-bold tracking-tight text-lime leading-none mb-2">
                $3M+
              </div>
              <p className="text-white/50 text-[13px] mb-6">One-person businesses on AI — no team</p>
              <div className="flex items-center gap-2 flex-wrap">
                {[12, 8, 6, 8, 10, 24, 8, 6].map((size, i) => (
                  <div
                    key={i}
                    className={`rounded-full ${i === 5 ? "bg-lime" : "bg-white/15"}`}
                    style={{ width: size, height: size }}
                  />
                ))}
                <span className="font-mono-custom text-[11px] text-white/30 ml-1">↑ 1</span>
              </div>
            </div>

            {/* 12% */}
            <div className="bg-[#111115] border border-white/[0.07] rounded-2xl p-7">
              <div className="font-display text-[clamp(44px,5vw,64px)] font-bold tracking-tight text-lime leading-none mb-2">
                12%
              </div>
              <p className="text-white/50 text-[13px] mb-6">What Founder OS costs vs the boutique AI consulting floor</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[12px]">
                  <div className="h-2 bg-white/20 rounded-sm" style={{ width: "100%" }} />
                  <span className="text-white/30 shrink-0">$25,000 market floor</span>
                </div>
                <div className="flex items-center gap-3 text-[12px]">
                  <div className="h-2 bg-lime rounded-sm" style={{ width: "12%" }} />
                  <span className="text-lime/70 shrink-0">$2,950 Founder OS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
