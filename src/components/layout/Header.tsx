"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const NAV = [
  { id: "product",     href: "/#product",     label: "상품안내" },
  { id: "ltv",         href: "/#ltv",         label: "LTV/금리표" },
  { id: "eligibility", href: "/#eligibility", label: "자격확인" },
  { id: "consult",     href: "/#consult",     label: "상담예약" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>(NAV[0].id);

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
      (pair): pair is { id: (typeof NAV)[number]["id"]; el: HTMLElement } =>
        pair !== null
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

const panelVariants: Variants = {
  closed: { x: "100%", opacity: 0 },
  open:   { x: 0,      opacity: 1 },
};

export function Header() {
  const [open, setOpen]   = useState(false);
  const active            = useActiveSection();
  const reduceMotion      = useReducedMotion();
  const headerRef         = useRef<HTMLElement>(null);
  const [headerH, setHeaderH] = useState(64);

  /* 헤더 높이 측정 — 드로어 top 위치 계산용 */
  useEffect(() => {
    if (!headerRef.current) return;
    const ro = new ResizeObserver(() => {
      setHeaderH(headerRef.current?.offsetHeight ?? 64);
    });
    ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  /* 열릴 때 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const handleLogoClick = () => {
    close();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-white/25 bg-white/75 shadow-[0_1px_0_rgba(0,45,86,0.06)] backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* 로고 */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex flex-col gap-0 text-left focus:outline-none"
            aria-label="홈으로 이동"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-secondary sm:text-[11px]">
              Eloan Global.corp
            </span>
            <span className="text-sm font-bold leading-tight text-brand-secondary sm:text-[15px]">
              이론글로벌<span className="font-medium text-neutral-400">(주)</span>
            </span>
            <span className="text-[9px] font-medium leading-tight text-brand-primary sm:text-[10px]">
              웰컴저축은행 공식 모집법인
            </span>
          </button>

          {/* PC 네비 */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
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

          {/* 모바일 햄버거 */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-secondary/15 bg-white/90 text-brand-secondary shadow-sm"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            >
              <span className="relative block h-4 w-5">
                <motion.span
                  className="absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-brand-secondary"
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                />
                <motion.span
                  className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-brand-secondary"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.15 }}
                />
                <motion.span
                  className="absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-brand-secondary"
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                />
              </span>
            </button>
          </div>

          {/* PC CTA */}
          <div className="hidden md:block">
            <Link
              href="/#consult"
              className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-secondary/90"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </header>

      {/* ── 모바일 드로어 — header 밖, body 기준 fixed ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* 왼쪽 1/3 — 반투명 오버레이 (클릭 시 닫힘) */}
            <motion.div
              className="fixed z-[60] md:hidden"
              style={{
                top: headerH,
                left: 0,
                bottom: 52,           /* 하단 고정 바 높이 */
                width: "33%",
                backgroundColor: "rgba(0,0,0,0.55)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />

            {/* 오른쪽 2/3 — 드로어 패널 */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed z-[70] flex flex-col md:hidden"
              style={{
                top: headerH,
                right: 0,
                bottom: 52,           /* 하단 고정 바 높이 */
                width: "67%",
                backgroundColor: "#1f2937",
              }}
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                type: reduceMotion ? "tween" : "spring",
                stiffness: 300,
                damping: 30,
              }}
            >

              {/* 메뉴 링크 */}
              <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="모바일 메뉴">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : i * 0.06, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium transition-colors"
                      style={
                        active === item.id
                          ? { backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", fontWeight: 700 }
                          : { color: "#ffffff" }
                      }
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}