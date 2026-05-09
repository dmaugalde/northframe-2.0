"use client";

const notFor = [
  {
    id: "01",
    title: "You haven't actually used Claude yet.",
    desc: "Spend a week with the free content first. Come back when you've shipped one workflow and want to level up.",
  },
  {
    id: "02",
    title: "You want me to build it while you watch.",
    desc: "That's agency work. This is pair-building — you're at the keyboard every call. If you don't want that, you want a freelancer, not me.",
  },
  {
    id: "03",
    title: "Your business runs entirely in-person.",
    desc: "Restaurants, storefronts, manual trades. Claude can help with the ops around your business, but not the core work. Wrong call for now.",
  },
];

export default function NotFor() {
  return (
    <section className="py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#111115] rounded-2xl p-10 max-w-4xl mx-auto">
          {/* HONESTY GATE badge */}
          <div className="inline-flex items-center gap-1.5 bg-lime/[0.12] border border-lime/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-lime">
              Honesty Gate
            </span>
          </div>

          <h2 className="font-display font-bold text-[clamp(26px,4vw,46px)] leading-[1.1] tracking-tight text-white mb-3">
            Three people this{" "}
            <span className="text-lime italic font-normal font-serif">isn&apos;t for.</span>
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-10">
            I&apos;d rather disqualify you here than waste your $497 on a call that
            shouldn&apos;t happen. If any of these are you, the answer is{" "}
            <span className="text-lime underline">no — for now</span>.
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.08] mb-8" />

          {/* Three items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {notFor.map((item) => (
              <div key={item.id}>
                <span className="font-mono-custom text-[11px] font-bold text-white/25 tracking-widest">
                  / {item.id}
                </span>
                <h3 className="font-display font-bold text-[17px] text-white leading-snug mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.08] mb-6" />

          <p className="text-[15px] text-white/50">
            If none of these are you —{" "}
            <span className="text-lime font-semibold">let&apos;s go.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
