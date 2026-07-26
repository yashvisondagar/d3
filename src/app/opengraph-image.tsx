import { ImageResponse } from "next/og";

export const alt = "Dream Design Dwell — D3 Interior Design Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(145deg, #FDF8F1 0%, #F3EBE0 55%, #EBE2D4 100%)",
          color: "#1D1D1B",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 60,
            border: "2px solid #B48C48",
            fontSize: 56,
            marginBottom: 36,
          }}
        >
          D<span style={{ color: "#B48C48" }}>3</span>
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1 }}>Dream Design Dwell</div>
        <div
          style={{
            marginTop: 18,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#B48C48",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Interior Design Studio · Mumbai
        </div>
      </div>
    ),
    { ...size },
  );
}
