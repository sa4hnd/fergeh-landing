"use client";

import { useState } from "react";
import { FaTrash, FaUser, FaEnvelope, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

type Lang = "en" | "ku" | "ar";

const translations: Record<Lang, {
  title: string;
  subtitle: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  reasonLabel: string;
  reasonPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successTitle: string;
  successMessage: string;
  backButton: string;
  privacyTitle: string;
  privacyText: string;
  dataTitle: string;
  dataText: string;
  processTitle: string;
  processText: string;
  contactTitle: string;
  contactText: string;
}> = {
  en: {
    title: "Data Deletion Request",
    subtitle: "Request Account & Data Removal",
    description: "We respect your privacy. Use this form to request the deletion of your account and associated data from Fergeh.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    reasonLabel: "Reason for Deletion",
    reasonPlaceholder: "Please tell us why you want to delete your account...",
    messageLabel: "Additional Information",
    messagePlaceholder: "Any additional details you'd like to share...",
    submitButton: "Submit Deletion Request",
    successTitle: "Request Submitted",
    successMessage: "We've received your data deletion request. We'll process it within 30 days and send you a confirmation email.",
    backButton: "Back to Home",
    privacyTitle: "Your Privacy Matters",
    privacyText: "We are committed to protecting your personal information and will handle your deletion request with the utmost care and confidentiality.",
    dataTitle: "What Data We Delete",
    dataText: "This includes your account information, learning progress, uploaded content, and any other personal data associated with your account.",
    processTitle: "Our Process",
    processText: "We'll review your request, delete your data within 30 days, and send you a confirmation email once completed.",
    contactTitle: "Need Help?",
    contactText: "If you have questions about this process, please contact us at privacy@fergeh.app"
  },
  ku: {
    title: "داواکاری سڕینەوەی داتا",
    subtitle: "داواکاری لابردنی ئەکاونت و داتا",
    description: "ئێمە ڕێز لە تایبەتمەندی تۆ دەگرین. ئەم فۆرمە بەکاربێنە بۆ داواکردنی سڕینەوەی ئەکاونت و داتای پەیوەندیدار لە فەرگە.",
    nameLabel: "ناوی تەواو",
    emailLabel: "ناونیشانی ئیمەیڵ",
    reasonLabel: "هۆکاری سڕینەوە",
    reasonPlaceholder: "تکایە پێمان بڵێ بۆچی دەتەوێت ئەکاونتەکەت بسڕیتەوە...",
    messageLabel: "زانیاری زیاتر",
    messagePlaceholder: "هەر وردەکاری زیاترێک کە دەتەوێت هاوبەش بکەیت...",
    submitButton: "ناردنی داواکاری سڕینەوە",
    successTitle: "داواکاری نێردرا",
    successMessage: "داواکاری سڕینەوەی داتاکەت وەرگرتووە. لە ماوەی 30 ڕۆژدا پرۆسەی دەکەین و ئیمەیڵێکی پشتڕاستکردنەوە بۆت دەنێرین.",
    backButton: "گەڕانەوە بۆ سەرەکی",
    privacyTitle: "تایبەتمەندی تۆ گرنگە",
    privacyText: "ئێمە پابەندین بە پاراستنی زانیاری کەسی تۆ و داواکاری سڕینەوەکەت بە زۆرەڕێی و نھێنی جێبەجێ دەکەین.",
    dataTitle: "چی داتایەک دەسڕینەوە",
    dataText: "ئەمە بریتییە لە زانیاری ئەکاونت، پێشکەوتنی فێربوون، ناوەڕۆکی بارکراوە، و هەر داتای کەسی ترێک کە پەیوەندی بە ئەکاونتەکەتەوە هەیە.",
    processTitle: "پرۆسەکەمان",
    processText: "داواکاریەکەت پشتڕاست دەکەینەوە، داتاکەت لە ماوەی 30 ڕۆژدا دەسڕینەوە، و ئیمەیڵێکی پشتڕاستکردنەوە دەنێرین کاتێک تەواو بوو.",
    contactTitle: "پێویستت بە یارمەتییە؟",
    contactText: "ئەگەر پرسیارت هەیە لەسەر ئەم پرۆسە، تکایە پەیوەندیمان پێ بکە لە privacy@fergeh.app"
  },
  ar: {
    title: "طلب حذف البيانات",
    subtitle: "طلب حذف الحساب والبيانات",
    description: "نحن نحترم خصوصيتك. استخدم هذا النموذج لطلب حذف حسابك والبيانات المرتبطة به من فرقە.",
    nameLabel: "الاسم الكامل",
    emailLabel: "عنوان البريد الإلكتروني",
    reasonLabel: "سبب الحذف",
    reasonPlaceholder: "يرجى إخبارنا لماذا تريد حذف حسابك...",
    messageLabel: "معلومات إضافية",
    messagePlaceholder: "أي تفاصيل إضافية تود مشاركتها...",
    submitButton: "إرسال طلب الحذف",
    successTitle: "تم إرسال الطلب",
    successMessage: "لقد استلمنا طلب حذف البيانات الخاص بك. سنعالجه خلال 30 يوماً وترسل لك رسالة تأكيد عبر البريد الإلكتروني.",
    backButton: "العودة إلى الصفحة الرئيسية",
    privacyTitle: "خصوصيتك مهمة",
    privacyText: "نحن ملتزمون بحماية معلوماتك الشخصية وسنعالج طلب الحذف الخاص بك بأقصى درجات العناية والسرية.",
    dataTitle: "البيانات التي نحذفها",
    dataText: "يشمل ذلك معلومات حسابك، تقدم التعلم، المحتوى المرفوع، وأي بيانات شخصية أخرى مرتبطة بحسابك.",
    processTitle: "عملية الحذف",
    processText: "سنراجع طلبك، نحذف بياناتك خلال 30 يوماً، وترسل لك رسالة تأكيد عبر البريد الإلكتروني عند الانتهاء.",
    contactTitle: "تحتاج مساعدة؟",
    contactText: "إذا كان لديك أسئلة حول هذه العملية، يرجى الاتصال بنا على privacy@fergeh.app"
  },
};

export default function DataDeletionPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: ""
  });

  const t = translations[lang];
  const isArabic = lang === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Deletion request submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen bg-teslearn-bg flex flex-col justify-center items-center px-4 ${isArabic ? "rtl" : "ltr"} ${lang === "ku" || lang === "ar" ? "ibm-plex-arabic-font" : ""}`}>
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-3xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-teslearn-dark mb-4">{t.successTitle}</h2>
          <p className="text-teslearn-gray mb-8 leading-relaxed">{t.successMessage}</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary-gradient text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            {t.backButton}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-teslearn-bg ${isArabic ? "rtl" : "ltr"} ${lang === "ku" || lang === "ar" ? "ibm-plex-arabic-font" : ""}`}>
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              lang === "en" ? "bg-primary-gradient text-white" : "text-teslearn-gray hover:text-teslearn-dark"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ku")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              lang === "ku" ? "bg-primary-gradient text-white" : "text-teslearn-gray hover:text-teslearn-dark"
            }`}
          >
            کوردی
          </button>
          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              lang === "ar" ? "bg-primary-gradient text-white" : "text-teslearn-gray hover:text-teslearn-dark"
            }`}
          >
            عربي
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-20 left-10 text-primary-gradient text-2xl opacity-5">🔒</div>
        <div className="absolute top-40 right-20 text-primary-gradient text-xl opacity-5">🛡️</div>
        <div className="absolute bottom-40 left-20 text-primary-gradient text-3xl opacity-5">📧</div>
        <div className="absolute bottom-20 right-10 text-primary-gradient text-xl opacity-5">✅</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-2 mb-6">
              <FaTrash className="text-red-500" />
              <span className="text-red-700 font-medium">{t.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-teslearn-dark mb-4">
              {t.subtitle}
            </h1>
            <p className="text-teslearn-gray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-teslearn-dark mb-6 flex items-center gap-3">
                <FaUser className="text-primary-gradient" />
                {t.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-teslearn-dark mb-2">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gradient focus:border-transparent transition-all"
                    placeholder={t.nameLabel}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teslearn-dark mb-2">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gradient focus:border-transparent transition-all"
                    placeholder={t.emailLabel}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teslearn-dark mb-2">
                    {t.reasonLabel} *
                  </label>
                  <textarea
                    required
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gradient focus:border-transparent transition-all resize-none"
                    placeholder={t.reasonPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teslearn-dark mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gradient focus:border-transparent transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-gradient text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <FaTrash />
                  {t.submitButton}
                </button>
              </form>
            </div>

            {/* Information Section */}
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaShieldAlt className="text-blue-500 text-xl" />
                  <h3 className="text-xl font-bold text-teslearn-dark">{t.privacyTitle}</h3>
                </div>
                <p className="text-teslearn-gray leading-relaxed">{t.privacyText}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTrash className="text-green-500 text-xl" />
                  <h3 className="text-xl font-bold text-teslearn-dark">{t.dataTitle}</h3>
                </div>
                <p className="text-teslearn-gray leading-relaxed">{t.dataText}</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCheckCircle className="text-purple-500 text-xl" />
                  <h3 className="text-xl font-bold text-teslearn-dark">{t.processTitle}</h3>
                </div>
                <p className="text-teslearn-gray leading-relaxed">{t.processText}</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaEnvelope className="text-orange-500 text-xl" />
                  <h3 className="text-xl font-bold text-teslearn-dark">{t.contactTitle}</h3>
                </div>
                <p className="text-teslearn-gray leading-relaxed">{t.contactText}</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-teslearn-gray hover:text-teslearn-dark transition-colors"
            >
              ← {t.backButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 