import SearchBar from "../_ui/SearchBar";
import { Separator } from "../_ui/Separator";
import { HeaderButton } from "./HeaderButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const navItems = ["Home", "Sobre", "Projetos", "Fórum", "Contato"];

  return (
    <header className="sticky z-10 top-0 w-full background">
      <ul className="flex flex-row justify-evenly items-center py-4">
        {navItems.map((item, index) => (
          <HeaderButton key={index} text={item}></HeaderButton>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <SearchBar />
        </li>

      </ul>

      <Separator noSpacingEnd noSpacingStart />
    </header>
  );
};