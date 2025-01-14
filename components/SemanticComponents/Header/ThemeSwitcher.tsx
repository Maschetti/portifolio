import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import IconButton from "../../_ui/IconButton";

export const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <button
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <IconButton><Sun /></IconButton> : <IconButton><Moon /></IconButton>}
    </button>
  )
};
