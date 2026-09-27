import { Star } from "lucide-react";
import { gym } from "@/lib/data";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-28 md:pb-20"
    >
      {/* structural background — iron panels, not a stock photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% 0%, #23262b 0%, transparent 60%), linear-gradient(180deg, #14161a 0%, #14161a 70%, #0f1114 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-rust)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-sm">
          <Star size={14} className="fill-hazard text-hazard" />
          <span className="text-chalk-dim">
            {gym.rating.toFixed(1)} rated · Badowala, Dehradun
          </span>
        </div>

        <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-[16vw] sm:text-8xl md:text-[7.5rem]">
          TRAIN
          <br />
          <span className="text-rust">REAL.</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-chalk-dim">
          {gym.name} — genuine pricing, new equipment, and a trainer who
          actually coaches you. No frills, no nonsense.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={gym.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-rust px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-hazard"
          >
            Message us on WhatsApp
          </a>
          <a
            href={`tel:${gym.phoneTel}`}
            className="inline-flex items-center rounded-sm border border-white/20 px-6 py-3.5 font-semibold text-chalk transition-colors hover:border-white/40"
          >
            Call now
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="text-xs uppercase tracking-wide text-chalk-dim">
              Google rating
            </dt>
            <dd className="font-display text-4xl font-extrabold text-rust">
              <StatCounter to={5} decimals={1} />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-chalk-dim">
              Days open
            </dt>
            <dd className="font-display text-4xl font-extrabold">
              <StatCounter to={6} suffix="/wk" />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-chalk-dim">
              Monthly fee
            </dt>
            <dd className="font-display text-4xl font-extrabold">
              ₹<StatCounter to={1000} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
