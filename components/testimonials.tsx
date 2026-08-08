import { reference } from "@/content/klinika";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section
      id="reference"
      className="scroll-mt-28 px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-brand-800 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              varianta="tmava"
              stitek="Reference"
              nadpis="Co říkají naši pacienti"
              popis="Výběr z toho, co nám pacienti napsali. Děkujeme za ně. Nejvíc nám pomáhá, když nás doporučíte dál."
            />

            <a
              href="#objednat"
              className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
            >
              Objednat se k nám
            </a>
          </div>

          <ul
            className="kaskada -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 bez-posuvniku sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2"
            tabIndex={0}
            aria-label="Hodnocení pacientů, na telefonu posuvná do stran"
          >
            {reference.map((r) => (
              <li
                key={r.jmeno}
                className="zdvih rounded-4xl bg-white/[0.07] p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-7 w-[82%] max-w-xs shrink-0 snap-start sm:w-auto sm:max-w-none"
              >
                <figure>
                  <blockquote className="leading-relaxed text-brand-50">
                    „{r.text}“
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span
                      aria-hidden="true"
                      className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-xs font-extrabold text-white"
                    >
                      {r.jmeno.charAt(0)}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {r.jmeno}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
