/**
 * Plovoucí štítek nad fotkou. Používá ho hero sekce i „Proč právě k nám“,
 * proto stojí zvlášť — ať se chování ladí na jednom místě.
 */

/** Každý štítek se vznáší jinak dlouho a v jiné fázi, ať to nepůsobí strojově. */
const rytmus = [
  { doba: "7s", posun: "-1.2s" },
  { doba: "8.4s", posun: "-3.6s" },
  { doba: "6.3s", posun: "-5.1s" },
];

export function Stitek({ text, poradi = 0 }: { text: string; poradi?: number }) {
  const { doba, posun } = rytmus[poradi % rytmus.length];

  return (
    <span
      style={{ animationDuration: doba, animationDelay: posun }}
      className="bublina inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow-[0_8px_24px_-12px_rgba(17,33,43,0.55)] ring-1 ring-sand-200 backdrop-blur"
    >
      <span
        aria-hidden="true"
        className="bublina-tecka size-2 rounded-full bg-brand-600"
      />
      {text}
    </span>
  );
}
