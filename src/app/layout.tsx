import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { JsonLd } from "@/components/layout/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eloanglobal.com";

const title = "이론글로벌(주) × 웰컴저축은행 | 사업자담보대출 최대 10억 — Eloan Global";
const description =
  "웰컴저축은행 공식 모집법인 이론글로벌(주). 사업자담보대출 최대 10억 원, 다세대·연립·오피스텔 담보 가능, 비대면 당일 실행, LTV 최대 85%. 지금 한도 조회하세요.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002D56",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | 이론글로벌(주) · 웰컴저축은행",
  },
  description,
  keywords: [
    "사업자담보대출", "웰컴저축은행대출", "이론글로벌", "Eloan Global",
    "모집법인", "비대면사업자대출", "다세대담보대출", "연립주택담보대출",
    "오피스텔담보대출", "저축은행사업자대출", "LTV대출", "당일실행대출",
    "사업자대출한도", "부동산담보대출", "웰컴저축은행모집법인",
  ],
  authors: [{ name: "이론글로벌(주)", url: siteUrl }],
  creator: "이론글로벌(주)",
  publisher: "이론글로벌(주)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "이론글로벌(주) · 웰컴저축은행 사업자담보대출",
    title,
    description,
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "이론글로벌(주) × 웰컴저축은행 사업자담보대출",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
    other: {
      "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_VERIFICATION ?? "",
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },
  category: "finance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="flex min-h-full flex-col font-sans bg-white text-neutral-900">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}