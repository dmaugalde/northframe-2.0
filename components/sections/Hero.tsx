"use client";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-cream relative overflow-hidden pt-[76px]"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
        {/* Badge pills */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-mid border border-cream-dark rounded-full px-4 py-1.5">
            1:1 · For Solo Founders
          </span>
          <span className="font-mono-custom text-[11px] font-semibold tracking-[0.12em] uppercase text-black bg-lime rounded-full px-4 py-1.5">
            3 Seats · Founding Cohort
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[1.04] tracking-[-0.03em] mb-7">
          <span className="block text-[clamp(40px,6.5vw,76px)] text-ink">
            You&apos;ve tried Claude.
          </span>
          <span className="block text-[clamp(40px,6.5vw,76px)] text-ink">
            You want to build
          </span>
          <span className="block text-[clamp(40px,6.5vw,76px)] text-ink">
            something real.
          </span>
          <span className="block text-[clamp(40px,6.5vw,76px)] text-lime underline decoration-lime decoration-[3px] underline-offset-4">
            Let&apos;s do it together.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-ink-mid text-[17px] leading-relaxed max-w-xl mb-8">
          Four weeks, one-on-one. You at the keyboard, me in your ear.
          Bring every workflow you&apos;ve got — we go through them, pick the
          ones worth building, and build them right. You walk away with a
          system that runs, and the muscle memory to extend it yourself.
        </p>

        {/* Author bio */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center shrink-0 overflow-hidden">
            <span className="font-mono-custom text-[14px] font-bold text-black">L</span>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-ink">Built with you by Luuk</p>
            <p className="text-[13px] text-ink-dim">
              I write Claude skills for a living. I&apos;ll show you what good looks like.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-5">
          <button
            onClick={() => scrollTo("#pricing")}
            className="bg-lime text-black font-mono-custom text-[14px] font-bold px-7 py-3.5 rounded-full hover:bg-lime/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,241,53,0.4)]"
          >
            Apply for Founder OS →
          </button>
          <button
            onClick={() => scrollTo("#pricing")}
            className="font-mono-custom text-[14px] font-medium text-ink-mid hover:text-ink transition-colors"
          >
            Or start with a $497 Strategy Session →
          </button>
        </div>
      </div>
    </section>
  );
}
