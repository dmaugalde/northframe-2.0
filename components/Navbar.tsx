"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Problem",    href: "#problem" },
  { label: "Shift",      href: "#shift" },
  { label: "Examples",   href: "#examples" },
  { label: "Four Weeks", href: "#four-weeks" },
  { label: "Pricing",    href: "#pricing" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <header className="max-w-6xl mx-auto bg-[#111111] backdrop-blur-xl rounded-2xl px-5 h-[58px] flex items-center justify-between border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2.5 font-mono-custom text-[13px] font-bold text-white tracking-tight shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="#c8f135" strokeWidth="1.5"/>
            <rect x="4.5" y="4.5" width="7" height="7" rx="1.5" fill="#c8f135"/>
          </svg>
          <span className="text-white/90">FOUNDER <span className="text-white">OS</span></span>
        </button>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`font-mono-custom text-[11px] font-medium tracking-wider uppercase transition-colors duration-200 ${
                active === l.href.slice(1) ? "text-white" : "text-white/40 hover:text-white/80"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse shrink-0" />
            <span className="font-mono-custom text-[10px] font-semibold text-white/40 tracking-widest uppercase">
              Blueprint · Soon
            </span>
          </div>
          <button
            onClick={() => scrollTo("#pricing")}
            className="bg-lime text-black font-mono-custom text-[12px] font-bold px-4 py-2 rounded-full hover:bg-lime/90 transition-all duration-200 whitespace-nowrap"
          >
            Apply →
          </button>
        </div>
      </header>
    </div>
  );
}
