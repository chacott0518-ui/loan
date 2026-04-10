"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHY_WELCOME_POINTS } from "@/data/campaign-stats";

function EmphasisText({ text }: { text: string }) {
  const parts = text.split(/\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-brand-secondary">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function WhyWelcome() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-welcome"
      className="relative min-h-screen scroll-mt-24 overflow-hidden border-b border-neutral-200/80 bg-white py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute -right-20 bottom-24 h-80 w-80 rounded-full bg-brand-primary/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary">
            Why Theoretical Global
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-brand-secondary sm:text-4xl lg:text-5xl">
            숫자만 보이는 LTV가 전부가 아닙니다
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            다른 은행·저축은행이 더 높은 LTV를 앞세울 수 있습니다. 이론글로벌은{" "}
            <strong className="font-semibold text-brand-secondary">
              비대면 처리
            </strong>
            와{" "}
            <strong className="font-semibold text-brand-secondary">
              다세대·연립·주거 오피스텔
            </strong>
            등 일반적으로 받기 어려운 담보를 적극 검토하는 데 강점이 있습니다.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {WHY_WELCOME_POINTS.map((card, i) => (
            <motion.article
              key={card.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-secondary/12 bg-gradient-to-br from-white via-neutral-50/80 to-brand-accent/10 p-8 shadow-[0_24px_70px_rgba(0,45,86,0.07)]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: reduceMotion ? 0 : i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }
              }
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-80" />
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                {card.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold text-brand-secondary sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                <EmphasisText text={card.body} />
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 rounded-2xl border border-brand-secondary/10 bg-brand-secondary/[0.04] px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                    {card.metric.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-brand-secondary">
                    {card.metric.value}
                    <span className="ml-1 text-base font-semibold text-brand-primary">
                      {card.metric.note}
                    </span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent opacity-80 transition group-hover:opacity-100" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
