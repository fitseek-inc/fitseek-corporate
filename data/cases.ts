// data/cases.ts

export interface CaseItem {
  id: number;
  title: string;
  techTags: string[]; // 技術スタック (Rails, AWSなど)
  featureTags: string[]; // 機能要素 (決済, 検索など)
  price: string;
  period: string;
  mainIcons: string[];
}

export const casesData: CaseItem[] = [
  {
    id: 1,
    title: "インフルエンサーマッチングサイト",
    techTags: ["Rails", "MySQL", "AWS"],
    featureTags: [
      "ランキングアルゴリズム",
      "メッセージ",
      "決済(Stripe)",
      "レビュー",
      "スクレイピング",
    ],
    price: "150万円",
    period: "2ヶ月",
    mainIcons: ["Rails", "AWS"],
  },
  {
    id: 2,
    title: "会員制宿泊予約サイト",
    techTags: ["Nuxt.js", "Rails", "MySQL", "Vercel", "AWS"],
    featureTags: [
      "スケジュール検索",
      "決済",
      "予約/在庫枠管理",
      "レビュー機能",
      "外部APIデータ連携",
    ],
    price: "チーム開発",
    period: "6ヶ月",
    mainIcons: ["Nuxt", "Rails", "AWS"],
  },
  {
    id: 3,
    title: "フライト予約サイト",
    techTags: ["Next.js", "Rails", "Vercel", "Sakura Cloud"],
    featureTags: [
      "スケジュール検索",
      "決済",
      "予約/在庫枠管理",
      "自動翻訳チャット",
    ],
    price: "550万円",
    period: "4ヶ月",
    mainIcons: ["Next", "Rails", "Vercel"],
  },
  {
    id: 4,
    title: "廃棄物処理業者検索サイト",
    techTags: ["Rails", "Sakura Cloud"],
    featureTags: [
      "位置情報検索",
      "ランキングアルゴリズム",
      "決済",
      "独自広告配信システム",
      "SEO最適化",
    ],
    price: "360万円",
    period: "4ヶ月",
    mainIcons: ["Rails"],
  },
  {
    id: 5,
    title: "カスタマイズ時計EC",
    techTags: ["Laravel", "MySQL"],
    featureTags: ["Webカスタマイズ", "ECカート", "注文管理", "決済"],
    price: "120万円",
    period: "2ヶ月",
    mainIcons: ["Laravel"],
  },
  {
    id: 6,
    title: "入札式国際マーケットプレイス",
    techTags: ["Rails", "PostgreSQL", "AWS"],
    featureTags: ["スクレイピング", "入札式売買", "決済", "多言語化対応", "グラフ表示"],
    price: "350万円",
    period: "3ヶ月",
    mainIcons: ["Rails", "AWS"],
  },
  {
    id: 7,
    title: "税理士法人業務管理システム",
    techTags: ["Rails", "Sakura Cloud"],
    featureTags: [
      "顧客管理",
      "業務管理",
      "Gmail連携",
      "Googleカレンダー連携",
      "タスク管理",
    ],
    price: "80万円",
    period: "1ヶ月",
    mainIcons: ["Rails"],
  },
  {
    id: 8,
    title: "介護歯科法人CRM",
    techTags: ["Rails", "MySQL"],
    featureTags: ["顧客管理", "業務管理", "日報管理", "レポート集計"],
    price: "160万円",
    period: "3ヶ月",
    mainIcons: ["Rails"],
  },
  {
    id: 9,
    title: "医師求人検索サイト",
    techTags: ["Rails", "MySQL", "Sakura Cloud"],
    featureTags: ["求人検索", "ステップ式問い合わせ", "CSVインポート", "SEO最適化"],
    price: "200万円",
    period: "2ヶ月",
    mainIcons: ["Rails"],
  },
];
