import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "사업자담보대출 자격·절차 안내",
  description:
    "개인사업자 담보대출 자격요건, 실거주·시세 기준, 웰컴저축은행 모집법인 이론글로벌(주) 안내.",
  alternates: { canonical: `${siteUrl}/resources/business-loan-routing` },
};

export default function BusinessLoanRoutingPage() {
  return (
    <article className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-secondary">
        사업자담보대출 자격·모집법인 안내
      </h1>
      <p className="mt-6 leading-relaxed text-neutral-700">
        개인사업자·실거주 담보·시세 1억 5천만 원 이상 등 핵심 요건과 웰컴저축은행
        비대면 심사 절차는 메인 페이지의 자격 확인·LTV/금리표 섹션을 참고해
        주세요. 상세 상담은 이론글로벌(주) 대표 번호로 연결됩니다.
      </p>
    </article>
  );
}
