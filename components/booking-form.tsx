"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { odeslatObjednavku, type StavObjednavky } from "@/app/actions";
import { sluzby } from "@/content/klinika";
import { CheckIcon } from "@/components/icons";

const pocatecniStav: StavObjednavky = { stav: "necinny" };

const poleTridy =
  "w-full rounded-xl border border-sand-400 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/85 focus-visible:border-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 aria-[invalid=true]:border-red-700";

function Odeslat() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="stisk w-full rounded-full bg-accent-700 px-7 py-4 font-semibold text-white transition-colors hover:bg-accent-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Odesíláme…" : "Odeslat objednávku"}
    </button>
  );
}

function Chyba({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-700">
      {text}
    </p>
  );
}

/** Pořadí polí ve formuláři — určuje, které chybné pole dostane fokus první. */
const poradiPoli = ["jmeno", "telefon", "email", "sluzba", "termin", "souhlas"];

export function BookingForm() {
  const [stav, akce] = useActionState(odeslatObjednavku, pocatecniStav);
  const chyby = stav.chyby ?? {};
  const formRef = useRef<HTMLFormElement>(null);

  // Po neúspěšném odeslání skoč na první chybné pole, ať ho uživatel nehledá.
  useEffect(() => {
    if (stav.stav !== "chyba" || !stav.chyby) return;

    const prvni = poradiPoli.find((pole) => stav.chyby?.[pole]);
    if (!prvni) return;

    formRef.current
      ?.querySelector<HTMLElement>(`#${prvni}`)
      ?.focus({ preventScroll: false });
  }, [stav]);

  if (stav.stav === "uspech") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-700 text-white">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-ink">
          Máme to
        </h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-soft">
          {stav.zprava}
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={akce} noValidate className="space-y-5">
      {stav.stav === "chyba" && stav.zprava && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {stav.zprava}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="jmeno" className="mb-1.5 block text-sm font-medium text-ink">
            Jméno a příjmení <span aria-hidden="true">*</span>
          </label>
          <input
            id="jmeno"
            name="jmeno"
            type="text"
            required
            autoComplete="name"
            placeholder="např. Jan Novák…"
            aria-invalid={Boolean(chyby.jmeno)}
            aria-describedby={chyby.jmeno ? "jmeno-chyba" : undefined}
            className={poleTridy}
          />
          <Chyba id="jmeno-chyba" text={chyby.jmeno} />
        </div>

        <div>
          <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon <span aria-hidden="true">*</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            spellCheck={false}
            placeholder="např. +420 123 456 789…"
            aria-invalid={Boolean(chyby.telefon)}
            aria-describedby={chyby.telefon ? "telefon-chyba" : undefined}
            className={poleTridy}
          />
          <Chyba id="telefon-chyba" text={chyby.telefon} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          E-mail <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          autoCapitalize="none"
          placeholder="např. jan.novak@email.cz…"
          aria-invalid={Boolean(chyby.email)}
          aria-describedby={chyby.email ? "email-chyba" : undefined}
          className={poleTridy}
        />
        <Chyba id="email-chyba" text={chyby.email} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sluzba" className="mb-1.5 block text-sm font-medium text-ink">
            Mám zájem o <span aria-hidden="true">*</span>
          </label>
          <select
            id="sluzba"
            name="sluzba"
            required
            defaultValue=""
            autoComplete="off"
            aria-invalid={Boolean(chyby.sluzba)}
            aria-describedby={chyby.sluzba ? "sluzba-chyba" : undefined}
            className={poleTridy}
          >
            <option value="" disabled>
              Vyberte ošetření
            </option>
            {sluzby.map((s) => (
              <option key={s.id} value={s.nazev}>
                {s.nazev}
              </option>
            ))}
            <option value="Akutní bolest">Akutní bolest</option>
            <option value="Nevím, potřebuji poradit">
              Nevím, potřebuji poradit
            </option>
          </select>
          <Chyba id="sluzba-chyba" text={chyby.sluzba} />
        </div>

        <div>
          <label htmlFor="termin" className="mb-1.5 block text-sm font-medium text-ink">
            Preferovaný termín
          </label>
          <input
            id="termin"
            name="termin"
            type="date"
            autoComplete="off"
            aria-invalid={Boolean(chyby.termin)}
            aria-describedby={
              chyby.termin ? "termin-chyba" : "termin-napoveda"
            }
            className={poleTridy}
          />
          <Chyba id="termin-chyba" text={chyby.termin} />
          {!chyby.termin && (
            <p id="termin-napoveda" className="mt-1.5 text-sm text-ink-soft">
              Nezávazné, konkrétní čas doladíme telefonicky.
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="zprava" className="mb-1.5 block text-sm font-medium text-ink">
          Zpráva pro nás
        </label>
        <textarea
          id="zprava"
          name="zprava"
          rows={4}
          autoComplete="off"
          placeholder="Co vás trápí, jestli něco bolí, nebo kdy se vám nejlíp hodí…"
          className={`${poleTridy} resize-y`}
        />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="souhlas"
            name="souhlas"
            type="checkbox"
            required
            aria-invalid={Boolean(chyby.souhlas)}
            aria-describedby={chyby.souhlas ? "souhlas-chyba" : undefined}
            className="mt-0.5 size-6 shrink-0 rounded border-sand-400 accent-brand-700"
          />
          <label htmlFor="souhlas" className="text-sm leading-relaxed text-ink-soft">
            Souhlasím se zpracováním osobních údajů za účelem vyřízení
            objednávky. <span aria-hidden="true">*</span>
          </label>
        </div>
        <Chyba id="souhlas-chyba" text={chyby.souhlas} />
      </div>

      <Odeslat />

      <p className="text-center text-sm text-ink-soft">
        Pole označená <span aria-hidden="true">*</span>
        <span className="sr-only">hvězdičkou</span> jsou povinná.
      </p>
    </form>
  );
}
