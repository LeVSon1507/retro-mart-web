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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
