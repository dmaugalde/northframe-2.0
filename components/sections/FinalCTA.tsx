"use client";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-28 bg-[#0b0b0d] dark-section relative overflow-hidden"
    >
      {/* Subtle lime glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lime/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/50">
            You&apos;ve seen it now
          </span>
        </div>

        <h2 className="font-display font-bold text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-tight text-white mb-2">
          Four weeks with me.
        </h2>
        <h2 className="font-serif italic font-normal text-[clamp(36px,5.5vw,72px)] leading-[1.05] text-lime mb-10">
          A Claude system you built.
        </h2>

        <p className="text-white/35 text-[17px] leading-relaxed max-w-lg mb-12">
          Not a course. Not a template. A real system — built in your accounts, around your
          workflows, with you at the keyboard every step.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <button className="bg-lime text-black font-mono-custom text-[15px] font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_50px_rgba(200,241,53,0.3)]">
            Apply for Founder OS →
          </button>
          <button className="font-mono-custom text-[14px] font-medium text-white/40 border border-white/10 px-8 py-4 rounded-full hover:border-white/20 hover:text-white/60 transition-all duration-200">
            Start with a $497 call →
          </button>
        </div>

        <p className="font-mono-custom text-[12px] text-white/20">
          3 seats · Founding cohort · Applications reviewed within 48 hrs
        </p>
      </div>
    </section>
  );
}
