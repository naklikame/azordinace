"use server";

export type StavObjednavky = {
  stav: "necinny" | "uspech" | "chyba";
  zprava?: string;
  chyby?: Record<string, string>;
};

const TELEFON = /^(\+?\d{1,3}[\s-]?)?(\d[\s-]?){9,12}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function odeslatObjednavku(
  _predchozi: StavObjednavky,
  formData: FormData,
): Promise<StavObjednavky> {
  const jmeno = String(formData.get("jmeno") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const sluzba = String(formData.get("sluzba") ?? "").trim();
  const termin = String(formData.get("termin") ?? "").trim();
  const zprava = String(formData.get("zprava") ?? "").trim();
  const souhlas = formData.get("souhlas");

  const chyby: Record<string, string> = {};

  if (jmeno.length < 2) {
    chyby.jmeno = "Vyplňte prosím jméno a příjmení.";
  }
  if (!TELEFON.test(telefon.replace(/\s/g, ""))) {
    chyby.telefon = "Zadejte telefon ve tvaru +420 123 456 789.";
  }
  if (!EMAIL.test(email)) {
    chyby.email = "Zadejte platnou e-mailovou adresu.";
  }
  if (!sluzba) {
    chyby.sluzba = "Vyberte, o jaké ošetření máte zájem.";
  }
  if (termin) {
    const zvoleny = new Date(termin);
    const dnes = new Date();
    dnes.setHours(0, 0, 0, 0);
    if (Number.isNaN(zvoleny.getTime()) || zvoleny < dnes) {
      chyby.termin = "Zvolte prosím datum v budoucnosti.";
    }
  }
  if (!souhlas) {
    chyby.souhlas = "Bez souhlasu se zpracováním údajů nemůžeme objednávku přijmout.";
  }

  if (Object.keys(chyby).length > 0) {
    return {
      stav: "chyba",
      zprava: "Zkontrolujte prosím označená pole.",
      chyby,
    };
  }

  // TODO: Napojení na reálný kanál — odeslání e-mailu recepci (Resend, SMTP)
  // nebo zápis do rezervačního systému. Data jsou zvalidovaná a připravená:
  void { jmeno, telefon, email, sluzba, termin, zprava };

  return {
    stav: "uspech",
    zprava:
      "Děkujeme, objednávku máme. Ozveme se vám telefonicky a domluvíme termín.",
  };
}
