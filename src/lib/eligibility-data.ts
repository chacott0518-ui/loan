/**
 * 이미지 1, 1-2, 3 기반 자격·부적격 요건 (이미지 10 노란박스 기준 최신화)
 */

export const ELIGIBILITY_REQUIREMENTS = [
  {
    id: "sole",
    title: "개인사업자 (사업자 등록 3개월 이상)",
    detail:
      "사업자등록상 개업일 기준 3개월 이상 경과한 사업자",
  },
  {
    id: "owner_occ",
    title: "본인 실거주 물건지 담보",
    detail:
      "본인 명의의 물건지에 실거주중인 담보",
  },
  {
    id: "title_3m",
    title: "소유권이전 3개월 경과",
    detail:
      "매매·증여 등 소유권이전 등기 후 3개월 경과된 담보",
  },
  {
    id: "min_price",
    title: "물건지 최저 시세 1억 5천만 원 이상",
    detail:
      "KB시세·KB-AI시세·밸류쇼핑 시세조사상 최저가액 1억 5천만 원 이상",
  },
] as const;

export const INELIGIBILITY_ITEMS = [
  {
    id: "corp",
    text: "법인 사업자 및 법인 명의 담보 (해당 상품 구조상 제외)",
  },
  {
    id: "co_owner",
    text: "공동명의 담보",
  },
  {
    id: "subordinate",
    text: "대부·개인근저당·임차권 후순위 진행 불가",
  },
  {
    id: "tenant",
    text: "임차인·후순위 설정 등 권리 관계 불명확 사건",
  },
] as const;