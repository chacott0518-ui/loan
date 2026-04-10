"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FUNDING_STEPS, INFOGRAPHIC_STATS } from "@/data/campaign-stats";

function IconDocument({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="14"
        y="8"
        width="36"
        height="48"
        rx="4"
        className="fill-white/10 stroke-brand-primary"
        strokeWidth="2"
      />
      <motion.path
        d="M22 22h20M22 30h20M22 38h12"
        className="stroke-brand-accent"
        strokeWidth="2"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.05 }}
      />
    </svg>
  );
}

function IconPhoneCheck({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="18"
        y="6"
        width="28"
        height="52"
        rx="6"
        className="fill-white/10 stroke-brand-primary"
        strokeWidth="2"
      />
      <motion.circle
        cx="40"
        cy="42"
        r="10"
        className="fill-brand-secondary stroke-brand-accent"
        strokeWidth="2"
        initial={reduceMotion ? undefined : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      />
      <motion.path
        d="M36 42l2.5 2.5L44 38"
        className="stroke-brand-accent"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? undefined : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.15 }}
      />
    </svg>
  );
}

function IconHandshake({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d="M12 36c8-8 14-12 22-10l6 12-4 8c-6 4-14 2-20-4"
        className="stroke-brand-primary"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      />
      <motion.path
        d="M52 36c-8-8-14-12-22-10l-6 12 4 8c6 4 14 2 20-4"
        className="stroke-brand-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08 }}
      />
      <circle cx="32" cy="18" r="6" className="fill-brand-secondary/80" />
    </svg>
  );
}

const STEP_ICONS = [IconDocument, IconPhoneCheck, IconHandshake] as const;

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="funding-steps"
      className="relative min-h-screen scroll-mt-24 border-b border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/50 to-white py-20"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary">
            3 Steps to Faster Funding
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-secondary sm:text-4xl">
            더 빠른 자금까지, 세 단계
          </h2>
          <p className="mt-4 text-neutral-600">
            슬라이드 1-4 기반 프로세스를 세 단계로 압축해 보여드립니다. 단계별
            소요·조건은 개별 심사에 따라 달라질 수 있습니다.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FUNDING_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.article
                key={step.step}
                className="group relative flex flex-col rounded-3xl border border-brand-secondary/10 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,45,86,0.08)] backdrop-blur-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }
                }
              >
                <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 opacity-[0.12] transition group-hover:opacity-20">
                  <Icon className="h-full w-full" />
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-secondary text-sm font-bold text-brand-accent">
                  {step.step}
                </span>
                <div className="relative mt-6 h-28 w-full max-w-[7.5rem]">
                  <Icon className="h-full w-full" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-secondary">
                  {step.title}
                </h3>
                <p className="mt-2 font-medium text-brand-primary">{step.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={
            reduceMotion
              ? { hidden: {}, show: {} }
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08 },
                  },
                }
          }
        >
          {INFOGRAPHIC_STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={
                reduceMotion
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45 },
                      },
                    }
              }
              className="rounded-2xl border border-brand-primary/25 bg-gradient-to-br from-brand-secondary to-brand-secondary/90 p-5 text-white shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent/90">
                {stat.label}
              </p>
              <p className="mt-2 flex flex-wrap items-baseline gap-1 text-2xl font-bold sm:text-3xl">
                <span>{stat.value}</span>
                <span className="text-lg font-semibold text-brand-accent sm:text-xl">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/75">{stat.hint}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
