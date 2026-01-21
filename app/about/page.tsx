export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">会社概要</h2>
          </div>

          <div
            className="company-info"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="info-row">
              <dt>企業名</dt>
              <dd>株式会社フィットシーク（Fitseek Inc.）</dd>
            </div>
            <div className="info-row">
              <dt>住所</dt>
              <dd>
                〒111-0032 東京都台東区浅草5-42-10 高林ビル3F
                <br />
                {/* Google Maps Embed Placeholder */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "#eee",
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                  }}
                >
                  Google Maps Area
                </div>
              </dd>
            </div>
            <div className="info-row">
              <dt>資本金</dt>
              <dd>700万円</dd>
            </div>
            <div className="info-row">
              <dt>代表者</dt>
              <dd>森 亮二</dd>
            </div>
            <div className="info-row">
              <dt>事業内容</dt>
              <dd>
                Webサービス・業務システムの企画、設計、開発、運用
              </dd>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">代表プロフィール</h2>
          </div>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              gap: "40px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* プロフィール画像プレースホルダー */}
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "#ddd",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            ></div>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                ○○ ○○
              </h3>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                ソーシャルゲームのディレクターとして、億単位PVのゲーム設計・KPI分析に従事。
                <br />
                その後、スタートアップ企業のCTOとしてプロダクトの立ち上げからユーザー行動解析基盤の構築を主導。
                <br />
                自社サービスの立ち上げ（数十万PV成長後に閉鎖）の経験を経て、受託開発へ転向。
                <br />
                現在は「技術とスピードでビジネスを加速させる」をモットーに、20以上の新規サービス立ち上げや業務システム構築を支援している。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
