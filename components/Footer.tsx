"use client";

import Link from "next/link";
import CtaLink from "@/components/CtaLink";
import { usePathname } from 'next/navigation'; // ▼ URLを取得するフック

export default function Footer() {
  const pathname = usePathname();

  // ▼ 判定ロジック
  // "/contact" で始まるページ（入力画面や完了画面）ではCTAを隠す
  const shouldHideCta = pathname?.startsWith("/contact");

  return (
    <footer>
      <div className="container">
        {/* ▼ 変数を使って条件付きレンダリング */}
        {!shouldHideCta && (
          <div className="footer-cta">
            <h2>プロジェクトのご相談はこちら</h2>
            <p>
              概算のお見積もり、実現可否のご相談など、お気軽にお問い合わせください。
            </p>
            <CtaLink location="footer" className="btn btn-primary">
              問い合わせフォームへ
            </CtaLink>
          </div>
        )}

        <div className="footer-links">
          {/* <Link href="/service">サービス立ち上げ</Link>
          <Link href="/system">社内業務システム</Link> */}
          <Link href="/">TOP</Link>
          <Link href="/message">代表挨拶</Link>
          <Link href="/company">会社概要</Link>

          {/* <Link href="#">プライバシーポリシー</Link> */}
        </div>
        <div className="copyright">
          &copy; Fitseek Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
