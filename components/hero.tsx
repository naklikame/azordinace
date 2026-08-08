import Image from "next/image";
import { fotky, hero, klinika } from "@/content/klinika";
import { Foto } from "@/components/foto";
import { MailIcon, PinIcon, SipkaIcon, TelefonIcon } from "@/components/icons";
import { Stitek } from "@/components/stitek";

const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

/**
 * Štítky leží nad postavou v podkladu. Levý sloupec končí na 40 % šířky,
 * proto nic nesmí začínat dřív — jinak by to padlo na tlačítka.
 * Obličej lékařky je v horní části mezi 47 a 61 %, tomu se taky vyhýbáme.
 */
const poziceStitku = [
  "left-[42%] top-[52%]",
  "left-[56%] bottom-[12%]",
  "right-[4%] top-[30%]",
];

export function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl">
          {/* Podklad s lékařkou — uplatní se až tam, kde je dost místa.
              Níž by kompozice obrázku ořezem ztratila smysl. */}
          <Image
            src={fotky.heroPozadi}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center lg:block"
          />

          <div className="relative grid lg:min-h-[36rem] lg:grid-cols-[40%_60%]">
            {/* ── Levá polovina ── */}
            <div className="nastup flex flex-col rounded-t-4xl bg-white px-6 py-9 sm:px-9 sm:py-10 lg:rounded-none lg:bg-transparent lg:px-10 lg:py-14 xl:px-14">
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

            {/* ── Pravá polovina ── */}
            <div className="relative flex flex-col rounded-b-4xl bg-brand-700 px-6 py-9 text-white sm:px-9 sm:py-10 lg:rounded-none lg:bg-transparent lg:px-10 lg:py-14">
              <div className="flex items-start justify-between gap-6 lg:justify-end">
                <address className="not-italic text-sm leading-relaxed text-white lg:hidden">
                  {klinika.adresa.ulice}
                  <br />
                  {klinika.adresa.psc} {klinika.adresa.mesto}
                </address>

                <div className="flex shrink-0 gap-2">
                  <a
                    href={telHref}
                    className="grid size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <span className="sr-only">Zavolat na {klinika.telefon}</span>
                    <TelefonIcon className="size-4" />
                  </a>
                  <a
                    href={`mailto:${klinika.email}`}
                    className="grid size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <span className="sr-only">Napsat na {klinika.email}</span>
                    <MailIcon className="size-4" />
                  </a>
                  <a
                    href="#kontakt"
                    className="grid size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <span className="sr-only">Zobrazit mapu a dopravu</span>
                    <PinIcon className="size-4" />
                  </a>
                </div>
              </div>

              {/* Na mobilu podklad nefunguje, postava tu stojí samostatně */}
              <div className="mt-8 lg:hidden">
                <Foto
                  src={fotky.heroPostava}
                  alt="Lékařka Zubní ordinace AZ"
                  napoveda="Portrét lékařky, na výšku 600 × 720 px"
                  pozice="center top"
                  className="mx-auto aspect-[4/5] w-full max-w-[15rem] rounded-4xl ring-1 ring-white/40 sm:aspect-[5/6] sm:max-w-xs"
                  sizes="(min-width: 640px) 20rem, 100vw"
                />
                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {hero.stitky.map((stitek, i) => (
                    <li key={stitek}>
                      <Stitek text={stitek} poradi={i} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 lg:ml-auto lg:mt-auto lg:max-w-[17rem]">
                <h2 className="font-display text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl lg:text-2xl">
                  {hero.panelNadpis}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-50">
                  {hero.panelText}
                </p>
              </div>
            </div>
          </div>

          {/* Plovoucí štítky nad podkladem — jen tam, kde je podklad vidět */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {hero.stitky.map((stitek, i) => (
              <span
                key={stitek}
                className={`absolute ${poziceStitku[i]} whitespace-nowrap`}
              >
                <Stitek text={stitek} poradi={i} />
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
