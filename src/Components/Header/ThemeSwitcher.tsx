"use client"
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import IconButton from "./../_ui/IconButton";

type ThemeSwitcherProps = {
  tooltip?: string;
};

export const ThemeSwitcher = ({ tooltip }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} title={tooltip}>
      {theme === 'dark' ? <IconButton><Sun /></IconButton > : <IconButton><Moon /></IconButton>}
    </button>
  )
};