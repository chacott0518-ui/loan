"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { CAMPAIGN_LIMITS } from "@/data/campaign-stats";

const REP_INFO = {
  companyKr: "이론글로벌(주)",
  companyEn: "Eloan Global.corp",
  ceo: "이석형 (Lee Seok-hyung)",
  role: "대표이사",
  tel1: "010-6327-9227",
  tel1Href: "tel:01063279227",
  tel2: "02-6956-1238",
  tel2Href: "tel:0269561238",
  partner: "웰컴저축은행 공식 모집법인 · 저축은행중앙회 등록업체",
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.2 2.4 3 4.5 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C10.9 21.2 3.8 14.1 3.8 5.2 3.8 4.5 4.3 4 5 4h3.5c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-1.8 1.2z" />
    </svg>
  );
}

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  const scrollToForm = () => {
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_340px]">

        {/* 상담 폼 */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <form
            id="inquiry-form"
            className="max-w-xl space-y-4 sm:space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div>
              <label htmlFor="cf-name" className="block text-sm font-semibold text-brand-secondary">성함 / 상호</label>
              <input id="cf-name" name="name" required autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2 sm:text-base"
                placeholder="홍길동 또는 ○○ 상회" />
            </div>
            <div>
              <label htmlFor="cf-phone" className="block text-sm font-semibold text-brand-secondary">연락처</label>
              <input id="cf-phone" name="phone" type="tel" required autoComplete="tel"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2 sm:text-base"
                placeholder="010-0000-0000" />
            </div>
            <div>
              <label htmlFor="cf-loc" className="block text-sm font-semibold text-brand-secondary">물건지 / 지역</label>
              <input id="cf-loc" name="location" required autoComplete="address-level2"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2 sm:text-base"
                placeholder="예: 서울특별시 강남구 역삼동" />
            </div>
            <div>
              <label htmlFor="cf-amt" className="block text-sm font-semibold text-brand-secondary">
                희망 대출 규모 <span className="font-normal text-neutral-400">(선택)</span>
              </label>
              <input id="cf-amt" name="amount" inputMode="decimal"
                className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm outline-none ring-brand-primary/30 transition placeholder:text-neutral-400 focus:border-brand-primary focus:ring-2 sm:text-base"
                placeholder={`참고: 안내 상한 최대 약 ${CAMPAIGN_LIMITS.maxLimitEok}억 · 심사 후 확정`} />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-brand-secondary to-brand-secondary/90 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(0,45,86,0.25)] transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:text-base"
            >
              상담 신청하기
            </button>
            {done && (
              <p className="rounded-xl border border-brand-primary/30 bg-brand-accent/20 px-4 py-3 text-sm text-brand-secondary">
                접수되었습니다. 담당자가 순차적으로 연락드립니다.
              </p>
            )}
          </form>
        </motion.div>

        {/* 대표 정보 카드 — 모바일 숨김 (issue 13) */}
        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-brand-secondary/15 bg-gradient-to-b from-brand-secondary/[0.07] to-white p-5 shadow-md sm:rounded-3xl sm:p-6">
            <h3 className="text-base font-bold text-brand-secondary sm:text-lg">{REP_INFO.companyKr}</h3>
            <p className="text-xs text-neutral-500 sm:text-sm">{REP_INFO.companyEn}</p>
            <dl className="mt-4 space-y-4 border-t border-neutral-200/80 pt-4 text-sm">
              <div>
                <dt className="text-xs font-semibold text-neutral-500">{REP_INFO.role}</dt>
                <dd className="mt-0.5 font-bold text-brand-secondary">{REP_INFO.ceo}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-neutral-500">문의</dt>
                <dd className="mt-1">
                  <a href={REP_INFO.tel1Href} className="flex items-center gap-1.5 text-base font-bold text-brand-secondary transition hover:text-brand-primary sm:text-lg">
                    <PhoneIcon className="h-4 w-4 text-brand-primary" />
                    {REP_INFO.tel1}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-neutral-500">대표번호</dt>
                <dd className="mt-1">
                  <a href={REP_INFO.tel2Href} className="flex items-center gap-1.5 text-base font-bold text-brand-secondary transition hover:text-brand-primary sm:text-lg">
                    <PhoneIcon className="h-4 w-4 text-brand-primary" />
                    {REP_INFO.tel2}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-4 rounded-xl bg-brand-secondary/5 px-3 py-2 text-xs leading-relaxed text-neutral-600">
              {REP_INFO.partner}
            </p>
          </div>
        </motion.aside>
      </div>

      {/* 모바일 하단 플로팅: 상담 신청하기 버튼 (전화 FAB → 상담 버튼으로 교체) */}
    </>
  );
}