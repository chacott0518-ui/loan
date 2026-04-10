import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "웰컴저축은행 LTV·금리 매트릭스 요약",
  description:
    "지역 권역·CB 구간별 LTV, 아파트·비아파트 금리 범위, 원리금균등분할상환 요약.",
  alternates: { canonical: `${siteUrl}/resources/welcome-ltv-guide` },
};

export default function WelcomeLtvGuidePage() {
  return (
    <article className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-secondary">
        LTV·금리 매트릭스 이해하기
      </h1>
      <p className="mt-6 leading-relaxed text-neutral-700">
        1·2·3급지와 기타(Etc.) 권역별 LTV, 신용 구간별 참고 금리는 메인 페이지
        LTV/금리표 도구에서 조합별로 확인할 수 있습니다. 최종 금리·한도는
        웰컴저축은행 심사 후 확정됩니다.
      </p>
    </article>
  );
}
