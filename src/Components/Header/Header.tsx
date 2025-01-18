import { Separator } from "./../_ui/Separator";
import { HeaderButton } from "./HeaderButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const navItems = ["Home", "Sobre", "Projetos", "Fórum", "Contato"];

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
        {navItems.map((item, index) => (
          <HeaderButton key={index} text={item}></HeaderButton>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>

      <Separator noSpacingEnd noSpacingStart />
    </header>
  );
};