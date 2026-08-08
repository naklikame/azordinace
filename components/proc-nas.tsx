import { fotky, procNas } from "@/content/klinika";
import { Foto } from "@/components/foto";
import { Stitek } from "@/components/stitek";

/** Rozmístění štítků nad fotkou — kopíruje kompozici z předlohy. */
const poziceStitku = [
  "right-[5%] top-[8%]",
  "right-[15%] top-[42%]",
  "right-[7%] bottom-[10%]",
];

export function ProcNas() {
  return (
    <section className="px-3 py-16 sm:px-4 lg:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ── Panel s fotkou ── */}
        <div className="relative isolate flex min-h-[32rem] flex-col overflow-hidden rounded-4xl bg-brand-700 px-7 pt-10 text-white sm:px-10 lg:min-h-[38rem] lg:pb-8">
          <div
            aria-hidden="true"
            className="zar pointer-events-none absolute -left-20 -top-20 -z-10 size-80 rounded-full bg-brand-500/30 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-[0.92] tracking-tight">
              {procNas.nadpisRadky.map((radek) => (
                <span key={radek} className="block">
                  {radek}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100">
              {procNas.podtitul}
            </p>
          </div>

          {/* Fotka vyplňuje spodek panelu, štítky leží nad ní */}
          <div className="relative mt-8 flex-1">
            <Foto
              src={fotky.procNasSnimek}
              alt="Dětská pacientka na recepci Zubní ordinace AZ"
              napoveda="Snímek z ordinace, na šířku 1200 × 750 px"
              pozice="35% center"
              className="absolute inset-0 rounded-3xl"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {procNas.stitky.map((stitek, i) => (
                <span
                  key={stitek}
                  className={`absolute ${poziceStitku[i]} whitespace-nowrap`}
                >
                  <Stitek text={stitek} poradi={i} />
                </span>
              ))}
            </div>
          </div>

          <ul className="relative z-10 mt-6 flex flex-wrap gap-2 pb-8 lg:hidden">
            {procNas.stitky.map((stitek, i) => (
              <li key={stitek}>
                <Stitek text={stitek} poradi={i} />
              </li>
            ))}
          </ul>

        </div>

        {/* ── Čísla ── */}
        <div className="flex flex-col justify-center lg:py-6">
          <div className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {procNas.stitekVlevo}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {procNas.stitekVpravo}
            </span>
          </div>

          <dl className="kaskada grid grid-cols-1 sm:grid-cols-2">
            {procNas.vyhody.map((vyhoda) => (
              <div
                key={vyhoda.nazev}
                className="border-b border-sand-200 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <dt>
                  <span className="block font-display text-[clamp(2.75rem,6vw,4rem)] font-light leading-none tracking-tight text-ink tabular-nums">
                    {vyhoda.hodnota}
                  </span>
                  <span className="mt-3 block font-semibold text-ink">
                    {vyhoda.nazev}
                  </span>
                </dt>
                <dd className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {vyhoda.popis}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
