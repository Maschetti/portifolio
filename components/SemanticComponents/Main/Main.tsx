import { useLocale, useTranslations } from "next-intl";
import { Aside } from "../Aside/Aside";
import { About } from "../Sections/About";
import { Contact } from "../Sections/Contact/Contact";
import { Projects } from "../Sections/Projects";
import { Section } from "../Sections/Section";

type MainProps = {
  section: string;
}

export const Main = ({section}: MainProps) => {

  const t = useTranslations('Header.nav'); // Use a chave base
  const title = t(section) || section.toUpperCase();

  return (
    <main className="flex flex-row flex-1 px-10">
      <Section title={title.toUpperCase()}>
        {(section === "home") && <Projects />}
        {(section === "project") && <Projects />}
        {(section === "about") && <About />}
        {(section === "contact") && <Contact />}
      </Section>
      <Aside />
    </main>
  );
};