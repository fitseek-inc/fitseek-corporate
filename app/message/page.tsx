// app/message/page.tsx
export default function MessagePage() {
  return (
    <>
      <section className="hero hero-sub">
        <div className="container">
          <div className="hero-content">
            <h1>代表挨拶</h1>
            <p>技術とビジネスをつなぎ、挑戦のパートナーとして</p>
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <div className="message-card">
            {/* 1. 名前・役職エリア */}
            <div className="message-header">
              <p className="sub-title">CEO MESSAGE</p>
              <p className="role">代表取締役</p>
              <h3 className="name">森 亮二</h3>
            </div>

            {/* 2. 経歴エリア */}
            <div className="message-section">
              <h4 className="section-head">
                <span className="bar"></span>
                経歴
              </h4>
              <ul className="career-list">
                <li>
                  <span className="bullet">●</span>
                  <span className="text">愛知県出身。東京大学法学部卒業。</span>
                </li>
                <li>
                  <span className="bullet">●</span>
                  <span className="text">
                    ソーシャルゲーム開発会社にてプランナーとして従事。
                    <br />
                    数十万ユーザーのゲーム設計およびKPI分析モデルの構築を担当。
                  </span>
                </li>
                <li>
                  <span className="bullet">●</span>
                  <span className="text">
                    個人事業主として自らサービス運営をしつつ、システム受託開発を開始。
                  </span>
                </li>
                <li>
                  <span className="bullet">●</span>
                  <span className="text">
                    海外スタートアップの立ち上げに参加しCTOに就任。
                    <br />
                    プロダクトの0→1立ち上げ、ユーザー行動解析基盤の構築を主導。
                  </span>
                </li>
                <li>
                  <span className="bullet">●</span>
                  <span className="text">
                    株式会社フィットシーク設立。
                    <br />
                    スタートアップ、新規事業を中心に20以上のシステム開発を支援。
                  </span>
                </li>
              </ul>
            </div>

            {/* 3. ご挨拶エリア */}
            <div className="message-section">
              <h4 className="section-head">
                <span className="bar"></span>
                ご挨拶
              </h4>
              <p className="lead-text">
                「ビジネスに寄り添い、挑戦に伴走するシステム開発を」
              </p>
              <p className="body-text">
                システム開発が失敗する原因の多くは、技術ではなくビジネスやユーザー視点の欠如にあります。
                コストやスケジュールを無視した設計、ニーズとずれた仕様は、完成しない、あるいは使われないプロダクトを生みます。
              </p>
              <p className="body-text">
                私はソーシャルゲームのプランナーとしてプロダクト設計とKPI分析に携わり、
                その後、事業運営・海外スタートアップCTOとして0→1の立ち上げを当事者として経験してきました。
                だからこそ、プロダクトを生み出そうとする挑戦者の熱意を深く理解し、本気で成功まで伴走したいと考えています。
              </p>
              <p className="body-text">
                Fitseekは「言われたものを作る開発会社」ではありません。
                技術・ビジネス・プロダクトを横断し、CTOのような立ち位置で事業に寄り添う開発パートナーです。
              </p>

              <div className="sign">森 亮二</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
