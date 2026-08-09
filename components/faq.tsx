import { faq } from "@/content/klinika";
import { SectionHeading } from "@/components/section-heading";

/** Strukturovaná data — Google umí otázky zobrazit přímo ve výsledcích. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((polozka) => ({
    "@type": "Question",
    name: polozka.otazka,
    acceptedAnswer: { "@type": "Answer", text: polozka.odpoved },
  })),
};

export function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          stitek="Časté dotazy"
          stitekVpravo={`${faq.length} otázek`}
          nadpis="Na co se nás ptáte nejčastěji"
          popis="Nenašli jste, co potřebujete? Zavolejte nám."
        />

        <ul className="kaskada space-y-3 lg:pt-2">
          {faq.map((polozka, i) => (
            <li key={polozka.otazka}>
              <details className="group rounded-4xl border border-sand-200 bg-white px-7 py-5 transition-colors open:border-brand-300 hover:border-brand-300">
                <summary className="flex cursor-pointer list-none items-center gap-5 marker:hidden">
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-light tabular-nums text-brand-300 transition-colors group-open:text-brand-600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base font-extrabold tracking-tight text-ink">
                    {polozka.otazka}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-sand-300 text-ink-soft transition-transform group-open:rotate-45 group-open:border-brand-600 group-open:bg-brand-600 group-open:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pl-11 leading-relaxed text-ink-soft">
                  {polozka.odpoved}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
