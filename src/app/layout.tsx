import type { Metadata } from "next";
import Script from "next/script";
import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Noto_Sans_SC,
} from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const cjk = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cjk",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "王凯 · 大模型运营专家",
  description:
    "王凯的个人主页，展示大模型训练、AI Agent 应用、电商治理经历与代表项目。",
  openGraph: {
    title: "王凯 · Personal Homepage",
    description: "大模型运营专家 @ 四川快手——大模型训练",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${cjk.variable} ${mono.variable}`}
      >
        {children}
        <Script src="/preview.js?v=i18n-v2" strategy="afterInteractive" />
      </body>
    </html>
  );
}
