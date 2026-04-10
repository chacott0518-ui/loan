"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const NAV = [
  { id: "product", href: "/#product", label: "상품안내" },
  { id: "ltv", href: "/#ltv", label: "LTV/금리표" },
  { id: "eligibility", href: "/#eligibility", label: "자격확인" },
  { id: "consult", href: "/#consult", label: "상담예약" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>(() => {
    if (typeof window === "undefined") return NAV[0].id;
    const h = window.location.hash.replace("#", "");
    return NAV.some((n) => n.id === h) ? h : NAV[0].id;
  });

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (NAV.some((n) => n.id === h)) setActive(h);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => {
      const el = document.getElementById(n.id);
      return el ? { id: n.id, el } : null;
    }).filter(
      (
        pair
      ): pair is {
        id: (typeof NAV)[number]["id"];
        el: HTMLElement;
      } => pair !== null
    );

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          const id = visible[0].target.id;
          if (NAV.some((n) => n.id === id)) setActive(id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    els.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}

const overlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants: Variants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/25 bg-white/65 shadow-[0_1px_0_rgba(0,45,86,0.06)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 focus-visible:ring-offset-2"
          onClick={close}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Theoretical Global
          </span>
          <span className="text-sm font-bold tracking-tight text-brand-secondary sm:text-base">
            이론글로벌<span className="font-medium text-neutral-500">(주)</span>
          </span>
          <span className="text-[10px] font-medium text-brand-primary sm:text-xs">
            Welcome Savings Bank official partner · 웰컴저축은행 모집법인
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="주요 메뉴"
        >
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-secondary"
                    : "text-neutral-600 hover:text-brand-secondary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-1 bottom-1.5 h-0.5 rounded-full bg-brand-primary"
                    transition={{
                      type: reduceMotion ? "tween" : "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-secondary/15 bg-white/80 text-brand-secondary shadow-sm backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">메뉴 열기</span>
            <span className="relative block h-4 w-6">
              <motion.span
                className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-brand-secondary"
                animate={
                  open
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
              <motion.span
                className="absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-brand-secondary"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-[14px] block h-0.5 w-6 rounded-full bg-brand-secondary"
                animate={
                  open
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
            </span>
          </button>
        </div>

        <div className="hidden md:block">
          <Link
            href="/#consult"
            className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            상담 신청
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-brand-secondary/35 backdrop-blur-[2px] md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              aria-label="메뉴 닫기"
              onClick={close}
            />
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col border-l border-white/40 bg-white/92 py-6 pl-5 pr-4 shadow-2xl shadow-brand-secondary/25 backdrop-blur-2xl md:hidden"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                type: reduceMotion ? "tween" : "spring",
                stiffness: 320,
                damping: 34,
              }}
            >
              <div className="mb-6 flex items-center justify-between pr-1">
                <span className="text-sm font-bold text-brand-secondary">
                  메뉴
                </span>
                <button
                  type="button"
                  className="rounded-lg px-2 py-1 text-xs font-medium text-neutral-500 hover:text-brand-secondary"
                  onClick={close}
                >
                  닫기
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1" aria-label="모바일 메뉴">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.05 * i,
                      duration: reduceMotion ? 0 : 0.25,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-brand-secondary/90 hover:bg-brand-accent/25"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.12,
                }}
              >
                <Link
                  href="/#consult"
                  onClick={close}
                  className="mt-4 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand-primary to-brand-accent py-3.5 text-base font-bold text-brand-secondary shadow-lg"
                >
                  상담 신청
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
