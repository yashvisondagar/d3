import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FDF8F1",
          borderRadius: "50%",
          border: "1.5px solid #B48C48",
          fontFamily: "Georgia, serif",
          fontSize: 16,
          fontWeight: 600,
          color: "#1D1D1B",
        }}
      >
        D<span style={{ color: "#B48C48" }}>3</span>
      </div>
    ),
    { ...size },
  );
}
