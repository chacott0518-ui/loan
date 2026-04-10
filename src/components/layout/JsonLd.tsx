const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

const financialProductLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "이론글로벌(주) x 웰컴저축은행 사업자담보대출",
  description:
    "웰컴저축은행 공식 모집법인 이론글로벌(주)를 통한 사업자담보대출 상품 안내, LTV·금리, 자격 확인 및 상담 예약.",
  category: "MortgageLoan",
  provider: {
    "@type": "BankOrCreditUnion",
    name: "웰컴저축은행",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
  },
  offeredBy: {
    "@type": "Organization",
    name: "이론글로벌(주)",
    alternateName: "Theoretical Global Co., Ltd.",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "대한민국",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(financialProductLd),
      }}
    />
  );
}
