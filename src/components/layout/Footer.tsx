import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* 회사명 */}
        <div className="mb-10 flex flex-col gap-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary sm:text-xs">
            Company
          </p>
          <h2 className="text-xl font-bold text-brand-secondary sm:text-2xl">
            이론글로벌(주)
          </h2>
          <span className="text-sm font-medium text-neutral-500">
            Eloan Global.corp
          </span>
        </div>

        {/* 2열 그리드: 회사정보 + 연락처 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">

          {/* 왼쪽: 회사 기본 정보 */}
          <dl className="space-y-4 text-sm text-neutral-700">
            <div>
              <dt className="text-xs font-semibold text-brand-secondary">대표이사</dt>
              <dd className="mt-1">이석형 (Lee Seok-hyung)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-brand-secondary">본점 소재지</dt>
              <dd className="mt-1 leading-relaxed">
                서울특별시 중구 을지로 211, 3층 301호
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-brand-secondary">
                사업자등록번호
              </dt>
              <dd className="mt-1">20-00001467</dd>
            </div>
          </dl>

          {/* 오른쪽: 연락처 */}
          <div className="space-y-4 text-sm text-neutral-700">
            <p className="text-xs font-semibold text-brand-secondary">
              고객 문의 · 대표 연락
            </p>

            {/* 대표번호 */}
            <div className="space-y-2">
              <p className="text-xs text-neutral-500">대표번호</p>
              <a
                href="tel:0269561238"
                className="flex items-center gap-2 text-lg font-bold text-brand-secondary transition hover:text-brand-primary"
                aria-label="대표번호 02-6956-1238"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-primary" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8c1.2 2.4 3 4.5 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C10.9 21.2 3.8 14.1 3.8 5.2 3.8 4.5 4.3 4 5 4h3.5c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-1.8 1.2z" />
                </svg>
                02-6956-1238
              </a>
            </div>

            {/* 모집법인 안내 */}
            <div className="rounded-xl border border-brand-accent/40 bg-white/80 px-4 py-3 text-xs leading-relaxed text-neutral-600">
              위 사람은 웰컴저축은행과 위탁계약을 체결한 이론글로벌(주)
              모집법인에 소속되어 있으며 저축은행중앙회 등록업체입니다.
              <br />
              <a
                href="https://www.loanconsultant.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-brand-secondary underline underline-offset-2 hover:text-brand-primary"
              >
                대출모집법인조회 확인하기
              </a>
              {" "}· 웰컴저축은행 고객센터{" "}
              <a href="tel:16610001" className="font-semibold text-brand-secondary hover:text-brand-primary">
                1661-0001
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <p className="mt-12 border-t border-neutral-200 pt-6 text-xs leading-relaxed text-neutral-500">
          © {currentYear} Eloan Global.corp Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
