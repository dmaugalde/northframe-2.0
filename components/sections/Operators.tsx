"use client";

export default function Operators() {
  return (
    <section className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-cream-dark rounded-2xl p-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
            <span className="font-mono-custom text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-mid">
              Who&apos;s Building This With You
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-36 h-36 rounded-2xl bg-lime flex items-center justify-center overflow-hidden relative">
                <span className="font-display font-bold text-[64px] text-black/20 select-none">L</span>
                <div className="absolute bottom-2 left-2 right-2 bg-lime rounded-md px-2 py-1 text-center">
                  <span className="font-mono-custom text-[9px] font-bold text-black uppercase tracking-widest">
                    Solo Founder, Like You
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display font-bold text-[clamp(22px,3vw,34px)] leading-tight text-ink mb-4">
                Hey. I&apos;m Luuk.{" "}
                <span className="text-ink/50">
                  And honestly — this is my favorite thing to do.
                </span>
              </h2>
              <p className="text-ink-mid text-[15px] leading-relaxed mb-4">
                Dutch, 24. I&apos;ve been chasing a fully-automated solo business for 18 months — across every AI tool there
                was. Claude Skills shipped a few months ago. First time it&apos;s actually been possible. I rebuilt BuildLoop on
                Skills in weeks — newsletter, clients, YouTube, invoices, outreach, all running on skills I wrote myself. No
                employees. No VAs.
              </p>
              <p className="text-ink-mid text-[15px] leading-relaxed mb-4">
                Four weeks with one founder is the best kind of work I&apos;ve found. You bring everything on your plate, we
                pick what belongs in Claude, we build it together. By Week 4 you can extend the system yourself —
                because you built it. Most of these calls end up being the highlight of my week.
              </p>
              <p className="text-ink-mid/50 text-[14px] leading-relaxed italic mb-6">
                Fair warning — I&apos;ll push back on workflows you think you want automated but shouldn&apos;t be. That&apos;s what you&apos;re paying me for.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {["Solo Founder, Like You", "Early Claude Skills Operator", "Zero Lines of Code Written"].map((tag) => (
                  <span key={tag} className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-ink-mid/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
