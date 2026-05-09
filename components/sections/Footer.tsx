"use client";

const footerLinks = [
  { label: "Privacy",    href: "#" },
  { label: "Terms",      href: "#" },
  { label: "Contact",    href: "#" },
  { label: "Affiliates", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-display font-bold text-sm tracking-tight text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            Founder OS
          </div>

          {/* Links */}
          <div className="flex items-center gap-7">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono-custom text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Copy */}
          <p className="font-mono-custom text-[12px] text-white/20">
            © 2025 Founder OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
