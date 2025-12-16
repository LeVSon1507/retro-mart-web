import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retro Mart - Tạp hoá thời 9x",
  description: "Retro Mart: trải nghiệm tạp hoá thời 9x. Tải trên CH Play.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

import Providers from "./providers";
import { Lora, Be_Vietnam_Pro } from "next/font/google";

const headingFont = Lora({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});
const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
