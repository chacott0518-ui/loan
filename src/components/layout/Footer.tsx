import Link from "next/link";

const SITEMAP = [
  { href: "/#product", label: "상품안내" },
  { href: "/#ltv", label: "LTV/금리표" },
  { href: "/#eligibility", label: "자격확인" },
  { href: "/#consult", label: "상담예약" },
  { href: "/resources/business-loan-routing", label: "자격·절차 요약" },
  { href: "/resources/welcome-ltv-guide", label: "LTV·금리 가이드" },
  { href: "/api/rss", label: "RSS" },
] as const;

export function Footer() {
  return (
    <footer className="min-h-screen border-t border-neutral-200 bg-neutral-50 py-20">
      <div className="mx-auto flex max-w-container flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Company
          </p>
          <h2 className="text-2xl font-bold text-brand-secondary">
            이론글로벌(주)
            <span className="mt-1 block text-base font-medium text-neutral-600">
              Theoretical Global Co., Ltd.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <dl className="space-y-4 text-sm text-neutral-700">
            <div>
              <dt className="font-semibold text-brand-secondary">대표이사</dt>
              <dd className="mt-1">이석형 (Lee Seok-hyung)</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-secondary">본점 소재지</dt>
              <dd className="mt-1 leading-relaxed">
                사업자등록증(법인등기부등본)에 기재된 본점 주소와 동일합니다.
                세부 주소·등록번호는 대표번호로 문의 시 안내드립니다.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-secondary">
                사업자등록번호
              </dt>
              <dd className="mt-1">
                사업자등록증상 등록번호와 동일하며, 공개가 필요한 경우
                대표번호로 요청해 주세요.
              </dd>
            </div>
          </dl>

          <div className="space-y-4 text-sm text-neutral-700">
            <p className="font-semibold text-brand-secondary">고객 문의 · 대표 연락</p>
            <p>
              <span className="text-neutral-500">대표이사 이석형</span>
              <br />
              <a
                href="tel:01063279227"
                className="text-lg font-bold text-brand-secondary transition hover:text-brand-primary"
              >
                010-6327-9227
              </a>
            </p>
            <p className="rounded-xl border border-brand-accent/40 bg-white/80 p-4 text-xs leading-relaxed text-neutral-600">
              <strong className="font-semibold text-brand-secondary">
                Welcome Savings Bank official partner 모집법인
              </strong>
              <br />
              본 홈페이지는 웰컴저축은행의 공식 모집법인으로서 안내
              목적으로 운영됩니다. 금융상품의 계약·승인·지급은 웰컴저축은행의
              심사 및 규정에 따릅니다.
            </p>
          </div>

          <nav aria-label="사이트맵" className="text-sm">
            <p className="mb-3 font-semibold text-brand-secondary">바로가기</p>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 underline-offset-4 transition hover:text-brand-secondary hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 underline-offset-4 transition hover:text-brand-secondary hover:underline"
                >
                  홈
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="border-t border-neutral-200 pt-8 text-xs leading-relaxed text-neutral-500">
          © {new Date().getFullYear()} Theoretical Global Co., Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
