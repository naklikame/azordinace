import { fotky, procNas } from "@/content/klinika";
import { Foto } from "@/components/foto";

export function ProcNas() {
  return (
    <section className="px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ── Panel s fotkou ──
            Na telefonu se neukazuje vůbec: zabíral celou obrazovku a nesl
            jen nadpis, který sekci nese i bez něj. Tam zůstanou samotná
            čísla, ta mluví za sebe. */}
        <div className="relative isolate hidden flex-col overflow-hidden rounded-4xl bg-brand-700 px-6 pb-8 pt-9 text-white sm:flex sm:min-h-[32rem] sm:px-10 lg:min-h-[38rem]">
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

          {/* Fotka vyplňuje spodek panelu */}
          <div className="relative mt-8 flex-1">
            <Foto
              src={fotky.procNasSnimek}
              alt="Dětská pacientka na recepci Zubní ordinace AZ"
              napoveda="Snímek z ordinace, na šířku 1200 × 750 px"
              pozice="35% center"
              className="absolute inset-0 rounded-3xl"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
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

          {/* Na telefonu čtyři čísla pod sebou zabírala celou obrazovku, proto
              jsou ve dvou sloupcích a v menším měřítku. */}
          <dl className="kaskada grid grid-cols-2">
            {procNas.vyhody.map((vyhoda) => (
              <div
                key={vyhoda.nazev}
                className="border-b border-sand-200 py-5 odd:border-r odd:pr-4 even:pl-4 sm:py-8 sm:odd:pr-8 sm:even:pl-8"
              >
                <dt>
                  <span className="block font-display text-[clamp(2rem,9vw,4rem)] font-light leading-none tracking-tight text-ink tabular-nums">
                    {vyhoda.hodnota}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-snug text-ink sm:mt-3 sm:text-base">
                    {vyhoda.nazev}
                  </span>
                </dt>
                <dd className="mt-2 hidden max-w-xs text-sm leading-relaxed text-ink-soft sm:block">
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
