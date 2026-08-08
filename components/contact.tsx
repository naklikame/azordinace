import { klinika } from "@/content/klinika";
import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";
import { HodinyIcon, MailIcon, PinIcon, TelefonIcon } from "@/components/icons";

const { adresa, mapa } = klinika;
const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

/** Výřez mapy kolem ordinace — OpenStreetMap nevyžaduje API klíč. */
const mapaSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  mapa.lng - 0.006
}%2C${mapa.lat - 0.003}%2C${mapa.lng + 0.006}%2C${
  mapa.lat + 0.003
}&layer=mapnik&marker=${mapa.lat}%2C${mapa.lng}`;

const kontakty = [
  {
    ikona: PinIcon,
    nadpis: "Adresa",
    obsah: (
      <address className="not-italic leading-relaxed text-brand-100">
        {adresa.ulice}
        <br />
        {adresa.psc} {adresa.mesto}
      </address>
    ),
  },
  {
    ikona: TelefonIcon,
    nadpis: "Telefon",
    obsah: (
      <div className="space-y-1">
        <a
          href={telHref}
          className="block text-brand-100 underline-offset-4 hover:text-white hover:underline"
        >
          {klinika.telefon}
          <span className="ml-2 text-xs text-brand-200">mobil</span>
        </a>
        <a
          href={`tel:${klinika.telefonPevny.replace(/\s/g, "")}`}
          className="block text-brand-100 underline-offset-4 hover:text-white hover:underline"
        >
          {klinika.telefonPevny}
          <span className="ml-2 text-xs text-brand-200">pevná linka</span>
        </a>
      </div>
    ),
  },
  {
    ikona: MailIcon,
    nadpis: "E-mail",
    obsah: (
      <a
        href={`mailto:${klinika.email}`}
        className="break-all text-brand-100 underline-offset-4 hover:text-white hover:underline"
      >
        {klinika.email}
      </a>
    ),
  },
];

export function Contact() {
  return (
    <section
      id="kontakt"
      className="mx-auto max-w-7xl scroll-mt-28 px-3 py-16 sm:px-4 lg:px-6 lg:py-24"
    >
      <SectionHeading
        stitek="Kontakt"
        stitekVpravo="Ozveme se zpět"
        nadpis="Objednejte se online"
        popis="Vyplňte formulář a my se vám ozveme a domluvíme termín. Když to hoří a zub bolí, radši rovnou zavolejte."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          id="objednat"
          className="scroll-mt-28 rounded-4xl border border-sand-200 bg-white p-8 sm:p-10"
        >
          <BookingForm />
        </div>

        <div className="grid gap-4">
          {/* Kontaktní panel v barvě značky — stejný jazyk jako hero */}
          <div className="relative overflow-hidden rounded-4xl bg-brand-700 p-8 text-white sm:p-10">
            <div
              aria-hidden="true"
              className="zar pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-500/30 blur-3xl"
            />

            <ul className="relative space-y-6">
              {kontakty.map(({ ikona: Ikona, nadpis, obsah }) => (
                <li key={nadpis} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10">
                    <Ikona className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-brand-200">
                      {nadpis}
                    </h3>
                    <div className="mt-1">{obsah}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 border-t border-white/15 pt-6">
              <h3 className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-brand-200">
                <HodinyIcon className="size-4" />
                Otevírací doba
              </h3>
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

          <div className="rounded-4xl border border-sand-200 bg-white p-8">
            <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
              Jak se k nám dostat
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-ink-soft">
              {klinika.doprava.map((zpusob) => (
                <li key={zpusob} className="flex gap-2.5 text-sm">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600"
                  />
                  {zpusob}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-4xl border border-sand-200">
            <iframe
              src={mapaSrc}
              title={`Mapa: ${klinika.nazev}, ${adresa.ulice}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
