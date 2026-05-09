"use client";

const smallTestimonials = [
  {
    quote: "Built a booking system for my video clients — request, choose package, book date. No more endless back-and-forth. Better client experience, more sales.",
    name: "Ben Wijma",
    role: "Founder, video agency",
    tag: "Client Booking System",
    initial: "B",
  },
  {
    quote: "Twenty years in software, and I thought this was too good to be true. Now I'm a top 1% user in Switzerland. The real value? Confidence.",
    name: "Roman Rüdisühli",
    role: "Founder, serviceclient.ch",
    tag: "Omnichannel Support SaaS",
    initial: "R",
  },
  {
    quote: "I built a platform that gives my clients a seamless experience from onboarding to delivery. Turned my service into real software.",
    name: "Nick Ebbelaar",
    role: "Founder, content studio",
    tag: "Creator Onboarding Platform",
    initial: "N",
  },
];

export default function Testimonial() {
  return (
    <section className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
            Founders I&apos;ve Worked With
          </span>
        </div>

        <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-ink mb-10">
          Real operators.{" "}
          <span className="text-ink/40">Running differently now.</span>
        </h2>

        {/* Divider */}
        <div className="h-px bg-cream-dark mb-10" />

        {/* Big featured quote */}
        <div className="mb-12">
          <div className="text-ink/10 font-serif text-[80px] leading-none -mb-4 select-none">&ldquo;</div>
          <blockquote className="font-display font-bold text-[clamp(20px,3vw,32px)] text-ink leading-[1.4] mb-6 max-w-3xl">
            BuildLoop showed us how to go beyond mockups to production-ready apps. We&apos;re restructuring how our entire agency builds. Game changer.
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ink/10 flex items-center justify-center">
              <span className="font-mono-custom text-[13px] font-bold text-ink">S</span>
            </div>
            <div>
              <p className="font-display font-bold text-[15px] text-ink">Sil Bouwman</p>
              <div className="flex items-center gap-2">
                <p className="font-mono-custom text-[12px] text-ink-mid">Founder, AI agency</p>
                <span className="font-mono-custom text-[10px] text-ink-mid/40 uppercase tracking-widest">· Production AI Applications</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {smallTestimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="text-ink/60 text-[14px] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
                  <span className="font-mono-custom text-[11px] font-bold text-ink">{t.initial}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-[13px] text-ink">{t.name}</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-mono-custom text-[11px] text-ink-mid">{t.role}</p>
                    <span className="font-mono-custom text-[9px] text-ink-mid/40 uppercase tracking-widest">{t.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <p className="text-ink-mid/40 text-[13px] leading-relaxed italic">
          Full transparency — these aren&apos;t Founder OS customers yet. It&apos;s a new offer. But the patterns we&apos;d
          build together in your business are the same ones running in theirs today.
        </p>
      </div>
    </section>
  );
}
