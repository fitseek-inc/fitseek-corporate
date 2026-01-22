// app/page.tsx
import Link from "next/link";
import { casesData } from "@/data/cases";
import CtaLink from "@/components/CtaLink";

// ▼ 1. アイコンとロゴのインポート
import { FaLaptopCode, FaCalculator, FaRocket, FaServer } from "react-icons/fa"; // FontAwesome (Solid)
import {
  SiRubyonrails,
  SiNextdotjs,
  SiNuxtdotjs,
  SiLaravel,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiAmazonwebservices,
  SiVercel,
  SiDocker,
  SiTerraform,
} from "react-icons/si"; // Simple Icons (公式ブランドロゴ)

const getTechIcon = (iconName: string, size: number = 48) => {
  switch (iconName) {
    case "Rails":
      return (
        <SiRubyonrails size={size} color="#CC0000" title="Ruby on Rails" />
      );
    case "Nuxt":
      return <SiNuxtdotjs size={size} color="#00DC82" title="Nuxt.js" />;
    case "Next":
      return <SiNextdotjs size={size} color="#000000" title="Next.js" />;
    case "AWS":
      return <SiAmazonwebservices size={size} color="#FF9900" title="AWS" />;
    case "Laravel":
      return <SiLaravel size={size} color="#FF2D20" title="Laravel" />;
    case "Vercel":
      return <SiVercel size={size} color="#4285F4" title="Vercel" />;
    default:
      return null;
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              あなたのイメージを
              <br />
              <span className="highlight-marker">最短距離で形にして検証へ</span>
            </h1>
            <p>
              小中規模のサービス立ち上げと社内業務システムの受託開発実績多数
              <br />
              豊富な単独構築、運用経験から得たノウハウに生成AIの生産性を組み合わせ
              <br />
              サービスやシステム導入の成功を全力でサポートします
            </p>
            <CtaLink location="hero" className="btn btn-primary">
              まずは相談する 　＞
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
            <p className="section-desc">
              発注ノウハウの不足、費用やスケジュールの不安に寄り添います
            </p>
          </div>
          <div className="problems-grid">
            <div className="problem-card">
              {/* ▼ 2. ソリッドなアイコンに変更 */}
              <span className="problem-icon">
                <FaLaptopCode />
              </span>
              <h3>
                システム発注の
                <br />
                ノウハウがない
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">システム発注未経験の事例多数</span>
                </li>
                <li>
                  仕様が曖昧でもベストプラクティスから選択肢を提案しながら進めます
                </li>
              </ul>
            </div>
            <div className="problem-card">
              <span className="problem-icon">
                <FaCalculator />
              </span>
              <h3>
                見積もりの
                <br />
                根拠がわからない
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">
                    全て機能や要素ベースで見積もり
                  </span>
                </li>
                <li>
                  簡易設計から工数とスケジュールを算出。見積もりを見て取捨選択を
                </li>
              </ul>
            </div>
            <div className="problem-card">
              <span className="problem-icon">
                <FaRocket />
              </span>
              <h3>
                納期が近く
                <br />
                引き受けてもらえない
              </h3>
              <ul>
                <li>
                  <span className="fw-bold">経験とAI活用で爆速開発</span>
                </li>
                <li>
                  多分野のサービス開発のノウハウと技術力でリードタイムを最小化します
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (変更なし) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fitseekの開発</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">
                20<span className="stat-unit">サービス</span>
              </span>
              <span className="stat-label">単独開発実績</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                2.5<span className="stat-unit">ヶ月</span>
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
          <div className="notice" style={{ marginTop: "80px" }}>
            ※単独開発とは要件定義、設計、開発、インフラ構築を全て自社で行ったプロジェクトです（デザインを除く）
          </div>
          <div className="notice">
            ※直近5年間の単独で新規開発した案件の平均値です。また期間、費用は初期Ver納品までの数値でその後の改修や運用保守は含みません
          </div>
        </div>
      </section>

      {/* Cases Section (Updated) */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">開発事例</h2>
            <p className="section-desc">
              事例は全て実際に弊社で開発した案件の数字となります
            </p>
            <p className="notice">
              個別相談時には詳細や実際のサイトを守秘義務の範囲内でご案内可能です
            </p>
          </div>

          <div className="cases-grid">
            {casesData.map((item) => (
              <div key={item.id} className="case-card">
                {/* ▼ 画像エリア：メインアイコンを表示 */}
                <div className="case-img">
                  {item.mainIcons.map((iconKey, index) => (
                    // 複数ある場合は少し小さめ(42px)、1つなら大きめ(56px)にする等の調整も可能
                    // ここでは一律サイズでキーを付与して表示
                    <div key={index} className="case-icon-wrapper">
                      {getTechIcon(iconKey, 48)}
                    </div>
                  ))}
                </div>
                <div className="case-content">
                  <div className="case-title">{item.title}</div>

                  {/* ▼ タグエリア：技術と機能を分けて表示 */}
                  <div className="case-tags-wrapper">
                    {/* 技術タグ (Tech) */}
                    <div className="tag-group">
                      {item.techTags.map((tag, index) => (
                        <span key={`tech-${index}`} className="tag tag-tech">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* 機能タグ (Feature) */}
                    <div className="tag-group">
                      {item.featureTags.map((tag, index) => (
                        <span key={`feat-${index}`} className="tag tag-feature">
                          {tag}
                        </span>
                      ))}
                    </div>
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
          <div className="section-header">
            <h2 className="section-title">主要技術スタック</h2>
            <p className="section-desc">
              案件の規模や要件、既存システムや開発メンバーのスキルセットに応じ最適な技術を選定します
            </p>
          </div>
          {/* ▼ 3. ロゴアイコンの配置 */}
          <div className="tech-logos">
            <div className="tech-item">
              <SiRubyonrails size={40} color="#CC0000" />
              <span>Rails</span>
            </div>
            <div className="tech-item">
              <SiNextdotjs size={40} />
              <span>Next.js</span>
            </div>
            <div className="tech-item">
              <SiNuxtdotjs size={40} color="#00DC82" />
              <span>Nuxt.js</span>
            </div>
            <div className="tech-item">
              <SiPrisma size={40} color="#2D3748" />
              <span>Prisma</span>
            </div>
            <div className="tech-item">
              <SiMysql size={40} color="#4479A1" />
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <SiPostgresql size={40} color="#4169E1" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <SiAmazonwebservices size={40} color="#FF9900" />
              <span>AWS</span>
            </div>
            <div className="tech-item">
              <SiVercel size={40} />
              <span>Vercel</span>
            </div>
            <div className="tech-item">
              <FaServer size={40} color="#555" />
              <span>Sakura Cloud</span>
            </div>{" "}
            {/* さくらは汎用アイコンで代用 */}
            <div className="tech-item">
              <SiDocker size={40} color="#2496ED" />
              <span>Docker</span>
            </div>
            <div className="tech-item">
              <SiTerraform size={40} color="#7B42BC" />
              <span>Terraform</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
