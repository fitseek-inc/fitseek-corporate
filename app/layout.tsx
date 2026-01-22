import "./globals.scss";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

// フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社フィットシーク | Fitseek Inc.",
  description:
    "新規サービス開発と社内業務システム構築に強みを持つシステム受託開発会社。",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-C3KX8KPGEW" />
      </body>
    </html>
  );
}
