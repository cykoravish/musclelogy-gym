import { Clock, MapPin, Phone } from "lucide-react";
import { gym } from "@/lib/data";

export default function LocationSection() {
  return (
    <section id="location" className="bg-ink-soft">
      <div className="hazard-stripe" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 max-w-xl">
          <span className="text-sm font-semibold text-rust">Come by</span>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Find us in Badowala.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-rust" size={22} />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-chalk-dim">{gym.address}</p>
                <a
                  href={gym.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-semibold text-hazard hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-0.5 shrink-0 text-rust" size={22} />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-chalk-dim">Mon–Sat · 5:00 AM – 9:30 PM</p>
                <p className="text-chalk-dim">Sunday · Closed</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-rust" size={22} />
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <a href={`tel:${gym.phoneTel}`} className="text-chalk-dim hover:text-chalk">
                  {gym.phoneDisplay}
                </a>
              </div>
            </div>

            <a
              href={gym.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-rust px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-hazard"
            >
              Message us on WhatsApp
            </a>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Musclelogy Gym location"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${gym.mapsEmbedQuery}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
