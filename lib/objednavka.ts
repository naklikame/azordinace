export type StavObjednavky = {
  stav: "necinny" | "uspech" | "chyba";
  zprava?: string;
  chyby?: Record<string, string>;
};

const TELEFON = /^(\+?\d{1,3}[\s-]?)?(\d[\s-]?){9,12}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Přístupový klíč z Web3Forms. Je veřejný (posílá se z prohlížeče), určuje jen,
 * na který e-mail zpráva dorazí — proto NEXT_PUBLIC_.
 */
const WEB3FORMS_KLIC = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/**
 * Odesílá se z prohlížeče, ne přes server action — Web3Forms na free plánu
 * požadavky ze serveru blokuje.
 */
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

  const selhani: StavObjednavky = {
    stav: "chyba",
    zprava:
      "Objednávku se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám zavolejte.",
  };

  if (!WEB3FORMS_KLIC) {
    console.error("Chybí NEXT_PUBLIC_WEB3FORMS_KEY, formulář nemá kam odeslat.");
    return selhani;
  }

  const terminCesky = termin
    ? new Date(termin).toLocaleDateString("cs-CZ")
    : "neuveden";

  try {
    const odpoved = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KLIC,
        subject: `Nová objednávka z webu: ${jmeno}`,
        from_name: "Web Zubní ordinace AZ",
        // Odpověď na e-mail z formuláře půjde rovnou pacientovi.
        replyto: email,
        // Honeypot proti botům — skryté pole, člověk ho nevyplní.
        botcheck: formData.get("botcheck") ? true : "",
        "Jméno": jmeno,
        Telefon: telefon,
        "E-mail": email,
        "Ošetření": sluzba,
        "Preferovaný termín": terminCesky,
        "Zpráva": zprava || "—",
      }),
    });
    const data = (await odpoved.json()) as { success?: boolean };
    if (!odpoved.ok || !data.success) return selhani;
  } catch {
    return selhani;
  }

  return {
    stav: "uspech",
    zprava:
      "Děkujeme, objednávku máme. Ozveme se vám telefonicky a domluvíme termín.",
  };
}
