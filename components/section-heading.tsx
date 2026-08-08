type Props = {
  stitek: string;
  /** Volitelný protějšek vpravo nad linkou — např. počet položek. */
  stitekVpravo?: string;
  nadpis: string;
  popis?: string;
  /** Na tmavém podkladu potřebujeme obrácený kontrast textu. */
  varianta?: "svetla" | "tmava";
};

export function SectionHeading({
  stitek,
  stitekVpravo,
  nadpis,
  popis,
  varianta = "svetla",
}: Props) {
  const tmava = varianta === "tmava";

  return (
    <div className="reveal">
      <div
        className={`flex items-baseline justify-between gap-4 border-b pb-4 ${
          tmava ? "border-white/20" : "border-sand-200"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            tmava ? "text-brand-200" : "text-brand-700"
          }`}
        >
          {stitek}
        </span>
        {stitekVpravo && (
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              tmava ? "text-brand-200" : "text-brand-700"
            }`}
          >
            {stitekVpravo}
          </span>
        )}
      </div>

      <h2
        className={`mt-8 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.25rem)] font-black leading-[0.98] tracking-tight ${
          tmava ? "text-white" : "text-ink"
        }`}
      >
        {nadpis}
      </h2>

      {popis && (
        <p
          className={`mt-5 max-w-xl leading-relaxed ${
            tmava ? "text-brand-100" : "text-ink-soft"
          }`}
        >
          {popis}
        </p>
      )}
    </div>
  );
}
