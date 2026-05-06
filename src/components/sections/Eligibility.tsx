"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ELIGIBILITY_REQUIREMENTS,
  INELIGIBILITY_ITEMS,
} from "@/lib/eligibility-data";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <motion.path d="M5 12l4 4L19 7" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <motion.path d="M7 7l10 10M17 7L7 17" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
    </svg>
  );
}

export function Eligibility() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"ok" | "no">("ok");

  return (
    <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
          Qualification
        </p>
        <h2 className="mt-2 text-2xl font-bold text-brand-secondary sm:text-3xl">
          자격 확인
        </h2>
        {/* 안내 텍스트 완전 삭제 */}
      </motion.div>

      {/* ── 모바일: 탭 슬라이드 UI ─────────────────────────── */}
      <div className="mt-8 lg:hidden">
        {/* 탭 버튼 */}
        <div className="flex rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setTab("ok")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
              tab === "ok"
                ? "bg-brand-secondary text-white shadow-md"
                : "text-neutral-500 hover:text-brand-secondary"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current text-xs">✓</span>
            적격 요건
          </button>
          <button
            type="button"
            onClick={() => setTab("no")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
              tab === "no"
                ? "bg-red-600 text-white shadow-md"
                : "text-neutral-500 hover:text-red-600"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current text-xs">✕</span>
            유의 사항
          </button>
        </div>

        {/* 탭 콘텐츠 */}
        <AnimatePresence mode="wait">
          {tab === "ok" ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
              className="mt-4 rounded-2xl border border-brand-primary/25 bg-gradient-to-br from-white to-brand-accent/10 p-5 shadow-md"
            >
              <h3 className="text-base font-bold text-brand-secondary">기본 적격 요건</h3>
              <ul className="mt-4 space-y-3">
                {ELIGIBILITY_REQUIREMENTS.map((item) => (
                  <li key={item.id} className="flex gap-3 rounded-xl border border-white/60 bg-white/80 p-3.5 shadow-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-secondary">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-neutral-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="no"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
            >
              <h3 className="text-base font-bold text-brand-secondary">부적격·유의 사항</h3>
              <p className="mt-1 text-xs text-neutral-500">
                다음에 해당하면 접수가 제한되거나 별도 검토가 필요할 수 있습니다.
              </p>
              <ul className="mt-4 space-y-3">
                {INELIGIBILITY_ITEMS.map((item) => (
                  <li key={item.id} className="flex gap-3 rounded-xl border border-red-100/80 bg-red-50/40 px-4 py-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-100/80 text-red-700">
                      <XIcon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-neutral-800">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── PC: 기존 2열 그리드 ───────────────────────────── */}
      <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="rounded-3xl border border-brand-primary/25 bg-gradient-to-br from-white to-brand-accent/10 p-8 shadow-[0_24px_70px_rgba(0,45,86,0.06)]"
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-brand-secondary">기본 적격 요건</h3>
          <ul className="mt-6 space-y-4">
            {ELIGIBILITY_REQUIREMENTS.map((item, i) => (
              <motion.li
                key={item.id}
                className="flex gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.06, duration: 0.4 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-brand-secondary">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.detail}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_24px_70px_rgba(0,45,86,0.05)]"
          initial={reduceMotion ? false : { opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-brand-secondary">부적격·유의 사항</h3>
          <p className="mt-2 text-sm text-neutral-500">
            다음에 해당하면 접수가 제한되거나 별도 검토가 필요할 수 있습니다.
          </p>
          <ul className="mt-6 space-y-3">
            {INELIGIBILITY_ITEMS.map((item, i) => (
              <motion.li
                key={item.id}
                className="flex gap-3 rounded-2xl border border-red-100/80 bg-red-50/40 px-4 py-3.5"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.05, duration: 0.35 }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100/80 text-red-700">
                  <XIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-neutral-800">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}