"use client";

import { tamilTranslations } from "../../lib/i18n/ta";
import { plainTranslationText } from "../../lib/i18n/plain-text";
import { useLanguage } from "./language-provider";

export function TranslatedText({ en, ta }: { en: string; ta?: string }) {
  const { language } = useLanguage();
  const text = language === "ta" ? ta ?? tamilTranslations[en] ?? en : en;
  return <>{plainTranslationText(text)}</>;
}
