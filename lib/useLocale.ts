"use client";

import { useEffect, useState } from "react";
import { locales, type Locale } from "./data";

const DEFAULT_LOCALE: Locale = "az";

const isLocale = (value: string): value is Locale =>
  locales.some((locale) => locale.code === value);

const getStoredLocale = () => {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem("locale");
    if (stored && isLocale(stored)) return stored;

    const browserLang = window.navigator.language?.split("-")[0] ?? "";
    if (browserLang && isLocale(browserLang)) return browserLang;
  } catch {
    return null;
  }
  return null;
};

export default function useLocale() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const nextLocale = getStoredLocale();
    if (nextLocale) {
      setLocale(nextLocale);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    try {
      window.localStorage.setItem("locale", locale);
    } catch {
      // Ignore storage errors (private mode, etc.).
    }
  }, [locale]);

  return [locale, setLocale] as const;
}
