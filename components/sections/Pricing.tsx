"use client";

const inTheBox = [
  "4 × 60-min live build calls",
  "Skills library built to your workflows",
  "2 production agents deployed",
  "Weekly routines installed",
  "Async Slack support (4 weeks)",
  "System documentation",
  "Lifetime access to call recordings",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
            Pricing
          </span>
        </div>

        <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-ink mb-4 max-w-2xl">
          Two tiers.{" "}
          <span className="text-ink/40">Same build.</span>
          <br />
          The only difference is whether I film it.
        </h2>
        <p className="text-ink-mid text-[15px] leading-relaxed mb-12 max-w-lg">
          You pick based on privacy, not quality. The build is identical.
        </p>

        {/* Divider */}
        <div className="h-px bg-cream-dark mb-10" />

        {/* In the box — both tiers */}
        <div className="bg-white border border-cream-dark rounded-2xl p-7 mb-8 max-w-4xl mx-auto">
          <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-ink-mid/50 mb-5">
            In the box · Both tiers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inTheBox.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-lime font-bold mt-0.5 shrink-0">✓</span>
                <span className="font-mono-custom text-[13px] text-ink-mid">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-6">
          {/* Public Build */}
          <div className="bg-[#111115] rounded-2xl p-8 flex flex-col border border-white/[0.08]">
            <div className="mb-6">
              <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">
                / 01
              </p>
              <h3 className="font-display font-bold text-[28px] text-white leading-tight mb-1">
                Public Build
              </h3>
              <p className="font-mono-custom text-[12px] text-white/30 mb-6">
                Filmed. Edited. Used as course content.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-[52px] text-white leading-none tracking-tight">
                  $2,950
                </span>
              </div>
            </div>

            <div className="h-px bg-white/[0.06] mb-6" />

            <p className="text-white/40 text-[13px] leading-relaxed mb-6 flex-1">
              Every session is recorded and edited into a course module. Your build becomes
              the curriculum. In exchange — you get the lowest rate.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
              <span className="font-mono-custom text-[10px] text-white/40 tracking-widest uppercase">
                Sessions filmed
              </span>
            </div>

            <button className="w-full font-mono-custom font-bold text-[14px] py-4 rounded-xl border border-white/15 text-white hover:border-lime/30 hover:bg-lime/[0.04] transition-all duration-200">
              Reserve a Public Build Spot →
            </button>
          </div>

          {/* Private Build */}
          <div className="bg-[#111115] rounded-2xl p-8 flex flex-col border border-lime/25 shadow-[0_0_60px_rgba(200,241,53,0.06)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

            <div className="mb-6">
              <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/30 mb-3">
                / 02
              </p>
              <h3 className="font-display font-bold text-[28px] text-white leading-tight mb-1">
                Private Build
              </h3>
              <p className="font-mono-custom text-[12px] text-white/30 mb-6">
                Your sessions stay yours. Nothing is filmed.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-[52px] text-lime leading-none tracking-tight">
                  $3,950
                </span>
              </div>
            </div>

            <div className="h-px bg-white/[0.06] mb-6" />

            <p className="text-white/40 text-[13px] leading-relaxed mb-6 flex-1">
              Everything in Public Build — but your workflows, your business, and your
              sessions are completely private. No recordings used, no attribution, no
              content.
            </p>

            <div className="inline-flex items-center gap-2 bg-lime/[0.08] border border-lime/20 rounded-full px-3 py-1.5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span className="font-mono-custom text-[10px] text-lime/70 tracking-widest uppercase">
                Fully private
              </span>
            </div>

            <button className="w-full font-mono-custom font-bold text-[14px] py-4 rounded-xl bg-lime text-black hover:bg-lime/90 hover:shadow-[0_8px_30px_rgba(200,241,53,0.25)] hover:-translate-y-0.5 transition-all duration-200">
              Reserve a Private Build Spot →
            </button>
          </div>
        </div>

        {/* Strategy Session card */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-dashed border-ink/[0.12] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-lime">
                  Not sure yet?
                </span>
              </div>
              <p className="font-display font-bold text-ink text-[20px] mb-1">
                Start with a $497 Strategy Session
              </p>
              <p className="text-ink-mid text-[13px] leading-relaxed">
                One 90-min call. We run the filter on your entire business, produce a written
                Install Plan, and you decide if you want to keep going. If you do — the $497
                comes off the Founder OS price.
              </p>
            </div>
            <div className="shrink-0">
              <button className="bg-ink text-cream font-mono-custom text-[13px] font-bold px-6 py-3 rounded-xl hover:bg-ink/80 transition-all duration-200">
                Book a Strategy Session →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
