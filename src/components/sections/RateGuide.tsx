"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RateGuide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-8 sm:mt-12">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-brand-secondary/12 bg-gradient-to-br from-white to-neutral-50/80 shadow-[0_16px_50px_rgba(0,45,86,0.06)] sm:rounded-3xl"
      >
        <div className="border-b border-neutral-100 px-5 py-4 sm:px-8 sm:py-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            Repayment &amp; Fees
          </p>
          <h3 className="mt-1 text-lg font-bold text-brand-secondary sm:text-2xl">
            상환 방식 및 수수료
          </h3>
        </div>

        <div className="grid divide-y divide-neutral-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {/* 왼쪽 */}
          <div className="space-y-4 px-5 py-5 sm:px-8 sm:py-8">
            <h4 className="text-xs font-bold uppercase tracking-wide text-brand-primary">
              상환 방식
            </h4>
            <div className="space-y-3">
              <div className="border-l-4 border-brand-primary pl-3">
                <p className="text-sm font-bold text-brand-secondary">최대 5년 만기일시상환</p>
                <p className="mt-0.5 text-xs leading-relaxed text-neutral-600">
                  5년 이내 이자만 납부 / 만기일에 전액 상환
                </p>
              </div>
              <div className="border-l-4 border-brand-accent pl-3">
                <p className="text-sm font-bold text-brand-secondary">최대 10년 원리금균등분할상환</p>
                <p className="mt-0.5 text-xs leading-relaxed text-neutral-600">
                  10년 이내 이자와 원금을 매월 상환
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="space-y-4 px-5 py-5 sm:px-8 sm:py-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                중도상환수수료
              </h4>
              <div className="mt-2 space-y-2">
                <p className="text-xs leading-relaxed text-neutral-700">
                  중도상환금액 × 수수료율 × (잔여기간 / 대출기간)
                </p>
                <p className="text-xs text-neutral-500">3년 이상 거래 시 면제</p>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-accent/20 px-3 py-1.5 text-xs font-bold text-brand-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  수수료율 1.07%
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white px-4 py-2.5">
              <p className="text-xs font-semibold text-neutral-700">
                취급수수료 <span className="font-bold text-brand-secondary">없음</span>
                {" · "}
                연장수수료 <span className="font-bold text-brand-secondary">없음</span>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-brand-primary">인지세</h4>
              <ul className="mt-1.5 space-y-0.5 text-xs leading-relaxed text-neutral-600">
                <li>각 50%씩 고객·저축은행 부담</li>
                <li>· 5천만 원 이하 : <strong>없음</strong></li>
                <li>· ~1억 원 이하 : 7만 원</li>
                <li>· ~10억 원 이하 : 15만 원</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-100 bg-red-50/40 px-4 py-2.5">
              <p className="text-xs font-bold uppercase tracking-wide text-red-600">연체이율</p>
              <p className="mt-0.5 text-sm font-semibold text-neutral-800">
                대출금리 + 3% 이내{" "}
                <span className="text-neutral-500">(최대 연 19.9%)</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}