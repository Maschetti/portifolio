"use client"
import { useState, useEffect } from 'react'

const SECTION_KEY = "app-section"

export const useSection = () => {
  const [section, setSection] = useState<string>(() => {
    const  savedSection = localStorage.getItem(SECTION_KEY);
    return savedSection || 'HOME';
  });

  useEffect(() => {
    localStorage.setItem(SECTION_KEY, section);
  }, [section]);

  const changeSection = (section: string) => {
    setSection(() => (section));
    localStorage.setItem(SECTION_KEY, section);
  };

  return { section, changeSection };
};