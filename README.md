# AZ Ordinace — web zubní kliniky

Jednostránkový prezentační web postavený na Next.js 16 (App Router) a Tailwindu v4.

## Spuštění

```bash
npm run dev     # vývojový server na http://localhost:3000
npm run build   # produkční build
npm run lint    # ESLint
```

## Kde měnit obsah

Veškerý text a údaje kliniky jsou v jednom souboru — [content/klinika.ts](content/klinika.ts):

| Export | Co obsahuje |
| --- | --- |
| `klinika` | Název, adresa, telefon, e-mail, otevírací doba, pojišťovny, doprava, souřadnice mapy |
| `sluzby` | Nabízená ošetření (pohání sekci Služby, výběr ve formuláři i strukturovaná data) |
| `tym` | Lékaři a hygienistky |
| `cenik` | Ceník po skupinách |
| `reference` | Recenze pacientů |
| `faq` | Časté dotazy (zároveň se generují do FAQ strukturovaných dat) |
| `navigace` | Položky hlavního menu |

Barvy a typografii najdete v `@theme` bloku v [app/globals.css](app/globals.css).

## Struktura

```
app/
  layout.tsx          metadata, JSON-LD (Dentist), fonty
  page.tsx            složení sekcí
  actions.ts          server action objednávkového formuláře
  opengraph-image.tsx generovaný náhled pro sdílení na sítích
  sitemap.ts robots.ts
components/           jednotlivé sekce webu
content/klinika.ts    veškerý obsah
```

## Než web pustíte do provozu

1. **Přepsat obsah** v `content/klinika.ts` skutečnými údaji kliniky.
2. **Nastavit doménu** — proměnná `url` v [app/layout.tsx](app/layout.tsx), dále [app/sitemap.ts](app/sitemap.ts) a [app/robots.ts](app/robots.ts).
3. **Napojit formulář** — v [app/actions.ts](app/actions.ts) je označené místo (`TODO`), kam doplnit odeslání e-mailu recepci nebo zápis do rezervačního systému. Validace je hotová.
4. **Vyměnit favicon** `app/favicon.ico` za logo kliniky.
5. **Ověřit souřadnice mapy** v `klinika.mapa` (mapa se načítá z OpenStreetMap, nevyžaduje API klíč).
6. **Doplnit GDPR** — web sbírá osobní údaje přes formulář, patří sem odkaz na zásady zpracování.

## Přístupnost a SEO

Web prošel kontrolou proti Web Interface Guidelines, WCAG 2.2 a SEO checklistu:
kontrasty splňují AA, formulář hlásí chyby inline a fokusuje první chybné pole,
strukturovaná data obsahují `Dentist` i `FAQPage`.
