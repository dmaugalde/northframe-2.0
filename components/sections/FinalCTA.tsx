"use client";

export default function FinalCTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="min-h-screen flex flex-col justify-center py-28 relative overflow-hidden bg-[#0b0b0d]"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <p className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25 mb-8">
          Ready to build
        </p>

        <h2 className="font-display font-bold text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-[-0.03em] text-white mb-4">
          Four weeks with me.
        </h2>
        <h2 className="font-serif italic font-normal text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-[-0.02em] text-lime mb-10">
          A Claude system you built.
        </h2>

        <p className="text-white/35 text-[17px] leading-relaxed max-w-lg mx-auto mb-12">
          Not a course. Not a template. A real system — built in your accounts, around
          your workflows, with you at the keyboard every step.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => scrollTo("#pricing")}
            className="bg-lime text-black font-mono-custom text-[16px] font-bold px-10 py-5 rounded-xl hover:bg-lime/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_50px_rgba(200,241,53,0.35)]"
          >
            Book Your Spot →
          </button>
          <button
            onClick={() => scrollTo("#process")}
            className="font-mono-custom text-[14px] font-medium text-white/40 border border-white/10 px-7 py-5 rounded-xl hover:border-white/20 hover:text-white/60 transition-all duration-200"
          >
            How it works
          </button>
        </div>

        <p className="font-mono-custom text-[12px] text-white/20">
          Cohort 4 · Limited to 8 participants · Next start date TBD
        </p>

        {/* Nav dots */}
        <div className="flex justify-center gap-2 mt-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === 7 ? "w-6 h-1.5 bg-lime" : "w-1.5 h-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
