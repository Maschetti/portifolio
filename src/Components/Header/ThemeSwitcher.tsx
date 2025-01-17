import IconButton from "./../_ui/IconButton";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  // const {theme, toggleTheme} = useTheme();
  const theme = 'dark';
  return (
    <button>
      {theme === 'dark' ? <IconButton><Sun /></IconButton> : <IconButton><Moon /></IconButton>}
    </button>
  )
};