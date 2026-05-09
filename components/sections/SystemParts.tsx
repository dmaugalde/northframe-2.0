"use client";

const parts = [
  {
    id: "01",
    title: "Skills",
    subtitle: "The Muscle Memory",
    desc: "Prompts Claude runs from — triage your inbox, draft your content, flag your numbers. Written once. Used for years. Extended by writing another prompt.",
    items: ["gmail-triage.md", "weekly-brief.md", "money-monitor.md"],
    extra: "+ 3 custom to you",
  },
  {
    id: "02",
    title: "Agents",
    subtitle: "The Brain",
    desc: "Composite workflows that read context across skills and decide — not 'draft me an email' but 'handle Monday morning.' One or two per Founder OS, custom to what actually needs judgment in your work.",
    agent: "monday-operator",
    agentDesc: "reads your calendar, inbox, and Stripe — writes your Monday brief at 7am.",
  },
  {
    id: "03",
    title: "Routines",
    subtitle: "The Clock",
    desc: "Your system on a schedule. Monday brief, Friday close-out, lead follow-ups on day 3 and day 7. All running without a reminder, in your voice, forever.",
    schedule: [
      { days: "MON", time: "07:00" },
      { days: "FRI", time: "17:00" },
      { days: "TUE, THU", time: "10:00" },
      { days: "MON, WED", time: "09:00" },
    ],
  },
  {
    id: "04",
    title: "You",
    subtitle: "The Operator",
    desc: "Everything above runs for you. You direct, review, and extend. Add a new workflow by writing a prompt — I teach you how during Week 4. The system is the team.",
    tagline: "You are the founder. The system is the team.",
  },
];

export default function SystemParts() {
  return (
    <section id="system" className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
            <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
              The Shape of a Founder OS
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,54px)] leading-[1.1] tracking-tight text-ink">
            Four parts.{" "}
            <span className="text-lime">One system.</span>
            <br />
            Each one built for you.
          </h2>
          <p className="text-ink-mid text-[15px] leading-relaxed mt-4 max-w-xl">
            Every Founder OS has the same four parts. The specifics — which
            skills, which agents, which schedule — we design together in Session
            1, around your business.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-dark rounded-2xl overflow-hidden mb-12">
          {parts.map((p, i) => (
            <div key={p.id} className="bg-cream p-7 relative">
              {/* Big watermark number */}
              <div className="font-display font-bold text-[80px] leading-none text-black/[0.04] absolute top-2 right-4 select-none pointer-events-none">
                {p.id}
              </div>

              {/* Header */}
              <div className="mb-5">
                <span className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-ink-mid/50">
                  / {p.id}
                </span>
                <h3 className="font-display font-bold text-[20px] text-ink mt-1">{p.title}</h3>
                <p className="font-mono-custom text-[10px] font-semibold tracking-widest uppercase text-ink-mid/50 mt-0.5">
                  {p.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-ink-mid text-[13px] leading-relaxed mb-6">{p.desc}</p>

              {/* Bottom content varies per part */}
              {p.items && (
                <div className="space-y-1.5">
                  {p.items.map((item) => (
                    <div key={item} className="font-mono-custom text-[12px] text-ink-mid/60 bg-cream-dark rounded-md px-3 py-1.5">
                      {item}
                    </div>
                  ))}
                  {p.extra && (
                    <div className="font-mono-custom text-[11px] text-lime font-semibold mt-2">
                      {p.extra}
                    </div>
                  )}
                </div>
              )}

              {p.agent && (
                <div className="bg-cream-dark rounded-lg p-4 border-l-2 border-lime">
                  <span className="font-mono-custom text-[11px] font-bold text-ink">{p.agent}</span>
                  <p className="font-mono-custom text-[11px] text-ink-mid/60 mt-1">{p.agentDesc}</p>
                </div>
              )}

              {p.schedule && (
                <div className="space-y-1.5">
                  {p.schedule.map((s, si) => (
                    <div key={si} className="flex items-center justify-between font-mono-custom text-[11px]">
                      <span className="text-ink-mid/50">{s.days}</span>
                      <span className="text-ink font-semibold">{s.time}</span>
                    </div>
                  ))}
                </div>
              )}

              {p.tagline && (
                <div className="bg-ink rounded-lg p-4">
                  <p className="font-mono-custom text-[12px] text-cream/70 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Luuk quote card */}
        <div className="bg-white border border-cream-dark rounded-2xl p-8 max-w-xl">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-lime flex items-center justify-center shrink-0">
              <span className="font-mono-custom text-[14px] font-bold text-black">L</span>
            </div>
            <div>
              <p className="text-ink text-[16px] leading-relaxed font-medium mb-3">
                &ldquo;The shape is what&apos;s constant. Every other Founder OS on
                earth has the same four parts.{" "}
                <span className="font-bold">
                  Yours will share nothing else with them.
                </span>
                &rdquo;
              </p>
              <p className="font-mono-custom text-[11px] text-ink-mid uppercase tracking-widest">
                Luuk · Founder, Buildloop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
