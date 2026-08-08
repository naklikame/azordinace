import Image from "next/image";

type Props = {
  /** Cesta k souboru v `public/`. Prázdná hodnota vykreslí zástupný rámeček. */
  src: string;
  alt: string;
  /** Popisek zástupného rámečku — ať je jasné, jaká fotka sem patří. */
  napoveda: string;
  className?: string;
  /** `contain` pro výřezy postav s průhledným pozadím, `cover` pro fotky. */
  dopad?: "cover" | "contain";
  pozice?: string;
  priority?: boolean;
  sizes?: string;
};

export function Foto({
  src,
  alt,
  napoveda,
  className = "",
  dopad = "cover",
  pozice = "center",
  priority = false,
  sizes = "100vw",
}: Props) {
  // `fill` potřebuje polohovaného rodiče. Vlastní `relative` ale přidáváme jen
  // tehdy, když si volající nepolohuje obal sám — jinak by se obě třídy praly
  // a vyhrálo by `relative`, čímž by obal přišel o výšku.
  const poloha = /\b(absolute|fixed|sticky|relative)\b/.test(className)
    ? ""
    : "relative";

  if (!src) {
    return (
      <div
        role="img"
        aria-label={`Připraveno pro fotografii: ${napoveda}`}
        className={`grid place-items-center border-2 border-dashed border-sand-300 bg-sand-100/80 p-6 text-center ${className}`}
      >
        <span className="max-w-[18ch] text-sm font-medium text-ink-soft">
          {napoveda}
        </span>
      </div>
    );
  }

  return (
    <div className={`${poloha} overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={dopad === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: pozice }}
      />
    </div>
  );
}
