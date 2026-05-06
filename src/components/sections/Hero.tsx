"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CAMPAIGN_LIMITS, HERO_BENEFITS, HERO_VIDEO_SOURCES } from "@/data/campaign-stats";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="product" className="relative isolate scroll-mt-16 overflow-hidden">
      <video
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover object-center"
        autoPlay muted loop playsInline preload="metadata" aria-hidden
      >
        {HERO_VIDEO_SOURCES.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-secondary/97 via-brand-secondary/88 to-brand-secondary/94" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,196,168,0.2),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-container flex-col justify-start px-4 pb-14 pt-24 sm:justify-center sm:pt-20 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-brand-accent sm:text-sm">
            welcome savings bank × Eloan Global.corp
          </p>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            당신의 사업, 더 큰 세상으로.
            <span className="mt-2 block text-brand-accent">
              이론글로벌 <span className="text-white">×</span> 웰컴저축은행
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
            사업자담보대출 최대{" "}
            <strong className="font-semibold text-brand-accent">
              {CAMPAIGN_LIMITS.maxLimitEok}억 원
            </strong>{" "}
            안내. 비대면 모바일 심사와 당일 실행을 지향하며, 다세대·연립 등
            주거 담보도 적극 검토합니다.
          </p>
        </motion.div>

        <motion.ul
          className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3"
          initial="hidden"
          animate="show"
          variants={
            reduceMotion
              ? { hidden: {}, show: {} }
              : {
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                }
          }
        >
          {HERO_BENEFITS.map((item) => (
            <motion.li
              key={item.id}
              variants={
                reduceMotion
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }
              }
              className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md sm:rounded-2xl sm:px-5 sm:py-3"
            >
              <p className="text-sm font-bold text-brand-accent">{item.headline}</p>
              <p className="mt-0.5 text-xs leading-snug text-white/75">{item.sub}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}