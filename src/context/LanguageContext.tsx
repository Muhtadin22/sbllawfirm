"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationType } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const defaultContext: LanguageContextType = {
  language: "ID",
  setLanguage: () => {},
  t: translations.ID,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ID");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sbl_firm_lang") as Language | null;
      if (saved === "ID" || saved === "EN") {
        setLanguageState(saved);
      }
    } catch {
      // Mengabaikan error jika localStorage dinonaktifkan di browser
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("sbl_firm_lang", lang);
    } catch {
      // Mengabaikan error kuota penyimpanan
    }
  };

  const t = translations[language] || translations.ID;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context || defaultContext;
}