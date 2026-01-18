// app/page.tsx
import Link from "next/link";
import { casesData } from "@/data/cases"; // データファイルをインポート

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              スピードと技術で、
              <br />
              あなたのビジョンを
              <br />
              <span className="highlight-marker">最短距離で実現</span>
            </h1>
            <p>
              新規サービス開発と社内業務システム構築に強みを持つ開発会社。
              <br />
              豊富な経験と蓄積したコード資産、そしてAIの圧倒的な生産性で、
              <br />
              他社にはないスピードと品質を提供します。
            </p>
            <Link href="/contact" className="btn btn-primary">
              まずは相談する ＞
            </Link>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
            <p className="section-desc">
              技術的な不安や、開発スピードの課題を解決します
            </p>
          </div>
          <div className="problems-grid">
            <div className="problem-card">
              <span className="problem-icon">📝</span>
              <h3>
                システム発注の
                <br />
                ノウハウがない
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">システム開発未経験でもOK</span>
                </li>
                <li>最小限の指示でベストプラクティスを提案</li>
              </ul>
            </div>
            <div className="problem-card">
              <span className="problem-icon">📊</span>
              <h3>
                見積もりの
                <br />
                根拠がわからない
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">全て機能ベースで見積もり</span>
                </li>
                <li>簡易設計から即時に工数を算出</li>
              </ul>
            </div>
            <div className="problem-card">
              <span className="problem-icon">🚀</span>
              <h3>
                とにかく
                <br />
                急ぎで作りたい
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">蓄積コードとAI活用で爆速開発</span>
                </li>
                <li>多分野の技術ノウハウでリードタイム最小化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">
                24<span className="stat-unit"></span>
              </span>
              <span className="stat-label">単独開発実績</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                3<span className="stat-unit">ヶ月</span>
              </span>
              <span className="stat-label">平均初期開発期間</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                300<span className="stat-unit">万円</span>
              </span>
              <span className="stat-label">平均初期開発費用</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section (Dynamic Loop) */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">開発事例</h2>
            <p className="section-desc">
              低コスト・短納期での開発実績が豊富にあります
            </p>
          </div>

          <div className="cases-grid">
            {casesData.map((item) => (
              <div key={item.id} className="case-card">
                {/* 将来的には <img src={item.imageUrl} /> に変更 */}
                <div className="case-img">{item.imageLabel}</div>

                <div className="case-content">
                  <div className="case-title">
                    {/* 改行対応が必要な場合はCSSで調整するか、 dangerouslySetInnerHTML 等を検討 */}
                    {item.title}
                  </div>
                  <div className="case-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="case-footer">
                    <div>
                      費用: <span className="case-val">{item.price}</span>
                    </div>
                    <div>
                      期間: <span className="case-val">{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container text-center">
          <h2
            className="section-title"
            style={{ marginBottom: "40px", fontSize: "24px" }}
          >
            Technology Stack
          </h2>
          <div className="tech-logos">
            <div className="tech-item">Ruby on Rails</div>
            <div className="tech-item">Next.js</div>
            <div className="tech-item">MySQL</div>
            <div className="tech-item">PostgreSQL</div>
            <div className="tech-item">AWS</div>
          </div>
        </div>
      </section>
    </>
  );
}
