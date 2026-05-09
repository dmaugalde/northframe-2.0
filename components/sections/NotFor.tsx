"use client";

const notFor = [
  {
    icon: "🎓",
    title: "People who want to learn prompting",
    desc: "This isn't a course on how to write better prompts. There are great ones out there. This is for people who want a working system, not more theory.",
  },
  {
    icon: "🛋️",
    title: "People who want to watch, not build",
    desc: "Every call is hands-on. You're at the keyboard. If you want pre-recorded walkthroughs you can watch at 2x speed, this isn't that.",
  },
  {
    icon: "🤷",
    title: "People with no clear workflows to automate",
    desc: "We need something to work with. If you don't yet have repeatable work that takes time, there's nothing to build an agent around. Come back when you do.",
  },
];

export default function NotFor() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-28 bg-[#0e0e11] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(200,241,53,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-lg mx-auto mb-16">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            Honest filter
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white">
            Three people{" "}
            <span className="font-serif italic font-normal text-white/40">this isn&apos;t for.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {notFor.map((item, i) => (
            <div
              key={i}
              className="bg-[#0b0b0d] border border-white/[0.07] rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/20 transition-all duration-300"
            >
              {/* Red accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-red-500/0 group-hover:bg-red-500/30 transition-colors duration-300" />

              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-display font-bold text-lg text-white/70 mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/35 text-[13px] leading-relaxed">{item.desc}</p>

              {/* Strikethrough overlay effect */}
              <div className="absolute top-7 right-7 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <span className="text-red-400/60 text-xs font-bold">✕</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flip side: who it IS for */}
        <div className="bg-lime/[0.05] border border-lime/15 rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-lime/50 mb-4">
            Who it is for
          </p>
          <p className="font-display font-bold text-xl text-white mb-3">
            Founders and operators who already have real work — and want Claude running more of it.
          </p>
          <p className="text-white/40 text-[14px] leading-relaxed">
            If you have repeatable workflows, recurring tasks, and a business that needs more
            leverage — you&apos;re in the right place.
          </p>
        </div>
      </div>
    </section>
  );
}
