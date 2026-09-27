import InstagramIcon from "./icons/InstagramIcon";
import { gym } from "@/lib/data";

const placeholders = [
  "Gym floor",
  "Free weights",
  "Cardio zone",
  "Training session",
  "Equipment",
  "Members at work",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-rust">On the floor</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              See the gym before you visit.
            </h2>
          </div>
          <div className="flex gap-3">
            {gym.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-3 py-2 text-sm text-chalk-dim transition-colors hover:border-white/40 hover:text-chalk"
              >
                <InstagramIcon size={16} />
                {ig.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* full-bleed snap-scroll strip — swipeable on mobile, no pinch-zoom grid */}
      <div className="scrollbar-none flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory sm:px-8">
        {placeholders.map((label) => (
          <div
            key={label}
            className="grain flex aspect-[3/4] w-[68vw] shrink-0 snap-start items-end rounded-sm border border-white/10 p-5 sm:w-72"
            style={{
              background:
                "linear-gradient(160deg, #2a2e33 0%, #1e2125 60%, #14161a 100%)",
            }}
          >
            <span className="text-sm text-chalk-dim">{label} — photo/video to be added</span>
          </div>
        ))}
      </div>
      <p className="px-5 pb-16 text-sm text-chalk-dim sm:px-8 md:pb-24">
        Real photos and reels from Instagram will drop in here — swap the
        placeholders above once media is uploaded.
      </p>
    </section>
  );
}
