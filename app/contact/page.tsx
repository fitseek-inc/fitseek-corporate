"use client";

import { useEffect, useRef } from "react";

export default function ContactPage() {
  const startedRef = useRef(false);

  // contact_view：ページ表示
  useEffect(() => {
    window.gtag?.("event", "contact_view");
  }, []);

  // contact_start：最初の入力開始（1回だけ）
  const markStartedOnce = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    window.gtag?.("event", "contact_start");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="section-header">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-desc">
            開発のご相談、お見積もり依頼など、お気軽にお問い合わせください。
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/success"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="company">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="株式会社フィットシーク"
              onFocus={markStartedOnce}
              onInput={markStartedOnce}
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
              onFocus={markStartedOnce}
              onInput={markStartedOnce}
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
              onFocus={markStartedOnce}
              onInput={markStartedOnce}
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
              onFocus={markStartedOnce}
              onInput={markStartedOnce}
            />
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
