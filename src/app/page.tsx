"use client";

import { FaApple, FaAndroid } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

type Lang = "en" | "ku" | "ar";

const translations: Record<Lang, {
  title: string;
  subtitle: string;
  desc: string;
  ios: string;
  android: string;
  badge: string;
  coming: string;
  telegram: string;
}> = {
  en: {
    title: "Fergeh",
    subtitle: "Learn Your Way",
    desc: "Fergeh is the first AI-powered learning app for Kurdish and Arabic speakers. Download now to access flashcards, guides, summaries, and quizzes in your language!",
    ios: "Download for iOS",
    android: "Download for Android",
    badge: "people are using Fergeh",
    coming: "Coming this week",
    telegram: "Join our Telegram @fergehh",
  },
  ku: {
    title: "فێرگە",
    subtitle: "فێربە بە شێوەی خۆت",
    desc: "فەرگە یەکەم بەرنامەی فێرکارییە بە هوشی دەستکرد بۆ کوردی و عەرەبی. ئێستا دابەزێنە و فلاشکارد، ڕێبەر، کورتە و تاقیکردنەوەکان بە زمانت وەرگرە!",
    ios: "دابەزاندن بۆ iOS",
    android: "دابەزاندن بۆ Android",
    badge: "کەس فێرگە بە کاردێنن",
    coming: "ئەم هەفتە دێت",
    telegram: "بەشداربە لە تێلەگراممان @fergehh",
  },
  ar: {
    title: "فرقە",
    subtitle: "تعلم بطريقتك",
    desc: "فرقە هو أول تطبيق تعليمي بالذكاء الاصطناعي للناطقين بالكردية والعربية. حمّله الآن واحصل على بطاقات تعليمية، أدلة، ملخصات واختبارات بلغتك!",
    ios: "تنزيل لـ iOS",
    android: "تنزيل لـ Android",
    badge: "شخص يستخدمون فرقە",
    coming: "قادم هذا الأسبوع",
    telegram: "انضم إلى قناتنا على تيليجرام @fergehh",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "ku" || urlLang === "ar") setLang(urlLang);
      else setLang("en");
    }
  }, []);
  const t = translations[lang];
  const isArabic = lang === "ar";

  return (
    <div className={`min-h-screen bg-teslearn-bg overflow-hidden relative flex flex-col justify-center items-center px-2 sm:px-0 ${isArabic ? "rtl" : "ltr"} ${lang === "ku" || lang === "ar" ? "ibm-plex-arabic-font" : ""}`}>
      {/* Themed Background Elements - more visible, larger, more variety, responsive */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Biology */}
        <div className="absolute top-10 left-4 text-primary-gradient text-3xl md:text-5xl opacity-10 font-extrabold drop-shadow-lg rotate-[-8deg]">DNA</div>
        <div className="absolute top-32 left-24 text-primary-gradient text-lg md:text-2xl opacity-10 italic drop-shadow-md">cell</div>
        <div className="absolute top-56 left-8 text-primary-gradient text-xl md:text-3xl opacity-10 font-semibold drop-shadow-md rotate-6">ATP</div>
        <div className="absolute top-24 left-1/2 text-primary-gradient text-lg md:text-2xl opacity-10 font-light drop-shadow-md -translate-x-1/2">leaf</div>
        {/* Chemistry */}
        <div className="absolute top-2/3 left-10 text-primary-gradient text-2xl md:text-4xl opacity-10 font-mono drop-shadow-lg rotate-3">H₂O</div>
        <div className="absolute top-20 right-16 text-primary-gradient text-2xl md:text-4xl opacity-10 font-mono drop-shadow-lg">NaCl</div>
        <div className="absolute top-1/2 right-8 text-primary-gradient text-lg md:text-2xl opacity-10 font-mono drop-shadow-md">CH₄</div>
        <div className="absolute top-3/4 right-24 text-primary-gradient text-base md:text-xl opacity-10 font-mono drop-shadow">C₆H₁₂O₆</div>
        <div className="absolute top-16 right-1/4 text-primary-gradient text-3xl md:text-5xl opacity-10 font-mono drop-shadow-lg rotate-12">⚗</div>
        {/* Kurdish/Arabic */}
        <div className="absolute top-96 right-12 text-primary-gradient text-2xl md:text-4xl opacity-10 font-bold drop-shadow-lg">کوردی</div>
        <div className="absolute top-80 left-32 text-primary-gradient text-xl md:text-3xl opacity-10 font-bold drop-shadow">عربي</div>
        <div className="absolute top-1/2 left-8 text-primary-gradient text-lg md:text-2xl opacity-10 font-bold drop-shadow-md">ئ</div>
        <div className="absolute bottom-1/3 left-16 text-primary-gradient text-xl md:text-3xl opacity-10 font-bold drop-shadow">بەخێربێیت</div>
        <div className="absolute bottom-48 left-32 text-primary-gradient text-base md:text-xl opacity-10 font-bold drop-shadow">كتاب</div>
        <div className="absolute bottom-24 left-48 text-primary-gradient text-lg md:text-2xl opacity-10 font-bold drop-shadow">ش</div>
        {/* History */}
        <div className="absolute top-1/3 right-24 text-primary-gradient text-2xl md:text-4xl opacity-10 font-serif drop-shadow-lg rotate-3">1453</div>
        <div className="absolute top-1/2 right-48 text-primary-gradient text-base md:text-xl opacity-10 font-serif drop-shadow">Mesopotamia</div>
        <div className="absolute top-2/3 right-16 text-primary-gradient text-lg md:text-2xl opacity-10 font-serif drop-shadow">scroll</div>
        <div className="absolute bottom-1/3 right-32 text-primary-gradient text-2xl md:text-4xl opacity-10 font-serif drop-shadow-lg">🏺</div>
        <div className="absolute bottom-48 right-48 text-primary-gradient text-lg md:text-2xl opacity-10 font-serif drop-shadow">📜</div>
        {/* Math/Science (a few for variety) */}
        <div className="absolute bottom-24 left-1/2 text-primary-gradient text-2xl md:text-4xl opacity-10 font-mono drop-shadow-lg -translate-x-1/2">π</div>
        <div className="absolute top-1/4 left-1/2 text-primary-gradient text-xl md:text-3xl opacity-10 font-mono drop-shadow -translate-x-1/2">Σ</div>
        <div className="absolute top-1/3 left-2/3 text-primary-gradient text-xl md:text-3xl opacity-10 font-mono drop-shadow">∫</div>
        <div className="absolute top-2/3 left-1/3 text-primary-gradient text-base md:text-xl opacity-10 font-mono drop-shadow">f(x)</div>
        <div className="absolute bottom-1/4 left-2/3 text-primary-gradient text-xl md:text-3xl opacity-10 font-mono drop-shadow">E = mc²</div>
        <div className="absolute top-3/4 left-1/4 text-primary-gradient text-base md:text-xl opacity-10 font-mono drop-shadow">dx</div>
        {/* Subtle emoji for variety */}
        <div className="absolute top-40 left-1/2 text-primary-gradient text-2xl md:text-4xl opacity-5 drop-shadow -translate-x-1/2">🧬</div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh] pb-16 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-teslearn-dark mb-8 leading-tight">
          {t.title}
          <br />
          <span className="text-primary-gradient relative inline-block font-extrabold">
            {t.subtitle}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
              <path d="M10 15 Q200 5 390 12" stroke="url(#primary-gradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <defs>
                <linearGradient id="primary-gradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5149e5" />
                  <stop offset="1" stopColor="#837cf4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-primary-gradient">.</span>
        </h1>
        <p className="text-teslearn-gray text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.desc}
        </p>
        {/* Static badge above buttons */}
        <div className="mb-6 flex justify-center w-full">
          <div className={`bg-white/80 border border-primary-gradient shadow-lg rounded-full px-6 py-2 flex items-center gap-3 text-base font-semibold text-teslearn-dark backdrop-blur-sm ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-gradient animate-pulse"></span>
            {isArabic ? (
              <>
                <span className="text-primary-gradient text-lg font-bold" style={{minWidth: 80}}>9,234</span>
                {t.badge}
              </>
            ) : lang === "ku" ? (
              <>
                {t.badge}
                <span className="text-primary-gradient text-lg font-bold" style={{minWidth: 80}}>9,234</span>
              </>
            ) : (
              <>
                <span className="text-primary-gradient text-lg font-bold" style={{minWidth: 80}}>9,234</span>
                {t.badge}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mt-4">
          <a
            href="https://apps.apple.com/iq/app/fergeh/id6748969353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 bg-primary-gradient text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
          >
            {t.ios}
            <FaApple className="text-3xl" />
          </a>
          <button
            disabled
            className="flex flex-row items-center gap-3 bg-gray-300 text-gray-500 px-10 py-5 rounded-xl font-semibold text-xl shadow-xl w-full sm:w-auto justify-center cursor-not-allowed opacity-60"
            style={{ pointerEvents: 'none' }}
          >
            {t.android}
            <FaAndroid className="text-3xl" />
          </button>
        </div>
        <div className="flex flex-col items-center w-full mt-2 gap-2">
          <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-base font-medium shadow-sm">
            {t.coming}
          </span>
          <a
            href="https://t.me/fergehh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-600 transition-colors w-full sm:w-auto justify-center"
          >
            <FaTelegramPlane className="text-2xl" />
            {t.telegram}
          </a>
        </div>
      </section>
    </div>
  );
}
