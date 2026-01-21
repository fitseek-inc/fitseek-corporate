import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-cta">
          <h2>プロジェクトのご相談はこちら</h2>
          <p>
            概算のお見積もり、実現可否のご相談など、お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn btn-primary">
            問い合わせフォームへ
          </Link>
        </div>
        <div className="footer-links">
          {/* <Link href="/service">サービス立ち上げ</Link>
          <Link href="/system">社内業務システム</Link> */}
          <Link href="/">TOP</Link>
          <Link href="/about">会社概要</Link>
          {/* <Link href="#">プライバシーポリシー</Link> */}
        </div>
        <div className="copyright">
          &copy; Fitseek Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
