"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-soft">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10 max-w-xl">
          <span className="text-sm font-semibold text-rust">Questions</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Good to know.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-xl font-bold sm:text-2xl">
                    {f.question}
                  </span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-rust transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-xl text-chalk-dim">{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
