import Image from "next/image";
import { fotky, manifest, tym } from "@/content/klinika";
import { SipkaIcon, ZubIcon } from "@/components/icons";

/** Voštinový podklad — tessellace hexagonů, k okrajům se vytrácí maskou. */
function Vzor() {
  const R = 30;
  const w = Math.sqrt(3) * R;
  const stredy = [
    [0, 0],
    [w, 0],
    [0, 2 * R * 1.5],
    [w, 2 * R * 1.5],
    [w / 2, R * 1.5],
    [-w / 2, R * 1.5],
    [w * 1.5, R * 1.5],
  ];

  const hexagon = (cx: number, cy: number) =>
    [
      [cx, cy - R],
      [cx + w / 2, cy - R / 2],
      [cx + w / 2, cy + R / 2],
      [cx, cy + R],
      [cx - w / 2, cy + R / 2],
      [cx - w / 2, cy - R / 2],
    ]
      .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
      .join(" ");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]"
    >
      <svg className="size-full text-brand-300" role="presentation">
        <defs>
          <pattern
            id="vostina"
            width={w}
            height={R * 3}
            patternUnits="userSpaceOnUse"
          >
            {stredy.map(([cx, cy]) => (
              <polygon
                key={`${cx}-${cy}`}
                points={hexagon(cx, cy)}
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vostina)" />
      </svg>
    </div>
  );
}

/** Skupinka překrývajících se portrétů vsazená přímo do věty. */
function Avatary() {
  const portrety = fotky.tymAvatary.slice(0, 3);

  return (
    <span className="mx-1.5 inline-flex -space-x-2.5 align-middle">
      {portrety.map((src, i) => {
        const clen = tym[i];
        return src ? (
          <Image
            key={clen.jmeno}
            src={src}
            alt=""
            width={40}
            height={40}
            className="size-[1em] rounded-full object-cover ring-2 ring-white"
          />
        ) : (
          <span
            key={clen.jmeno}
            className="grid size-[1em] place-items-center rounded-full bg-brand-600 text-[0.34em] font-bold text-white ring-2 ring-white"
          >
            {clen.iniciialy}
          </span>
        );
      })}
    </span>
  );
}

export function Manifest() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-50 px-5 py-24 lg:py-32">
      <Vzor />

      <div className="reveal mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
          {manifest.stitek}
        </p>

        <h2 className="mt-10 text-[clamp(1.75rem,4.2vw,2.9rem)] font-medium leading-[1.28] tracking-tight text-ink">
          {manifest.nadpisCast1}
          <span className="mx-1.5 inline-grid size-[1.15em] place-items-center rounded-full bg-brand-600 align-middle text-white">
            <ZubIcon className="size-[0.62em]" />
          </span>
          {manifest.nadpisCast2}
          <Avatary />
          {manifest.nadpisCast3}
        </h2>

        <p className="mx-auto mt-8 max-w-lg text-[0.95rem] leading-relaxed text-ink-soft">
          {manifest.perexPred}{" "}
          <strong className="font-semibold text-ink">
            {manifest.perexTucne}
          </strong>
          {manifest.perexPo}
        </p>

        <a
          href={manifest.ctaOdkaz}
          className="stisk group mt-10 inline-flex items-center gap-3 rounded-full bg-accent-700 py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-accent-800"
        >
          {manifest.cta}
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-white text-accent-700 transition-transform group-hover:translate-x-0.5"
          >
            <SipkaIcon className="size-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
