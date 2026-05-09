"use client";

const tiers = [
  {
    id: "tiller",
    name: "Tiller",
    price: "$2,950",
    subtitle: "Build it yourself, with me alongside.",
    desc: "Four weekly calls. I watch, guide, and correct. You're at the keyboard. You leave with a working system and the skills to extend it.",
    featured: false,
    includes: [
      "4 × 60-min live build calls",
      "Full Skills library built",
      "2 production agents deployed",
      "Weekly routines installed",
      "Async Slack support (4 weeks)",
      "System documentation",
      "Lifetime access to call recordings",
    ],
    notIncluded: ["Session not recorded for course", "No group replay access"],
    cta: "Reserve a Tiller Spot",
  },
  {
    id: "founder",
    name: "Founder Build",
    price: "$3,950",
    subtitle: "Same build. I film every session.",
    desc: "Everything in Tiller — plus every session is recorded and edited into a course module. Your build becomes the curriculum.",
    featured: true,
    includes: [
      "Everything in Tiller",
      "All sessions recorded & edited",
      "Your build becomes course content",
      "Featured in member community",
      "Priority scheduling",
      "Extended async support (8 weeks)",
      "Early access to future cohorts",
    ],
    notIncluded: [],
    cta: "Reserve a Founder Build Spot",
  },
];

const founding = {
  price: "$997",
  label: "Founding Builder Slot",
  desc: "One seat available per cohort at the founding rate. You get the full Tiller experience. In exchange, you commit to providing detailed feedback after each session.",
};

export default function Pricing() {
  return (
    <section id="pricing" className="min-h-screen flex flex-col justify-center py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
            Investment
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight text-white">
            Two tiers.{" "}
            <span className="font-serif italic font-normal text-lime">Same build.</span>
          </h2>
          <p className="text-white/35 text-[15px] mt-4 leading-relaxed">
            The only difference is whether I film it.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 flex flex-col relative overflow-hidden border transition-all duration-300 ${
                tier.featured
                  ? "bg-[#111118] border-lime/30 shadow-[0_0_60px_rgba(200,241,53,0.08)]"
                  : "bg-[#111115] border-white/[0.08]"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
              )}
              {tier.featured && (
                <div className="absolute top-4 right-4 bg-lime text-black font-mono-custom text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Includes filming
                </div>
              )}

              <div className="mb-6">
                <p className="font-mono-custom text-[11px] font-semibold tracking-widest uppercase text-white/30 mb-2">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display font-bold text-[52px] tracking-tight leading-none ${
                    tier.featured ? "text-lime" : "text-white"
                  }`}>
                    {tier.price}
                  </span>
                </div>
                <p className="font-mono-custom text-[12px] text-white/30 mb-4">{tier.subtitle}</p>
                <p className="text-white/45 text-[14px] leading-relaxed">{tier.desc}</p>
              </div>

              <div className="h-px bg-white/[0.06] mb-6" />

              {/* What's in the box */}
              <div className="mb-2">
                <p className="font-mono-custom text-[10px] font-semibold tracking-widest uppercase text-white/25 mb-4">
                  What&apos;s in the box
                </p>
                <ul className="space-y-3 mb-5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-white/60">
                      <span className="text-lime mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {tier.notIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13px] text-white/20 mt-2">
                    <span className="shrink-0 mt-0.5">—</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <button
                  className={`w-full font-mono-custom font-bold text-[14px] py-4 rounded-xl transition-all duration-200 ${
                    tier.featured
                      ? "bg-lime text-black hover:bg-lime/90 hover:shadow-[0_8px_30px_rgba(200,241,53,0.25)] hover:-translate-y-0.5"
                      : "border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.03]"
                  }`}
                >
                  {tier.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Founding Builder Slot */}
        <div className="max-w-3xl mx-auto">
          <div className="border border-dashed border-white/[0.12] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-custom text-[11px] font-bold tracking-widest uppercase text-lime/50">
                  Limited
                </span>
                <span className="font-mono-custom text-[11px] text-white/20">·</span>
                <span className="font-mono-custom text-[11px] text-white/30">1 per cohort</span>
              </div>
              <p className="font-display font-bold text-white text-xl mb-1">{founding.label}</p>
              <p className="text-white/35 text-[13px] leading-relaxed">{founding.desc}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-display font-bold text-3xl text-white mb-3">{founding.price}</p>
              <button className="bg-white/[0.06] border border-white/10 text-white font-mono-custom text-[13px] font-semibold px-6 py-3 rounded-xl hover:border-lime/30 hover:bg-lime/[0.05] transition-all duration-200">
                Apply for Founding Slot →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
