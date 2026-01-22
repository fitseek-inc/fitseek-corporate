// app/company/page.tsx
export default function CompanyPage() {
  return (
    <>
      <section className="hero hero-sub">
        <div className="container">
          <div className="hero-content">
            <h1>会社概要</h1>
            <p>株式会社フィットシークの基本情報とアクセス</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* 会社情報テーブル */}
          <div
            className="company-info"
          >
            <div className="info-row">
              <dt>企業名</dt>
              <dd>株式会社フィットシーク（Fitseek Inc.）</dd>
            </div>
            <div className="info-row">
              <dt>住所</dt>
              <dd>〒111-0032 東京都台東区浅草5-42-10 高林ビル3F</dd>
            </div>
            <div className="info-row">
              <dt>資本金</dt>
              <dd>7,000,000円</dd>
            </div>
            <div className="info-row">
              <dt>設立</dt>
              <dd>2015年2月</dd>
            </div>
            <div className="info-row">
              <dt>代表者</dt>
              <dd>代表取締役 森 亮二</dd>
            </div>
            <div className="info-row">
              <dt>事業内容</dt>
              <dd>Webサービス・業務システムの企画、設計、開発、運用</dd>
            </div>
          </div>

          {/* アクセスマップ（追加） */}
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div className="section-header">
              <h2 className="section-title" style={{ fontSize: "24px" }}>
                Access
              </h2>
            </div>
            {/* Google Maps埋め込み用プレースホルダー */}
            <div
              style={{
                width: "100%",
                height: "450px",
                background: "#eee",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontWeight: "bold",
              }}
            >
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                // 実際の住所の埋め込みURLを取得してsrcに入れてください
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9130.157534015689!2d139.78975249276965!3d35.72117801342127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ee962e4b4ed%3A0x40d995aacff8a731!2z44CSMTExLTAwMzIg5p2x5Lqs6YO95Y-w5p2x5Yy65rWF6I2J77yV5LiB55uu77yU77ySIOmrmOael-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1769050888552!5m2!1sja!2sjp"
              ></iframe>
            </div>
            <p
              style={{
                marginTop: "16px",
                textAlign: "center",
                fontSize: "14px",
                color: "#666",
              }}
            >
              つくばエクスプレス「浅草駅」より徒歩12分 /
              東京メトロ日比谷線「三ノ輪駅」より徒歩15分
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
