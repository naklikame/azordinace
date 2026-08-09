import { klinika, navigace, sluzby } from "@/content/klinika";
import { SipkaIcon } from "@/components/icons";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const rok = new Date().getFullYear();
  const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

  return (
    <footer className="mt-auto px-3 pb-3 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-brand-900 px-7 pt-14 text-white sm:px-10 lg:px-14">
        <div
          aria-hidden="true"
          className="zar pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand-600/50 blur-3xl"
        />

        {/* Závěrečná výzva */}
        <div className="relative flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-[clamp(2rem,4.6vw,3.25rem)] font-black leading-[0.98] tracking-tight">
            Zavolejte, domluvíme termín
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#objednat"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-semibold text-ink transition-colors hover:bg-brand-50"
            >
              Objednat se
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full bg-accent-700 text-white transition-transform group-hover:translate-x-0.5"
              >
                <SipkaIcon className="size-4" />
              </span>
            </Link>
            <a
              href={telHref}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold tabular-nums transition-colors hover:border-white/60"
            >
              {klinika.telefon}
            </a>
          </div>
        </div>

        {/* Sloupce */}
        <div className="relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="size-9 shrink-0 text-brand-300" />
              <span className="font-display text-base font-extrabold tracking-tight">
                {klinika.nazev}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {klinika.slogan}. Zubní ordinace pro dospělé i děti na Smíchově,
              pár minut od Anděla.
            </p>
          </div>

          <nav aria-labelledby="footer-navigace">
            <h2
              id="footer-navigace"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
            >
              Navigace
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navigace.map((polozka) => (
                <li key={polozka.href}>
                  <Link
                    href={polozka.href}
                    className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {polozka.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-sluzby" className="hidden sm:block">
            <h2
              id="footer-sluzby"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
            >
              Služby
            </h2>
            <ul className="mt-5 space-y-2.5">
              {sluzby.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#sluzby"
                    className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {s.nazev}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Kontakt
            </h2>
            <address className="mt-5 space-y-2.5 not-italic text-sm text-white/75">
              <p>
                {klinika.adresa.ulice}
                <br />
                {klinika.adresa.psc} {klinika.adresa.mesto}
              </p>
              <p>
                <a
                  href={telHref}
                  className="tabular-nums underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {klinika.telefon}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${klinika.email}`}
                  className="break-all underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {klinika.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="tabular-nums">
            © {rok} {klinika.nazev}. Provozuje {klinika.provozovatel}, IČO{" "}
            {klinika.ico}.
          </p>
          <p>{klinika.sidlo}</p>
        </div>
      </div>
    </footer>
  );
}
