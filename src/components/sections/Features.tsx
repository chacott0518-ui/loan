"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FUNDING_STEPS, INFOGRAPHIC_STATS } from "@/data/campaign-stats";

function IconDocument({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="14" y="8" width="36" height="48" rx="4" className="fill-white/10 stroke-brand-primary" strokeWidth="2" />
      <path d="M22 22h20M22 30h20M22 38h12" className="stroke-brand-accent" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconPhoneCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="18" y="6" width="28" height="52" rx="6" className="fill-white/10 stroke-brand-primary" strokeWidth="2" />
      <circle cx="40" cy="42" r="10" className="fill-brand-secondary stroke-brand-accent" strokeWidth="2" />
      <path d="M36 42l2.5 2.5L44 38" className="stroke-brand-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M12 36c8-8 14-12 22-10l6 12-4 8c-6 4-14 2-20-4" className="stroke-brand-primary" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 36c-8-8-14-12-22-10l-6 12 4 8c6 4 14 2 20-4" className="stroke-brand-accent" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="18" r="6" className="fill-brand-secondary/80" />
    </svg>
  );
}
const STEP_ICONS = [IconDocument, IconPhoneCheck, IconHandshake] as const;

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="funding-steps" className="scroll-mt-16 border-b border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/50 to-white py-14 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary sm:text-sm">
            3 Steps to Faster Funding
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-secondary sm:text-3xl sm:text-4xl">
            더 빠른 자금까지, 세 단계
          </h2>
        </motion.div>

        {/* 3단계 카드 — 모바일 1열, PC 3열 */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {FUNDING_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.article
                key={step.step}
                className="relative flex flex-col rounded-2xl border border-brand-secondary/10 bg-white/90 p-5 shadow-[0_16px_48px_rgba(0,45,86,0.07)] sm:rounded-3xl sm:p-7"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: reduceMotion ? 0 : i * 0.1, duration: 0.5 }}
              >
                <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 opacity-10">
                  <Icon className="h-full w-full" />
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-secondary text-sm font-bold text-brand-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-secondary sm:text-lg">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-primary">{step.summary}</p>
                {/* 모바일에서 불릿 숨김 */}
                <ul className="mt-3 hidden space-y-1.5 sm:block">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-neutral-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* 인포그래픽 stats — 모바일 2×2 */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
          {INFOGRAPHIC_STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-brand-primary/25 bg-gradient-to-br from-brand-secondary to-brand-secondary/90 p-4 text-white shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent/90">{stat.label}</p>
              <p className="mt-1.5 flex flex-wrap items-baseline gap-1 text-xl font-bold sm:text-2xl">
                <span>{stat.value}</span>
                <span className="text-base font-semibold text-brand-accent">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">{stat.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}