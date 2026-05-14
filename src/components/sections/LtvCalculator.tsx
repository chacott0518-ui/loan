"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import type { CreditTierKey, RegionGrade } from "@/lib/constants";
import {
  CREDIT_TIERS,
  describeLtvForUi,
  getLtvCell,
  LOCATIONS,
  MIN_RATE_NON_APARTMENT,
  MIN_RATE_APARTMENT,
  REGION_META,
} from "@/lib/constants";

// constants.ts에 MIN_RATE_APARTMENT 없으면 아래 추가하세요:
// export const MIN_RATE_APARTMENT = 5.6;

function groupLocations() {
  const m = new Map<string, typeof LOCATIONS>();
  for (const loc of LOCATIONS) {
    const arr = m.get(loc.group) ?? [];
    arr.push(loc);
    m.set(loc.group, arr);
  }
  return Array.from(m.entries());
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-neutral-400" aria-hidden>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

export function LtvCalculator() {
  const reduceMotion = useReducedMotion();
  const [locationId, setLocationId] = useState("gangnam");
  const [tier, setTier] = useState<CreditTierKey>("t1_4");
  const [apartment, setApartment] = useState(true);

  const location = useMemo(() => LOCATIONS.find((l) => l.id === locationId)!, [locationId]);
  const region = location.region as RegionGrade;
  const ltvDesc = useMemo(() => describeLtvForUi(region, tier), [region, tier]);
  const cell = useMemo(() => getLtvCell(region, tier), [region, tier]);

  const barMax = cell.kind === "range" ? cell.max : cell.value;
  const barMin = cell.kind === "range" ? cell.min : cell.value;
  const showRangeBand = cell.kind === "range" && cell.max > cell.min;
  const grouped = useMemo(() => groupLocations(), []);

  const minRate = apartment ? 5.6 : 6.6;
  const rateLabel = apartment
    ? "아파트 최저 기준금리 5.60%~"
    : "비아파트 최저 기준금리 6.60%~";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-secondary/15 bg-gradient-to-br from-white via-neutral-50/90 to-brand-accent/10 p-4 shadow-[0_20px_60px_rgba(0,45,86,0.08)] sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-12 lg:gap-10">

        {/* 왼쪽 컨트롤 */}
        <div className="space-y-5 lg:col-span-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Interactive LTV</p>
            <h3 className="mt-1.5 text-xl font-bold text-brand-secondary sm:text-2xl">
              지역·신용에 따른 LTV 추정
            </h3>
          </div>

          {/* 지역 선택 */}
          <div className="space-y-1.5">
            <label htmlFor="ltv-loc" className="text-sm font-semibold text-brand-secondary">
              지역 선택
            </label>
            <div className="relative">
              <select
                id="ltv-loc"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-neutral-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-neutral-800 shadow-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/25"
              >
                {grouped.map(([group, locs]) => (
                  <optgroup key={group} label={group}>
                    {locs.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} · {REGION_META[loc.region].title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown />
              </div>
            </div>
            <p className="text-xs text-neutral-500">{REGION_META[region].subtitle}</p>
          </div>

          {/* 신용 구간 */}
          <div className="space-y-2">
            <span className="text-sm font-semibold text-brand-secondary">신용 구간</span>
            <div className="flex flex-wrap gap-2">
              {CREDIT_TIERS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTier(t.key)}
                  className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition focus:outline-none ${
                    tier === t.key
                      ? "border-brand-secondary bg-brand-secondary text-white shadow-md"
                      : "border-neutral-200 bg-white text-neutral-700 hover:border-brand-primary/40"
                  }`}
                >
                  {t.shortLabel}
                </button>
              ))}
            </div>
            <p className="text-xs text-neutral-500">
              {CREDIT_TIERS.find((x) => x.key === tier)?.description}
            </p>
          </div>

          {/* 담보 유형 */}
          <div className="space-y-2">
            <span className="text-sm font-semibold text-brand-secondary">담보 유형</span>
            <div className="flex rounded-xl border border-neutral-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setApartment(true)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition ${
                  apartment ? "bg-brand-secondary text-white shadow" : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                아파트
              </button>
              <button
                type="button"
                onClick={() => setApartment(false)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition ${
                  !apartment ? "bg-brand-secondary text-white shadow" : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                비아파트
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 결과 */}
        <motion.div
          className="relative flex flex-col justify-center space-y-5 rounded-2xl border border-brand-primary/20 bg-brand-secondary/[0.03] p-4 sm:rounded-3xl sm:p-7 lg:col-span-7"
          layout
        >
          <motion.div
            key={`${locationId}-${tier}-${apartment}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="space-y-2"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">Estimation</p>
            <h4 className="text-lg font-bold text-brand-secondary sm:text-xl">
              {location.name} · {CREDIT_TIERS.find((x) => x.key === tier)?.shortLabel}
            </h4>
            <p className="text-base font-semibold text-neutral-800">{ltvDesc.headline}</p>

            {/* 담보 유형별 금리 안내 — apartment 변경시 바뀜 */}
            <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${
              apartment
                ? "bg-brand-secondary/10 text-brand-secondary"
                : "bg-brand-accent/20 text-brand-secondary"
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              {rateLabel}
            </div>

            {ltvDesc.sub && (
  <p className="rounded-xl border border-brand-accent/40 bg-brand-accent/15 px-4 py-3 text-sm leading-relaxed text-brand-secondary">
    {ltvDesc.isEtc
      ? (
        <>
          <strong className="font-bold">상환 조건:</strong><br />
          {ltvDesc.sub}
          <br />
          <span className="mt-1 inline-block text-blue-600 font-bold">대출금액 최대 5천만원</span>
        </>
      )
      : ltvDesc.sub
    }
  </p>
)}
          </motion.div>

          {/* LTV 바 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-600">LTV 시각화</span>
              <span className="rounded-lg bg-brand-secondary/10 px-2.5 py-1 text-xs font-bold text-brand-secondary">
                {cell.kind === "range" ? `${cell.min}~${cell.max}%` : `${cell.value}%`}
              </span>
            </div>
            <div className="relative h-10 w-full overflow-hidden rounded-xl bg-neutral-200 shadow-inner">
              <motion.div
                key={`fill-${barMax}-${locationId}-${tier}`}
                className="absolute inset-y-0 left-0 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-primary shadow-md"
                initial={reduceMotion ? false : { width: 0 }}
                animate={{ width: `${Math.min(100, barMax)}%` }}
                transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <AnimatePresence>
                {showRangeBand && (
                  <motion.div
                    key="band"
                    className="pointer-events-none absolute inset-y-0 rounded-xl border-y-2 border-dashed border-white/80 bg-white/20"
                    initial={false}
                    animate={{ left: `${barMin}%`, width: `${Math.max(0.5, barMax - barMin)}%` }}
                    transition={{ duration: reduceMotion ? 0 : 0.5 }}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="flex justify-between text-xs text-neutral-400">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-neutral-500">
            본 추정은 안내용이며, <strong className="text-neutral-700">실제 LTV·금리·한도</strong>는
            웰컴저축은행 심사·시세 확정 후 결정됩니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}