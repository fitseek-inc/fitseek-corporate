"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CtaLink from "@/components/CtaLink";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        {/* 2. PC用ナビゲーション（スマホではCSSで隠す） */}
        <nav className="nav-menu">
          <Link href="/message" className="nav-link">
            代表挨拶
          </Link>
          <Link href="/company" className="nav-link">
            会社概要
          </Link>
          <CtaLink location="header" className="btn btn-primary header-cta">
            まずは相談する
          </CtaLink>
        </nav>

        {/* 3. スマホ用ハンバーガーボタン（PCではCSSで隠す） */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* 4. スマホ用ドロワーメニュー（isOpenがtrueの時だけ表示） */}
      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          <nav>
            <ul>
              <li>
                <Link href="/" onClick={toggleMenu}>
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/company" onClick={toggleMenu}>
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/message" onClick={toggleMenu}>
                  代表挨拶
                </Link>
              </li>
              <li style={{ marginTop: "24px" }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={toggleMenu}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  まずは相談する
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
