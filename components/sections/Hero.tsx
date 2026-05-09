"use client";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-[68px] relative overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="font-mono-custom text-[11px] font-semibold tracking-[0.12em] uppercase text-white/60">
              Now accepting founders · Cohort 4
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.06] tracking-[-0.03em] mb-7">
            <span className="block text-[clamp(38px,6vw,72px)] text-white">
              You&apos;ve tried Claude.
            </span>
            <span className="block text-[clamp(38px,6vw,72px)] text-white">
              You want to build
            </span>
            <span className="block text-[clamp(38px,6vw,72px)] text-white">
              something real.
            </span>
            <span className="block text-[clamp(38px,6vw,72px)] text-lime font-serif italic font-normal">
              Let&apos;s do it together.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-10">
            Four weeks. One call each week. I sit at the keyboard with you and we
            build the Claude system your business actually needs — no fluff,
            no pre-recorded walkthroughs.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button
              onClick={() => scrollTo("#pricing")}
              className="bg-lime text-black font-mono-custom text-[15px] font-bold px-8 py-4 rounded-xl hover:bg-lime/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(200,241,53,0.3)]"
            >
              Book Your Spot →
            </button>
            <button
              onClick={() => scrollTo("#process")}
              className="font-mono-custom text-[14px] font-medium text-white/50 border border-white/10 px-6 py-4 rounded-xl hover:border-white/20 hover:text-white/80 transition-all duration-200"
            >
              See how it works
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex">
              {["👩", "👨", "🧑", "👱", "🧔"].map((e, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-elevated border-2 border-bg flex items-center justify-center text-base"
                  style={{ marginLeft: i === 0 ? 0 : -10 }}
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/40">
              <span className="text-white font-semibold">47 founders</span> built
              their Claude system in the last 90 days
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-white/40 animate-pulse" />
        <span className="font-mono-custom text-[10px] tracking-widest uppercase text-white/40">scroll</span>
      </div>
    </section>
  );
}
