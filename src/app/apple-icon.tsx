import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          border: "4px solid #B48C48",
          fontFamily: "Georgia, serif",
          fontSize: 84,
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
