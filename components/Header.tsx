import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations('Header'); 

  const navKeys = t.raw('navKeys') as string[];
  const navItems = navKeys.map((key) => t(`nav.${key}`));
  
  return (
    <header className="sticky z-10 top-0">
      <ul className="flex flex-row gap-10 justify-center border-spacing-y-1">
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </header>
  );
};
