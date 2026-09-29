import type { Metadata, Viewport } from "next";
import { Manrope, Archivo } from "next/font/google";
import { klinika, nazevRole, otviraciDobaSchema, sluzby, tym } from "@/content/klinika";
import { StrukturovanaData } from "@/components/strukturovana-data";
import { Ornament } from "@/components/ornament";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Displejová grotestka pro velké nadpisy — v Black řezu drží stejný náboj
// jako předloha, latin-ext pokrývá českou diakritiku.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const url = klinika.web;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${klinika.nazev} | Zubař ${klinika.podtitul}`,
    template: `%s | ${klinika.nazev}`,
  },
  description: klinika.perex,
  keywords: [
    "zubař Praha 5",
    "zubní ordinace Smíchov",
    "dentální hygiena Smíchov",
    "dětská stomatologie Praha 5",
    "zubní korunky",
    "bělení zubů",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url,
    siteName: klinika.nazev,
    title: `${klinika.nazev} | ${klinika.podtitul}`,
    description: klinika.perex,
  },
  twitter: {
    card: "summary_large_image",
    title: `${klinika.nazev} | ${klinika.podtitul}`,
    description: klinika.perex,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  // Ladí s barvou pozadí, aby lišta prohlížeče nepůsobila odděleně
  themeColor: "#f7fafc",
  colorScheme: "light",
};

/**
 * Strukturovaná data pro lokální vyhledávání a mapy. Uzly jsou v jednom
 * grafu a ordinace má vlastní `@id`, takže se na ni podstránky odkazují
 * místo toho, aby stejnou firmu na stejné adrese popisovaly znovu.
 */
const klinikaLd = {
  "@type": "Dentist",
  "@id": `${url}/#klinika`,
  name: klinika.nazev,
  description: klinika.perex,
  url,
  image: [
    `${url}/opengraph-image`,
    `${url}/fotky/ordinace-hero.jpg`,
    `${url}/fotky/ordinace-2-a.jpg`,
    `${url}/fotky/cekarna.jpg`,
  ],
  telephone: klinika.telefon,
  email: klinika.email,
  priceRange: "$$",
  currenciesAccepted: "CZK",
  paymentAccepted: "Hotovost, platební karta, zdravotní pojištění",
  medicalSpecialty: "Dentistry",
  areaServed: [
    { "@type": "City", name: "Praha" },
    { "@type": "AdministrativeArea", name: "Praha 5 – Smíchov" },
  ],
  hasMap: `https://www.openstreetmap.org/?mlat=${klinika.mapa.lat}&mlon=${klinika.mapa.lng}#map=18/${klinika.mapa.lat}/${klinika.mapa.lng}`,
  availableService: sluzby.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.nazev,
    description: s.popis,
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: klinika.adresa.ulice,
    addressLocality: klinika.adresa.mesto,
    postalCode: klinika.adresa.psc,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: klinika.mapa.lat,
    longitude: klinika.mapa.lng,
  },
  openingHoursSpecification: otviraciDobaSchema,
  employee: tym.map((c) => ({
    "@type": "Person",
    name: `${c.titul} ${c.jmeno}`.trim(),
    jobTitle: nazevRole[c.role],
  })),
  // Prázdné `sameAs` do výstupu nepatří, proto se přidá až s prvním profilem.
  ...(klinika.profily.length > 0 ? { sameAs: klinika.profily } : {}),
  // `aggregateRating` sem nepatří: hvězdičky z firemního profilu Google
  // nesmíme značkovat na vlastním webu. Doplnit lze jen doložitelný průměr
  // z recenzí, které ordinace sbírá sama.
  parentOrganization: {
    "@type": "Organization",
    name: klinika.provozovatel,
    identifier: klinika.ico,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${url}/#web`,
      url,
      name: klinika.nazev,
      inLanguage: "cs-CZ",
      publisher: { "@id": `${url}/#klinika` },
    },
    klinikaLd,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${manrope.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Ornament />
        <StrukturovanaData data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
