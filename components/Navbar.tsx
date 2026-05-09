"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Skills",    href: "#skills" },
  { label: "Agents",    href: "#agents" },
  { label: "Routines",  href: "#routines" },
  { label: "Process",   href: "#process" },
  { label: "Pricing",   href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0dcc] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-display text-base font-bold tracking-tight flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-lime inline-block" />
          Founder OS
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`font-mono-custom text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                active === l.href.slice(1)
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#pricing")}
          className="bg-lime text-black font-mono-custom text-[13px] font-bold px-5 py-2.5 rounded-lg hover:bg-lime/90 transition-all duration-200 hover:-translate-y-px"
        >
          Book a Call →
        </button>
      </div>
    </header>
  );
}
