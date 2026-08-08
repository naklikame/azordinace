"use client";

import { useEffect, useState } from "react";
import { klinika, navigace } from "@/content/klinika";
import { MenuIcon, TelefonIcon, ZavritIcon } from "@/components/icons";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [otevreno, setOtevreno] = useState(false);

  // Zamkne scroll pod otevřeným mobilním menu a zavře ho Escapem.
  useEffect(() => {
    if (!otevreno) return;

    const puvodni = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const naEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOtevreno(false);
    };
    document.addEventListener("keydown", naEsc);

    return () => {
      document.body.style.overflow = puvodni;
      document.removeEventListener("keydown", naEsc);
    };
  }, [otevreno]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Přeskočit na obsah
      </a>

      <div className="hlavicka mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-sand-200 bg-white/90 p-2.5 pl-4 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="size-9 shrink-0 text-brand-600" />
          <span className="font-display text-base font-extrabold tracking-tight text-ink">
            {klinika.nazev}
          </span>
        </Link>

        <nav aria-label="Hlavní" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigace.map((polozka) => (
              <li key={polozka.href}>
                <Link
                  href={polozka.href}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
                >
                  {polozka.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${klinika.telefon.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-sand-200 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:text-brand-800"
          >
            <TelefonIcon className="size-4 text-brand-600" />
            {klinika.telefon}
          </a>
          <Link
            href="/#objednat"
            className="stisk rounded-full bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-800"
          >
            Objednat se
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOtevreno((v) => !v)}
          aria-expanded={otevreno}
          aria-controls="mobilni-menu"
          className="grid size-11 place-items-center rounded-full border border-sand-400 text-ink lg:hidden"
        >
          <span className="sr-only">
            {otevreno ? "Zavřít menu" : "Otevřít menu"}
          </span>
          {otevreno ? (
            <ZavritIcon className="size-5" />
          ) : (
            <MenuIcon className="size-5" />
          )}
        </button>
      </div>

      {otevreno && (
        <div
          id="mobilni-menu"
          className="mx-auto mt-2 max-w-7xl rounded-4xl border border-sand-200 bg-white shadow-[0_20px_50px_-30px_rgba(18,33,31,0.6)] lg:hidden"
        >
          <nav aria-label="Mobilní" className="px-5 py-6">
            <ul className="flex flex-col gap-1">
              {navigace.map((polozka) => (
                <li key={polozka.href}>
                  <Link
                    href={polozka.href}
                    onClick={() => setOtevreno(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-sand-100"
                  >
                    {polozka.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/#objednat"
                onClick={() => setOtevreno(false)}
                className="rounded-full bg-accent-700 px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Objednat se
              </Link>
              <a
                href={`tel:${klinika.telefon.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-sand-400 px-5 py-3.5 text-sm font-semibold text-ink"
              >
                <TelefonIcon className="size-4 text-brand-600" />
                {klinika.telefon}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
