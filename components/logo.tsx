import type { SVGProps } from "react";

/** Silueta zubu z vizitky — plná plocha, ne obrys. */
const ZUB =
  "M12 5.2c-1.6-1.3-3.2-1.9-4.7-1.6C5.2 4 4 5.9 4 8.6c0 2.3.5 4 1.1 6.2.5 1.8.8 3.4 1.1 4.6.2 1 .8 1.6 1.5 1.6.8 0 1.3-.6 1.5-1.7l.6-3.2c.2-1 .7-1.5 1.4-1.5h1.6c.7 0 1.2.5 1.4 1.5l.6 3.2c.2 1.1.7 1.7 1.5 1.7.7 0 1.3-.6 1.5-1.6.3-1.2.6-2.8 1.1-4.6.6-2.2 1.1-3.9 1.1-6.2 0-2.7-1.2-4.6-3.3-5-1.5-.3-3.1.3-4.7 1.6Z";

/**
 * Značka kliniky: zub uvnitř kroužku, celé v `currentColor`.
 * Dekorativní — název ordinace stojí vedle loga jako text.
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="24"
        cy="24"
        r="21.2"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path d={ZUB} fill="currentColor" transform="translate(9.6 9.3) scale(1.2)" />
    </svg>
  );
}
