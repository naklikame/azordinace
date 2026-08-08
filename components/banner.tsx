import { banner, fotky, klinika } from "@/content/klinika";
import { Foto } from "@/components/foto";
import { SipkaIcon, TelefonIcon } from "@/components/icons";

const telHref = `tel:${klinika.telefon.replace(/\s/g, "")}`;

export function Banner() {
  return (
    <section className="px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
      <div className="reveal relative mx-auto flex min-h-[24rem] max-w-7xl overflow-hidden rounded-4xl lg:min-h-[26rem]">
        <Foto
          src={fotky.banner}
          alt=""
          napoveda="Pásový snímek z ordinace, na šířku 1600 × 685 px"
          className="absolute inset-0"
          pozice="center 40%"
          sizes="100vw"
        />

        {/* Přechod drží text čitelný: na mobilu zdola, na širokém displeji zprava */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-brand-900/25 lg:bg-gradient-to-l lg:from-brand-900 lg:via-brand-900/85 lg:to-transparent"
        />

        <div className="relative mt-auto w-full p-8 text-white sm:p-12 lg:ml-auto lg:mt-0 lg:flex lg:max-w-[36rem] lg:flex-col lg:justify-center lg:p-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            {banner.stitek}
          </span>

          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-black leading-[0.98] tracking-tight">
            {banner.nadpis}
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-brand-50">
            {banner.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={banner.ctaOdkaz}
              className="stisk group inline-flex items-center gap-3 rounded-full bg-accent-700 py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-accent-800"
            >
              {banner.cta}
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full bg-white text-accent-700 transition-transform group-hover:translate-x-0.5"
              >
                <SipkaIcon className="size-4" />
              </span>
            </a>

            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold tabular-nums transition-colors hover:border-white/70"
            >
              <TelefonIcon className="size-4" />
              {klinika.telefon}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
