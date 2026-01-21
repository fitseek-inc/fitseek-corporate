export default function ContactPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="section-header">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-desc">
            開発のご相談、お見積もり依頼など、お気軽にお問い合わせください。
            <br />
            通常、1営業日以内に返信いたします。
          </p>
        </div>

        {/* Netlify Forms対応 */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/success" /* 送信完了後のリダイレクト先（必要であれば作成） */
        >
          {/* Netlify Formsに必要な隠しフィールド */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="company">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="株式会社フィットシーク"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              お名前 <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="山田 太郎"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              メールアドレス <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="info@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              お問い合わせ内容 <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="システムの開発について相談したいのですが..."
            ></textarea>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button type="submit" className="btn btn-primary">
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
