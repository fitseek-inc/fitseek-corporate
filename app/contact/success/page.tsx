"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ContactSuccessPage() {
  useEffect(() => {
    window.gtag?.("event", "contact_submit");
  }, []);

  return (
    <>
      <section className="hero hero-sub">
        <div className="container">
          <div className="hero-content">
            <h1>送信完了</h1>
            <p>お問い合わせありがとうございます。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "600px" }}
        >
          <div
            style={{
              background: "#fff",
              padding: "60px 40px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "24px",
                color: "#2cd28c",
              }}
            >
              お問い合わせを受け付けました
            </h2>
            <p
              style={{ marginBottom: "40px", lineHeight: "1.8", color: "#555" }}
            >
              この度は、お問い合わせいただき誠にありがとうございます。
              <br />
              お送りいただきました内容を確認の上、担当者よりご連絡させていただきます。
            </p>
            <p
              style={{ marginBottom: "40px", fontSize: "14px", color: "#888" }}
            >
              ※万が一、数日経っても返信がない場合は、
              <br />
              大変お手数ですが再度ご連絡いただけますようお願い申し上げます。
            </p>

            <Link href="/" className="btn btn-primary">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
