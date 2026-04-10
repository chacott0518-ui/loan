/** 이미지 1, 1-2, 3 기반 자격·부적격 요건 (슬라이드와 불일치 시 본 파일만 수정) */

export const ELIGIBILITY_REQUIREMENTS = [
  {
    id: "sole",
    title: "개인사업자 (사업자 등록 3개월 이상 운영)",
    detail: "사업자등록증상 개업일 기준 3개월 이상 실제 운영이 확인되어야 합니다.",
  },
  {
    id: "owner_occ",
    title: "본인 실거주 물건지 담보",
    detail: "대표 본인 명의·실거주가 가능한 주택 등 담보(심사 기준 충족 시).",
  },
  {
    id: "title_3m",
    title: "소유권 이전 3개월 경과",
    detail: "매매·증여 등 소유권 이전 등기 후 3개월이 경과한 담보(은행 기준 부합 시).",
  },
  {
    id: "min_price",
    title: "물건지 최저 시세 1억 5천만 원 이상",
    detail: "KB·AI·밸류쇼핑 등 시세조사 상 최저 인정가액 1억 5천만 원 이상(심사 시 확정).",
  },
] as const;

export const INELIGIBILITY_ITEMS = [
  {
    id: "corp",
    text: "법인 사업자 및 법인 명의 담보(해당 상품 구조상 제외)",
  },
  {
    id: "co_owner",
    text: "공동명의 담보(일부 케이스 제외·별도 협의 필요)",
  },
  {
    id: "military",
    text: "군·부대 단위 이하 등 특수 권역(내부 규정상 제한)",
  },
  {
    id: "tenant",
    text: "임차인·후순위 설정 등 권리 관계 불명확 사건",
  },
] as const;
