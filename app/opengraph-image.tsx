import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Leul Yitbarek, Full-Stack Developer. Building useful software for real workflows. Addis Ababa, Ethiopia.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [instrumentSans, ibmPlexMono] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/InstrumentSans-Medium.ttf")),
  readFile(join(process.cwd(), "assets/fonts/IBMPlexMono-Regular.ttf")),
]);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#F5F1E8",
          color: "#171412",
          fontFamily: "Instrument Sans",
          fontWeight: 500,
        }}
      >
        <div
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontSize: 20,
            letterSpacing: 2,
            color: "#74263A",
          }}
        >
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 104, letterSpacing: -6, lineHeight: 1, marginTop: 26 }}>
          Leul Yitbarek
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 56, letterSpacing: -2, lineHeight: 1.12, marginTop: 36 }}>
          <span>Building useful software</span>
          <span style={{ color: "#74263A" }}>for real workflows.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: 22,
            borderTop: "1px solid #171412",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontSize: 18,
          }}
        >
          Addis Ababa, Ethiopia
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Sans", data: instrumentSans, weight: 500, style: "normal" },
        { name: "IBM Plex Mono", data: ibmPlexMono, weight: 400, style: "normal" },
      ],
    },
  );
}
