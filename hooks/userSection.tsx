"use client"
import { useLocale, useTranslations } from 'next-intl';
import { useState, useEffect } from 'react'

const SECTION_KEY = "app-section"

export const useSection = () => {
  const [section, setSection] = useState<string>(() => {
    const  savedSection = localStorage.getItem(SECTION_KEY);
    return savedSection || 'HOME';
  });

  useEffect(() => {
    document.documentElement.className = section;
    localStorage.setItem(SECTION_KEY, section);
  }, [section]);

  const changeSection = (section: string) => {
    setSection(() => (section));
    localStorage.setItem(SECTION_KEY, section);
  };

  return { section, changeSection };
};