import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi" | "mr";

export const LANGS: { key: Lang; label: string; flag: string }[] = [
  { key: "en", label: "English", flag: "🇬🇧" },
  { key: "hi", label: "हिंदी", flag: "🇮🇳" },
  { key: "mr", label: "मराठी", flag: "🇮🇳" },
];

type Dict = Record<string, string>;
const DICTS: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.services": "Services",
    "nav.work": "Our Work", "nav.process": "Process", "nav.reviews": "Reviews", "nav.contact": "Contact",
    "cta.whatsappNow": "WhatsApp Now", "cta.orderWA": "Order on WhatsApp", "cta.viewDemo": "View Demo",
    "hero.badge": "🌾 India's #1 AI Studio for Agriculture Brands",
    "hero.t1": "AI Powered", "hero.t2": "Agriculture Ads",
    "hero.t3": "Fertilizer • Pesticide • Seeds • Drip & More",
    "hero.sub": "We are India's specialist AI video studio for Agriculture brands — fertilizer, pesticide, seed, drip-irrigation, tractor & Krishi Seva Kendra ads. We also create commercials for every other business.",
    "trusted": "Trusted by Top Brands",
  },
  hi: {
    "nav.home": "होम", "nav.about": "हमारे बारे में", "nav.services": "सेवाएं",
    "nav.work": "हमारा काम", "nav.process": "प्रक्रिया", "nav.reviews": "समीक्षाएं", "nav.contact": "संपर्क",
    "cta.whatsappNow": "व्हाट्सएप करें", "cta.orderWA": "व्हाट्सएप पर ऑर्डर", "cta.viewDemo": "डेमो देखें",
    "hero.badge": "🌾 कृषि ब्रांड्स के लिए भारत का #1 AI स्टूडियो",
    "hero.t1": "AI पावर्ड", "hero.t2": "कृषि विज्ञापन",
    "hero.t3": "खाद • कीटनाशक • बीज • ड्रिप और भी बहुत कुछ",
    "hero.sub": "हम कृषि ब्रांड्स के लिए भारत का विशेषज्ञ AI वीडियो स्टूडियो हैं — खाद, कीटनाशक, बीज, ड्रिप-इरिगेशन, ट्रैक्टर और कृषि सेवा केंद्र विज्ञापन। हम हर व्यवसाय के लिए कमर्शियल बनाते हैं।",
    "trusted": "टॉप ब्रांड्स द्वारा भरोसेमंद",
  },
  mr: {
    "nav.home": "मुख्यपृष्ठ", "nav.about": "आमच्याबद्दल", "nav.services": "सेवा",
    "nav.work": "आमचे काम", "nav.process": "प्रक्रिया", "nav.reviews": "पुनरावलोकने", "nav.contact": "संपर्क",
    "cta.whatsappNow": "व्हॉट्सॲप करा", "cta.orderWA": "व्हॉट्सॲपवर ऑर्डर", "cta.viewDemo": "डेमो पहा",
    "hero.badge": "🌾 कृषी ब्रँडसाठी भारताचा #1 AI स्टुडिओ",
    "hero.t1": "AI पॉवर्ड", "hero.t2": "कृषी जाहिराती",
    "hero.t3": "खत • कीटकनाशक • बियाणे • ड्रिप आणि बरेच काही",
    "hero.sub": "आम्ही कृषी ब्रँडसाठी भारतातील तज्ज्ञ AI व्हिडिओ स्टुडिओ आहोत — खत, कीटकनाशक, बियाणे, ड्रिप-इरिगेशन, ट्रॅक्टर आणि कृषी सेवा केंद्र जाहिराती. आम्ही प्रत्येक व्यवसायासाठी कमर्शियल बनवतो.",
    "trusted": "टॉप ब्रँड्सचा विश्वास",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nCtx = createContext<Ctx | null>(null);
const KEY = "agg-lang-v1";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as Lang | null;
      if (v && DICTS[v]) setLangState(v);
    } catch { /* ignore */ }
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  };
  const t = (k: string) => DICTS[lang][k] ?? DICTS.en[k] ?? k;
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const v = useContext(I18nCtx);
  if (!v) throw new Error("useI18n must be used inside I18nProvider");
  return v;
}
