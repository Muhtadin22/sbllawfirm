import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SBL LAW FIRM — Advocates & Legal Consultants";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#121316",
          padding: "64px 80px",
          border: "8px solid #C5A880",
          fontFamily: "serif",
        }}
      >
        {/* Header Kartu */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#C5A880",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                borderRadius: "4px",
                color: "#121316",
              }}
            >
              ⚖
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold", color: "#FFFFFF", letterSpacing: "4px" }}>
                SBL LAW FIRM
              </span>
              <span style={{ fontSize: "12px", color: "#C5A880", letterSpacing: "3px" }}>
                ADVOCATES & LEGAL CONSULTANTS
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: "13px",
              color: "#C5A880",
              border: "1px solid #C5A880",
              padding: "6px 14px",
              borderRadius: "2px",
              letterSpacing: "2px",
            }}
          >
            JAKARTA SCBD
          </span>
        </div>

        {/* Headline Utama */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span style={{ fontSize: "52px", fontWeight: "bold", color: "#FFFFFF", lineHeight: "1.15" }}>
            Ketegasan Strategi Hukum,{" "}
            <span style={{ color: "#C5A880", fontStyle: "italic" }}>
              Integritas Tanpa Kompromi.
            </span>
          </span>
          <span style={{ fontSize: "20px", color: "#D1D5DB", maxWidth: "900px", lineHeight: "1.5" }}>
            Litigasi Komersial Kompleks, Transaksi Korporasi, Restrukturisasi Bisnis & Penasihat Hukum Strategis.
          </span>
        </div>

        {/* Footer Kartu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2A2E37",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", color: "#9CA3AF", fontSize: "14px" }}>
            <span>• Terdaftar PERADI</span>
            <span>• Hak Imunitas UU No. 18/2003</span>
            <span>• Three-Layer Legal Review</span>
          </div>
          <span style={{ fontSize: "14px", color: "#C5A880", fontWeight: "bold" }}>
            Portal Konsultasi Resmi
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}