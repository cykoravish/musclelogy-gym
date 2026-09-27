export default function Trainer() {
  const marqueeText = Array(6).fill("PERSONAL TRAINING · WEIGHT LOSS · STRENGTH · FORM FIRST · ").join("");

  return (
    <section id="trainer" className="relative overflow-hidden bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div
            className="grain flex aspect-[4/5] items-end rounded-sm border border-white/10 p-6 md:aspect-[3/4]"
            style={{
              background:
                "linear-gradient(160deg, #2a2e33 0%, #1e2125 55%, #14161a 100%)",
            }}
          >
            <span className="font-display text-sm font-medium text-chalk-dim">
              Trainer photo — to be added
            </span>
          </div>

          <div>
            <span className="text-sm font-semibold text-rust">Your coach</span>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Guidance that actually shows up.
            </h2>
            <p className="mt-5 max-w-md text-chalk-dim">
              Members consistently point to one thing: the trainer doesn&rsquo;t
              just hand you a machine and walk off. Form correction, a plan
              built around your goal — weight loss, strength, or general
              fitness — and someone checking in on your progress every week.
            </p>
            <p className="mt-4 max-w-md text-chalk-dim">
              Personal training is available on top of any membership for an
              additional ₹2,500 a month.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-rust py-3">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee font-display text-lg font-bold text-ink">
            {marqueeText}
          </div>
          <div aria-hidden className="animate-marquee font-display text-lg font-bold text-ink">
            {marqueeText}
          </div>
        </div>
      </div>
    </section>
  );
}
