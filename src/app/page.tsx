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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhyWelcome />

        <SectionReveal
          id="ltv"
          className="scroll-mt-24 min-h-screen border-b border-neutral-200/80 bg-white py-20"
          delay={0.04}
        >
          <div className="mx-auto max-w-container space-y-12 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-secondary sm:text-3xl">
                LTV / 금리표
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                담보 유형·지역 권역·CB 신용점수·LTV 비중에 따라 조건이 달라질 수
                있습니다. 아래 도표는 이미지 4 매트릭스를 반영한 참고용 도구이며,
                실제 승인 결과는 웰컴저축은행 심사 및 약관에 따릅니다.
              </p>
            </div>
            <LtvCalculator />
            <RateGuide />
          </div>
        </SectionReveal>

        <SectionReveal
          id="eligibility"
          className="scroll-mt-24 min-h-screen border-b border-neutral-200/80 bg-neutral-50/80 py-20"
          delay={0.06}
        >
          <Eligibility />
        </SectionReveal>

        <SectionReveal
          id="consult"
          className="scroll-mt-24 min-h-screen bg-gradient-to-b from-white to-brand-accent/15 py-20"
          delay={0.08}
        >
          <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-secondary sm:text-3xl">
              상담 · 한도 조회
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              아래 양식을 제출하시면 이석형 대표가 순차적으로 연락드립니다. 급한
              상담은{" "}
              <a
                href="tel:01063279227"
                className="font-semibold text-brand-secondary underline-offset-2 hover:text-brand-primary hover:underline"
              >
                010-6327-9227
              </a>
              으로 직접 전화 주실 수 있습니다.
            </p>
            <ContactForm />
          </div>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
