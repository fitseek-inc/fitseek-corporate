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
      <section className="hero hero-sub">
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
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-card">
              <div className="contact-intro">
                <p>
                  以下のフォームにご記入の上、送信ボタンを押してください。
                  <br />
                  通常、1営業日以内に担当者よりご連絡いたします。
                </p>
              </div>

              {/* ▼ 修正ポイント:
                1. data-netlify="true" や netlify-honeypot 属性を削除
                   (public/forms.html 側で定義済みのためReact側では不要)
                2. name="contact" は維持
                3. action="/contact/success" は維持
              */}
              <form
                className="contact-form"
                name="contact"
                method="POST"
                action="/contact/success"
              >
                {/* 必須: Netlifyにフォーム名を伝える隠しフィールド */}
                <input type="hidden" name="form-name" value="contact" />

                {/* ハニーポット用隠しフィールド（React側ではシンプルに配置） */}
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
                    お名前 <span className="required-mark">*</span>
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
                    メールアドレス <span className="required-mark">*</span>
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
                    お問い合わせ内容 <span className="required-mark">*</span>
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

                <div className="submit-area">
                  <button type="submit" className="btn btn-primary">
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
