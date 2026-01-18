// data/cases.ts

export interface CaseItem {
  id: number;
  title: string; // タイトル内で改行する場合は <br> ではなくCSSで制御するか、配列にするのが一般的ですが、今回は文字列とします
  tags: string[];
  price: string;
  period: string;
  imageLabel: string; // 画像がない期間の仮ラベル（CASE 01等）
}

export const casesData: CaseItem[] = [
  {
    id: 1,
    title: "インフルエンサーマッチングサイト",
    tags: ["Rails", "PostgreSQL", "AWS"],
    price: "350万円",
    period: "4ヶ月",
    imageLabel: "CASE 01",
  },
  {
    id: 2,
    title: "会員制宿泊予約サイト",
    tags: ["Rails", "MySQL", "AWS"],
    price: "300万円",
    period: "3ヶ月",
    imageLabel: "CASE 02",
  },
  {
    id: 3,
    title: "ヘリコプター定期便予約サイト",
    tags: ["Next.js", "Rails API"],
    price: "400万円",
    period: "4ヶ月",
    imageLabel: "CASE 03",
  },
  {
    id: 4,
    title: "廃棄物処理業者検索サイト",
    tags: ["Rails", "Google Maps"],
    price: "280万円",
    period: "3ヶ月",
    imageLabel: "CASE 04",
  },
  {
    id: 5,
    title: "カスタマイズ時計発注ECシステム",
    tags: ["Rails", "MySQL"],
    price: "350万円",
    period: "3ヶ月",
    imageLabel: "CASE 05",
  },
  {
    id: 6,
    title: "入札式マーケットプレイス",
    tags: ["Rails", "PostgreSQL"],
    price: "300万円",
    period: "3ヶ月",
    imageLabel: "CASE 06",
  },
  {
    id: 7,
    title: "税理士法人業務管理システム",
    tags: ["Rails", "AWS"],
    price: "320万円",
    period: "3ヶ月",
    imageLabel: "CASE 07",
  },
  {
    id: 8,
    title: "介護歯科法人CRMサイト",
    tags: ["Rails", "MySQL"],
    price: "300万円",
    period: "3ヶ月",
    imageLabel: "CASE 08",
  },
  {
    id: 9,
    title: "ファッション横断検索サイト",
    tags: ["Next.js", "Rails API"],
    price: "380万円",
    period: "4ヶ月",
    imageLabel: "CASE 09",
  },
];
