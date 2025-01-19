"use client"

import { useLanguage } from "@/hooks/LanguageContext";
import { useSection } from "@/hooks/SectionContext";
import { Aside } from "../Aside/Aside";
import { Section } from "./../Section/Section";

export const Main = () => {
  const { section } = useSection();
  const { getMessages } = useLanguage();
  const asideMessages = getMessages('aside');

  const sectionPath = `${section}Section`;
  return (
    <main className="flex flex-row flex-1 px-2 w-full">
      <Section section={section} messages={getMessages(sectionPath)} />
      <Aside messages={asideMessages} />
    </main>
  );
};