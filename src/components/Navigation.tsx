"use client";

import { useEffect, useRef, useState } from "react";
import { Dumbbell, Home, Users, Images, Star, MapPin, Menu, X } from "lucide-react";
import { gym } from "@/lib/data";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "programs", label: "Plans", icon: Dumbbell },
  { id: "trainer", label: "Trainer", icon: Users },
  { id: "gallery", label: "Gallery", icon: Images },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "location", label: "Visit", icon: MapPin },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = sections.findIndex((s) => s.id === active);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop / tablet top bar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-extrabold text-xl tracking-tight">
            MUSCLE<span className="text-rust">LOGY</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-chalk-dim">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`transition-colors hover:text-chalk ${
                  active === s.id ? "text-chalk" : ""
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href={gym.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-sm bg-rust px-4 py-2 text-sm font-semibold text-ink hover:bg-hazard transition-colors"
          >
            WhatsApp us
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-chalk"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-ink border-b border-white/10 px-5 pb-5 pt-1 flex flex-col gap-4">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-display font-bold"
              >
                {s.label}
              </a>
            ))}
            <a
              href={gym.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex justify-center rounded-sm bg-rust px-4 py-3 font-semibold text-ink"
            >
              WhatsApp us
            </a>
          </div>
        )}
      </header>

      {/* Mobile-only "barbell" bottom nav */}
      <nav
        aria-label="Section navigation"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-iron border-t border-white/10 pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div ref={railRef} className="relative flex items-center justify-between px-4 py-2">
          {/* the bar */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[3px] bg-iron-light" />

          {sections.map((s, i) => {
            const isActive = i === activeIndex;
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="relative z-10 flex flex-col items-center gap-1 flex-1"
              >
                <span
                  className={`flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "w-11 h-11 bg-rust border-rust text-ink scale-105"
                      : "w-8 h-8 bg-iron border-iron-light text-chalk-dim"
                  }`}
                >
                  <Icon size={isActive ? 20 : 15} />
                </span>
                <span
                  className={`text-[10px] font-medium leading-none transition-opacity ${
                    isActive ? "opacity-100 text-chalk" : "opacity-0"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
