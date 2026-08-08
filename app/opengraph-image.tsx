import { ImageResponse } from "next/og";
import { klinika } from "@/content/klinika";

export const alt = `${klinika.nazev} | ${klinika.podtitul}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#22475c",
          padding: 72,
          color: "#f1f9fd",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "#a91958",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            AZ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 32, fontWeight: 700 }}>
              {klinika.nazev}
            </span>
            <span style={{ fontSize: 22, color: "#8ccde7" }}>
              {klinika.podtitul}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            {klinika.slogan}
          </span>
          <span style={{ fontSize: 30, color: "#bce2f2", maxWidth: 880 }}>
            Prevence, hygiena, protetika i péče o děti. {klinika.adresa.mesto}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 26,
            color: "#8ccde7",
          }}
        >
          <span>{klinika.telefon}</span>
          <span>{klinika.adresa.ulice}</span>
        </div>
      </div>
    ),
    size,
  );
}
