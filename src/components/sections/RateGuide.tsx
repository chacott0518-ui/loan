"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CB_BRACKETS,
  LTV_RATE_ADDITIVE,
  MAX_RATE_APARTMENT,
  MAX_RATE_NON_APARTMENT,
  MIN_RATE_APARTMENT,
  MIN_RATE_NON_APARTMENT,
  RATE_BY_CB,
  REPAYMENT_METHODS,
  APPRAISAL_BASIS_NOTE,
} from "@/lib/constants";

export function RateGuide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-14 space-y-10">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
          Rate matrix
        </p>
        <h3 className="mt-2 text-2xl font-bold text-brand-secondary sm:text-3xl">
          CB 구간별 금리·LTV 가산
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
          아파트는 연{" "}
          <strong className="text-brand-secondary">
            {MIN_RATE_APARTMENT.toFixed(2)}%~{MAX_RATE_APARTMENT.toFixed(2)}%
          </strong>
          , 비아파트는 연{" "}
          <strong className="text-brand-secondary">
            {MIN_RATE_NON_APARTMENT.toFixed(2)}%~{MAX_RATE_NON_APARTMENT.toFixed(2)}%
          </strong>{" "}
          범위(이미지 4)를 시각화했습니다. LTV 구간이 높아질수록 가산됩니다.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.05 }}
        className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,45,86,0.06)]"
      >
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/90">
                <th className="whitespace-nowrap px-4 py-3.5 font-bold text-brand-secondary sm:px-6">
                  CB 점수 구간
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-bold text-brand-secondary sm:px-6">
                  아파트 연 금리 (%)
                </th>
                <th className="whitespace-nowrap px-4 py-3.5 font-bold text-brand-secondary sm:px-6">
                  비아파트 연 금리 (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {CB_BRACKETS.map((row, i) => {
                const r = RATE_BY_CB[row.id];
                return (
                  <motion.tr
                    key={row.id}
                    className="border-b border-neutral-100 transition-colors hover:bg-brand-accent/5"
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      delay: reduceMotion ? 0 : i * 0.04,
                      duration: 0.35,
                    }}
                  >
                    <td className="px-4 py-3.5 font-medium text-neutral-800 sm:px-6">
                      <span className="block text-xs font-bold uppercase tracking-wide text-brand-primary/90">
                        {row.rangeDisplay}
                      </span>
                      {row.label}
                    </td>
                    <td className="px-4 py-3.5 text-neutral-700 sm:px-6">
                      {r.apartment.min.toFixed(2)} ~ {r.apartment.max.toFixed(2)}
                    </td>
                    <td className="px-4 py-3.5 text-neutral-700 sm:px-6">
                      {r.nonApartment.min.toFixed(2)} ~{" "}
                      {r.nonApartment.max.toFixed(2)}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        <div className="rounded-3xl border border-brand-secondary/12 bg-gradient-to-br from-white to-neutral-50/80 p-6 sm:p-8">
          <h4 className="text-lg font-bold text-brand-secondary">
            LTV 비중별 금리 가산 (p)
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-neutral-500">
            담보 인정가 대비 LTV가 상승할수록 가산(연 %p). 표는 이미지 4 기준
            참고치입니다.
          </p>
          <ul className="mt-4 space-y-3">
            {LTV_RATE_ADDITIVE.map((row, i) => (
              <motion.li
                key={row.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 text-sm shadow-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.05 }}
              >
                <span className="font-semibold text-brand-secondary">
                  {row.label}
                </span>
                <span className="text-right text-neutral-600">
                  아파트 +{row.apartmentAdd.toFixed(2)}p · 비아파트 +
                  {row.nonApartmentAdd.toFixed(2)}p
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-brand-secondary/12 bg-gradient-to-br from-brand-secondary/[0.06] to-brand-accent/10 p-6 sm:p-8">
          <h4 className="text-lg font-bold text-brand-secondary">상환 방식</h4>
          <p className="mt-2 text-xs text-neutral-600">
            이미지 1, 1-2, 3, 4에 따른 대표 구조입니다. 실제 적용 가능 여부는
            상품약관·승인 조건을 따릅니다.
          </p>
          <ul className="mt-5 space-y-4">
            {REPAYMENT_METHODS.map((m, i) => (
              <motion.li
                key={m.id}
                className="border-l-4 border-brand-primary pl-4"
                initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.06 }}
              >
                <p className="font-bold text-brand-secondary">{m.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {m.detail}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.p
        className="rounded-2xl border border-dashed border-brand-primary/35 bg-brand-accent/10 px-5 py-4 text-sm leading-relaxed text-neutral-700"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <strong className="text-brand-secondary">시세·감정 기준:</strong>{" "}
        {APPRAISAL_BASIS_NOTE}
      </motion.p>
    </div>
  );
}
