"use client";

const cards = [
  {
    emoji: "🏗️",
    name: "Jordan S.",
    role: "Agency owner",
    result: "$18K saved annually",
    quote: "BuildLoop showed us how to go beyond checklists to production-ready apps. We're restructuring how our entire agency builds. Game changer.",
  },
  {
    emoji: "⚖️",
    name: "Priya M.",
    role: "Boutique law firm founder",
    result: "22 hrs/wk recovered",
    quote: "I was skeptical a law firm could benefit from this. We now have agents that handle intake, draft NDAs, and prep client briefings. Completely changed our capacity.",
  },
  {
    emoji: "🏡",
    name: "Carlos R.",
    role: "Real estate investor",
    result: "3× deal analysis speed",
    quote: "The deal analysis agent alone paid for the entire engagement in week two. I can now evaluate twice as many opportunities without adding headcount.",
  },
  {
    emoji: "🛍️",
    name: "Aisha W.",
    role: "E-commerce brand founder",
    result: "40% less support load",
    quote: "Our support agent handles 40% of incoming tickets end-to-end. The ones that get through to humans are already summarized and categorized. Night and day.",
  },
  {
    emoji: "📊",
    name: "Tom B.",
    role: "CFO, Series A startup",
    result: "Board decks in 2 hrs not 2 days",
    quote: "The weekly reporting routine that used to take my team two days now generates a first draft in under two hours. I can't believe we lived without this.",
  },
  {
    emoji: "🎓",
    name: "Sarah K.",
    role: "EdTech founder",
    result: "5 agents in production",
    quote: "I came in thinking I'd get one workflow automated. I left with five agents running and a clear roadmap to expand the system. The ROI is obvious.",
  },
];

export default function Operators() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            Member results
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white mb-3">
            Real operators.{" "}
            <span className="font-serif italic font-normal text-lime">
              Running differently now.
            </span>
          </h2>
        </div>

        {/* Featured quote */}
        <div className="bg-[#111115] border border-white/[0.07] rounded-2xl p-7 mb-8">
          <p className="text-white/60 text-[15px] leading-relaxed mb-4">
            &ldquo;BuildLoop showed us how to go beyond checklists to production-ready apps.
            We&apos;re restructuring how our entire agency builds. Game changer.&rdquo;
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1a1a20] flex items-center justify-center text-lg">🏗️</div>
              <div>
                <p className="font-mono-custom text-[13px] font-semibold text-white">Jordan S.</p>
                <p className="font-mono-custom text-[11px] text-white/30">Agency owner</p>
              </div>
            </div>
            <span className="font-mono-custom text-[11px] text-lime bg-lime/10 border border-lime/20 rounded-full px-3 py-1">
              $18K saved / yr
            </span>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.slice(1).map((c, i) => (
            <div
              key={i}
              className="bg-[#111115] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/12 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a1a20] flex items-center justify-center text-base shrink-0">
                    {c.emoji}
                  </div>
                  <div>
                    <p className="font-mono-custom text-[13px] font-semibold text-white">{c.name}</p>
                    <p className="font-mono-custom text-[11px] text-white/30">{c.role}</p>
                  </div>
                </div>
                <div className="flex shrink-0">
                  {[0,1,2,3,4].map((s) => (
                    <span key={s} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>

              <p className="text-white/45 text-[13px] leading-relaxed flex-1 italic">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="h-px bg-white/[0.05]" />
              <span className="font-mono-custom text-[11px] text-lime/70 font-semibold">{c.result}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
