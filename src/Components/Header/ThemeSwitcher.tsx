"use client"
import { useTheme } from "@/hooks/useTheme";
import IconButton from "./../_ui/IconButton";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} title="Change Theme">
      {theme === 'dark' ? <IconButton><Sun /></IconButton > : <IconButton><Moon /></IconButton>}
    </button>
  )
};