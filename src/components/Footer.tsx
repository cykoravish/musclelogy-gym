import InstagramIcon from "./icons/InstagramIcon";
import { gym } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl font-extrabold">
            MUSCLE<span className="text-rust">LOGY</span>
          </p>
          <p className="mt-1 text-sm text-chalk-dim">{gym.address}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {gym.instagram.map((ig) => (
            <a
              key={ig.handle}
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-chalk-dim hover:text-chalk"
            >
              <InstagramIcon size={16} />
              {ig.handle}
            </a>
          ))}
        </div>
      </div>
      <p className="px-5 pb-8 text-xs text-chalk-dim/70 sm:px-8">
        © {new Date().getFullYear()} Musclelogy Gym, Badowala, Dehradun.
      </p>
    </footer>
  );
}
