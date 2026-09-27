import { Check } from "lucide-react";
import { plans, gym } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programs" className="bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 max-w-xl">
          <span className="text-sm font-semibold text-rust">Membership</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Two ways to train.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-sm border p-7 md:p-9 ${
                plan.highlight
                  ? "border-rust bg-iron"
                  : "border-white/10 bg-iron"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 rounded-sm bg-rust px-3 py-1 text-xs font-bold text-ink">
                  MOST ASKED
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-chalk-dim">{plan.description}</p>

              <div className="mt-6 font-display text-5xl font-extrabold">
                {plan.price}
                <span className="ml-1 font-body text-base font-normal text-chalk-dim">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-chalk-dim">
                    <Check size={18} className="mt-0.5 shrink-0 text-hazard" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={gym.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-sm bg-rust px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-hazard"
              >
                Ask about this plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
