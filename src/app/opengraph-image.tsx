import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.role}`;
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
          justifyContent: "center",
          padding: 80,
          background: "#0b0f19",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#38bdf8", marginBottom: 28 }}>
          {`${SITE.name} · ${SITE.role}`}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
          {SITE.headline}
        </div>
      </div>
    ),
    size,
  );
}
