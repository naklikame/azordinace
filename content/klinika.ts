/**
 * Veškerý obsah webu na jednom místě.
 *
 * Kontakty, ordinační dobu, seznam služeb a reference přebíráme z původního
 * webu zubniordinace-az.cz a z tištěné vizitky. Ceník je proti němu nový —
 * dodal ho klient a s částkami na starém webu se neshoduje, takže se podle
 * něj neopravuje.
 */

export const klinika = {
  nazev: "Zubní ordinace AZ",
  podtitul: "Praha 5 – Smíchov",
  perex:
    "Zubní ordinace na Smíchově, pět minut od Anděla. Pečujeme o dospělé i děti a máme smlouvu s pěti pojišťovnami.",

  /** Provozovatel — fakturační údaje. */
  provozovatel: "OZAN centrum s.r.o.",
  ico: "08375682",
  sidlo: "Velké Kunratické 1308/14, 148 00 Praha 4 – Kunratice",

  adresa: {
    ulice: "Ke Koulce 1704/6",
    mesto: "Praha 5 – Smíchov",
    psc: "150 00",
    zeme: "Česká republika",
  },
  telefon: "+420 774 597 161",
  telefonPevny: "+420 251 553 401",
  email: "info@zubniordinace-az.cz",
  web: "https://www.zubniordinace-az.cz",

  /** Ověřeno geokódováním adresy Ke Koulce 1704/6. */
  mapa: {
    lat: 50.06203,
    lng: 14.40423,
  },

  doprava: [
    "Metrem B na stanici Anděl, odtud 5 minut pěšky",
    "Tramvají do zastávky Křížová nebo Braunova, do 50 m od ordinace",
    "Autobusem 231 do zastávky Ke Koulce nebo Křížová, autobusem 120 do zastávky Křížová",
    "Blízko Smíchovského nádraží i městského okruhu, dobře dostupné i ze Středočeského kraje",
    "Parkování je možné přímo v ulici",
  ],

  otviraciDoba: [
    { den: "Pondělí", cas: "8:00 – 17:00" },
    { den: "Úterý", cas: "7:00 – 14:00" },
    { den: "Středa", cas: "8:00 – 17:00" },
    { den: "Čtvrtek", cas: "7:00 – 14:00" },
    { den: "Pátek", cas: "8:00 – 14:00" },
    { den: "Sobota", cas: "Zavřeno" },
    { den: "Neděle", cas: "Zavřeno" },
  ],

  pojistovny: ["VZP 111", "ZP MV ČR 211", "OZP 207", "VoZP 201", "RBP 213"],

} as const;

/**
 * Fotografie. Nahrajte svoje soubory do složky `public/fotky/` a doplňte
 * sem cestu. Dokud je hodnota prázdná, zobrazí se zástupný rámeček s rozměrem.
 */
export const fotky = {
  /**
   * Snímek ordinace do hero sekce — na šířku, poměr 4:3. Převzato z galerie
   * na původním webu zubniordinace-az.cz.
   */
  heroOrdinace: "/fotky/ordinace-hero.jpg" as string,
  /** Snímek do sekce „Proč si vybrat nás“ — na šířku, poměr 1,6:1. */
  procNasSnimek: "/fotky/proc-nas.jpg",
  /**
   * Pásový banner nad ceníkem — na šířku, poměr 21:9.
   * Vlastní fotka ordinace z galerie na zubniordinace-az.cz.
   */
  banner: "/fotky/banner-ordinace.jpg",
} as const;

/** Obsah hero sekce — velký nadpis se láme přesně podle těchto řádků. */
export const hero = {
  stitekNahore: "Přijímáme nové pacienty, včetně dětí a seniorů",
  nadpisRadky: ["Moderní péče", "o vaše zuby"],
  perex:
    "Zubní ordinace pro dospělé i děti na Smíchově, pět minut pěšky od Anděla.",
  cta: "Objednat se",
  ctaVedlejsi: "Služby a ceník",
} as const;

/** Pásový banner nad ceníkem. */
export const banner = {
  stitek: "Nové registrace",
  nadpis: "Přijímáme nové pacienty",
  text: "Registrujeme dospělé, děti i seniory. Vstupní prohlídku včetně RTG hradí pojišťovna.",
  cta: "Objednat se",
  ctaOdkaz: "#objednat",
} as const;

/** Sekce „Proč si vybrat nás“ — panel s fotkou vlevo, čísla vpravo. */
export const procNas = {
  nadpisRadky: ["Proč právě", "k nám"],
  podtitul: "Obory, pojišťovny, ceny a dostupnost",

  stitekVlevo: "Výhody",
  stitekVpravo: "V číslech",

  vyhody: [
    {
      hodnota: "8",
      nazev: "oborů pod jednou střechou",
      popis: "Od prevence po základní chirurgii.",
    },
    {
      hodnota: "5",
      nazev: "smluvních pojišťoven",
      popis:
        "VZP, ZP MV ČR, OZP, VoZP a RBP. Co hradí pojišťovna, u nás nedoplácíte ani korunu.",
    },
    {
      hodnota: "0 Kč",
      nazev: "za preventivní prohlídku",
      popis:
        "Vstupní i preventivní prohlídka, RTG snímek a lokální anestézie jsou plně hrazené z pojištění.",
    },
    {
      hodnota: "5 min",
      nazev: "pěšky od Anděla",
      popis:
        "Tramvaj i autobus máte padesát metrů od dveří. Zaparkovat se dá zdarma hned v ulici.",
    },
  ],
} as const;

export type Sluzba = {
  id: string;
  nazev: string;
  popis: string;
  body: string[];
  ikona:
    | "zub"
    | "stit"
    | "jiskra"
    | "kanalek"
    | "implantat"
    | "chirurgie"
    | "dite";
};

export const sluzby: Sluzba[] = [
  {
    id: "prevence",
    nazev: "Preventivní prohlídka",
    popis:
      "Najdeme kaz dřív, než se ozve. Prohlídka hrazená pojišťovnou.",
    body: [
      "Vstupní i preventivní prohlídka hrazená pojišťovnou",
      "RTG snímek hrazený pojišťovnou",
      "Jasné doporučení, co dál",
    ],
    ikona: "stit",
  },
  {
    id: "hygiena",
    nazev: "Dentální hygiena",
    popis:
      "Odstraníme zubní kámen i pigmentace, na které kartáček nestačí.",
    body: [
      "Odstranění kamene a povlaku",
      "Nácvik čištění na vašich zubech",
      "Individuální doporučení zubních pomůcek pro domácí péči",
    ],
    ikona: "jiskra",
  },
  {
    id: "zachovna",
    nazev: "Záchovná stomatologie",
    popis: "Kvalitní, estetické, fotokompozitní výplně.",
    body: [
      "Bílé fotokompozitní výplně",
      "Ošetření zubního kazu",
      "Lokální anestézie hrazená pojišťovnou",
    ],
    ikona: "zub",
  },
  {
    id: "endodoncie",
    nazev: "Endodontické ošetření",
    popis:
      "Když se kaz dostane až k nervu, zub se dá pořád zachránit.",
    body: [
      "Ošetření kořenových kanálků",
      "Definitivní plnění kanálků",
      "Záchrana zubu místo trhání",
    ],
    ikona: "kanalek",
  },
  {
    id: "protetika",
    nazev: "Stomatologická protetika",
    popis: "Náhrada zubu, který chybí nebo z něj mnoho nezbylo.",
    body: [
      "Metalokeramické a celokeramické korunky",
      "Inlaye a onlaye z materiálu Nexco",
      "Náhrady chybějících zubů",
    ],
    ikona: "implantat",
  },
  {
    id: "chirurgie",
    nazev: "Stomatologická chirurgie",
    popis: "Extrakce a drobné zákroky tam, kde zub zachránit nejde.",
    body: [
      "Extrakce zubů",
      "Drobné chirurgické zákroky",
      "Vždy v lokální anestézii",
    ],
    ikona: "chirurgie",
  },
  {
    id: "beleni",
    nazev: "Bělení zubů",
    popis:
      "Zesvětlení skloviny o několik odstínů, vždy až po kontrole zubů a dásní.",
    body: [
      "Kontrola zubů a dásní předem",
      "Šetrné bělení skloviny",
      "Rady, jak odstín udržet",
    ],
    ikona: "jiskra",
  },
  {
    id: "deti",
    nazev: "Dětská stomatologie",
    popis: "Prohlídky a ošetření dětí od prvních zubů.",
    body: ["Prohlídky a ošetření dětí", "Poradenství pro rodiče"],
    ikona: "dite",
  },
];

export type ClenTymu = {
  id: string;
  jmeno: string;
  titul: string;
  role: "lekarka" | "sestra";
  iniciialy: string;
  /** Portrét na výšku, 600 × 800 px. Prázdné = zástupný rámeček s iniciálami. */
  foto: string;
};

/** Popis role do strukturovaných dat. Na stránce se neukazuje. */
export const nazevRole: Record<ClenTymu["role"], string> = {
  lekarka: "Zubní lékařka",
  sestra: "Zdravotní sestra",
};

export const tym: ClenTymu[] = [
  {
    id: "navratilova",
    jmeno: "Alexandra Navrátilová",
    titul: "MUDr.",
    role: "lekarka",
    iniciialy: "AN",
    foto: "",
  },
  {
    id: "housova",
    jmeno: "Jana Housová",
    titul: "MUDr.",
    role: "lekarka",
    iniciialy: "JH",
    foto: "",
  },
  {
    /** Sestra je jedna a pracuje pro obě ordinace. */
    id: "babadzanjan",
    jmeno: "Lena Babadžanjan",
    titul: "",
    role: "sestra",
    iniciialy: "LB",
    foto: "",
  },
];

export function clenTymu(id: string): ClenTymu {
  const clen = tym.find((c) => c.id === id);
  if (!clen) throw new Error(`Člen týmu "${id}" v seznamu tym neexistuje.`);
  return clen;
}

export type Ordinace = {
  /** Zároveň slouží jako adresa podstránky: /ordinace/<id> */
  id: string;
  nazev: string;
  poradi: string;
  lekarId: string;
  sestraId: string;
  perex: string;
  /**
   * Snímky na šířku, poměr 4:3. První slouží jako náhled v přehledu
   * ordinací, podstránka ukazuje všechny.
   */
  fotky: Snimek[];
};

export type Snimek = {
  src: string;
  /** Popisek pod snímkem a zároveň alternativní text. */
  popis: string;
};

/** Čekárna je společná, klient ji chtěl u obou ordinací. */
const cekarna: Snimek = { src: "/fotky/cekarna.jpg", popis: "Čekárna" };

/**
 * ⚠️ K OVĚŘENÍ U KLIENTA
 * Klient zadal, že ordinace jsou dvě a že má být vidět, kdo v které ordinuje,
 * ale neuvedl, která lékařka a která sestra patří kam. Přiřazení níž je
 * pracovní domněnka a než web půjde živě, musí ho klient potvrdit.
 *
 * Nepotvrzené je zatím také:
 *  - zda obě ordinace sídlí na stejné adrese (texty proto o adrese mlčí
 *    a podstránky zobrazují adresu kliniky),
 *  - zda mají shodnou otevírací dobu (teď sdílejí dobu celé kliniky).
 *
 * Fotky už klient přiřadil sám: růžové křeslo je Ordinace I (snímky
 * z galerie původního webu), modré Ordinace II (poslal je zvlášť).
 */
export const ordinace: Ordinace[] = [
  {
    id: "ordinace-1",
    nazev: "Ordinace I",
    poradi: "01",
    lekarId: "navratilova",
    sestraId: "babadzanjan",
    perex: "Komplexní péče o dospělé i děti",
    // Úvodní snímek z hero sekce není první, ať se na stránce neopakuje
    // hned dvakrát pod sebou.
    fotky: [
      { src: "/fotky/ordinace-1-a.jpg", popis: "Ordinace I" },
      { src: "/fotky/ordinace-hero.jpg", popis: "Ordinace I" },
      { src: "/fotky/ordinace-1-b.jpg", popis: "Ordinace I" },
      cekarna,
    ],
  },
  {
    id: "ordinace-2",
    nazev: "Ordinace II",
    poradi: "02",
    lekarId: "housova",
    sestraId: "babadzanjan",
    perex: "Komplexní péče o dospělé i děti",
    fotky: [
      { src: "/fotky/ordinace-2-a.jpg", popis: "Ordinace II" },
      { src: "/fotky/ordinace-2-b.jpg", popis: "Ordinace II" },
      { src: "/fotky/ordinace-2-c.jpg", popis: "Ordinace II" },
      cekarna,
    ],
  },
];

/** Ke členovi týmu dohledá ordinaci, ve které působí. */
export function ordinaceClena(clenId: string): Ordinace | undefined {
  return ordinace.find((o) => o.lekarId === clenId || o.sestraId === clenId);
}

export type CenikPolozka = {
  vykon: string;
  cena: string;
  poznamka?: string;
};

export type CenikSkupina = {
  skupina: string;
  polozky: CenikPolozka[];
};

export const cenik: CenikSkupina[] = [
  {
    skupina: "Hrazeno pojišťovnou",
    polozky: [
      { vykon: "Vstupní prohlídka", cena: "hrazeno ZP" },
      { vykon: "Preventivní prohlídka", cena: "hrazeno ZP" },
      { vykon: "Zhotovení RTG", cena: "hrazeno ZP" },
      { vykon: "Aplikace lokální anestézie", cena: "hrazeno ZP" },
    ],
  },
  {
    skupina: "Záchovná stomatologie",
    polozky: [
      {
        vykon: "Výplň fotokompozitní",
        cena: "od 1 135 – 2 300 Kč",
        poznamka: "dle rozsahu a lokalizace",
      },
      {
        vykon: "Výplň fotokompozitní bez pojišťovny",
        cena: "od 2 035 – 3 650 Kč",
        poznamka: "dle rozsahu a lokalizace",
      },
      {
        vykon: "Endodontické ošetření kořenových kanálků",
        cena: "od 2 140 Kč",
        poznamka: "za kanálek",
      },
      {
        vykon: "Definitivní plnění kořenových kanálků",
        cena: "od 1 650 Kč",
        poznamka: "za kanálek",
      },
    ],
  },
  {
    skupina: "Protetika",
    polozky: [
      { vykon: "Metalokeramická korunka", cena: "od 6 600 Kč" },
      { vykon: "Celokeramická korunka", cena: "od 7 800 Kč" },
      { vykon: "Inlay / onlay z materiálu Nexco", cena: "od 4 600 Kč" },
    ],
  },
  {
    skupina: "Prevence a hygiena",
    polozky: [{ vykon: "Dentální hygiena", cena: "od 1 920 Kč" }],
  },
];

export type Reference = {
  jmeno: string;
  text: string;
};

/** Hodnocení převzatá z původního webu zubniordinace-az.cz. */
export const reference: Reference[] = [
  {
    jmeno: "Tynus Novotná",
    text: "Veliká spokojenost. Krásné prostředí, paní doktorka velmi milá a opravdu pečlivá. Konečně jsem po několika letech našla profesionála. Určitě doporučuji!",
  },
  {
    jmeno: "Kate Moore",
    text: "Výborná ordinace! Odborná a velice příjemná paní doktorka. Vyřešila problémy celé rodiny s kazem, vstřícný přístup k pacientovi, všechno udělala podle přání rychle a kvalitně.",
  },
  {
    jmeno: "Radek Navrátil",
    text: "Profesionální přístup. Od vynikajícího zubaře se odchází bez bolesti, s úsměvem a po příchodu domů nic nebolí, a tak to umí právě zde. Krásné prostředí a hlavně ta péče, která si se spravováním zubů dává skutečně záležet.",
  },
  {
    jmeno: "Otto N.",
    text: "Velice vstřícná a schopná zubařka. Po zkušenostech u jiných zubařů se sem budu zaručeně vracet. Mohu jen doporučit.",
  },
];

export type FaqPolozka = { otazka: string; odpoved: string };

export const faq: FaqPolozka[] = [
  {
    otazka: "Máte smlouvu se zdravotními pojišťovnami?",
    odpoved:
      "Ano, s VZP (111), ZP MV ČR (211), OZP (207), VoZP (201) a RBP (213). Vstupní i preventivní prohlídka, RTG snímek a lokální anestézie jsou hrazené v plné výši. Doplácí se jen nadstandardní materiály a estetické výkony.",
  },
  {
    otazka: "Jak se k vám dostanu?",
    odpoved:
      "Najdete nás na adrese Ke Koulce 1704/6, Praha 5 – Smíchov. Od metra B Anděl je to pět minut pěšky, zastávky tramvají Křížová a Braunova i autobusů 231 a 120 máte do padesáti metrů. Parkování je možné přímo v ulici.",
  },
  {
    otazka: "Kdy ordinujete?",
    odpoved:
      "Pondělí a středa 8:00–17:00, úterý a čtvrtek 7:00–14:00, pátek 8:00–14:00. O víkendu máme zavřeno.",
  },
  {
    otazka: "Jak se objednám?",
    odpoved:
      "Nejrychleji telefonem na mobil +420 774 597 161 nebo na pevnou linku +420 251 553 401. Můžete taky vyplnit formulář na této stránce a my se ozveme zpátky.",
  },
  {
    otazka: "Co když mě zub rozbolí akutně?",
    odpoved:
      "Zajišťujeme pohotovostní služby. Zavolejte co nejdřív ráno na mobil +420 774 597 161, akutní bolest se snažíme vyřešit přednostně.",
  },
  {
    otazka: "Přijímáte nové pacienty?",
    odpoved:
      "Ano, registrujeme nové pacienty včetně dětí a seniorů. Stačí zavolat nebo vyplnit formulář na této stránce.",
  },
  {
    otazka: "Bojím se zubaře. Jak to řešíte?",
    odpoved:
      "Nejste sami a není to nic, za co byste se měli stydět. Dopředu vám řekneme, co se bude dít, dostatečně umrtvíme a domluvíme se na signálu, kterým si kdykoli řeknete o přestávku.",
  },
  {
    otazka: "Kde najdu kompletní ceník?",
    odpoved:
      "Na webu máme ceny nejčastějších výkonů. Kompletní ceník je k nahlédnutí přímo v ordinaci a konkrétní částku vám vždycky řekneme dřív, než začneme.",
  },
];

/** Otevírací doba převedená do schema.org formátu pro strukturovaná data. */
const dnySchema: Record<string, string> = {
  Pondělí: "Monday",
  Úterý: "Tuesday",
  Středa: "Wednesday",
  Čtvrtek: "Thursday",
  Pátek: "Friday",
};

export const otviraciDobaSchema = klinika.otviraciDoba
  .filter((d) => d.den in dnySchema && d.cas.includes("–"))
  .map((d) => {
    const [opens, closes] = d.cas.split("–").map((c) => c.trim());
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dnySchema[d.den],
      opens,
      closes,
    };
  });

/** Absolutní tvar, aby odkazy vedly správně i z /ordinace/… */
export const navigace = [
  { href: "/#ordinace", label: "Ordinace" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#cenik", label: "Ceník" },
  { href: "/#reference", label: "Reference" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;
