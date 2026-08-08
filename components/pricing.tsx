import { cenik, klinika } from "@/content/klinika";
import { SipkaIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const pocetVykonu = cenik.reduce((soucet, s) => soucet + s.polozky.length, 0);

export function Pricing() {
  return (
    <section
      id="cenik"
      className="mx-auto max-w-7xl scroll-mt-28 px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-24"
    >
      <SectionHeading
        stitek="Ceník"
        stitekVpravo={`${pocetVykonu} výkonů`}
        nadpis="Ceny, které znáte předem"
        popis="Ceny nejčastějších výkonů. Konkrétní částku vám řekneme dřív, než se pustíme do práce. Kompletní ceník najdete v ordinaci."
      />

      <div
        className="kaskada mt-12 -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 bez-posuvniku sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-1 lg:grid-cols-2"
        tabIndex={0}
        aria-label="Ceník po skupinách, na telefonu posuvný do stran"
      >
        {cenik.map((skupina, i) => (
          <div
            key={skupina.skupina}
            className="zdvih overflow-hidden rounded-4xl border border-sand-200 bg-white w-[82%] max-w-xs shrink-0 snap-start sm:w-auto sm:max-w-none"
          >
            <div className="flex items-center justify-between gap-4 border-b border-sand-200 bg-brand-50 px-6 py-5 sm:px-8 sm:py-6">
              <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                {skupina.skupina}
              </h3>
              <span
                aria-hidden="true"
                className="font-display text-3xl font-light leading-none tabular-nums text-brand-300"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <table className="w-full">
              <caption className="sr-only">Ceník: {skupina.skupina}</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Výkon</th>
                  <th scope="col">Cena</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {skupina.polozky.map((polozka) => (
                  <tr key={polozka.vykon} className="transition-colors hover:bg-brand-50/60">
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-left font-normal text-ink-soft sm:px-8 sm:py-4"
                    >
                      {polozka.vykon}
                      {polozka.poznamka && (
                        <span className="mt-0.5 block text-xs text-ink-soft/80">
                          {polozka.poznamka}
                        </span>
                      )}
                    </th>
                    <td className="whitespace-nowrap px-6 py-3.5 text-right font-semibold tabular-nums text-ink sm:px-8 sm:py-4">
                      {polozka.cena}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Barevný pruh se vstupní nabídkou — stejný jazyk jako karta ve službách */}
      <div className="reveal relative mt-4 flex flex-col gap-6 overflow-hidden rounded-4xl bg-brand-700 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div
          aria-hidden="true"
          className="zar pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-brand-500/40 blur-3xl"
        />
        <div className="relative">
          <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-none tabular-nums">
            0 Kč
          </span>
          <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight">
            Vstupní prohlídka včetně RTG
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-100">
            Prohlídku, snímek i umrtvení proplácí pojišťovna. Přijďte se
            poradit, nic tím neriskujete.
          </p>
        </div>

        <a
          href="#objednat"
          className="stisk group relative inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white py-2 pl-6 pr-2 font-semibold text-brand-800 transition-colors hover:bg-brand-50 sm:self-center"
        >
          Objednat prohlídku
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-accent-700 text-white transition-transform group-hover:translate-x-0.5"
          >
            <SipkaIcon className="size-4" />
          </span>
        </a>
      </div>

      {/* Pojišťovny sedí k ceníku líp než k představení kliniky */}
      <div className="reveal mt-4 flex flex-col gap-6 rounded-4xl border border-sand-200 bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
            Máme smlouvu s těmito pojišťovnami
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Prohlídky, RTG i umrtvení proplácí pojišťovna. Doplácíte jen tam,
            kde si sami vyberete nadstandard.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {klinika.pojistovny.map((p) => (
            <li
              key={p}
              className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold tabular-nums text-brand-800"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        Ceník je orientační a není nabídkou ve smyslu občanského zákoníku.
        Výkony hrazené z veřejného zdravotního pojištění účtujeme dle úhradové
        vyhlášky.
      </p>
    </section>
  );
}
