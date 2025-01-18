'use client'

import { useSection } from "@/hooks/SectionContext";

type HeaderButtonProps = {
  text: string;
  navItem: string;
}

export const HeaderButton = ({ text, navItem }: HeaderButtonProps) => {
  const { changeSection } = useSection();
  return (
    <li
      className="hover:cursor-pointer"
      onClick={() => changeSection(navItem.toLowerCase())}
    >
      <p
        className="
          text-sm
          hover:text-base

          sm:text-base
          sm:hover:text-lg

          md:text-lg
          md:hover:text-xl

          uppercase
          hover:text-secondary

          transition-all
          duration-200
          ease-in-out

        "
      >
        {text.toUpperCase()}
      </p>
    </li>
  )
}