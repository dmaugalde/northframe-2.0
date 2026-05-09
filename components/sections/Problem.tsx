"use client";

const traps = [
  {
    tag: "The Firehose Trap",
    regular: "Every week a new release.",
    highlight: "You can't tell what's worth building on.",
    desc: "Skills, MCP, memory, agents, computer use. Some of it's gold. Most of it's noise. You're alone trying to figure out which.",
  },
  {
    tag: "The Quality Trap",
    regular: "You built a workflow.",
    highlight: "You don't know if it's any good.",
    desc: "It works. Sort of. You've seen others do better but no one's told you what you're missing. Production-grade is invisible until someone points to it.",
  },
  {
    tag: "The Unused-Potential Trap",
    regular: "You built the thing.",
    highlight: "It never gets used the way it could.",
    desc: "It half-works. You forget what it can do. It sits there at 20% of its potential while you move on to the next one. Nothing compounds.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 bg-[#0b0b0d] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/50">
            The Problem
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white mb-4">
          You&apos;re already using Claude.{" "}
          <span className="text-lime">
            You&apos;re not sure any of it is landing.
          </span>
        </h2>
        <p className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-2xl">
          Here&apos;s what I hear on calls with founders every week. Tell me if any of these sound like you.
        </p>

        {/* Trap cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {traps.map((trap, i) => (
            <div key={i} className="bg-[#111115] border border-white/[0.08] rounded-2xl p-7">
              <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/30 mb-6">
                {trap.tag}
              </p>
              <p className="font-display font-bold text-[18px] leading-snug mb-4">
                <span className="text-white">{trap.regular} </span>
                <span className="text-lime">{trap.highlight}</span>
              </p>
              <p className="text-white/40 text-[13px] leading-relaxed">{trap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
