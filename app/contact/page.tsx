"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // ルーター追加

export default function ContactPage() {
  const router = useRouter(); // ルーター初期化
  const startedRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 送信中フラグ

  // contact_view：ページ表示
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).gtag?.("event", "contact_view");
    }
  }, []);

  // contact_start：最初の入力開始
  const markStartedOnce = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (typeof window !== "undefined") {
      (window as any).gtag?.("event", "contact_start");
    }
  };

  // ▼ 送信ハンドラ（ここが重要）
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // ブラウザ標準の送信をキャンセル
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      // Netlifyに対して直接POST送信を行う
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

if (response.ok) {
        // 成功したら完了ページへ遷移
        router.push("/contact/success");
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("エラーが発生しました。");
    } finally {
      setIsSubmitting(false);
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
                <p>以下のフォームにご記入の上、送信ボタンを押してください。</p>
              </div>

              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* 必須: Netlifyにフォーム名を伝える隠しフィールド */}
                <input type="hidden" name="form-name" value="contact" />

                {/* ハニーポット */}
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting} // 二重送信防止
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
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
