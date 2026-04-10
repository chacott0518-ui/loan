import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { JsonLd } from "@/components/layout/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title =
  "이론글로벌(주) × 웰컴저축은행 사업자담보대출 | 모집법인 공식 안내";
const description =
  "웰컴저축은행 공식 모집법인 이론글로벌(주)의 사업자담보대출 안내. 상품 개요, LTV·금리, 자격 요건 확인과 상담 예약을 한 곳에서 제공합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | 이론글로벌(주) · 웰컴저축은행",
  },
  description,
  keywords: [
    "사업자담보대출",
    "웰컴저축은행",
    "이론글로벌",
    "모집법인",
    "LTV",
    "금리",
    "담보대출",
    "Theoretical Global",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/api/rss",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "이론글로벌(주) · 웰컴저축은행 사업자담보대출",
    title,
    description,
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "이론글로벌(주) × 웰컴저축은행 사업자담보대출 모집법인",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image"],
  },
  ...(process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
    ? {
        verification: {
          other: {
            "naver-site-verification":
              process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
          },
        },
      }
    : {}),
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
