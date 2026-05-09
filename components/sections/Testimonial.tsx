"use client";

export default function Testimonial() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-28 bg-[#0e0e11] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,241,53,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: person */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-2xl bg-[#1a1a20] border border-white/10 flex items-center justify-center text-6xl">
              👨‍💼
            </div>
            <div>
              <p className="font-display font-bold text-white text-lg">Marcus T.</p>
              <p className="font-mono-custom text-[12px] text-white/35 mt-1">Agency owner, London</p>
              <div className="flex items-center gap-1.5 mt-3">
                {[0,1,2,3,4].map((i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
            {/* Result badge */}
            <div className="bg-lime/10 border border-lime/20 rounded-xl px-5 py-3 w-full">
              <p className="font-mono-custom text-[11px] text-lime/60 uppercase tracking-widest mb-1">Result</p>
              <p className="font-display font-bold text-lime text-2xl">14 hrs/wk</p>
              <p className="font-mono-custom text-[11px] text-white/30 mt-0.5">recovered in month one</p>
            </div>
          </div>

          {/* Right: quote */}
          <div>
            <div className="text-lime/20 font-serif text-[120px] leading-none -mb-8 select-none">&ldquo;</div>
            <blockquote className="font-serif text-[clamp(20px,3vw,32px)] text-white/85 leading-[1.5] italic mb-8">
              Hey — look, first honestly — this is my favourite thing I&apos;ve spent money on this year. I was
              already paying for Claude. I just didn&apos;t know what I was doing with it. Four weeks in,
              I have a system that runs my weekly ops briefing, qualifies every inbound lead,
              and writes first drafts of all my client reports. I didn&apos;t need more prompting tips.
              I needed someone to sit down with me and build the actual thing. That&apos;s exactly what happened.
            </blockquote>

            <div className="h-px bg-white/[0.06] mb-8" />

            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "3", label: "agents built" },
                { num: "14 hrs", label: "saved weekly" },
                { num: "Week 3", label: "first agent live" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-display font-bold text-xl text-white mb-1">{s.num}</p>
                  <p className="font-mono-custom text-[11px] text-white/30 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
