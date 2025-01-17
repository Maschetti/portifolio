'use client'

import { useSection } from "@/hooks/SectionContext";

type HeaderButtonProps = {
  text: string;
}

export const HeaderButton = ({ text }: HeaderButtonProps) => {
  const { changeSection } = useSection();
  return (
    <li className="hover:cursor-pointer" onClick={() => changeSection(text.toLowerCase())}>
      <p className="text-lg uppercase">
        {text.toUpperCase()}
      </p>
    </li>
  )
}