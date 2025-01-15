"use client"
import { useState, useEffect } from 'react'

const SECTION_KEY = "app-section"

export const useSection = () => {
  const [section, setSection] = useState('home');
  (() => {
    const  savedSection = localStorage.getItem(SECTION_KEY);
    return savedSection || 'home';
  });

  useEffect(() => {
    const  savedSection = localStorage.getItem(SECTION_KEY) as string || null;
    if(savedSection) setSection(savedSection);
  }, [section]);

  const changeSection = (section: string) => {
    setSection(() => (section));
    localStorage.setItem(SECTION_KEY, section);
  };

  return { section, changeSection };
};