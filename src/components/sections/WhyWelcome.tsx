"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHY_WELCOME_POINTS } from "@/data/campaign-stats";

function EmphasisText({ text }: { text: string }) {
  const parts = text.split(/\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-semibold text-brand-secondary">{part}</strong>
      : <span key={i}>{part}</span>
  );
}

export function WhyWelcome() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-welcome" className="relative scroll-mt-16 overflow-hidden border-b border-neutral-200/80 bg-white py-12 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary sm:text-sm">
            Why Eloan Global.corp
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-brand-secondary sm:text-3xl">
            숫자만 보이는 LTV가 전부가 아닙니다
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
            이론글로벌은{" "}
            <strong className="font-semibold text-brand-secondary">비대면 처리</strong>와{" "}
            <strong className="font-semibold text-brand-secondary">다세대·연립·주거 오피스텔</strong>
            등 받기 어려운 담보를 적극 검토하는 데 강점이 있습니다.
          </p>
        </motion.div>

        {/* 모바일: 2×2 그리드 / PC: 2열 */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          {WHY_WELCOME_POINTS.map((card, i) => (
            <motion.article
              key={card.id}
              className="group relative flex min-h-[160px] flex-col overflow-hidden rounded-2xl border border-brand-secondary/10 bg-gradient-to-br from-white to-brand-accent/5 p-4 shadow-md sm:min-h-0 sm:rounded-3xl sm:p-7"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: reduceMotion ? 0 : i * 0.07, duration: 0.45 }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />
              <p className="text-[9px] font-bold uppercase tracking-widest text-brand-primary sm:text-xs">
                {card.eyebrow}
              </p>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-brand-secondary sm:mt-2 sm:text-xl">
                {card.title}
              </h3>
              {/* 본문 PC만 표시 */}
              <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-neutral-600 sm:block sm:text-base">
                <EmphasisText text={card.body} />
              </p>
              <div className="mt-auto flex items-end justify-between gap-2 rounded-xl border border-brand-secondary/10 bg-brand-secondary/[0.04] px-3 py-2 sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-3">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-neutral-400 sm:text-[10px]">
                    {card.metric.label}
                  </p>
                  <p className="mt-0.5 text-xs font-bold text-brand-secondary sm:text-base">
                    {card.metric.value}
                    <span className="ml-0.5 text-[10px] font-semibold text-brand-primary sm:ml-1 sm:text-sm">
                      {card.metric.note}
                    </span>
                  </p>
                </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent opacity-70 sm:h-8 sm:w-8" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}