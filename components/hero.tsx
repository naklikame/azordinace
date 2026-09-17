import { fotky, hero, klinika } from "@/content/klinika";
import { Foto } from "@/components/foto";
import {
  MailIcon,
  PinIcon,
  SipkaIcon,
  TelefonIcon,
  ZubIcon,
} from "@/components/icons";

const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

export function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <div className="mx-auto max-w-7xl">
        {/*
          Dvě poloviny vedle sebe: vlevo sdělení, vpravo snímek ordinace.
          Dřív tu byla fotka lékařky jako podklad celé sekce a text ležel
          přímo na ní — to šlo jen proto, že měla vlastní světlou plochu
          vlevo. Běžný snímek ordinace ji nemá, takže text má svou kartu
          a fotka svůj rám.
        */}
        <div className="grid gap-3 lg:min-h-[34rem] lg:grid-cols-[40%_60%]">
          {/* ── Sdělení ── */}
          <div className="nastup relative isolate flex flex-col overflow-hidden rounded-4xl bg-warm-50 px-6 py-9 sm:px-9 sm:py-10 lg:px-10 lg:py-14 xl:px-14">
            {/* Zub v prázdném rohu pod tlačítky — stejná silueta i tenký obrys
                jako ozdobná vrstva na pozadí webu, ta je ale za kartou
                neviditelná. Kreslí se pod obsah, `isolate` ho drží nad
                podkladem karty. */}
            <ZubIcon
              strokeWidth={0.35}
              style={{ rotate: "12deg" }}
              className="pointer-events-none absolute -bottom-16 -right-14 -z-10 w-64 text-brand-300/45"
            />

            <p className="mb-6 inline-flex max-w-xs items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-800 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-accent-600"
              />
              {hero.stitekNahore}
            </p>

            <h1 className="font-display text-[clamp(2.5rem,5.2vw,3.75rem)] font-black leading-[0.92] tracking-[-0.04em] text-ink">
              {hero.nadpisRadky.map((radek) => (
                <span key={radek} className="block">
                  {radek}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft lg:max-w-[19rem]">
              {hero.perex}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#objednat"
                className="stisk group inline-flex items-center gap-3 rounded-full bg-accent-700 py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-accent-800"
              >
                {hero.cta}
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-full bg-white text-accent-700 transition-transform group-hover:translate-x-0.5"
                >
                  <SipkaIcon className="size-4" />
                </span>
              </a>
              <a
                href="#cenik"
                className="inline-flex items-center rounded-full border border-sand-400 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-brand-700 hover:text-brand-800"
              >
                {hero.ctaVedlejsi}
              </a>
            </div>
          </div>

          {/* ── Snímek ordinace ──
              Na telefonu se neukazuje: stránka má být hlavně informativní
              a návštěvník se má rovnou dostat k obsahu. */}
          <div className="relative hidden overflow-hidden rounded-4xl bg-brand-700 lg:block">
            <Foto
              src={fotky.heroOrdinace}
              alt={`Ordinace ${klinika.nazev}`}
              napoveda="Snímek ordinace, na šířku, od 1600 px"
              priority
              className="absolute inset-0"
              sizes="60vw"
            />

            {/* Rychlé odkazy zůstávají v rohu snímku */}
            <div className="absolute right-6 top-6 flex gap-2">
              <a
                href={telHref}
                className="grid size-10 place-items-center rounded-full bg-white/90 text-brand-800 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <span className="sr-only">Zavolat na {klinika.telefon}</span>
                <TelefonIcon className="size-4" />
              </a>
              <a
                href={`mailto:${klinika.email}`}
                className="grid size-10 place-items-center rounded-full bg-white/90 text-brand-800 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <span className="sr-only">Napsat na {klinika.email}</span>
                <MailIcon className="size-4" />
              </a>
              <a
                href="#kontakt"
                className="grid size-10 place-items-center rounded-full bg-white/90 text-brand-800 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <span className="sr-only">Zobrazit mapu a dopravu</span>
                <PinIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
