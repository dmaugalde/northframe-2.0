"use client";

const systems = [
  { name: "Email / Inbox",         icon: "📧", pain: "3–5 hrs/wk triaging, drafting, following up" },
  { name: "CRM & Lead Tracking",   icon: "📋", pain: "Manual entry, inconsistent qualification" },
  { name: "Content & Copywriting", icon: "✍️", pain: "Blank page every time, no repeatable voice" },
  { name: "Reporting & Analytics", icon: "📊", pain: "Pulling data, formatting slides, losing weekends" },
  { name: "Client Onboarding",     icon: "🤝", pain: "Different every time, always something missing" },
  { name: "Research & Monitoring", icon: "🔍", pain: "Checking manually, no structured summaries" },
  { name: "Proposals & Contracts", icon: "📄", pain: "Starting from scratch for every prospect" },
  { name: "Internal Knowledge",    icon: "🧠", pain: "Answering the same questions, losing context" },
];

export default function EightSystems() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-28 bg-[#0e0e11] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              Already in your stack
            </p>
            <h2 className="font-display font-bold text-[clamp(26px,4vw,46px)] leading-[1.1] tracking-tight text-white mb-6">
              The eight systems you&apos;re already running{" "}
              <span className="font-serif italic font-normal text-white/35">
                give less than they take.
              </span>
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              Every one of these is a candidate for a Claude layer. Most operators have
              at least three or four that are ripe for automation. We&apos;ll identify which
              ones give you the fastest return in week one.
            </p>
            <div className="flex items-center gap-3 text-[13px] text-white/35">
              <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
              We typically fully automate 2–3 of these in four weeks.
            </div>
          </div>

          {/* Right: system list */}
          <div className="space-y-2">
            {systems.map((s, i) => (
              <div
                key={i}
                className="group flex items-center gap-5 bg-[#0b0b0d] hover:bg-[#111115] border border-white/[0.06] hover:border-white/10 rounded-xl px-5 py-4 transition-all duration-200 cursor-default"
              >
                <span className="text-xl shrink-0">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-white text-[14px] mb-0.5">{s.name}</p>
                  <p className="text-white/30 text-[12px] truncate">{s.pain}</p>
                </div>
                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono-custom text-[10px] text-lime bg-lime/10 border border-lime/20 rounded-full px-2.5 py-1">
                    automate →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
