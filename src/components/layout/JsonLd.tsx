const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eloanglobal.com";

const financialServiceLd = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: "이론글로벌(주)",
  alternateName: ["Eloan Global", "이론글로벌", "Eloan Global.corp"],
  legalName: "이론글로벌(주)",
  url: siteUrl,
  description:
    "웰컴저축은행 공식 모집법인 이론글로벌(주). 사업자담보대출 최대 10억 원, 다세대·연립·오피스텔 담보 가능, 비대면 당일 실행, LTV 최대 85%.",
  telephone: ["02-6956-1238", "010-6327-9227"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "을지로 211, 3층 301호",
    addressLocality: "중구",
    addressRegion: "서울특별시",
    postalCode: "04548",
    addressCountry: "KR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "이석형",
    alternateName: "Lee Seok-hyung",
    jobTitle: "대표이사",
    telephone: "010-6327-9227",
  },
  areaServed: { "@type": "Country", name: "대한민국" },
  sameAs: ["https://www.loanconsultant.or.kr"],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "사업자담보대출 최대 한도가 얼마인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "이론글로벌(주) 웰컴저축은행 사업자담보대출 안내 상한은 최대 10억 원입니다. 실제 지급액은 담보 인정가액, LTV 비중, CB 신용점수, 운전·보증 구조에 따라 달라지며 심사 후 확정됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "다세대·연립·오피스텔도 담보로 인정되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 이론글로벌은 일반적으로 심사에서 제외되기 쉬운 다세대주택·연립주택·주거형 오피스텔 등 비(非)아파트 담보를 적극 검토합니다. 웰컴저축은행 심사 기준에 부합하는 경우에 한합니다.",
      },
    },
    {
      "@type": "Question",
      name: "비대면으로 신청하면 당일 실행이 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "모바일 기반 비방문 심사 및 승인 후 당일 실행을 표준 프로세스로 설계했습니다. 담보 유형·지역·서류 준비 상태에 따라 일정이 달라질 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "신청 자격 조건이 어떻게 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "개인사업자(사업자 등록 3개월 이상), 본인 실거주 물건지 담보, 소유권이전 3개월 경과, 물건지 최저 시세 1억 5천만 원 이상이 기본 요건입니다.",
      },
    },
    {
      "@type": "Question",
      name: "서울·경기 외 지역도 대출이 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "서울·경기 외 지역은 LTV 최대 60%로 적용됩니다. 서울·경기는 지역 등급(1~3급지)과 CB 신용점수에 따라 LTV가 달라집니다.",
      },
    },
    {
      "@type": "Question",
      name: "중도상환수수료가 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "중도상환수수료율은 1.07%입니다. 대출취급일로부터 3년 이상 거래 시 면제됩니다. 취급수수료와 연장수수료는 없습니다.",
      },
    },
    {
      "@type": "Question",
      name: "이론글로벌은 웰컴저축은행 공식 모집법인인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 이론글로벌(주)는 웰컴저축은행과 위탁계약을 체결한 공식 모집법인이며 저축은행중앙회 등록업체입니다.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈",         item: siteUrl },
    { "@type": "ListItem", position: 2, name: "상품안내",   item: `${siteUrl}/#product` },
    { "@type": "ListItem", position: 3, name: "LTV/금리표", item: `${siteUrl}/#ltv` },
    { "@type": "ListItem", position: 4, name: "자격확인",   item: `${siteUrl}/#eligibility` },
    { "@type": "ListItem", position: 5, name: "상담예약",   item: `${siteUrl}/#consult` },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "이론글로벌(주) · 웰컴저축은행 사업자담보대출",
  inLanguage: "ko-KR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

function serialize(data: object) {
  return JSON.stringify(data);
}

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(financialServiceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(websiteLd) }} />
    </>
  );
}