"use client";
import React, { createContext, useContext, useState } from "react";

type Lang = "vi" | "en";
type DictEntry = { vi: string; en: string };

const dict: Record<string, DictEntry> = {
  brandName: { vi: "Retro Mart", en: "Retro Mart" },
  androidDownload: {
    vi: "Tải trên CH Play",
    en: "Get it on Google Play (1/1/2026)",
  },
  iosSoon: { vi: "iOS sẽ cập nhật sau", en: "iOS coming soon" },
  heroTitle: { vi: "Tạp hoá thời 9x", en: "Vietnamese 90s Corner Shop" },
  heroDescription: {
    vi: "Trò chơi quản lý cửa hàng phong cách hoài niệm. Bán hàng kiểu xưa, sưu tầm đồ retro, mở rộng cửa tiệm.",
    en: "Nostalgic shop management game. Sell the old-school way, collect retro items, and expand your store.",
  },
  featuresTitle: { vi: "Điểm nổi bật", en: "Highlights" },
  feature_easy_title: { vi: "Chơi dễ", en: "Easy to play" },
  feature_easy_text: {
    vi: "Cơ chế đơn giản, vào là chơi. Hợp mọi lứa tuổi.",
    en: "Simple mechanics, jump right in. Suitable for everyone.",
  },
  feature_vintage_title: { vi: "Đậm chất 9x", en: "Authentic 90s vibe" },
  feature_vintage_text: {
    vi: "Hình ảnh, âm thanh, vật phẩm đều gợi nhớ tuổi thơ.",
    en: "Visuals, sounds, and items evoke childhood memories.",
  },
  feature_updates_title: { vi: "Cập nhật liên tục", en: "Frequent updates" },
  feature_updates_text: {
    vi: "Sự kiện, item mới, tính năng mới được bổ sung thường xuyên.",
    en: "Events, new items, and features added regularly.",
  },
  testimonialsTitle: { vi: "Người chơi nói gì", en: "What players say" },
  testimonial_badge_recent: { vi: "Gần đây", en: "Featured" },
  testimonial_1_author: { vi: "Bạn H.", en: "H." },
  testimonial_1_text: {
    vi: "Chơi vui, đúng vibe tạp hoá ngày xưa. Âm thanh nghe đã tai!",
    en: "Fun to play, true 90s shop vibe. The sound is great!",
  },
  testimonial_2_author: { vi: "Anh T.", en: "Mr. T." },
  testimonial_2_text: {
    vi: "Giao diện mới đẹp, mượt. Con mình mê mẩn chơi suốt.",
    en: "New UI is beautiful and smooth. My kid loves it.",
  },
  testimonial_3_author: { vi: "Chị M.", en: "Ms. M." },
  testimonial_3_text: {
    vi: "Nhiều đồ retro dễ thương. Chờ thêm sự kiện Tết để sưu tầm.",
    en: "Lots of cute retro items. Waiting for Tet events to collect.",
  },
  faqTitle: { vi: "Câu hỏi thường gặp", en: "Frequently Asked Questions" },
  faq_1_q: {
    vi: "Game chơi trên máy nào?",
    en: "Which devices are supported?",
  },
  faq_1_a: {
    vi: "Android có sẵn. iOS sẽ cập nhật sau.",
    en: "Available on Android. iOS coming soon.",
  },
  faq_2_q: { vi: "Có mất phí không?", en: "Is it free?" },
  faq_2_a: {
    vi: "Tải và chơi miễn phí. Có vật phẩm tuỳ chọn.",
    en: "Free to download and play. Optional items available.",
  },
  faq_3_q: {
    vi: "Cập nhật bao lâu một lần?",
    en: "How frequently do you update?",
  },
  faq_3_a: {
    vi: "Hàng tuần có hoạt động, hàng tháng có tính năng mới.",
    en: "Weekly activities, monthly new features.",
  },
  footerCopyright: { vi: "© 2025 Retro Mart", en: "© 2025 Retro Mart" },
  facebook: { vi: "Facebook", en: "Facebook" },
  youtube: { vi: "YouTube", en: "YouTube" },
  tiktok: { vi: "TikTok", en: "TikTok" },
  privacyPolicy: { vi: "Privacy Policy", en: "Privacy Policy" },
  prev: { vi: "Trước", en: "Prev" },
  next: { vi: "Sau", en: "Next" },
  langToggle: { vi: "EN", en: "VI" },
};

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  function t(key: string) {
    const entry = dict[key];
    if (!entry) return key;
    return lang === "vi" ? entry.vi : entry.en;
  }
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18nContext missing");
  return ctx.t;
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18nContext missing");
  return { lang: ctx.lang, setLang: ctx.setLang };
}
