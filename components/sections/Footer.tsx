"use client";

const founderOsLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "The Shift", href: "#shift" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
];

const companyLinks = [
  { label: "BuildLoop", href: "#" },
  { label: "Free community", href: "#" },
  { label: "YouTube", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0d] border-t border-white/[0.06] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span className="font-display font-bold text-[15px] text-white tracking-tight">
                Founder OS
              </span>
            </div>
            <p className="font-mono-custom text-[12px] text-white/25 leading-relaxed max-w-[200px]">
              Build a Claude system that runs your business without you.
            </p>
          </div>

          {/* FOUNDER OS */}
          <div>
            <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/20 mb-4">
              Founder OS
            </p>
            <ul className="space-y-3">
              {founderOsLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-mono-custom text-[13px] text-white/35 hover:text-white/60 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/20 mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-mono-custom text-[13px] text-white/35 hover:text-white/60 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="font-mono-custom text-[10px] font-bold tracking-widest uppercase text-white/20 mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-mono-custom text-[13px] text-white/35 hover:text-white/60 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono-custom text-[12px] text-white/20">
            © 2025 Founder OS · A Northframe product
          </p>
          <p className="font-mono-custom text-[11px] text-white/15">
            Built with Claude Skills. No code written.
          </p>
        </div>
      </div>
    </footer>
  );
}
