import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  clenTymu,
  klinika,
  ordinace,
  sluzby,
} from "@/content/klinika";
import { Foto } from "@/components/foto";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CheckIcon,
  HodinyIcon,
  MailIcon,
  PinIcon,
  SipkaIcon,
  TelefonIcon,
} from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ordinace.map((o) => ({ slug: o.id }));
}

/** Neznámý slug nemá vznikat na vyžádání — ordinace jsou jen dvě. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const o = ordinace.find((x) => x.id === slug);
  if (!o) return {};

  const lekarka = clenTymu(o.lekarId);
  const titulek = `${o.nazev}, ${lekarka.titul} ${lekarka.jmeno}`;

  return {
    title: titulek,
    description: o.popis,
    alternates: { canonical: `/ordinace/${o.id}` },
    openGraph: {
      title: `${titulek} | ${klinika.nazev}`,
      description: o.popis,
      url: `/ordinace/${o.id}`,
    },
  };
}

const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

export default async function OrdinacePage({ params }: Props) {
  const { slug } = await params;
  const o = ordinace.find((x) => x.id === slug);
  if (!o) notFound();

  const lekarka = clenTymu(o.lekarId);
  const sestra = clenTymu(o.sestraId);
  const zamereni = o.zamereni
    .map((id) => sluzby.find((s) => s.id === id))
    .filter((s) => s !== undefined);
  const dalsi = ordinace.find((x) => x.id !== o.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${klinika.nazev}, ${o.nazev}`,
    description: o.popis,
    telephone: klinika.telefon,
    address: {
      "@type": "PostalAddress",
      streetAddress: klinika.adresa.ulice,
      addressLocality: klinika.adresa.mesto,
      postalCode: klinika.adresa.psc,
      addressCountry: "CZ",
    },
    employee: [lekarka, sestra].map((c) => ({
      "@type": "Person",
      name: `${c.titul} ${c.jmeno}`.trim(),
      jobTitle: c.specializace,
    })),
  };

  return (
    <>
      <SiteHeader />

      <main id="obsah" className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mx-auto max-w-7xl px-3 pt-8 sm:px-4 lg:px-6">
          <Link
            href="/#ordinace"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-700"
          >
            <SipkaIcon className="size-4 rotate-180" />
            Zpět na přehled ordinací
          </Link>
        </div>

        {/* ── Úvodní panel ── */}
        <section className="px-3 pt-6 sm:px-4 lg:px-6">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-brand-700 px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                  {o.nazev}
                </span>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.25rem)] font-black leading-[0.98] tracking-tight">
                  {lekarka.titul} {lekarka.jmeno}
                </h1>
                <p className="mt-4 max-w-xl leading-relaxed text-brand-50">
                  {o.popis}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#objednat"
                    className="group inline-flex items-center gap-3 rounded-full bg-accent-700 py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-accent-800"
                  >
                    Objednat se
                    <span
                      aria-hidden="true"
                      className="grid size-9 place-items-center rounded-full bg-white text-accent-700 transition-transform group-hover:translate-x-0.5"
                    >
                      <SipkaIcon className="size-4" />
                    </span>
                  </Link>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold tabular-nums transition-colors hover:border-white/70"
                  >
                    <TelefonIcon className="size-4" />
                    {klinika.telefon}
                  </a>
                </div>
              </div>

              {/* Otevírací doba — zatím společná pro celou ordinaci */}
              <div className="rounded-4xl bg-white/10 p-7 backdrop-blur-sm">
                <h2 className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-brand-200">
                  <HodinyIcon className="size-4" />
                  Ordinační hodiny
                </h2>
                <dl className="mt-4 divide-y divide-white/10">
                  {klinika.otviraciDoba.map((den) => (
                    <div
                      key={den.den}
                      className="flex items-baseline justify-between gap-4 py-2"
                    >
                      <dt className="text-sm text-brand-100">{den.den}</dt>
                      <dd className="text-sm font-semibold tabular-nums">
                        {den.cas}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kdo v ordinaci je ── */}
        <section className="mx-auto max-w-7xl px-3 py-16 sm:px-4 lg:px-6 lg:py-20">
          <div className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Kdo se o vás postará
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {o.nazev}
            </span>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[lekarka, sestra].map((clen) => (
              <li
                key={clen.id}
                className="overflow-hidden rounded-4xl border border-sand-200 bg-white sm:flex"
              >
                <div className="relative sm:w-44 sm:shrink-0">
                  <Foto
                    src={clen.foto}
                    alt={`${clen.titul} ${clen.jmeno}`.trim()}
                    napoveda={`Portrét ${clen.jmeno}, 600 × 800 px`}
                    className="aspect-[3/4] w-full sm:h-full"
                    pozice="center top"
                    sizes="(min-width: 640px) 11rem, 100vw"
                  />
                  {!clen.foto && (
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-brand-700 font-display text-sm font-extrabold text-white"
                    >
                      {clen.iniciialy}
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {clen.titul} {clen.jmeno}
                  </h3>
                  <p className="mt-1.5 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                    {clen.specializace}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {clen.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Zaměření ── */}
        <section className="mx-auto max-w-7xl px-3 pb-16 sm:px-4 lg:px-6 lg:pb-20">
          <div className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Čemu se ordinace věnuje
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {zamereni.length} oborů
            </span>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zamereni.map((s) => (
              <li
                key={s.id}
                className="rounded-4xl border border-sand-200 bg-white p-7"
              >
                <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
                  {s.nazev}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.popis}
                </p>
                <ul className="mt-4 space-y-2 border-t border-sand-100 pt-4">
                  {s.body.map((bod) => (
                    <li key={bod} className="flex gap-2 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {bod}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-ink-soft">
            Kompletní přehled najdete v{" "}
            <Link
              href="/#sluzby"
              className="font-semibold text-brand-700 underline underline-offset-4"
            >
              seznamu služeb
            </Link>{" "}
            a ceny v{" "}
            <Link
              href="/#cenik"
              className="font-semibold text-brand-700 underline underline-offset-4"
            >
              ceníku
            </Link>
            .
          </p>
        </section>

        {/* ── Kde nás najdete + odkaz na druhou ordinaci ── */}
        <section className="mx-auto max-w-7xl px-3 pb-16 sm:px-4 lg:px-6 lg:pb-24">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-4xl border border-sand-200 bg-white p-8 sm:p-10">
              <h2 className="font-display text-lg font-extrabold tracking-tight text-ink">
                Kde nás najdete
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <PinIcon className="size-4" />
                  </span>
                  <address className="not-italic leading-relaxed text-ink-soft">
                    {klinika.adresa.ulice}
                    <br />
                    {klinika.adresa.psc} {klinika.adresa.mesto}
                  </address>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <MailIcon className="size-4" />
                  </span>
                  <a
                    href={`mailto:${klinika.email}`}
                    className="break-all text-ink-soft underline-offset-4 hover:text-brand-700 hover:underline"
                  >
                    {klinika.email}
                  </a>
                </li>
              </ul>
            </div>

            {dalsi && (
              <Link
                href={`/ordinace/${dalsi.id}`}
                className="group flex flex-col justify-between rounded-4xl bg-brand-900 p-8 text-white transition-colors hover:bg-brand-800 sm:p-10"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Druhá ordinace
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                    {clenTymu(dalsi.lekarId).titul}{" "}
                    {clenTymu(dalsi.lekarId).jmeno}
                  </h2>
                  <p className="mt-2 text-white/70">{dalsi.perex}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold">
                  Zobrazit {dalsi.nazev}
                  <SipkaIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
