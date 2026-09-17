import Link from "next/link";
import Image from "next/image";
import { clenTymu, ordinace } from "@/content/klinika";
import { Foto } from "@/components/foto";
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
        popis="U každé ordinace vidíte, kdo v ní pracuje."
      />

      {/*
        Podmřížka sváže výšky odpovídajících pásem napříč kartami. Bez ní se
        karty rozjedou, protože jedno jméno se zalomí na dva řádky a druhé ne.
        Na telefonu je mřížka sloupcová, aby posuvný seznam držel stejné
        rozdělení — sousední karta je při posunu vidět a rozjetá pásma bijí
        do očí. Zděděnou mezeru mezi řádky karta ruší (gap-y-0), rozestupy
        uvnitř dělají odsazení jednotlivých pásem.
      */}
      <ul
        className="kaskada mt-8 -mx-3 grid snap-x snap-mandatory grid-flow-col auto-cols-[min(82%,20rem)] grid-rows-[auto_auto_1fr_auto] gap-4 overflow-x-auto px-3 pb-3 bez-posuvniku sm:mx-0 sm:mt-12 sm:grid-flow-row sm:snap-none sm:grid-cols-1 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-2"
        tabIndex={0}
        aria-label="Naše ordinace, na telefonu posuvné do stran"
      >
        {ordinace.map((o) => {
          const lekarka = clenTymu(o.lekarId);
          const sestra = clenTymu(o.sestraId);

          return (
            <li
              key={o.id}
              className="row-span-4 grid snap-start grid-rows-subgrid gap-y-0 sm:gap-y-4"
            >
              <Link
                href={`/ordinace/${o.id}`}
                className="zdvih group row-span-4 grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-4xl border border-sand-200 bg-white hover:border-brand-300 sm:gap-y-4"
              >
                <Foto
                  src={o.foto}
                  alt={`${o.nazev} — ${lekarka.titul} ${lekarka.jmeno}`}
                  napoveda={`Snímek ${o.nazev}, na šířku 1200 × 900 px`}
                  className="aspect-[4/3] w-full"
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 82vw"
                />

                {/* V hlavičce stojí ordinace, ne lékařka — jména obou lidí
                    jsou hned pod tím a nemá smysl je uvádět dvakrát. */}
                <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-9">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                      {o.nazev}
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

                {/* Kdo v ordinaci je, kvůli tomu celé dělení vzniklo */}
                <div className="mx-6 mt-5 flex flex-col gap-3 border-t border-sand-100 pt-5 sm:mx-9">
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
                      <span className="text-sm font-semibold text-ink">
                        {clen.titul} {clen.jmeno}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 self-end px-6 pb-6 pt-5 font-semibold text-brand-700 sm:px-9 sm:pb-9 sm:pt-8">
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
