'use client'
import { navItens } from "@/constants/HeaderItens";
import { useLanguage } from "@/hooks/LanguageContext";
import { Separator } from "./../_ui/Separator";
import { HeaderButton } from "./HeaderButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const { getMessages, toggleLanguage } = useLanguage();
  const messages = getMessages('header');

  return (
    <header
      className="
        sm:sticky
        sm:z-10
        sm:top-0
        sm:w-full
        sm:bg-background
        sm:block

        transition-transform
        duration-500
        ease-in-out
      "
    >
      <ul className="flex flex-row justify-evenly items-center py-4 bg-background">
        {navItens.map((item, index) => (
          <HeaderButton
            key={index}
            text={messages[item]}
            navItem={item}
          />
        ))}
        <li>
          <ThemeSwitcher tooltip={messages["theme"]} />
        </li>
        <li>
          <LanguageSwitcher tooltip={messages["language"]} changeLanguage={toggleLanguage} />
        </li>
      </ul>

      <Separator noSpacingEnd noSpacingStart />
    </header>
  );
};