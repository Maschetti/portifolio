import { useTranslations } from "next-intl";
import { HeaderButton } from "./HeaderButton";
import SearchBar from "./SearchBar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Separator } from "../../_ui/Separator";

type HeaderProps = {
  setSection: (number: string) => void;
}

export const Header = ({setSection}: HeaderProps) => {
  const t = useTranslations('Header'); 

  const navKeys = t.raw('navKeys') as string[];
  const navItems = navKeys.map((key) => t(`nav.${key}`));
  
  return (
    <header className="sticky z-10 top-0">
      <ul className="flex flex-row justify-evenly items-center py-4 bg-background">
        {navItems.map((item, index) => (
          <HeaderButton key={index} text={item} navKey={navKeys[index]} onClick={setSection} ></HeaderButton>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <SearchBar onSearch={() => {}} />
        </li>
        
      </ul>

      <Separator noSpacingEnd noSpacingStart />
    </header>
  );
};
