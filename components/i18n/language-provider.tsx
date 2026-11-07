"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ta";
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, updateLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vaanam-lang");
      if (saved === "ta") updateLanguage(saved);
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(value: Language) {
    updateLanguage(value);
    try { localStorage.setItem("vaanam-lang", value); } catch {}
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
