import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date().toUTCString();
  const items = [
    {
      title:
        "이론글로벌(주) × 웰컴저축은행 사업자담보대출 — 모집법인 공식 안내",
      link: base,
      guid: `${base}/#home`,
      description:
        "사업자담보대출 한도, LTV 매트릭스, 비대면 심사, 다세대·연립 담보 안내.",
      pubDate: now,
    },
    {
      title: "사업자담보대출 자격요건 및 모집법인 상담",
      link: `${base}/resources/business-loan-routing`,
      guid: `${base}/resources/business-loan-routing`,
      description:
        "개인사업자 3개월 이상, 실거주 담보, 시세 1억 5천 이상 등 자격 요약.",
      pubDate: now,
    },
    {
      title: "웰컴저축은행 LTV·금리 매트릭스와 CB 구간",
      link: `${base}/resources/welcome-ltv-guide`,
      guid: `${base}/resources/welcome-ltv-guide`,
      description:
        "권역별 LTV, 아파트·비아파트 금리 범위, CB 점수 구간별 참고 금리.",
      pubDate: now,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>이론글로벌(주) · 웰컴저축은행 사업자담보대출</title>
    <link>${escapeXml(base)}</link>
    <description>사업자담보대출, LTV, 금리, 모집법인·이석형 대표 상담 안내 RSS</description>
    <language>ko-KR</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${escapeXml(base)}/api/rss" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (it) => `
    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${escapeXml(it.link)}</link>
      <guid isPermaLink="true">${escapeXml(it.guid)}</guid>
      <description>${escapeXml(it.description)}</description>
      <pubDate>${it.pubDate}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
