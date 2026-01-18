import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">
          Fitseek<span>.</span>
        </Link>
        <nav className="nav-menu">
          {/* 将来的に他のページへのリンクを追加 */}
          <Link href="/service" className="nav-link">
            サービス立ち上げ
          </Link>
          <Link href="/system" className="nav-link">
            社内業務システム
          </Link>
          <Link href="/about" className="nav-link">
            会社概要
          </Link>
          <Link href="/contact" className="btn btn-primary header-cta">
            まずは相談する
          </Link>
        </nav>
      </div>
    </header>
  );
}
