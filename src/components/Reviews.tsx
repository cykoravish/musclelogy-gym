import { Star } from "lucide-react";
import { reviews, gym } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-rust">Word of mouth</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              What members are saying.
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-hazard text-hazard" />
            ))}
            <span className="ml-2 text-chalk-dim">
              {gym.rating.toFixed(1)} · {gym.ratingCount} Google reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`relative rounded-sm border border-white/10 bg-iron p-6 ${
                i === 1 ? "sm:rotate-1" : i === 2 ? "sm:-rotate-1" : ""
              }`}
            >
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-rust shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
              />
              <blockquote className="text-chalk-dim">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-chalk">
                {r.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
