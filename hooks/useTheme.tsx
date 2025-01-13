"use client"
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark';

const THEME_KEY = 'app-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const  savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
