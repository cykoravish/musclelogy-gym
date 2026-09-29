"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { gym } from "@/lib/data";
import InstagramIcon from "./icons/InstagramIcon";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Plans" },
  { id: "trainer", label: "Trainer" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Visit" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-ink/95 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
              <Image src="/logo.jpg" alt="Musclelogy Gym logo" fill sizes="36px" className="object-cover" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">
              MUSCLE<span className="text-rust">LOGY</span>
            </span>
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
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-chalk"
          >
            MENU
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-full flex-col px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5">
              <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image src="/logo.jpg" alt="Musclelogy Gym logo" fill sizes="32px" className="object-cover" />
              </span>
              <span className="font-display text-lg font-extrabold">
                MUSCLE<span className="text-rust">LOGY</span>
              </span>
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 text-chalk"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-0.5 sm:mt-14">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 py-2.5 font-display text-3xl font-extrabold transition-all duration-300 sm:py-4 sm:text-4xl ${
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${active === s.id ? "text-rust" : "text-chalk"}`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {s.label}
                <span className="font-body text-sm font-medium text-chalk-dim opacity-0 transition-opacity group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4 sm:mt-auto sm:pt-8">
            <a
              href={gym.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-rust px-6 py-3.5 font-semibold text-ink"
            >
              WhatsApp us
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-chalk-dim">
              <a href={`tel:${gym.phoneTel}`} className="inline-flex items-center gap-2">
                <Phone size={16} /> Call
              </a>
              {gym.instagram.map((ig) => (
                <a
                  key={ig.handle}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <InstagramIcon size={16} />
                  {ig.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
