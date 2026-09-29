/**
 * Právní dokumenty webu.
 *
 * ⚠️ NEJDE O PRÁVNÍ SLUŽBU
 * Texty níž jsou připravené podklady, které vycházejí z toho, co web
 * prokazatelně dělá (viz komentáře u jednotlivých bodů). Než půjdou živě,
 * musí je schválit někdo, kdo za to nese odpovědnost — ideálně advokát
 * se zkušeností se zdravotnickými poskytovateli. Zvlášť u zdravotnické
 * dokumentace jde o zvláštní kategorii údajů podle čl. 9 GDPR.
 *
 * ⚠️ K OVĚŘENÍ U KLIENTA (v textech označeno jako [DOPLNIT])
 *  - kdo je zpracovatelem e-mailu a hostingu a zda má uzavřenou
 *    zpracovatelskou smlouvu,
 *  - zda ordinace jmenovala pověřence pro ochranu osobních údajů,
 *  - konkrétní doby uchování zdravotnické dokumentace podle druhu záznamu,
 *  - zda se pořizují fotografie pacientů a na jakém základě.
 */

export type Blok =
  | { typ: "odstavec"; text: string }
  | { typ: "seznam"; polozky: string[] }
  | { typ: "ucely"; polozky: Ucel[] };

export type Ucel = {
  ucel: string;
  udaje: string;
  titul: string;
  doba: string;
};

export type Sekce = {
  nadpis: string;
  bloky: Blok[];
};

export type PravniDokument = {
  /** Zároveň adresa stránky: /<slug> */
  slug: string;
  nazev: string;
  /** Popis pro vyhledávače a pro odkaz v patičce. */
  popis: string;
  /** Datum poslední revize ve tvaru ISO. */
  aktualizovano: string;
  perex: string;
  sekce: Sekce[];
};

const SPRAVCE = "OZAN centrum s.r.o.";
const UOOU =
  "Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz";

/* ────────────────────────────────────────────────────────────────────────
   Ochrana osobních údajů
   ──────────────────────────────────────────────────────────────────────── */

export const ochranaUdaju: PravniDokument = {
  slug: "ochrana-osobnich-udaju",
  nazev: "Ochrana osobních údajů",
  popis:
    "Jaké osobní údaje Zubní ordinace AZ zpracovává, proč, jak dlouho a jaká máte práva.",
  aktualizovano: "2026-09-29",
  perex:
    "Zpracováváme osobní údaje pacientů i lidí, kteří se na nás obrátí přes web. Níž je popsané, o jaké údaje jde, proč je potřebujeme, jak dlouho je držíme a co s nimi můžete udělat.",
  sekce: [
    {
      nadpis: "Kdo údaje zpracovává",
      bloky: [
        {
          typ: "odstavec",
          text: `Správcem osobních údajů je ${SPRAVCE}, IČO 08375682, se sídlem Velké Kunratické 1308/14, 148 00 Praha 4 – Kunratice, provozovatel Zubní ordinace AZ na adrese Ke Koulce 1704/6, 150 00 Praha 5 – Smíchov.`,
        },
        {
          typ: "odstavec",
          text: "Ve věcech ochrany osobních údajů nás zastihnete na info@zubniordinace-az.cz nebo na telefonu +420 774 597 161.",
        },
        {
          typ: "odstavec",
          text: "Pověřence pro ochranu osobních údajů jsme nejmenovali. [DOPLNIT: ověřit — povinnost vzniká mimo jiné při rozsáhlém zpracování zvláštních kategorií údajů; u ordinace této velikosti se zpravidla neuplatní, ale je potřeba to potvrdit.]",
        },
      ],
    },
    {
      nadpis: "Co zpracováváme a proč",
      bloky: [
        {
          typ: "ucely",
          polozky: [
            {
              ucel: "Poskytování zdravotních služeb",
              udaje:
                "Jméno, datum narození, rodné číslo, kontaktní údaje, zdravotní pojišťovna a údaje o zdravotním stavu vedené ve zdravotnické dokumentaci.",
              titul:
                "Čl. 9 odst. 2 písm. h) GDPR — zpracování je nezbytné pro poskytování zdravotní péče. Povinnost vést dokumentaci ukládá zákon č. 372/2011 Sb., o zdravotních službách.",
              doba: "Po dobu stanovenou vyhláškou č. 98/2012 Sb., o zdravotnické dokumentaci. [DOPLNIT: konkrétní lhůty podle druhu záznamu.]",
            },
            {
              ucel: "Vyřízení objednávky z formuláře na webu",
              udaje:
                "Jméno a příjmení, telefon, e-mail, zvolené ošetření, případný preferovaný termín a text zprávy.",
              titul:
                "Čl. 6 odst. 1 písm. b) GDPR — kroky učiněné před uzavřením smlouvy na vaši žádost. Souhlas ve formuláři slouží k potvrzení, že jste s tímto zpracováním srozuměni.",
              doba: "Do vyřízení objednávky a domluvení termínu. Pokud se nestanete pacientem, údaje z formuláře smažeme nejpozději do 6 měsíců.",
            },
            {
              ucel: "Telefonická a e-mailová komunikace",
              udaje: "Telefonní číslo, e-mailová adresa a obsah zprávy.",
              titul:
                "Čl. 6 odst. 1 písm. f) GDPR — náš oprávněný zájem odpovědět na dotaz, který nám sami pošlete.",
              doba: "Po dobu komunikace a přiměřenou dobu po ní, nejdéle 1 rok.",
            },
            {
              ucel: "Účetnictví a vyúčtování péče",
              udaje:
                "Fakturační a platební údaje, údaje o provedených a vykázaných výkonech.",
              titul:
                "Čl. 6 odst. 1 písm. c) GDPR — plnění právních povinností podle daňových a účetních předpisů.",
              doba: "10 let od konce zdaňovacího období, kterého se doklad týká.",
            },
          ],
        },
        {
          typ: "odstavec",
          text: "Údaje o zdravotním stavu patří do zvláštní kategorie osobních údajů podle čl. 9 GDPR. Nakládají s nimi jen osoby vázané povinnou mlčenlivostí podle zákona o zdravotních službách.",
        },
      ],
    },
    {
      nadpis: "Komu údaje předáváme",
      bloky: [
        {
          typ: "odstavec",
          text: "Údaje nikomu neprodáváme ani je nepředáváme pro marketingové účely. Předat je můžeme jen v těchto případech:",
        },
        {
          typ: "seznam",
          polozky: [
            "Zdravotním pojišťovnám, se kterými máme smlouvu (VZP 111, ZP MV ČR 211, OZP 207, VoZP 201, RBP 213), a to v rozsahu nutném k vykázání a úhradě péče.",
            "Jiným poskytovatelům zdravotních služeb, pokud vás k nim odesíláme nebo pokud si vyžádají dokumentaci v souladu se zákonem.",
            "Zpracovatelům, kteří pro nás zajišťují provoz webu a e-mailu. [DOPLNIT: konkrétní poskytovatel hostingu a e-mailové schránky a potvrzení, že je s nimi uzavřena zpracovatelská smlouva podle čl. 28 GDPR.]",
            "Orgánům veřejné moci, pokud nám to ukládá zákon (například Státnímu ústavu pro kontrolu léčiv, krajskému úřadu nebo soudu).",
          ],
        },
        {
          typ: "odstavec",
          text: "Web je provozovaný na serverech poskytovatele hostingu. [DOPLNIT: uvést, zda dochází k předání do země mimo EU, a pokud ano, na jakém základě — například standardní smluvní doložky nebo rozhodnutí o odpovídající ochraně.]",
        },
      ],
    },
    {
      nadpis: "Co web sám o sobě sbírá",
      bloky: [
        {
          typ: "odstavec",
          text: "Tento web nepoužívá cookies, analytické nástroje ani reklamní skripty a neukládá nic do vašeho prohlížeče. Podrobně to rozebíráme na stránce o cookies.",
        },
        {
          typ: "odstavec",
          text: "Na stránce s kontakty je vložená mapa z OpenStreetMap. Jejím zobrazením se na servery OpenStreetMap Foundation přenese vaše IP adresa — bez toho by se mapa nenačetla. Vlastní zásady ochrany údajů má OpenStreetMap na osmfoundation.org.",
        },
        {
          typ: "odstavec",
          text: "Poskytovatel hostingu vede provozní záznamy o přístupech (IP adresa, čas, adresa stránky), které slouží k zajištění bezpečnosti a provozu. Náš oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR.",
        },
      ],
    },
    {
      nadpis: "Vaše práva",
      bloky: [
        {
          typ: "odstavec",
          text: "Ve vztahu ke svým osobním údajům máte tato práva:",
        },
        {
          typ: "seznam",
          polozky: [
            "Právo na přístup — můžete se zeptat, jaké údaje o vás vedeme, a dostat jejich kopii. U zdravotnické dokumentace se postupuje podle zákona o zdravotních službách.",
            "Právo na opravu, pokud jsou údaje nepřesné nebo neúplné.",
            "Právo na výmaz. Uplatní se jen tam, kde nám uchování neukládá zákon — zdravotnickou dokumentaci vymazat nemůžeme, dokud neuplyne zákonná lhůta.",
            "Právo na omezení zpracování a právo vznést námitku proti zpracování založenému na oprávněném zájmu.",
            "Právo na přenositelnost údajů, které jste nám poskytli a které zpracováváme automatizovaně na základě souhlasu nebo smlouvy.",
            "Právo odvolat souhlas, pokud je zpracování na souhlasu založené. Odvoláním není dotčena zákonnost zpracování před odvoláním.",
          ],
        },
        {
          typ: "odstavec",
          text: "Žádost stačí poslat na info@zubniordinace-az.cz nebo ji podat osobně v ordinaci. Abychom údaje nevydali cizí osobě, můžeme si ověřit vaši totožnost. Vyřizujeme do jednoho měsíce.",
        },
        {
          typ: "odstavec",
          text: `Pokud si myslíte, že s údaji nakládáme špatně, ozvěte se nám prosím nejdřív. Stížnost můžete podat i u dozorového úřadu, kterým je ${UOOU}.`,
        },
      ],
    },
    {
      nadpis: "Automatizované rozhodování",
      bloky: [
        {
          typ: "odstavec",
          text: "Nepoužíváme automatizované rozhodování ani profilování, které by pro vás mělo právní účinky nebo se vás obdobně významně dotýkalo.",
        },
      ],
    },
    {
      nadpis: "Změny těchto zásad",
      bloky: [
        {
          typ: "odstavec",
          text: "Zásady můžeme upravit, pokud se změní způsob, jakým údaje zpracováváme, nebo příslušné předpisy. Aktuální znění je vždy na této stránce a u nadpisu je uvedené datum poslední revize.",
        },
      ],
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
   Cookies
   ──────────────────────────────────────────────────────────────────────── */

export const cookies: PravniDokument = {
  slug: "cookies",
  nazev: "Cookies",
  popis:
    "Tento web nepoužívá cookies ani jiná úložiště v prohlížeči. Proto tu nenajdete lištu se souhlasem.",
  aktualizovano: "2026-09-29",
  perex:
    "Krátce: tento web neukládá do vašeho prohlížeče nic. Žádné cookies, žádnou analytiku, žádné reklamní skripty. Proto tu není lišta, která by po vás chtěla souhlas.",
  sekce: [
    {
      nadpis: "Proč tu není cookie lišta",
      bloky: [
        {
          typ: "odstavec",
          text: "Souhlas s ukládáním do koncového zařízení vyžaduje § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích. Ptát se je potřeba tehdy, když web něco ukládá nebo čte — typicky cookies pro analytiku nebo reklamu.",
        },
        {
          typ: "odstavec",
          text: "Tento web neukládá do prohlížeče žádné cookies, nepoužívá local storage ani session storage a nenačítá analytické ani reklamní nástroje. Není tedy k čemu dávat souhlas a lišta by byla jen zbytečná překážka.",
        },
      ],
    },
    {
      nadpis: "Co si můžete ověřit",
      bloky: [
        {
          typ: "odstavec",
          text: "Nemusíte nám věřit na slovo. V prohlížeči otevřete vývojářské nástroje (klávesa F12), záložku Application nebo Úložiště a podívejte se na položku Cookies pro tuto doménu. Bude prázdná.",
        },
      ],
    },
    {
      nadpis: "Co web přesto načítá zvenčí",
      bloky: [
        {
          typ: "odstavec",
          text: "Jedna věc na webu pochází z cizího serveru — mapa v sekci Kontakt.",
        },
        {
          typ: "seznam",
          polozky: [
            "Mapa OpenStreetMap: při jejím zobrazení se na servery OpenStreetMap Foundation přenese vaše IP adresa a údaje o prohlížeči. Bez toho se mapa nenačte. Cookies pro sledování přitom nenastavuje.",
            "Písma: stahují se přímo z našeho webu, ne od Googlu. Při načtení stránky se tedy s žádným dalším serverem nespojujete.",
            "Fotografie a ostatní soubory: všechny jsou uložené u nás.",
          ],
        },
        {
          typ: "odstavec",
          text: "Pokud si nepřejete, aby se mapa načetla, můžete ji zablokovat rozšířením v prohlížeči. Adresa ordinace i popis dopravy jsou na stránce napsané i textem, takže o žádnou informaci nepřijdete.",
        },
      ],
    },
    {
      nadpis: "Provozní záznamy",
      bloky: [
        {
          typ: "odstavec",
          text: "Server, na kterém web běží, si vede běžné provozní záznamy o přístupech — IP adresu, čas a adresu otevřené stránky. Slouží k provozu a bezpečnosti webu, ne ke sledování návštěvníků. Podrobnosti najdete v zásadách ochrany osobních údajů.",
        },
      ],
    },
    {
      nadpis: "Kdyby se to změnilo",
      bloky: [
        {
          typ: "odstavec",
          text: "Pokud někdy web doplníme o nástroj, který cookies používá, přibude tady jejich popis a zároveň lišta, kde souhlas udělíte nebo odmítnete. Do té doby platí, co je napsané výš.",
        },
      ],
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
   Podmínky užití webu

   Záměrně nejde o „obchodní podmínky“. Ty se pojí s prodejem zboží nebo
   služeb na dálku, a tenhle web nic neprodává ani nepřijímá platby —
   formulář je jen žádost o termín. Podmínky tedy řeší užívání webu
   a informace, které musí poskytovatel zdravotních služeb zveřejnit.
   ──────────────────────────────────────────────────────────────────────── */

export const podminky: PravniDokument = {
  slug: "podminky-uziti",
  nazev: "Podmínky užití webu",
  popis:
    "K čemu web slouží, jak funguje objednávkový formulář, jak podat stížnost a komu patří obsah stránek.",
  aktualizovano: "2026-09-29",
  perex:
    "Tato stránka shrnuje, kdo web provozuje, k čemu slouží a co znamená, když přes něj pošlete objednávku.",
  sekce: [
    {
      nadpis: "Kdo web provozuje",
      bloky: [
        {
          typ: "odstavec",
          text: `Web zubniordinace-az.cz provozuje ${SPRAVCE}, IČO 08375682, se sídlem Velké Kunratické 1308/14, 148 00 Praha 4 – Kunratice, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze. Společnost je poskytovatelem zdravotních služeb v oboru zubní lékařství a provozuje Zubní ordinaci AZ na adrese Ke Koulce 1704/6, 150 00 Praha 5 – Smíchov.`,
        },
      ],
    },
    {
      nadpis: "K čemu web slouží",
      bloky: [
        {
          typ: "odstavec",
          text: "Web má informativní charakter. Popisuje, jaké služby ordinace poskytuje, kde ji najdete a kdy má otevřeno.",
        },
        {
          typ: "odstavec",
          text: "Obsah webu nenahrazuje vyšetření ani odbornou konzultaci a nelze ho brát jako lékařské doporučení pro konkrétní případ. O tom, co je pro vás vhodné, se lze rozhodnout až po vyšetření v ordinaci.",
        },
      ],
    },
    {
      nadpis: "Ceník",
      bloky: [
        {
          typ: "odstavec",
          text: "Ceny uvedené na webu jsou orientační a vztahují se k nejčastějším výkonům. Konečná cena závisí na rozsahu a náročnosti ošetření a vždy vám ji sdělíme dřív, než začneme. Kompletní ceník je k nahlédnutí v ordinaci.",
        },
        {
          typ: "odstavec",
          text: "Výkony hrazené z veřejného zdravotního pojištění účtujeme podle úhradové vyhlášky platné pro dané období.",
        },
      ],
    },
    {
      nadpis: "Objednávkový formulář",
      bloky: [
        {
          typ: "odstavec",
          text: "Odesláním formuláře nevzniká rezervace termínu ani smlouva o poskytnutí zdravotních služeb. Jde o nezávaznou žádost, na kterou vám odpovíme a termín s vámi domluvíme telefonicky nebo e-mailem. Závazný je až takto potvrzený termín.",
        },
        {
          typ: "odstavec",
          text: "Pokud vás zub bolí akutně, zavolejte prosím rovnou na +420 774 597 161. Formulář nesledujeme nepřetržitě a na akutní stav se přes něj nedá spolehnout.",
        },
        {
          typ: "odstavec",
          text: "Jak nakládáme s údaji z formuláře, popisují zásady ochrany osobních údajů.",
        },
      ],
    },
    {
      nadpis: "Obsah webu",
      bloky: [
        {
          typ: "odstavec",
          text: "Texty, fotografie a grafická podoba webu jsou chráněné autorským právem. Bez našeho souhlasu je nelze kopírovat, šířit ani jinak užívat nad rámec běžného prohlížení stránek.",
        },
        {
          typ: "odstavec",
          text: "Fotografie zachycují skutečné prostory ordinace. Hodnocení v sekci Reference jsou převzatá od pacientů a zveřejněná v podobě, v jaké nám je poskytli, zkrácená bez zásahu do smyslu.",
        },
      ],
    },
    {
      nadpis: "Odkazy na cizí weby",
      bloky: [
        {
          typ: "odstavec",
          text: "Web může odkazovat na stránky třetích stran. Za jejich obsah ani za to, jak nakládají s osobními údaji, neodpovídáme.",
        },
      ],
    },
    {
      nadpis: "Dostupnost a odpovědnost",
      bloky: [
        {
          typ: "odstavec",
          text: "Snažíme se, aby informace na webu byly aktuální a správné. Ordinační dobu, ceny i rozsah služeb ale můžeme změnit; rozhodující je vždy stav v ordinaci. Za škodu vzniklou spoléháním na neaktuální údaj na webu neodpovídáme, pokud jsme ji nezpůsobili úmyslně nebo hrubou nedbalostí.",
        },
        {
          typ: "odstavec",
          text: "Provoz webu může být přerušený kvůli údržbě nebo z důvodů na straně poskytovatele hostingu.",
        },
      ],
    },
    {
      nadpis: "Když nejste spokojeni",
      bloky: [
        {
          typ: "odstavec",
          text: "Proti postupu při poskytování zdravotních služeb můžete podat stížnost podle § 93 zákona č. 372/2011 Sb., o zdravotních službách. Podejte ji prosím nejdřív nám — písemně na adresu ordinace nebo na info@zubniordinace-az.cz. Vyřídíme ji do 30 dnů.",
        },
        {
          typ: "odstavec",
          text: "Pokud s vyřízením nebudete souhlasit, můžete se obrátit na Magistrát hlavního města Prahy jako na správní orgán, který nám udělil oprávnění k poskytování zdravotních služeb.",
        },
        {
          typ: "odstavec",
          text: "U sporů ze spotřebitelských smluv se můžete obrátit na Českou obchodní inspekci, Štěpánská 567/15, 120 00 Praha 2, adr.coi.cz, která zajišťuje mimosoudní řešení spotřebitelských sporů. Dozor nad dodržováním zákona o ochraně spotřebitele vykonává tentýž úřad.",
        },
      ],
    },
    {
      nadpis: "Účinnost",
      bloky: [
        {
          typ: "odstavec",
          text: "Tyto podmínky jsou účinné od data uvedeného u nadpisu. Vztahy jimi neupravené se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanským zákoníkem, a zákonem č. 372/2011 Sb., o zdravotních službách.",
        },
      ],
    },
  ],
};

export const pravniDokumenty: PravniDokument[] = [
  ochranaUdaju,
  cookies,
  podminky,
];
