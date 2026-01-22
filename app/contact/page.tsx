"use client";

import { useEffect, useRef } from "react";

export default function ContactPage() {
  const startedRef = useRef(false);

  // contact_view：ページ表示
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).gtag?.("event", "contact_view");
    }
  }, []);

  // contact_start：最初の入力開始（1回だけ）
  const markStartedOnce = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (typeof window !== "undefined") {
      (window as any).gtag?.("event", "contact_start");
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>お問い合わせ</h1>
            <p>
              開発のご相談、お見積もり依頼など
              <br />
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              background: "#fff",
              padding: "60px 40px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ lineHeight: "1.8", color: "#666" }}>
                以下のフォームにご記入の上、送信ボタンを押してください。
                <br />
                通常、1営業日以内に担当者よりご連絡いたします。
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact/success"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* ボット捕獲用の隠しフィールド（人間には見えません） */}
              <p style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

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
                  お名前 <span style={{ color: "#2cd28c" }}>*</span>
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
                  メールアドレス <span style={{ color: "#2cd28c" }}>*</span>
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
                  お問い合わせ内容 <span style={{ color: "#2cd28c" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="システムの開発について相談したいのですが..."
                  style={{ minHeight: "200px" }}
                  onFocus={markStartedOnce}
                  onInput={markStartedOnce}
                />
              </div>

              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ minWidth: "240px" }}
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
