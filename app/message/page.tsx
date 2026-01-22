// app/message/page.tsx
export default function MessagePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>代表挨拶</h1>
            <p>技術とビジネスをつなぎ、挑戦に伴走するパートナーとして</p>
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "#fff",
              padding: "80px 60px", // 余白を広めにとって読みやすく
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* 1. 名前・役職エリア */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <p
                style={{
                  fontSize: "15px",
                  color: "#2cd28c", // ここをアクセントカラーに
                  marginBottom: "12px",
                  fontWeight: "bold",
                  letterSpacing: "0.1em",
                }}
              >
                CEO MESSAGE
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                代表取締役
              </p>
              <h3
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                森 亮二
              </h3>
            </div>

            {/* 2. ご挨拶（メインコンテンツなので先に持ってくるとより記事らしくなりますが、今回は要望通りの順序で配置します） */}

            {/* 経歴リスト */}
            <div style={{ marginBottom: "60px" }}>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "32px",
                  borderBottom: "2px solid #eee",
                  paddingBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "24px",
                    background: "#2cd28c",
                    display: "block",
                  }}
                ></span>
                経歴
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {/* 以下のリストアイテムはご提示いただいた内容です */}
                <li
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2cd28c",
                      marginRight: "12px",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ●
                  </span>
                  <span style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    愛知県出身。東京大学法学部卒業。
                  </span>
                </li>
                <li
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2cd28c",
                      marginRight: "12px",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ●
                  </span>
                  <span style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    ソーシャルゲーム開発会社にてプランナーとして従事。
                    <br />
                    数十万ユーザーのゲーム設計およびKPI分析モデルの構築を担当。
                  </span>
                </li>
                <li
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2cd28c",
                      marginRight: "12px",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ●
                  </span>
                  <span style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    個人事業主として自らサービス運営をしつつ、システム受託開発を開始。
                  </span>
                </li>
                <li
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2cd28c",
                      marginRight: "12px",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ●
                  </span>
                  <span style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    海外スタートアップの立ち上げに参加しCTOに就任。
                    <br />
                    プロダクトの0→1立ち上げ、ユーザー行動解析基盤の構築を主導。
                  </span>
                </li>
                <li
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#2cd28c",
                      marginRight: "12px",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    ●
                  </span>
                  <span style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    株式会社フィットシーク設立。
                    <br />
                    スタートアップ、新規事業を中心に20以上のシステム開発を支援。
                  </span>
                </li>
              </ul>
            </div>

            {/* ご挨拶 */}
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "32px",
                  borderBottom: "2px solid #eee",
                  paddingBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "24px",
                    background: "#2cd28c",
                    display: "block",
                  }}
                ></span>
                ご挨拶
              </h4>
              <p
                style={{
                  lineHeight: "1.8",
                  color: "#333",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "32px",
                  fontFamily: "serif", // キャッチコピーだけ明朝体などにしても綺麗です
                }}
              >
                「ビジネスに寄り添い、挑戦に伴走するシステム開発を」
              </p>
              <p
                style={{
                  lineHeight: "2.0",
                  color: "#555",
                  fontSize: "16px",
                  marginBottom: "24px",
                }}
              >
                システム開発が失敗する原因の多くは、技術ではなくビジネスやユーザー視点の欠如にあります。
                コストやスケジュールを無視した設計、ニーズとずれた仕様は、完成しない、あるいは使われないプロダクトを生みます。
              </p>
              <p
                style={{
                  lineHeight: "2.0",
                  color: "#555",
                  fontSize: "16px",
                  marginBottom: "24px",
                }}
              >
                私はソーシャルゲームのプランナーとしてプロダクト設計とKPI分析に携わり、
                その後、事業運営・海外スタートアップCTOとして0→1の立ち上げを当事者として経験してきました。
                だからこそ、プロダクトを生み出そうとする挑戦者の熱意を深く理解し、本気で成功まで伴走したいと考えています。
              </p>
              <p style={{ lineHeight: "2.0", color: "#555", fontSize: "16px" }}>
                Fitseekは「言われたものを作る開発会社」ではありません。
                技術・ビジネス・プロダクトを横断し、CTOのような立ち位置で事業に寄り添う開発パートナーです。
              </p>

              {/* サイン風のあしらい（もしあれば） */}
              <div
                style={{
                  marginTop: "40px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontFamily: "serif",
                }}
              >
                森 亮二
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
