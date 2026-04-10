"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import type { CreditTierKey, RegionGrade } from "@/lib/constants";
import {
  CREDIT_TIERS,
  describeLtvForUi,
  estimateRatePercent,
  getLtvCell,
  LOCATIONS,
  MAX_RATE_APARTMENT,
  MAX_RATE_NON_APARTMENT,
  MIN_RATE_APARTMENT,
  MIN_RATE_NON_APARTMENT,
  REGION_META,
} from "@/lib/constants";

function groupLocations() {
  const m = new Map<string, typeof LOCATIONS>();
  for (const loc of LOCATIONS) {
    const arr = m.get(loc.group) ?? [];
    arr.push(loc);
    m.set(loc.group, arr);
  }
  return Array.from(m.entries());
}

export function LtvCalculator() {
  const reduceMotion = useReducedMotion();
  const [locationId, setLocationId] = useState("gangnam");
  const [tier, setTier] = useState<CreditTierKey>("t1_4");
  const [apartment, setApartment] = useState(true);

  const location = useMemo(
    () => LOCATIONS.find((l) => l.id === locationId)!,
    [locationId]
  );
  const region = location.region as RegionGrade;

  const ltvDesc = useMemo(() => describeLtvForUi(region, tier), [region, tier]);
  const cell = useMemo(() => getLtvCell(region, tier), [region, tier]);

  const rates = useMemo(
    () =>
      estimateRatePercent({
        tier,
        propertyIsApartment: apartment,
        ltvMidpoint: ltvDesc.ltvMidpoint,
      }),
    [apartment, tier, ltvDesc.ltvMidpoint]
  );

  const barMax = cell.kind === "range" ? cell.max : cell.value;
  const barMin = cell.kind === "range" ? cell.min : cell.value;
  const showRangeBand = cell.kind === "range" && cell.max > cell.min;

  const grouped = useMemo(() => groupLocations(), []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-secondary/15 bg-gradient-to-br from-white via-neutral-50/90 to-brand-accent/10 p-6 shadow-[0_28px_80px_rgba(0,45,86,0.09)] sm:p-10">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-secondary/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              Interactive LTV
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-secondary sm:text-3xl">
              지역·신용에 따른 LTV 추정
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              이미지 4 매트릭스를 코드 데이터로 옮겼습니다. 조합을 바꾸면
              추정 LTV와 참고 금리가 함께 갱신됩니다.
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="ltv-loc"
              className="text-sm font-semibold text-brand-secondary"
            >
              지역 선택
            </label>
            <select
              id="ltv-loc"
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-base font-medium text-neutral-800 shadow-sm outline-none ring-brand-primary/25 transition focus:border-brand-primary focus:ring-2"
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
            <p className="text-xs text-neutral-500">
              {REGION_META[region].subtitle}
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-semibold text-brand-secondary">
              신용 구간 (매트릭스 열)
            </span>
            <div className="flex flex-wrap gap-2">
              {CREDIT_TIERS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTier(t.key)}
                  className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
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

          <div className="space-y-2">
            <span className="text-sm font-semibold text-brand-secondary">
              담보 유형 (금리 최저 기준)
            </span>
            <div className="flex rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setApartment(true)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${
                  apartment
                    ? "bg-brand-secondary text-white shadow"
                    : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                아파트
              </button>
              <button
                type="button"
                onClick={() => setApartment(false)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${
                  !apartment
                    ? "bg-brand-secondary text-white shadow"
                    : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                비아파트
              </button>
            </div>
            <p className="text-xs text-neutral-500">
              비아파트: 연립·다세대·주거 오피스텔 등 (심사 기준 부합 시)
            </p>
          </div>
        </div>

        <motion.div
          className="relative flex flex-col justify-center space-y-8 rounded-3xl border border-brand-primary/20 bg-brand-secondary/[0.03] p-6 sm:p-8 lg:col-span-7"
          layout
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            key={`${locationId}-${tier}-${apartment}`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            className="space-y-2"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Estimation
            </p>
            <h4 className="text-xl font-bold text-brand-secondary sm:text-2xl">
              {location.name} · {CREDIT_TIERS.find((x) => x.key === tier)?.shortLabel}
            </h4>
            <p className="text-lg font-semibold leading-snug text-neutral-800">
              {ltvDesc.headline}
            </p>
            {ltvDesc.sub && (
              <p className="rounded-2xl border border-brand-accent/40 bg-brand-accent/15 px-4 py-3 text-sm leading-relaxed text-brand-secondary">
                {ltvDesc.isEtc ? (
                  <>
                    <strong className="font-bold">상환 조건:</strong>
                    <br />
                    {ltvDesc.sub}
                  </>
                ) : (
                  ltvDesc.sub
                )}
              </p>
            )}
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-end justify-between gap-4 text-sm">
              <span className="font-semibold text-neutral-600">
                LTV–to–Value 시각화
              </span>
              <span className="text-right text-xs text-neutral-500">
                {cell.kind === "range"
                  ? `구간 ${cell.min}~${cell.max}%`
                  : `고정 ${cell.value}%`}
              </span>
            </div>
            <div className="relative h-12 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-inner">
              <motion.div
                key={`fill-${barMax}-${locationId}-${tier}`}
                className="absolute inset-y-0 left-0 rounded-2xl bg-gradient-to-r from-brand-secondary via-brand-secondary/88 to-brand-primary shadow-md"
                initial={reduceMotion ? false : { width: 0 }}
                animate={{ width: `${Math.min(100, barMax)}%` }}
                transition={{
                  duration: reduceMotion ? 0 : 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <AnimatePresence>
                {showRangeBand ? (
                  <motion.div
                    key="band"
                    className="pointer-events-none absolute inset-y-0 rounded-2xl border-y-2 border-dashed border-white/85 bg-white/20"
                    initial={false}
                    animate={{
                      left: `${barMin}%`,
                      width: `${Math.max(0.5, barMax - barMin)}%`,
                    }}
                    transition={{ duration: reduceMotion ? 0 : 0.5 }}
                  />
                ) : null}
              </AnimatePresence>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-neutral-500">
              <span>0%</span>
              <span>담보 시가 인정액 대비 대출 비중(LTV)</span>
              <span>100%</span>
            </div>
          </div>

          <motion.div
            key={`rates-${apartment}-${tier}-${ltvDesc.ltvMidpoint}`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
            className="grid gap-4 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-sm sm:grid-cols-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                최저 기준 금리 (이미지 4)
              </p>
              <p className="mt-2 text-3xl font-bold text-brand-secondary">
                {apartment ? MIN_RATE_APARTMENT.toFixed(2) : MIN_RATE_NON_APARTMENT.toFixed(2)}
                <span className="text-lg font-semibold text-brand-primary">%</span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {apartment ? "아파트" : "비아파트"} 우량·저LTV 등 최적 조건 기준
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                선택 조합 참고 금리 (연)
              </p>
              <p className="mt-2 text-3xl font-bold text-brand-secondary">
                {rates.low.toFixed(2)}~{rates.high.toFixed(2)}
                <span className="text-lg font-semibold text-brand-primary">%</span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                CB 매핑·LTV 가산 반영, 상한{" "}
                {apartment
                  ? MAX_RATE_APARTMENT.toFixed(2)
                  : MAX_RATE_NON_APARTMENT.toFixed(2)}
                %
              </p>
            </div>
          </motion.div>

          <p className="text-[11px] leading-relaxed text-neutral-500">
            본 추정은 안내용이며,{" "}
            <strong className="text-neutral-700">실제 LTV·금리·한도</strong>는
            웰컴저축은행 심사·내부 기준 및 시세(KB·AI·밸류쇼핑 등) 확정 후
            결정됩니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
