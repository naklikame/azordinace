import type { Metadata } from "next";
import Link from "next/link";
import type { Blok, PravniDokument } from "@/content/pravni";
import { pravniDokumenty } from "@/content/pravni";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SipkaIcon } from "@/components/icons";
import { drobecky, StrukturovanaData } from "@/components/strukturovana-data";

const datum = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Obsah({ blok }: { blok: Blok }) {
  if (blok.typ === "odstavec") {
    return <p className="mt-4 leading-relaxed text-ink-soft">{blok.text}</p>;
  }

  if (blok.typ === "seznam") {
    return (
      <ul className="mt-4 space-y-3">
        {blok.polozky.map((polozka) => (
          <li key={polozka} className="flex gap-3 leading-relaxed text-ink-soft">
            <span
              aria-hidden="true"
              className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-600"
            />
            {polozka}
          </li>
        ))}
      </ul>
    );
  }

  // Účely zpracování. Na úzkém displeji by se tabulka o čtyřech sloupcích
  // rozsypala, takže každý účel je vlastní karta s popisnými řádky.
  return (
    <ul className="mt-6 space-y-4">
      {blok.polozky.map((u) => (
        <li
          key={u.ucel}
          className="rounded-4xl border border-sand-200 bg-white p-6 sm:p-8"
        >
          <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
            {u.ucel}
          </h3>
          <dl className="mt-4 space-y-3 text-sm leading-relaxed">
            {[
              ["Jaké údaje", u.udaje],
              ["Právní základ", u.titul],
              ["Jak dlouho", u.doba],
            ].map(([popisek, hodnota]) => (
              <div key={popisek} className="sm:flex sm:gap-4">
                <dt className="font-semibold text-ink sm:w-32 sm:shrink-0">
                  {popisek}
                </dt>
                <dd className="mt-0.5 text-ink-soft sm:mt-0">{hodnota}</dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  );
}

export function PravniStranka({ dokument }: { dokument: PravniDokument }) {
  const ostatni = pravniDokumenty.filter((d) => d.slug !== dokument.slug);

  return (
    <>
      <SiteHeader />

      <main id="obsah" className="flex-1">
        <StrukturovanaData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              drobecky([
                { nazev: dokument.nazev, cesta: `/${dokument.slug}` },
              ]),
            ],
          }}
        />

        <article className="mx-auto max-w-3xl px-3 py-10 sm:px-4 sm:py-14 lg:px-6 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-700"
          >
            <SipkaIcon className="size-4 rotate-180" />
            Zpět na úvod
          </Link>

          <h1 className="mt-8 font-display text-[clamp(2rem,4.6vw,3.25rem)] font-black leading-[0.98] tracking-tight text-ink">
            {dokument.nazev}
          </h1>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Aktualizováno{" "}
            <time dateTime={dokument.aktualizovano}>
              {datum.format(new Date(dokument.aktualizovano))}
            </time>
          </p>

          <p className="mt-6 text-lg leading-relaxed text-ink">
            {dokument.perex}
          </p>

          {dokument.sekce.map((sekce) => (
            <section key={sekce.nadpis} className="mt-12">
              <h2 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                {sekce.nadpis}
              </h2>
              {sekce.bloky.map((blok, i) => (
                <Obsah key={i} blok={blok} />
              ))}
            </section>
          ))}

          <nav
            aria-label="Další právní dokumenty"
            className="mt-16 border-t border-sand-200 pt-8"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Související
            </h2>
            <ul className="mt-5 space-y-3">
              {ostatni.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/${d.slug}`}
                    className="group inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
                  >
                    {d.nazev}
                    <SipkaIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}

/** Metadata stránky se odvozují z dokumentu, ať se nepíšou dvakrát. */
export function metadataDokumentu(dokument: PravniDokument): Metadata {
  return {
    title: dokument.nazev,
    description: dokument.popis,
    alternates: { canonical: `/${dokument.slug}` },
    openGraph: {
      title: dokument.nazev,
      description: dokument.popis,
      url: `/${dokument.slug}`,
    },
  };
}
