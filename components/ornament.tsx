/**
 * Tichá ozdobná vrstva na pozadí celého webu. Vychází ze siluety zubu
 * ze značky, jen v obrysu a v odstínu, který se dá spíš tušit než číst.
 *
 * Leží napevno pod obsahem (`fixed`), takže se při scrollování nehýbe
 * a obsah přes ni plyne. Nezasahuje do rozvržení ani do přístupnosti.
 */

const ZUB =
  "M12 5.2c-1.6-1.3-3.2-1.9-4.7-1.6C5.2 4 4 5.9 4 8.6c0 2.3.5 4 1.1 6.2.5 1.8.8 3.4 1.1 4.6.2 1 .8 1.6 1.5 1.6.8 0 1.3-.6 1.5-1.7l.6-3.2c.2-1 .7-1.5 1.4-1.5h1.6c.7 0 1.2.5 1.4 1.5l.6 3.2c.2 1.1.7 1.7 1.5 1.7.7 0 1.3-.6 1.5-1.6.3-1.2.6-2.8 1.1-4.6.6-2.2 1.1-3.9 1.1-6.2 0-2.7-1.2-4.6-3.3-5-1.5-.3-3.1.3-4.7 1.6Z";

type Kus = {
  trida: string;
  tloustka: number;
  natoceni: number;
  doba: string;
};

const kusy: Kus[] = [
  {
    trida:
      "-right-[10%] top-[4%] w-[42rem] max-w-[80vw] text-brand-300/45",
    tloustka: 0.3,
    natoceni: 14,
    doba: "34s",
  },
  {
    trida:
      "-left-[14%] top-[52%] w-[34rem] max-w-[70vw] text-brand-300/35",
    tloustka: 0.35,
    natoceni: -18,
    doba: "42s",
  },
  {
    trida:
      "-right-[4%] bottom-[4%] w-[26rem] max-w-[55vw] text-brand-300/30",
    tloustka: 0.4,
    natoceni: 8,
    doba: "38s",
  },
];

export function Ornament() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {kusy.map((kus, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={kus.tloustka}
          strokeLinejoin="round"
          style={{
            rotate: `${kus.natoceni}deg`,
            animationDuration: kus.doba,
            animationDelay: `-${i * 7}s`,
          }}
          className={`ornament absolute ${kus.trida}`}
        >
          <path d={ZUB} />
        </svg>
      ))}
    </div>
  );
}
