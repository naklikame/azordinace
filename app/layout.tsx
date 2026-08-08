import type { Metadata, Viewport } from "next";
import { Manrope, Archivo } from "next/font/google";
import { klinika, otviraciDobaSchema, sluzby } from "@/content/klinika";
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

const url = "https://www.zubniordinace-az.cz";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${klinika.nazev} | ${klinika.podtitul}`,
    template: `%s | ${klinika.nazev}`,
  },
  description: klinika.perex,
  keywords: [
    "zubař Praha 5",
    "zubní ordinace Smíchov",
    "dentální hygiena Smíchov",
    "zubní implantáty",
    "neviditelná rovnátka",
    "bělení zubů",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url,
    siteName: klinika.nazev,
    title: `${klinika.nazev} | ${klinika.slogan}`,
    description: klinika.perex,
  },
  twitter: {
    card: "summary_large_image",
    title: `${klinika.nazev} | ${klinika.slogan}`,
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

/** Strukturovaná data pro lokální vyhledávání a mapy. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${url}/#klinika`,
  name: klinika.nazev,
  description: klinika.perex,
  url,
  image: `${url}/opengraph-image`,
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
  // Hodnocení sem doplňte, teprve až budete mít doložitelný průměr a počet
  // recenzí. Vymyšlený aggregateRating je porušení pravidel Googlu.
  parentOrganization: {
    "@type": "Organization",
    name: klinika.provozovatel,
    identifier: klinika.ico,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
