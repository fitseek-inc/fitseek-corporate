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
        </div>
      </section>

      {/* 代表プロフィールセクション */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">代表プロフィール</h2>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "#fff", // 背景を白にしてカード風にし、メリハリをつける
              padding: "60px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)", // 薄い影で浮き立たせる
            }}
          >
            {/* 1. 名前・役職エリア */}
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                代表取締役
              </p>
              <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>森 亮二</h3>
            </div>

            {/* 2. テキストエリア（経歴リスト） */}
            <div style={{ marginBottom: "50px" }}>
              {/* 経歴リスト */}
              <div style={{ marginBottom: "40px" }}>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    borderLeft: "6px solid #2cd28c", // 左側にアクセントライン
                    paddingLeft: "16px",
                    lineHeight: "1.2",
                  }}
                >
                  経歴
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#2cd28c",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "14px",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ lineHeight: "1.7", fontSize: "16px" }}>
                      愛知県出身。東京大学法学部卒業。
                    </span>
                  </li>
                  <li
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#2cd28c",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "14px",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ lineHeight: "1.7", fontSize: "16px" }}>
                      ソーシャルゲーム開発会社にてプランナーとして従事。
                      <br />
                      数十万ユーザーのゲーム設計およびKPI分析モデルの構築を担当。
                    </span>
                  </li>
                  <li
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#2cd28c",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "14px",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ lineHeight: "1.7", fontSize: "16px" }}>
                      個人事業主として自らサービス運営をしつつ、システム受託開発を開始。
                    </span>
                  </li>
                  <li
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#2cd28c",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "14px",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ lineHeight: "1.7", fontSize: "16px" }}>
                      海外スタートアップの立ち上げに参加しCTOに就任。
                      <br />
                      プロダクトの0→1立ち上げ、ユーザー行動解析基盤の構築を主導。
                    </span>
                  </li>
                  <li
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#2cd28c",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "14px",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ lineHeight: "1.7", fontSize: "16px" }}>
                      株式会社フィットシーク設立。
                      <br />
                      スタートアップ、新規事業を中心に20以上のシステム開発を支援。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* 3. ご挨拶 */}
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  borderLeft: "6px solid #2cd28c",
                  paddingLeft: "16px",
                  lineHeight: "1.2",
                }}
              >
                ご挨拶
              </h4>
              <p
                style={{
                  lineHeight: "1.8",
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "24px",
                }}
              >
                「ビジネスに寄り添い、挑戦に伴走するシステム開発を」
              </p>
              <p style={{ lineHeight: "1.9", color: "#555", fontSize: "16px" }}>
                システム開発が失敗する原因の多くは、技術ではなくビジネスやユーザー視点の欠如にあります。
                コストやスケジュールを無視した設計、ニーズとずれた仕様は、完成しない、あるいは使われないプロダクトを生みます。
                <br /> <br />
                私はソーシャルゲームのプランナーとしてプロダクト設計とKPI分析に携わり、
                その後、事業運営・海外スタートアップCTOとして0→1の立ち上げを当事者として経験してきました。
                だからこそ、プロダクトを生み出そうとする挑戦者の熱意を深く理解し、本気で成功まで伴走したいと考えています。
                <br /> <br />
                Fitseekは「言われたものを作る開発会社」ではありません。
                技術・ビジネス・プロダクトを横断し、CTOのような立ち位置で事業に寄り添う開発パートナーです。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
