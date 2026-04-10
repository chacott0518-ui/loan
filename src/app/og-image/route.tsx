import { ImageResponse } from "next/og";

export const runtime = "edge";

const W = 1200;
const H = 630;

const NOTO_WOFF =
  "https://fonts.gstatic.com/s/notosanskr/v36/PbykFmXiEBPT4ITbgNA5Cgm20HTs4JMMuA.woff";

export async function GET() {
  let fonts: {
    name: string;
    data: ArrayBuffer;
    style: "normal";
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  }[] = [];

  try {
    const data = await fetch(NOTO_WOFF).then((r) => r.arrayBuffer());
    fonts = [{ name: "NotoSansKR", data, style: "normal", weight: 500 }];
  } catch {
    fonts = [];
  }

  const fontFamily = fonts.length ? "NotoSansKR" : "system-ui";

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background:
            "linear-gradient(135deg, #002D56 0%, #0a3d6e 45%, #002D56 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              width: 72,
              height: 6,
              borderRadius: 4,
              background: "#B59D7B",
            }}
          />
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            이론글로벌(주) × 웰컴저축은행
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: "#D4C4A8",
              fontFamily,
            }}
          >
            Theoretical Global · Welcome Savings Bank
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#ffffff",
              fontFamily,
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            사업자담보대출 · 모집법인 공식 안내
          </div>
          <div
            style={{
              fontSize: 19,
              color: "#B59D7B",
              fontWeight: 600,
              fontFamily,
            }}
          >
            대표 이석형 · 010-6327-9227
          </div>
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts,
    }
  );
}
