/**
 * Veškerý obsah webu na jednom místě.
 * Údaje pocházejí z původního webu zubniordinace-az.cz a z tištěné vizitky.
 */

export const klinika = {
  nazev: "Zubní ordinace AZ",
  podtitul: "Praha 5 – Smíchov",
  slogan: "Léčíme bez bolesti a strachu",
  perex:
    "Zubní ordinace na Smíchově, pět minut od Anděla. Pečujeme o dospělé i děti v klidu, srozumitelně a bez zbytečné bolesti.",

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
    "Parkování zdarma přímo v ulici mimo rezidentní (modrou) zónu",
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
  /** Podklad hero sekce — bílá plocha vlevo, lékařka uprostřed, panel vpravo. */
  heroPozadi: "/fotky/hero-pozadi.jpg",
  /** Portrét lékařky pro mobilní rozvržení, kde se podklad neuplatní. */
  heroPostava: "/fotky/person1.jpg",
  /** Tři portréty do skupinky avatarů v sekci s prohlášením, čtvercové. */
  tymAvatary: ["", "", ""] as string[],
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
    "Pečujeme o dospělé i děti na Smíchově. Vysvětlíme, co vás čeká, a nikam nespěcháme.",
  cta: "Objednat se",
  ctaVedlejsi: "Služby a ceník",

  panelNadpis: "Každý pacient má svoje tempo",
  panelText:
    "Pracujeme s moderním vybavením a kvalitními materiály. Prohlídku, snímek i umrtvení přitom hradí pojišťovna, nedoplácíte nic.",

  /** Plovoucí štítky nad fotkou. */
  stitky: ["Bez bolesti", "Klidné tempo", "Moderní vybavení"],
} as const;

/**
 * Vycentrované prohlášení pod hero sekcí. Nadpis se skládá ze tří částí,
 * mezi které se vkládají pilulky s ikonou a s portréty týmu.
 */
export const manifest = {
  stitek: "Zubní ordinace AZ",
  nadpisCast1: "Moderní vybavení má smysl",
  nadpisCast2: "jen tehdy, když za ním stojí lidé, se kterými se pacient",
  nadpisCast3: "cítí v bezpečí.",
  perexPred: "Většina lidí, co k nám přijde, má za sebou",
  perexTucne: "špatnou zkušenost odjinud",
  perexPo:
    ". Proto vždycky začneme tím, že si vás vyslechneme. Teprve potom se sedá do křesla.",
  cta: "Poznejte naše ordinace",
  ctaOdkaz: "#ordinace",
} as const;

/** Pásový banner nad ceníkem. */
export const banner = {
  stitek: "Nové registrace",
  nadpis: "Přijímáme nové pacienty",
  text: "Dospělé, děti i seniory. Termíny máme flexibilní, takže se na první prohlídku dostanete bez dlouhého čekání.",
  cta: "Objednat se",
  ctaOdkaz: "#objednat",
} as const;

/** Sekce „Proč si vybrat nás“ — panel s fotkou vlevo, čísla vpravo. */
export const procNas = {
  nadpisRadky: ["Proč právě", "k nám"],
  podtitul: "Čtyři věci, kvůli kterým se k nám pacienti vracejí",

  /** Plovoucí štítky nad fotkou. */
  stitky: ["Bez bolesti", "Děti i dospělí", "Moderní vybavení"],

  stitekVlevo: "Výhody",
  stitekVpravo: "V číslech",

  vyhody: [
    {
      hodnota: "8",
      nazev: "oborů pod jednou střechou",
      popis:
        "Prevence, hygiena, plomby, kanálky, korunky, chirurgie, bělení i péče o děti. Na nic vás neposíláme jinam.",
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
        "Vstupní i preventivní prohlídka, RTG snímek a lokální umrtvení jsou plně hrazené z pojištění.",
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
      "Nejlevnější ošetření je to, které nemusíte podstoupit. Na prohlídce najdeme kaz dřív, než se ozve, a pojišťovna ji hradí celou.",
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
      "Kartáček se ke všemu nedostane. Sundáme zubní kámen i pigmentace z kávy a čaje a ukážeme vám, jak si doma poradit sami.",
    body: [
      "Odstranění kamene a povlaku",
      "Nácvik čištění na vašich zubech",
      "Doporučení pomůcek na míru",
    ],
    ikona: "jiskra",
  },
  {
    id: "zachovna",
    nazev: "Záchovná stomatologie",
    popis:
      "Bílé fotokompozitní výplně, které ve tváři nepoznáte. Pracujeme v umrtvení, které hradí pojišťovna, takže ošetření prakticky neucítíte.",
    body: [
      "Bílé fotokompozitní výplně",
      "Ošetření zubního kazu",
      "Umrtvení hrazené pojišťovnou",
    ],
    ikona: "zub",
  },
  {
    id: "endodoncie",
    nazev: "Endodontické ošetření",
    popis:
      "Když se kaz dostane až k nervu, ještě není konec. Kanálky vyčistíme, vydezinfikujeme a zaplníme. Zub vám zůstane.",
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
    popis:
      "Pro chvíle, kdy zub chybí nebo z něj mnoho nezbylo. Korunky metalokeramické i celokeramické, inlaye a onlaye z materiálu Nexco.",
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
    popis:
      "Někdy zub zachránit nejde. I tak platí, že dopředu víte, co se bude dít, jak dlouho to potrvá a jak se pak o ránu postarat.",
    body: [
      "Extrakce zubů",
      "Drobné chirurgické zákroky",
      "Vždy v lokálním umrtvení",
    ],
    ikona: "chirurgie",
  },
  {
    id: "beleni",
    nazev: "Bělení zubů",
    popis:
      "Zesvětlení skloviny o několik odstínů. Nejdřív zkontrolujeme zuby i dásně, na zdravém podkladu totiž výsledek vydrží mnohem déle.",
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
    popis:
      "První návštěva rozhodne o všech dalších. Dítě si může všechno prohlédnout, na nic netlačíme a nikdo nikam nespěchá.",
    body: [
      "Prohlídky a ošetření dětí",
      "Bez stresu a bez spěchu",
      "Poradenství pro rodiče",
    ],
    ikona: "dite",
  },
];

export type ClenTymu = {
  id: string;
  jmeno: string;
  titul: string;
  role: "lekarka" | "sestra";
  specializace: string;
  bio: string;
  iniciialy: string;
  /** Portrét na výšku, 600 × 800 px. Prázdné = zástupný rámeček s iniciálami. */
  foto: string;
};

export const tym: ClenTymu[] = [
  {
    id: "azarkevich",
    jmeno: "Alexandra Azarkevich",
    titul: "MUDr.",
    role: "lekarka",
    specializace: "Zubní lékařka",
    bio: "Vede ordinaci na Smíchově. Ošetřuje dospělé i děti a zakládá si na tom, aby z křesla nikdo neodcházel s nepříjemným pocitem.",
    iniciialy: "AA",
    foto: "",
  },
  {
    id: "housova",
    jmeno: "Jana Housová",
    titul: "MUDr.",
    role: "lekarka",
    specializace: "Zubní lékařka",
    bio: "Stará se o pacienty napříč obory, od preventivních prohlídek přes výplně až po korunky. V klidu vysvětlí i to, na co jste se báli zeptat.",
    iniciialy: "JH",
    foto: "",
  },
  {
    id: "lobodasova",
    jmeno: "Jiřina Lobodášová",
    titul: "",
    role: "sestra",
    specializace: "Zdravotní sestra",
    bio: "Zvedne telefon, domluví termín a je s vámi i v ordinaci. Díky ní návštěva odsýpá a nikdo nebloudí.",
    iniciialy: "JL",
    foto: "",
  },
  {
    id: "babadzanjan",
    jmeno: "Lena Babadžanjan",
    titul: "",
    role: "sestra",
    specializace: "Zdravotní sestra",
    bio: "Postará se o vás od příchodu až po domluvení další kontroly a asistuje při ošetření.",
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
  popis: string;
  /** Odkazy do seznamu `sluzby` — na co se ordinace zaměřuje. */
  zamereni: string[];
};

/**
 * ⚠️ K OVĚŘENÍ U KLIENTA
 * Klient zadal, že ordinace jsou dvě a že má být vidět, kdo v které ordinuje,
 * ale neuvedl, která lékařka a která sestra patří kam. Přiřazení níž je
 * pracovní domněnka a než web půjde živě, musí ho klient potvrdit.
 *
 * Nepotvrzené je zatím také:
 *  - zda obě ordinace sídlí na stejné adrese (texty proto o adrese mlčí
 *    a podstránky zobrazují adresu kliniky),
 *  - zda mají shodnou otevírací dobu (teď sdílejí dobu celé kliniky),
 *  - zaměření jednotlivých ordinací.
 */
export const ordinace: Ordinace[] = [
  {
    id: "ordinace-1",
    nazev: "Ordinace I",
    poradi: "01",
    lekarId: "azarkevich",
    sestraId: "lobodasova",
    perex: "Komplexní péče o dospělé i děti",
    popis:
      "Ordinace MUDr. Alexandry Azarkevich. Vezme si vás od vstupní prohlídky přes výplně až po korunky a chirurgické zákroky. U dětí si dá záležet, aby první návštěva nebyla ta poslední.",
    zamereni: ["prevence", "zachovna", "endodoncie", "chirurgie", "deti"],
  },
  {
    id: "ordinace-2",
    nazev: "Ordinace II",
    poradi: "02",
    lekarId: "housova",
    sestraId: "babadzanjan",
    perex: "Prevence, protetika a estetika",
    popis:
      "Ordinace MUDr. Jany Housové. Zaměřuje se na prevenci a dentální hygienu, protetické práce a bělení. Dbá na to, aby vám dopředu srozumitelně vysvětlila, co a proč se bude dít.",
    zamereni: ["prevence", "hygiena", "protetika", "beleni"],
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
      { vykon: "Aplikace lokální anestezie", cena: "hrazeno ZP" },
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
      "Ano, s VZP (111), ZP MV ČR (211), OZP (207), VoZP (201) a RBP (213). Vstupní i preventivní prohlídka, RTG snímek a lokální umrtvení jsou hrazené v plné výši. Doplácí se jen nadstandardní materiály a estetické výkony.",
  },
  {
    otazka: "Jak se k vám dostanu?",
    odpoved:
      "Najdete nás na adrese Ke Koulce 1704/6, Praha 5 – Smíchov. Od metra B Anděl je to pět minut pěšky, zastávky tramvají Křížová a Braunova i autobusů 231 a 120 máte do padesáti metrů. Zaparkovat můžete zdarma v ulici mimo rezidentní zónu.",
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
      "Nejste sami a není to nic, za co byste se měli stydět. Dopředu vám řekneme, co se bude dít, umrtvíme dostatečně a domluvíme se na signálu, kterým si kdykoli řeknete o přestávku.",
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
