"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label="Choose language">
      {(["en", "ta"] as const).map((value) => (
        <button key={value} type="button" className={`lang-btn${language === value ? " active" : ""}`}
          aria-pressed={language === value} onClick={() => setLanguage(value)}>
          {value === "en" ? "EN" : "தமிழ்"}
        </button>
      ))}
    </div>
  );
}
