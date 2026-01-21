import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        {/* テキストロゴを Image コンポーネントに置き換え */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png" // publicフォルダからのパス
            alt="Fitseek Inc."
            width={141.5} // SVGのサイズに合わせて設定
            height={30}
            priority // ファーストビューに入る重要な画像なので優先読み込み
          />
        </Link>
        <nav className="nav-menu">
          {/* 将来的に他のページへのリンクを追加 */}
          {/* <Link href="/service" className="nav-link">
            サービス立ち上げ
          </Link>
          <Link href="/system" className="nav-link">
            社内業務システム
          </Link> */}
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
