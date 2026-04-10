"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CAMPAIGN_LIMITS,
  HERO_BENEFITS,
  HERO_VIDEO_SOURCES,
} from "@/data/campaign-stats";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToInquiry = () => {
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section
      id="product"
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden py-20"
    >
      <video
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        {HERO_VIDEO_SOURCES.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-secondary/97 via-brand-secondary/88 to-brand-secondary/94"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,196,168,0.22),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[min(100vh,56rem)] max-w-container flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Welcome Savings Bank × Theoretical Global
          </p>
          <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            당신의 사업, 더 큰 세상으로.{" "}
            <span className="mt-2 block text-brand-accent">
              이론글로벌 <span className="text-white">×</span> 웰컴저축은행
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            사업자담보대출 최대{" "}
            <strong className="font-semibold text-brand-accent">
              {CAMPAIGN_LIMITS.maxLimitEok}억 원
            </strong>{" "}
            안내. 비대면 모바일 심사와 당일 실행을 지향하며, 다세대·연립 등
            주거 담보도 적극 검토합니다.
          </p>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          initial="hidden"
          animate="show"
          variants={
            reduceMotion
              ? { hidden: {}, show: {} }
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
                  },
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
                      hidden: { opacity: 0, y: 16, scale: 0.98 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      },
                    }
              }
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-md sm:px-5 sm:py-3.5"
            >
              <p className="text-sm font-bold text-brand-accent sm:text-base">
                {item.headline}
              </p>
              <p className="mt-0.5 text-xs text-white/80 sm:text-sm">{item.sub}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-12"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 0.45,
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <button
            type="button"
            onClick={scrollToInquiry}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-primary to-brand-accent px-10 py-4 text-base font-bold text-brand-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_48px_rgba(181,157,123,0.65),0_12px_40px_rgba(0,45,86,0.45)] transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_56px_rgba(212,196,168,0.75)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="relative">한도 조회하기</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
