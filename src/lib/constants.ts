export type RegionGrade = "1st" | "2nd" | "3rd" | "etc";
export type CreditTierKey = "t1_4" | "t5" | "t6_7" | "t8plus";

export type LtvCellRange = { kind: "range"; min: number; max: number };
export type LtvCellFixed = { kind: "fixed"; value: number; repaymentNote: string };
export type LtvCell = LtvCellRange | LtvCellFixed;

export type CbBracketId =
  | "cb_910p"
  | "cb_860_910"
  | "cb_820_860"
  | "cb_780_820"
  | "cb_740_780"
  | "cb_700_740"
  | "cb_u700";

export const CREDIT_TIERS: {
  key: CreditTierKey;
  label: string;
  shortLabel: string;
  description: string;
}[] = [
  { key: "t1_4",   label: "신용 1~4등급 구간", shortLabel: "1~4등급", description: "우량 신용·낮은 연체 위험" },
  { key: "t5",     label: "신용 5등급",         shortLabel: "5등급",   description: "양호 구간" },
  { key: "t6_7",   label: "신용 6~7등급",       shortLabel: "6~7등급", description: "보통·주의 혼합" },
  { key: "t8plus", label: "신용 8등급 이상",     shortLabel: "8등급+",  description: "상세 심사·담보 비중 확대" },
];

export const REGION_META: Record<RegionGrade, { title: string; subtitle: string }> = {
  "1st": { title: "1급지 (핵심 권역)", subtitle: "서울 핵심·과천·구리·하남·안양 동안 등" },
  "2nd": { title: "2급지",            subtitle: "서울 생활권·수도권 주요 도시" },
  "3rd": { title: "3급지",            subtitle: "경기 외곽·지방 중심지" },
  etc: { title: "기타 (Etc.)", subtitle: "서울·경기만 급지 표시 있고 그 외 지역은 LTV 모두 70%" },
};

export type LocationItem = {
  id: string;
  name: string;
  region: RegionGrade;
  group: string;
};

export const LOCATIONS: LocationItem[] = [
  // 서울 1급지 (16)
  { id: "gangnam",      name: "강남구",   region: "1st", group: "서울특별시" },
  { id: "gangdong",     name: "강동구",   region: "1st", group: "서울특별시" },
  { id: "gangseo",      name: "강서구",   region: "1st", group: "서울특별시" },
  { id: "gwanak",       name: "관악구",   region: "1st", group: "서울특별시" },
  { id: "gwangjin",     name: "광진구",   region: "1st", group: "서울특별시" },
  { id: "dongdaemun",   name: "동대문구", region: "1st", group: "서울특별시" },
  { id: "dongjak",      name: "동작구",   region: "1st", group: "서울특별시" },
  { id: "mapo",         name: "마포구",   region: "1st", group: "서울특별시" },
  { id: "seodaemun",    name: "서대문구", region: "1st", group: "서울특별시" },
  { id: "seocho",       name: "서초구",   region: "1st", group: "서울특별시" },
  { id: "seongdong",    name: "성동구",   region: "1st", group: "서울특별시" },
  { id: "seongbuk",     name: "성북구",   region: "1st", group: "서울특별시" },
  { id: "songpa",       name: "송파구",   region: "1st", group: "서울특별시" },
  { id: "yangcheon",    name: "양천구",   region: "1st", group: "서울특별시" },
  { id: "yeongdeungpo", name: "영등포구", region: "1st", group: "서울특별시" },
  { id: "jongno",       name: "종로구",   region: "1st", group: "서울특별시" },
  // 서울 2급지 (7)
  { id: "gangbuk",   name: "강북구", region: "2nd", group: "서울특별시" },
  { id: "guro",      name: "구로구", region: "2nd", group: "서울특별시" },
  { id: "geumcheon", name: "금천구", region: "2nd", group: "서울특별시" },
  { id: "nowon",     name: "노원구", region: "2nd", group: "서울특별시" },
  { id: "dobong",    name: "도봉구", region: "2nd", group: "서울특별시" },
  { id: "eunpyeong", name: "은평구", region: "2nd", group: "서울특별시" },
  { id: "jung",      name: "중구",   region: "2nd", group: "서울특별시" },
  // 서울 3급지 (2)
  { id: "jungnang", name: "중랑구", region: "3rd", group: "서울특별시" },
  { id: "yongsan",  name: "용산구", region: "3rd", group: "서울특별시" },
  // 경기 1급지 (9)
  { id: "gwacheon",    name: "과천시",        region: "1st", group: "경기도" },
  { id: "gwangmyeong", name: "광명시",        region: "1st", group: "경기도" },
  { id: "guri",        name: "구리시",        region: "1st", group: "경기도" },
  { id: "seongnam_bd", name: "성남시 분당구", region: "1st", group: "경기도" },
  { id: "seongnam_sj", name: "성남시 수정구", region: "1st", group: "경기도" },
  { id: "seongnam_jw", name: "성남시 중원구", region: "1st", group: "경기도" },
  { id: "suwon_yt",    name: "수원시 영통구", region: "1st", group: "경기도" },
  { id: "anyang_da",   name: "안양시 동안구", region: "1st", group: "경기도" },
  { id: "hanam",       name: "하남시",        region: "1st", group: "경기도" },
  // 경기 2급지 (25)
  { id: "goyang_dk",   name: "고양시 덕양구",   region: "2nd", group: "경기도" },
  { id: "goyang_id",   name: "고양시 일산동구", region: "2nd", group: "경기도" },
  { id: "goyang_is",   name: "고양시 일산서구", region: "2nd", group: "경기도" },
  { id: "gunpo",       name: "군포시",          region: "2nd", group: "경기도" },
  { id: "gimpo",       name: "김포시",          region: "2nd", group: "경기도" },
  { id: "namyangju",   name: "남양주시",        region: "2nd", group: "경기도" },
  { id: "dongducheon", name: "동두천시",        region: "2nd", group: "경기도" },
  { id: "bucheon_wm",  name: "부천시 원미구",   region: "2nd", group: "경기도" },
  { id: "bucheon_ss",  name: "부천시 소사구",   region: "2nd", group: "경기도" },
  { id: "suwon_gs",    name: "수원시 권선구",   region: "2nd", group: "경기도" },
  { id: "suwon_ja",    name: "수원시 장안구",   region: "2nd", group: "경기도" },
  { id: "suwon_pd",    name: "수원시 팔달구",   region: "2nd", group: "경기도" },
  { id: "siheung",     name: "시흥시",          region: "2nd", group: "경기도" },
  { id: "ansan_dw",    name: "안산시 단원구",   region: "2nd", group: "경기도" },
  { id: "ansan_sr",    name: "안산시 상록구",   region: "2nd", group: "경기도" },
  { id: "anseong",     name: "안성시",          region: "2nd", group: "경기도" },
  { id: "anyang_ma",   name: "안양시 만안구",   region: "2nd", group: "경기도" },
  { id: "osan",        name: "오산시",          region: "2nd", group: "경기도" },
  { id: "yongin_gh",   name: "용인시 기흥구",   region: "2nd", group: "경기도" },
  { id: "yongin_sj",   name: "용인시 수지구",   region: "2nd", group: "경기도" },
  { id: "yongin_ci",   name: "용인시 처인구",   region: "2nd", group: "경기도" },
  { id: "uiwang",      name: "의왕시",          region: "2nd", group: "경기도" },
  { id: "uijeongbu",   name: "의정부시",        region: "2nd", group: "경기도" },
  { id: "paju",        name: "파주시",          region: "2nd", group: "경기도" },
  { id: "hwaseong",    name: "화성시",          region: "2nd", group: "경기도" },
  // 경기 3급지 (5)
  { id: "gwangju_gg", name: "광주시",        region: "3rd", group: "경기도" },
  { id: "bucheon_oj", name: "부천시 오정구", region: "3rd", group: "경기도" },
  { id: "yangju",     name: "양주시",        region: "3rd", group: "경기도" },
  { id: "icheon",     name: "이천시",        region: "3rd", group: "경기도" },
  { id: "pyeongtaek", name: "평택시",        region: "3rd", group: "경기도" },
  // 전국 기타
  { id: "etc_all", name: "기타 지역 (서울·경기 외)", region: "etc", group: "전국 기타" },
];

export const LTV_MATRIX: Record<RegionGrade, Record<CreditTierKey, LtvCell>> = {
  "1st": {
    t1_4:   { kind: "range", min: 80, max: 85 },
    t5:     { kind: "range", min: 75, max: 80 },
    t6_7:   { kind: "range", min: 70, max: 75 },
    t8plus: { kind: "range", min: 58, max: 65 },
  },
  "2nd": {
    t1_4:   { kind: "range", min: 75, max: 80 },
    t5:     { kind: "range", min: 70, max: 75 },
    t6_7:   { kind: "range", min: 65, max: 70 },
    t8plus: { kind: "range", min: 55, max: 62 },
  },
  "3rd": {
    t1_4:   { kind: "range", min: 70, max: 75 },
    t5:     { kind: "range", min: 65, max: 70 },
    t6_7:   { kind: "range", min: 60, max: 65 },
    t8plus: { kind: "range", min: 52, max: 58 },
  },
  etc: {
    t1_4:   { kind: "fixed", value: 70, repaymentNote: "원리금균등분할상환 적용 (상품규정 준수)" },
    t5:     { kind: "fixed", value: 70, repaymentNote: "원리금균등분할상환 적용 (상품규정 준수)" },
    t6_7:   { kind: "fixed", value: 70, repaymentNote: "원리금균등분할상환 적용 (상품규정 준수)" },
    t8plus: { kind: "fixed", value: 70, repaymentNote: "원리금균등분할상환 적용 (상품규정 준수)" },
  },
};

// ── 비아파트만 사용 (아파트 컬럼 삭제됨) ────────────────────
export const MIN_RATE_NON_APARTMENT = 6.6;
export const MIN_RATE_APARTMENT = 5.6;
export const MAX_RATE_NON_APARTMENT = 15.9;

type CbBracketDef = {
  id: CbBracketId;
  label: string;
  rangeDisplay: string;
};

export const CB_BRACKETS: readonly CbBracketDef[] = [
  { id: "cb_910p",    label: "910점 초과",            rangeDisplay: "910+"    },
  { id: "cb_860_910", label: "860점 이상 ~ 910점 이하", rangeDisplay: "860~910" },
  { id: "cb_820_860", label: "820점 이상 ~ 860점 미만", rangeDisplay: "820~860" },
  { id: "cb_780_820", label: "780점 이상 ~ 820점 미만", rangeDisplay: "780~820" },
  { id: "cb_740_780", label: "740점 이상 ~ 780점 미만", rangeDisplay: "740~780" },
  { id: "cb_700_740", label: "700점 이상 ~ 740점 미만", rangeDisplay: "700~740" },
  { id: "cb_u700",    label: "700점 미만",             rangeDisplay: "~700"    },
];

// 비아파트 금리만 유지
export const RATE_BY_CB: Record<CbBracketId, { min: number; max: number }> = {
  cb_910p:    { min: 6.60,  max: 8.10  },
  cb_860_910: { min: 7.05,  max: 9.00  },
  cb_820_860: { min: 7.55,  max: 10.15 },
  cb_780_820: { min: 8.20,  max: 11.50 },
  cb_740_780: { min: 9.05,  max: 13.10 },
  cb_700_740: { min: 10.05, max: 14.35 },
  cb_u700:    { min: 12.05, max: 15.90 },
};

export const REPAYMENT_METHODS = [
  {
    id: "bullet5",
    title: "5년 만기일시상환 (일부 전액 상환 구조)",
    detail: "대출기간 5년 내 이자 납부·만기 상환 등 상품약관 및 은행 승인 조건에 따름.",
  },
  {
    id: "pni10",
    title: "10년 원리금균등분할상환",
    detail: "대출기간 10년 원리금 균등 분할. 기타(Etc.) 권역 등 조건부 구간에서 병행·우선 적용.",
  },
] as const;

export function getLocationById(id: string): LocationItem | undefined {
  return LOCATIONS.find((l) => l.id === id);
}

export function getLtvCell(region: RegionGrade, tier: CreditTierKey): LtvCell {
  return LTV_MATRIX[region][tier];
}

export function describeLtvForUi(
  region: RegionGrade,
  tier: CreditTierKey
): { headline: string; sub?: string; ltvMidpoint: number; isEtc: boolean } {
  const cell = getLtvCell(region, tier);

  if (cell.kind === "fixed") {
    return {
      headline: `기타 지역(서울·경기 외) LTV ${cell.value}% 적용`, // 이 부분이 화면 상단에 나옵니다.
      sub: cell.repaymentNote,
      ltvMidpoint: cell.value,
      isEtc: true,
    };
  }

  const mid = Math.round((cell.min + cell.max) / 2);
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