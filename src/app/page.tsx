import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eligibility } from "@/components/sections/Eligibility";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { LtvCalculator } from "@/components/sections/LtvCalculator";
import { RateGuide } from "@/components/sections/RateGuide";
import { WhyWelcome } from "@/components/sections/WhyWelcome";
import { SectionReveal } from "@/components/motion/SectionReveal";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-primary" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.2 2.4 3 4.5 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C10.9 21.2 3.8 14.1 3.8 5.2 3.8 4.5 4.3 4 5 4h3.5c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-1.8 1.2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        이론글로벌(주) × 웰컴저축은행 사업자담보대출 — 최대 10억, 비대면 당일
        실행, 다세대·연립·오피스텔 담보 가능, LTV 최대 85%
      </h1>

      <Header />

      {/* 모바일 하단 고정 바 높이만큼 main 아래 패딩 */}
      <main id="main-content" className="flex-1 pb-[52px] md:pb-0">
        <Hero />
        <Features />
        <WhyWelcome />

        <SectionReveal
          id="ltv"
          className="scroll-mt-16 border-b border-neutral-200/80 bg-white py-14 sm:py-20"
          delay={0.04}
        >
          <div className="mx-auto max-w-container space-y-10 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
                Rate &amp; LTV Guide
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug text-brand-secondary sm:text-3xl">
                LTV / 금리표
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                담보 유형·지역 권역·CB 신용점수·LTV 비중에 따라 조건이 달라질 수
                있습니다. 실제 승인 결과는 웰컴저축은행 심사 및 약관에 따릅니다.
              </p>
            </div>
            <LtvCalculator />
            <RateGuide />
          </div>
        </SectionReveal>

        <SectionReveal
          id="eligibility"
          className="scroll-mt-16 border-b border-neutral-200/80 bg-neutral-50/80 py-14 sm:py-20"
          delay={0.06}
        >
          <Eligibility />
        </SectionReveal>

        <SectionReveal
          id="consult"
          className="scroll-mt-16 bg-gradient-to-b from-white to-brand-accent/15 py-14 sm:py-20"
          delay={0.08}
        >
          <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              Consultation
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-secondary sm:text-3xl">
              상담 · 한도 조회
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              아래 양식을 제출하시면 순차적으로 연락드립니다.
            </p>
            <ContactForm />
          </div>
        </SectionReveal>
      </main>

      <Footer />

      {/* ── 모바일 하단 고정 바 (전체 페이지) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] flex md:hidden">
        
          <a href="tel:01063279227"
          className="flex flex-1 items-center justify-center gap-2 border-r border-neutral-200 border-t border-neutral-200 bg-white py-3.5 text-sm font-bold text-brand-secondary"
          aria-label="바로 전화하기"
        >
          <PhoneIcon />
          바로 전화하기
        </a>
        <a href="#consult"
          className="flex flex-1 items-center justify-center border-t border-brand-secondary bg-brand-secondary py-3.5 text-sm font-bold text-white"
          aria-label="상담 신청하기"
        >
          상담 신청하기
        </a>
      </div>
    </>
  );
}