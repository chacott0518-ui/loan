/**
 * LTV·금리 매트릭스 (이미지 4 기준)
 * 실제 승인 조건·수치는 웰컴저축은행 공시 및 심사 결과에 따릅니다.
 * 원본 슬라이드와 불일치 시 본 파일만 수정하면 UI 전반에 반영됩니다.
 */

export type RegionGrade = "1st" | "2nd" | "3rd" | "etc";

/** 신용구간 (매트릭스 열: 1~4, 5, 6~7, 8+) */
export type CreditTierKey = "t1_4" | "t5" | "t6_7" | "t8plus";

export type LtvCellRange = { kind: "range"; min: number; max: number };
export type LtvCellFixed = {
  kind: "fixed";
  value: number;
  repaymentNote: string;
};

export type LtvCell = LtvCellRange | LtvCellFixed;

export const CREDIT_TIERS: {
  key: CreditTierKey;
  label: string;
  shortLabel: string;
  description: string;
}[] = [
  {
    key: "t1_4",
    label: "신용 1~4등급 구간",
    shortLabel: "1~4등급",
    description: "우량 신용·낮은 연체 위험",
  },
  {
    key: "t5",
    label: "신용 5등급",
    shortLabel: "5등급",
    description: "양호 구간",
  },
  {
    key: "t6_7",
    label: "신용 6~7등급",
    shortLabel: "6~7등급",
    description: "보통·주의 혼합",
  },
  {
    key: "t8plus",
    label: "신용 8등급 이상",
    shortLabel: "8등급+",
    description: "상세 심사·담보 비중 확대",
  },
];

/** 지역 등급 설명 (매트릭스 행) */
export const REGION_META: Record<
  RegionGrade,
  { title: string; subtitle: string }
> = {
  "1st": {
    title: "1급지 (핵심 권역)",
    subtitle: "서울 핵심·일부 우량 경기 등",
  },
  "2nd": {
    title: "2급지",
    subtitle: "수도권 주요 생활권·지방 광역 핵심",
  },
  "3rd": {
    title: "3급지",
    subtitle: "그 외 지방 중심지",
  },
  etc: {
    title: "기타 (Etc.)",
    subtitle: "비(非)우선 권역 — 단일 LTV·상환 방식 조건부",
  },
};

export type LocationItem = {
  id: string;
  name: string;
  region: RegionGrade;
  /** 표시용 그룹 라벨 */
  group: string;
};

/**
 * 지역 → 권역 매핑 (이미지 4 리스트 기반)
 * 기타(Etc.)는 단일 옵션으로 묶어 LTV 60%·원리금균등 규정 적용
 */
export const LOCATIONS: LocationItem[] = [
  { id: "gangnam", name: "강남구", region: "1st", group: "서울특별시" },
  { id: "seocho", name: "서초구", region: "1st", group: "서울특별시" },
  { id: "songpa", name: "송파구", region: "1st", group: "서울특별시" },
  { id: "yongsan", name: "용산구", region: "1st", group: "서울특별시" },
  { id: "seongdong", name: "성동구", region: "1st", group: "서울특별시" },
  { id: "mapo", name: "마포구", region: "1st", group: "서울특별시" },
  { id: "jung", name: "중구", region: "1st", group: "서울특별시" },
  { id: "jongno", name: "종로구", region: "1st", group: "서울특별시" },
  { id: "yeongdeungpo", name: "영등포구", region: "1st", group: "서울특별시" },
  { id: "yangcheon", name: "양천구", region: "2nd", group: "서울특별시" },
  { id: "guro", name: "구로구", region: "2nd", group: "서울특별시" },
  { id: "geumcheon", name: "금천구", region: "2nd", group: "서울특별시" },
  { id: "dongjak", name: "동작구", region: "2nd", group: "서울특별시" },
  { id: "gwanak", name: "관악구", region: "2nd", group: "서울특별시" },
  { id: "gwangjin", name: "광진구", region: "2nd", group: "서울특별시" },
  { id: "seongbuk", name: "성북구", region: "2nd", group: "서울특별시" },
  { id: "gangbuk", name: "강북구", region: "2nd", group: "서울특별시" },
  { id: "nowon", name: "노원구", region: "2nd", group: "서울특별시" },
  { id: "dobong", name: "도봉구", region: "2nd", group: "서울특별시" },
  { id: "eunpyeong", name: "은평구", region: "2nd", group: "서울특별시" },
  { id: "seodaemun", name: "서대문구", region: "2nd", group: "서울특별시" },
  { id: "gangseo", name: "강서구", region: "2nd", group: "서울특별시" },
  { id: "dongdaemun", name: "동대문구", region: "2nd", group: "서울특별시" },
  { id: "jungnang", name: "중랑구", region: "2nd", group: "서울특별시" },
  { id: "gangdong", name: "강동구", region: "2nd", group: "서울특별시" },
  { id: "bundang", name: "성남시 분당구", region: "2nd", group: "경기도" },
  { id: "suwon", name: "수원시", region: "2nd", group: "경기도" },
  { id: "goyang", name: "고양시", region: "2nd", group: "경기도" },
  { id: "yongin", name: "용인시", region: "2nd", group: "경기도" },
  { id: "bucheon", name: "부천시", region: "2nd", group: "경기도" },
  { id: "ansan", name: "안산시", region: "2nd", group: "경기도" },
  { id: "anyang", name: "안양시", region: "2nd", group: "경기도" },
  { id: "namyangju", name: "남양주시", region: "3rd", group: "경기도" },
  { id: "pyeongtaek", name: "평택시", region: "3rd", group: "경기도" },
  { id: "icheon", name: "이천시", region: "3rd", group: "경기도" },
  { id: "cheonan", name: "천안시", region: "3rd", group: "충청남도" },
  { id: "cheongju", name: "청주시", region: "3rd", group: "충청북도" },
  { id: "daejeon", name: "대전광역시", region: "3rd", group: "광역시" },
  { id: "jeju", name: "제주시", region: "3rd", group: "제주특별자치도" },
  { id: "busan_haeundae", name: "부산광역시 (해운대 등)", region: "3rd", group: "광역시" },
  { id: "daegu", name: "대구광역시", region: "3rd", group: "광역시" },
  { id: "etc_all", name: "기타 지역 (Etc.)", region: "etc", group: "전국 기타" },
];

/** 이미지 4 — 권역×신용구간 LTV 매트릭스 (% ) */
export const LTV_MATRIX: Record<RegionGrade, Record<CreditTierKey, LtvCell>> = {
  "1st": {
    t1_4: { kind: "range", min: 80, max: 85 },
    t5: { kind: "range", min: 75, max: 80 },
    t6_7: { kind: "range", min: 70, max: 75 },
    t8plus: { kind: "range", min: 58, max: 65 },
  },
  "2nd": {
    t1_4: { kind: "range", min: 75, max: 80 },
    t5: { kind: "range", min: 70, max: 75 },
    t6_7: { kind: "range", min: 65, max: 70 },
    t8plus: { kind: "range", min: 55, max: 62 },
  },
  "3rd": {
    t1_4: { kind: "range", min: 70, max: 75 },
    t5: { kind: "range", min: 65, max: 70 },
    t6_7: { kind: "range", min: 60, max: 65 },
    t8plus: { kind: "range", min: 52, max: 58 },
  },
  etc: {
    t1_4: {
      kind: "fixed",
      value: 60,
      repaymentNote:
        "원리금균등분할상환(또는 동 등 상품규정상 동일 취지 상환) 적용",
    },
    t5: {
      kind: "fixed",
      value: 60,
      repaymentNote:
        "원리금균등분할상환(또는 동 등 상품규정상 동일 취지 상환) 적용",
    },
    t6_7: {
      kind: "fixed",
      value: 60,
      repaymentNote:
        "원리금균등분할상환(또는 동 등 상품규정상 동일 취지 상환) 적용",
    },
    t8plus: {
      kind: "fixed",
      value: 60,
      repaymentNote:
        "원리금균등분할상환(또는 동 등 상품규정상 동일 취지 상환) 적용",
    },
  },
};

/** 최저 금리 (이미지 4) */
export const MIN_RATE_APARTMENT = 5.6;
export const MIN_RATE_NON_APARTMENT = 6.6;

/** 최고 금리 (이미지 4 — CB·LTV 최악 조합) */
export const MAX_RATE_APARTMENT = 11.9;
export const MAX_RATE_NON_APARTMENT = 15.9;

/** NICE / CB 스코어 구간 (이미지 4) */
export const CB_BRACKETS = [
  {
    id: "cb_910p",
    label: "910점 초과",
    rangeDisplay: "910+",
    minExclusive: 910,
    maxInclusive: null as number | null,
  },
  {
    id: "cb_860_910",
    label: "860점 이상 ~ 910점 이하",
    rangeDisplay: "860~910",
    minExclusive: 859.9,
    maxInclusive: 910,
  },
  {
    id: "cb_820_860",
    label: "820점 이상 ~ 860점 미만",
    rangeDisplay: "820~860",
    minExclusive: 819.9,
    maxInclusive: 859.9,
  },
  {
    id: "cb_780_820",
    label: "780점 이상 ~ 820점 미만",
    rangeDisplay: "780~820",
    minExclusive: 779.9,
    maxInclusive: 819.9,
  },
  {
    id: "cb_740_780",
    label: "740점 이상 ~ 780점 미만",
    rangeDisplay: "740~780",
    minExclusive: 739.9,
    maxInclusive: 779.9,
  },
  {
    id: "cb_700_740",
    label: "700점 이상 ~ 740점 미만",
    rangeDisplay: "700~740",
    minExclusive: 699.9,
    maxInclusive: 739.9,
  },
  {
    id: "cb_u700",
    label: "700점 미만",
    rangeDisplay: "~700",
    minExclusive: -Infinity,
    maxInclusive: 699.9,
  },
] as const;

export type CbBracketId = (typeof CB_BRACKETS)[number]["id"];

/**
 * CB 구간별 기준 금리 (% 연) — 담보 최저 LTV 가정 시 하단, 최대 LTV 가정 시 상단에 가까움
 * 아파트 5.60~11.90%, 비아파트 6.60~15.90%
 */
export const RATE_BY_CB: Record<
  CbBracketId,
  { apartment: { min: number; max: number }; nonApartment: { min: number; max: number } }
> = {
  cb_910p: {
    apartment: { min: 5.6, max: 6.85 },
    nonApartment: { min: 6.6, max: 8.1 },
  },
  cb_860_910: {
    apartment: { min: 5.95, max: 7.35 },
    nonApartment: { min: 7.05, max: 9.0 },
  },
  cb_820_860: {
    apartment: { min: 6.35, max: 7.9 },
    nonApartment: { min: 7.55, max: 10.15 },
  },
  cb_780_820: {
    apartment: { min: 6.85, max: 8.55 },
    nonApartment: { min: 8.2, max: 11.5 },
  },
  cb_740_780: {
    apartment: { min: 7.45, max: 9.35 },
    nonApartment: { min: 9.05, max: 13.1 },
  },
  cb_700_740: {
    apartment: { min: 8.2, max: 10.45 },
    nonApartment: { min: 10.05, max: 14.35 },
  },
  cb_u700: {
    apartment: { min: 9.35, max: 11.9 },
    nonApartment: { min: 12.05, max: 15.9 },
  },
};

/** 매트릭스 신용 구간 → 금리표 CB 행 (추정 매핑 — 이미지 4 각각 동일 시 수정) */
export const CREDIT_TIER_TO_CB: Record<CreditTierKey, CbBracketId> = {
  t1_4: "cb_910p",
  t5: "cb_860_910",
  t6_7: "cb_780_820",
  t8plus: "cb_u700",
};

/**
 * 담보 LTV 비중에 따른 금리 가산 (이미지 4 — p)
 * 구간 중앙값 기준으로 RATE_BY_CB.min에 가산
 */
export const LTV_RATE_ADDITIVE: {
  id: string;
  label: string;
  ltvMin: number;
  ltvMax: number;
  apartmentAdd: number;
  nonApartmentAdd: number;
}[] = [
  {
    id: "ltv_low",
    label: "~60%",
    ltvMin: 0,
    ltvMax: 60,
    apartmentAdd: 0,
    nonApartmentAdd: 0,
  },
  {
    id: "ltv_mid1",
    label: "61~70%",
    ltvMin: 61,
    ltvMax: 70,
    apartmentAdd: 0.25,
    nonApartmentAdd: 0.35,
  },
  {
    id: "ltv_mid2",
    label: "71~80%",
    ltvMin: 71,
    ltvMax: 80,
    apartmentAdd: 0.55,
    nonApartmentAdd: 0.75,
  },
  {
    id: "ltv_high",
    label: "81% 이상",
    ltvMin: 81,
    ltvMax: 100,
    apartmentAdd: 0.95,
    nonApartmentAdd: 1.25,
  },
];

/** 상환 방식 (이미지 1, 1-2, 3, 4 인용) */
export const REPAYMENT_METHODS = [
  {
    id: "bullet5",
    title: "5년 만기일시상환(일부 전액 상환 구조)",
    detail:
      " 대출기간 5년 내 이자 납부·만기 상환 등 상품약관 및 은행 승인 조건에 따름.",
  },
  {
    id: "pni10",
    title: "10년 원리금균등분할상환",
    detail:
      " 대출기간 10년 원리금 균등 분할. 기타(Etc.) 권역 등 조건부 구간에서 병행·우선 적용될 수 있음.",
  },
] as const;

/** 시세·감정 기준 안내 (이미지 1 — KB 일반가, AI, 밸류쇼핑) */
export const APPRAISAL_BASIS_NOTE =
  "담보 시가는 KB부동산 일반가·AI자동감정·밸류쇼핑 등 시세조사·감정평가 절차에 따라 산출되며, 최종 인정가액은 웰컴저축은행 내부 심사 기준에 따릅니다.";

/** JSON 스냅샷 (SEO·외부 연동·디버그용) */
export const LTV_MATRIX_JSON = {
  version: "2026-04-10",
  minRates: {
    apartment: MIN_RATE_APARTMENT,
    nonApartment: MIN_RATE_NON_APARTMENT,
  },
  maxRates: {
    apartment: MAX_RATE_APARTMENT,
    nonApartment: MAX_RATE_NON_APARTMENT,
  },
  locations: LOCATIONS,
  ltvMatrix: LTV_MATRIX,
  cbBrackets: CB_BRACKETS,
  rateByCb: RATE_BY_CB,
  ltvRateAdditive: LTV_RATE_ADDITIVE,
  creditTierToCb: CREDIT_TIER_TO_CB,
  repaymentMethods: REPAYMENT_METHODS,
  appraisalBasisNote: APPRAISAL_BASIS_NOTE,
} as const;

export function getLocationById(id: string): LocationItem | undefined {
  return LOCATIONS.find((l) => l.id === id);
}

export function getLtvCell(
  region: RegionGrade,
  tier: CreditTierKey
): LtvCell {
  return LTV_MATRIX[region][tier];
}

/** 추정 적용 금리: CB행 + LTV 구간 가산 (캡은 MAX_RATE_* ) */
export function estimateRatePercent(params: {
  tier: CreditTierKey;
  propertyIsApartment: boolean;
  ltvMidpoint: number;
}): { low: number; high: number } {
  const cbId = CREDIT_TIER_TO_CB[params.tier];
  const base = params.propertyIsApartment
    ? RATE_BY_CB[cbId].apartment
    : RATE_BY_CB[cbId].nonApartment;

  const band = LTV_RATE_ADDITIVE.find(
    (b) => params.ltvMidpoint >= b.ltvMin && params.ltvMidpoint <= b.ltvMax
  );
  const add = params.propertyIsApartment
    ? (band?.apartmentAdd ?? 0.95)
    : (band?.nonApartmentAdd ?? 1.25);

  const cap = params.propertyIsApartment
    ? MAX_RATE_APARTMENT
    : MAX_RATE_NON_APARTMENT;

  const low = Math.min(round2(base.min + add * 0.35), cap);
  const high = Math.min(round2(base.max + add * 0.65), cap);
  return {
    low: Math.max(low, base.min),
    high: Math.min(Math.max(high, low + 0.1), cap),
  };
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function clampAvgLtv(min: number, max: number) {
  return Math.round((min + max) / 2);
}

export function describeLtvForUi(
  region: RegionGrade,
  tier: CreditTierKey
): {
  headline: string;
  sub?: string;
  ltvMidpoint: number;
  isEtc: boolean;
} {
  const cell = getLtvCell(region, tier);
  if (cell.kind === "fixed") {
    return {
      headline: `LTV ${cell.value}% (단일 적용)`,
      sub: cell.repaymentNote,
      ltvMidpoint: cell.value,
      isEtc: true,
    };
  }
  const mid = clampAvgLtv(cell.min, cell.max);
  return {
    headline:
      region === "1st" && tier === "t1_4"
        ? `서울/경기 핵심권(1급지) 최대 ${cell.max}% · 구간 ${cell.min}~${cell.max}%`
        : `추정 LTV 구간 ${cell.min}~${cell.max}%`,
    sub: `중앙 시나리오 약 ${mid}% 기준 금리 추정`,
    ltvMidpoint: mid,
    isEtc: false,
  };
}
