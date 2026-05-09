"use client";

const parts = [
  {
    id: "01",
    title: "Skills",
    anchor: "skills",
    desc: "Modular Claude instructions that encode how you think, write, and decide — so every output sounds like you, not a generic AI.",
    items: ["Tone & voice calibration", "Domain knowledge injection", "Output format control", "Decision frameworks"],
    quote: "The biggest unlock was realising Claude could sound like my best employee — not a tool I'm fighting.",
    author: "R.T., Operations lead",
  },
  {
    id: "02",
    title: "Agents",
    anchor: "agents",
    desc: "Automated pipelines that handle repeatable work end-to-end — triggered by events, scheduled, or on-demand.",
    items: ["Lead qualification", "Content repurposing", "Data enrichment", "Report generation"],
    quote: "Two agents now do what used to take my team 12 hours a week. Every week.",
    author: "S.K., Founder",
  },
  {
    id: "03",
    title: "Routines",
    anchor: "routines",
    desc: "Daily, weekly, and monthly operating rhythms backed by Claude — so your system gets smarter as your business grows.",
    items: ["Morning briefings", "Weekly reviews", "Async decision logs", "Performance summaries"],
    quote: "My Monday morning used to cost me two hours. Now it's a three-minute read.",
    author: "M.D., Agency owner",
  },
  {
    id: "04",
    title: "You",
    anchor: "you",
    desc: "The system is built around your actual workflows — not a template, not a demo. Every call is hands-on in your real stack.",
    items: ["Custom to your tools", "Built in your accounts", "You own everything", "No vendor lock-in"],
    quote: "I didn't want another course. I wanted someone to sit down and build it with me. That's exactly what this is.",
    author: "P.M., Consultant",
  },
];

export default function SystemParts() {
  return (
    <section id="system" className="min-h-screen flex flex-col justify-center py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            The system
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white">
            Four parts.{" "}
            <span className="font-serif italic font-normal text-lime">One system.</span>
            <br />
            Each one built for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {parts.map((p) => (
            <div
              key={p.id}
              id={p.anchor}
              className="group bg-[#111115] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-5 hover:border-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="font-mono-custom text-[11px] text-white/25 tracking-widest">{p.id}</span>
                <span className="font-display font-bold text-lg text-white">{p.title}</span>
              </div>

              {/* Desc */}
              <p className="text-white/40 text-[13px] leading-relaxed flex-1">{p.desc}</p>

              {/* Items */}
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-white/55">
                    <span className="w-1 h-1 rounded-full bg-lime shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Quote */}
              <div>
                <p className="text-white/35 text-[12px] leading-relaxed italic mb-2">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="font-mono-custom text-[10px] text-white/20 tracking-wide">— {p.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
