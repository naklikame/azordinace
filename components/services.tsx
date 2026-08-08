import { sluzby } from "@/content/klinika";
import { CheckIcon, SipkaIcon, SluzbaIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section
      id="sluzby"
      className="mx-auto max-w-7xl scroll-mt-28 px-3 py-16 sm:px-4 lg:px-6 lg:py-24"
    >
      <SectionHeading
        stitek="Naše služby"
        stitekVpravo={`${sluzby.length} oborů`}
        nadpis="Všechno, co vaše zuby potřebují, na jednom místě"
        popis="Od preventivní prohlídky po korunku. Nikam vás neposíláme, ošetří vás stejný tým, který vás už zná."
      />

      <ul className="kaskada mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sluzby.map((sluzba, i) => (
          <li
            key={sluzba.id}
            className="zdvih group relative flex h-full flex-col overflow-hidden rounded-4xl border border-sand-200 bg-white p-8 hover:border-brand-300"
          >
            {/* Pořadové číslo v duchu velkých lehkých číslic ze sekce výše */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-light tabular-nums text-brand-200 transition-colors group-hover:text-brand-400"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="relative grid size-12 place-items-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <SluzbaIcon ikona={sluzba.ikona} className="size-6" />
            </span>

            <h3 className="relative mt-6 font-display text-xl font-extrabold tracking-tight text-ink">
              {sluzba.nazev}
            </h3>
            <p className="relative mt-3 leading-relaxed text-ink-soft">
              {sluzba.popis}
            </p>

            <ul className="relative mt-6 space-y-2.5 border-t border-sand-100 pt-6">
              {sluzba.body.map((bod) => (
                <li key={bod} className="flex gap-2.5 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {bod}
                </li>
              ))}
            </ul>
          </li>
        ))}

        {/* Barevná karta uzavírá mřížku a odvádí na objednávku */}
        <li className="zdvih relative flex flex-col justify-between overflow-hidden rounded-4xl bg-brand-700 p-8 text-white sm:col-span-2 lg:col-span-1">
          <div
            aria-hidden="true"
            className="zar pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/40 blur-3xl"
          />
          <div className="relative">
            <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight">
              Nevíte, co potřebujete?
            </h3>
            <p className="mt-3 leading-relaxed text-brand-100">
              Přijďte na vstupní prohlídku. Hradí ji pojišťovna, společně se
              podíváme na snímky a řekneme si, co dál.
            </p>
          </div>

          <a
            href="#objednat"
            className="stisk group relative mt-8 inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 font-semibold text-brand-800 transition-colors hover:bg-brand-50"
          >
            Objednat prohlídku
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-full bg-accent-700 text-white transition-transform group-hover:translate-x-0.5"
            >
              <SipkaIcon className="size-4" />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
