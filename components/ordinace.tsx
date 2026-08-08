import Link from "next/link";
import { clenTymu, ordinace, sluzby } from "@/content/klinika";
import { Foto } from "@/components/foto";
import { SipkaIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function Ordinace() {
  return (
    <section
      id="ordinace"
      className="mx-auto max-w-7xl scroll-mt-28 px-3 py-16 sm:px-4 lg:px-6 lg:py-24"
    >
      <SectionHeading
        stitek="Naše ordinace"
        stitekVpravo={`${ordinace.length} ordinace`}
        nadpis="Dvě ordinace, jeden tým"
        popis="Ošetřujeme ve dvou ordinacích. U každé najdete, kdo v ní pracuje a čemu se věnuje, abyste věděli, kdo se o vás postará."
      />

      <ul className="kaskada mt-12 grid gap-4 lg:grid-cols-2">
        {ordinace.map((o) => {
          const lekarka = clenTymu(o.lekarId);
          const sestra = clenTymu(o.sestraId);
          const zamereni = o.zamereni
            .map((id) => sluzby.find((s) => s.id === id))
            .filter((s) => s !== undefined);

          return (
            <li key={o.id}>
              <Link
                href={`/ordinace/${o.id}`}
                className="zdvih group flex h-full flex-col rounded-4xl border border-sand-200 bg-white p-8 hover:border-brand-300 sm:p-10"
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
                <div className="mt-7 flex flex-wrap gap-3 border-t border-sand-100 pt-6">
                  {[lekarka, sestra].map((clen) => (
                    <div key={clen.id} className="flex items-center gap-3">
                      <div className="relative">
                        <Foto
                          src={clen.foto}
                          alt=""
                          napoveda={clen.iniciialy}
                          className="size-11 shrink-0 rounded-full"
                          pozice="center top"
                          sizes="44px"
                        />
                        {!clen.foto && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 grid place-items-center rounded-full bg-brand-700 font-display text-xs font-extrabold text-white"
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

                <ul className="mt-6 flex flex-wrap gap-2">
                  {zamereni.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800"
                    >
                      {s.nazev}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-brand-700">
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
