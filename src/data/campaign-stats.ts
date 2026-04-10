/**
 * 이미지 1, 1-4, 3, 4 슬라이드와 동일한 수치·카피를 유지하세요.
 * (저장소에 원본 이미지가 없어, 요청·인용에 명시된 항목을 반영합니다.)
 */
export const CAMPAIGN_LIMITS = {
  /** 최대 한도 (억 원 단위) */
  maxLimitEok: 10,
} as const;

/** 히어로 · 인포그래픽용 4포인트 (슬라이드 1-4 구조) */
export const INFOGRAPHIC_STATS = [
  {
    id: "limit",
    label: "최대 한도",
    value: String(CAMPAIGN_LIMITS.maxLimitEok),
    suffix: "억 원",
    hint: "사업자담보대출 · 심사·승인 후 확정",
  },
  {
    id: "channel",
    label: "진행 방식",
    value: "비대면",
    suffix: "모바일",
    hint: "비방문 심사 프로세스",
  },
  {
    id: "speed",
    label: "실행",
    value: "당일",
    suffix: "실행",
    hint: "승인·실행 타이밍(케이스별 상이)",
  },
  {
    id: "collateral",
    label: "담보 확장",
    value: "다세대·연립",
    suffix: "OK",
    hint: "주거 오피스텔 등 일부 비아파트 포함",
  },
] as const;

export const HERO_BENEFITS = [
  {
    id: "mf-row",
    headline: "다세대·연립도 OK",
    sub: "도심형·연립 등 주거 담보 확대",
  },
  {
    id: "same-day",
    headline: "비대면 당일 실행",
    sub: "모바일 비방문 심사 후 빠른 실행",
  },
  {
    id: "cap",
    headline: `최대 ${CAMPAIGN_LIMITS.maxLimitEok}억 원 한도`,
    sub: "사업자담보대출 한도 상한(심사 후)",
  },
] as const;

/** 슬라이드 1-4 기반 3단계 */
export const FUNDING_STEPS = [
  {
    step: 1,
    title: "간편 서류 준비",
    summary: "필수 서류만 콕 집어 안내",
    bullets: [
      "사업자·소득·담보 핵심 서류 체크리스트",
      "제출 전 1:1 프리검토로 보완 최소화",
    ],
  },
  {
    step: 2,
    title: "모바일 비방문 심사",
    summary: "방문 없이 모바일로 심사 진행",
    bullets: [
      "영상·전자 서류로 비대면 절차",
      "진행 현황을 단계별로 안내",
    ],
  },
  {
    step: 3,
    title: "당일 대출 실행",
    summary: "승인 건에 한해 당일 실행 지향",
    bullets: [
      "케이스별로 실행 시점 상이",
      "최종 조건·금리는 웰컴저축은행 심사 결과 준수",
    ],
  },
] as const;

/** 이미지 1 · 가이드 카피 기반 차별화 포인트 */
export const WHY_WELCOME_POINTS = [
  {
    id: "ltv-tradeoff",
    eyebrow: "LTV 관점",
    title: "높은 LTV만 보이지 마세요",
    body:
      "타 금융사는 최대 LTV 비중을 강조하는 경우가 많습니다. 이론글로벌·웰컴저축은행 루트는 **비대면 처리**와 **실행 속도**, **담보 인정 범위**에서 실무 난이도를 낮추는 데 집중합니다.",
    metric: { label: "비교 관점", value: "LTV만이 아닌", note: "운영 리스크" },
  },
  {
    id: "digital",
    eyebrow: "프로세스",
    title: "비대면·당일 실행 체인",
    body:
      "모바일 기반 비방문 심사와 승인 후 **당일 실행**을 표준 플로로 설계했습니다. 방문·출장 시간을 줄이고 사업 현장에 집중하실 수 있도록 합니다.",
    metric: { label: "실행 목표", value: INFOGRAPHIC_STATS[2].value, note: INFOGRAPHIC_STATS[2].suffix },
  },
  {
    id: "collateral-breadth",
    eyebrow: "담보",
    title: "아파트만이 아닙니다",
    body:
      "**다세대주택·연립주택**은 물론, 통상 심사에서 제외되기 쉬운 **주거형 오피스텔** 등 비(非)아파트 담보를 적극 검토합니다. 웰컴저축은행 심사 기준에 부합하는 경우에 한합니다.",
    metric: { label: "담보 키워드", value: INFOGRAPHIC_STATS[3].value, note: INFOGRAPHIC_STATS[3].suffix },
  },
  {
    id: "limit-ceiling",
    eyebrow: "한도",
    title: "사업 확장용 캡",
    body:
      "사업자담보대출 **최대 한도는 심사 후 확정**되며, 안내 상한은 캠페인 기준 **10억 원**입니다. 운전·보증 구조에 따라 실제 지급액은 달라질 수 있습니다.",
    metric: {
      label: "안내 상한",
      value: String(CAMPAIGN_LIMITS.maxLimitEok),
      note: "억 원",
    },
  },
] as const;

/** 로열티 프리 배경 영상 (금융·도시 뉴스 스타일) — CDN 실패 시 다음 소스 순차 시도 */
export const HERO_VIDEO_SOURCES = [
  "https://assets.mixkit.co/videos/preview/mixkit-set-of-financial-graphs-on-a-digital-screen-30121-large.mp4",
  "https://videos.pexels.com/video-files/2495381/2495381-hd_1920_1080_24fps.mp4",
] as const;
