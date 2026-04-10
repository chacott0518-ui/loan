"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { CAMPAIGN_LIMITS } from "@/data/campaign-stats";

const CEO_TRUST_BLOCK = {
  companyKr: "이론글로벌(주)",
  companyEn: "Theoretical Global Co., Ltd.",
  ceo: "이석형 (Lee Seok-hyung)",
  role: "대표이사",
  regNote:
    "사업자등록번호·본점 소재지는 사업자등록증 기재와 동일하며, 공개가 필요하시면 대표 번호로 요청해 주세요.",
  partner:
    "웰컴저축은행 공식 모집법인 · Welcome Savings Bank official partner",
};

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  return (
    <>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <form
            id="inquiry-form"
            className="max-w-xl space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div>
              <label
                htmlFor="cf-name"
                className="block text-sm font-semibold text-brand-secondary"
              >
                성함 / 상호
              </label>
              <input
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2"
                placeholder="홍길동 또는 ○○ 상회"
              />
            </div>
            <div>
              <label
                htmlFor="cf-phone"
                className="block text-sm font-semibold text-brand-secondary"
              >
                연락처
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label
                htmlFor="cf-loc"
                className="block text-sm font-semibold text-brand-secondary"
              >
                물건지 / 지역
              </label>
              <input
                id="cf-loc"
                name="location"
                required
                autoComplete="address-level2"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2"
                placeholder="예: 서울특별시 강남구 역삼동"
              />
            </div>
            <div>
              <label
                htmlFor="cf-amt"
                className="block text-sm font-semibold text-brand-secondary"
              >
                희망 대출 규모 (선택)
              </label>
              <input
                id="cf-amt"
                name="amount"
                inputMode="decimal"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2"
                placeholder={`참고: 안내 상한 최대 약 ${CAMPAIGN_LIMITS.maxLimitEok}억 · 심사 후 확정`}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-brand-secondary to-brand-secondary/90 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(0,45,86,0.25)] transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:w-auto sm:px-12"
            >
              이석형 대표와 상담 신청하기
            </button>
            {done && (
              <p className="rounded-xl border border-brand-primary/30 bg-brand-accent/20 px-4 py-3 text-sm text-brand-secondary">
                접수되었습니다. 담당자가 순차적으로 연락드립니다. 급하신 경우
                전화로 바로 요청해 주세요.
              </p>
            )}
          </form>
        </motion.div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-brand-secondary/15 bg-gradient-to-b from-brand-secondary/[0.07] to-white p-6 shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Trust · 대표 정보
            </p>
            <h3 className="mt-2 text-lg font-bold text-brand-secondary">
              {CEO_TRUST_BLOCK.companyKr}
            </h3>
            <p className="text-sm text-neutral-600">{CEO_TRUST_BLOCK.companyEn}</p>
            <dl className="mt-4 space-y-3 border-t border-neutral-200/80 pt-4 text-sm">
              <div>
                <dt className="text-xs font-semibold text-neutral-500">
                  {CEO_TRUST_BLOCK.role}
                </dt>
                <dd className="font-bold text-brand-secondary">{CEO_TRUST_BLOCK.ceo}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-neutral-500">문의</dt>
                <dd>
                  <a
                    href="tel:01063279227"
                    className="text-lg font-bold text-brand-secondary hover:text-brand-primary"
                  >
                    010-6327-9227
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-neutral-600">
              {CEO_TRUST_BLOCK.regNote}
            </p>
            <p className="mt-3 text-xs font-medium text-brand-secondary/90">
              {CEO_TRUST_BLOCK.partner}
            </p>
          </div>
        </aside>
      </div>

      <a
        href="tel:01063279227"
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-brand-secondary px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,45,86,0.45)] ring-2 ring-white/90 transition hover:bg-brand-secondary/92 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary md:hidden"
        aria-label="이석형 대표에게 전화 걸기 01063279227"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden
          >
            <path d="M6.6 10.8c1.2 2.4 3 4.5 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C10.9 21.2 3.8 14.1 3.8 5.2 3.8 4.5 4.3 4 5 4h3.5c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-1.8 1.2z" />
          </svg>
        </span>
        전화 상담
      </a>
    </>
  );
}
