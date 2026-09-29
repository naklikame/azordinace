import { klinika } from "@/content/klinika";

/**
 * Strukturovaná data pro vyhledávače. Vykresluje se jako `<script>`
 * s JSON-LD — vyhledávače ho čtou, návštěvník o něm neví.
 */
export function StrukturovanaData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Identita ordinace, na kterou se podstránky odkazují místo vlastní kopie. */
export const IDENTITA_KLINIKY = `${klinika.web}/#klinika`;

type Drobecek = { nazev: string; cesta: string };

/**
 * Drobečková navigace pro vyhledávače. Na stránce ji nevykreslujeme —
 * podstránky mají odkaz „Zpět“ a hlavičku, další lišta by byla navíc.
 * Google ji používá k zobrazení cesty ve výsledcích hledání.
 */
export function drobecky(polozky: Drobecek[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ nazev: "Úvod", cesta: "/" }, ...polozky].map(
      (p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.nazev,
        item: `${klinika.web}${p.cesta}`,
      }),
    ),
  };
}
