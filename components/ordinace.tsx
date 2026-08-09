import Link from "next/link";
import { clenTymu, ordinace, sluzby } from "@/content/klinika";
import Image from "next/image";
import { SipkaIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function Ordinace() {
  return (
    <section
      id="ordinace"
      className="mx-auto max-w-7xl scroll-mt-28 px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-24"
    >
      <SectionHeading
        stitek="Naše ordinace"
        stitekVpravo={`${ordinace.length} ordinace`}
        nadpis="Dvě ordinace, jeden tým"
        popis="U každé ordinace vidíte, kdo v ní pracuje a čemu se věnuje."
      />

      {/*
        Podmřížka sváže výšky odpovídajících pásem napříč kartami. Bez ní se
        karty rozjedou, protože texty mají různou délku: jedno jméno se zalomí
        na dva řádky, druhé ne, a jedna ordinace má o štítek zaměření víc.
      */}
      <ul
        className="kaskada mt-12 -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 bez-posuvniku sm:mx-0 sm:grid sm:snap-none sm:grid-cols-1 sm:grid-rows-[auto_1fr_auto_auto_auto] sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-2"
        tabIndex={0}
        aria-label="Naše ordinace, na telefonu posuvné do stran"
      >
        {ordinace.map((o) => {
          const lekarka = clenTymu(o.lekarId);
          const sestra = clenTymu(o.sestraId);
          const zamereni = o.zamereni
            .map((id) => sluzby.find((s) => s.id === id))
            .filter((s) => s !== undefined);

          return (
            <li
              key={o.id}
              className="w-[82%] max-w-xs shrink-0 snap-start sm:row-span-5 sm:grid sm:w-auto sm:max-w-none sm:grid-rows-subgrid"
            >
              <Link
                href={`/ordinace/${o.id}`}
                className="zdvih group flex h-full flex-col rounded-4xl border border-sand-200 bg-white p-7 hover:border-brand-300 sm:row-span-5 sm:grid sm:grid-rows-subgrid sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                      {o.nazev}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink">
                      {lekarka.titul} {lekarka.jmeno}
                    </h3>
                    <p className="mt-1.5 text-brand-700">{o.perex}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-light leading-none tabular-nums text-brand-300 transition-colors group-hover:text-brand-500"
                  >
                    {o.poradi}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-ink-soft">{o.popis}</p>

                {/* Kdo v ordinaci je, kvůli tomu celé dělení vzniklo */}
                <div className="mt-7 flex flex-col gap-3 border-t border-sand-100 pt-6">
                  {[lekarka, sestra].map((clen) => (
                    <div key={clen.id} className="flex items-center gap-3">
                      {/* Zástupný rámeček z komponenty Foto je stavěný na velké
                          plochy, v kolečku 44 px by se jeho odsazení nevešlo
                          a iniciály by seděly mimo střed. */}
                      <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-brand-700">
                        {clen.foto ? (
                          <Image
                            src={clen.foto}
                            alt=""
                            fill
                            sizes="44px"
                            className="object-cover object-top"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="grid size-full place-items-center font-display text-xs font-extrabold text-white"
                          >
                            {clen.iniciialy}
                          </span>
                        )}
                      </div>
                      <span className="text-sm leading-tight">
                        <span className="block font-semibold text-ink">
                          {clen.titul} {clen.jmeno}
                        </span>
                        <span className="text-ink-soft">
                          {clen.specializace}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 hidden flex-wrap gap-2 sm:flex">
                  {zamereni.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800"
                    >
                      {s.nazev}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-brand-700 sm:mt-0 sm:self-end">
                  Zobrazit ordinaci
                  <SipkaIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
