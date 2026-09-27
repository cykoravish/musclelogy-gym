import { whyUs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-ink">
      <div className="hazard-stripe" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 max-w-xl">
          <span className="text-sm font-semibold text-rust">Why Musclelogy</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            A new gym, run the honest way.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-sm border border-white/10 bg-iron p-6 ${
                i === 0 ? "sm:col-span-2 sm:p-8" : ""
              }`}
            >
              <h3 className="font-display text-2xl font-bold text-hazard">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-chalk-dim">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
