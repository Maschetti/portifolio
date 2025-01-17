'use client'

import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { Working } from "../_ui/Working";
import { useSection } from "@/hooks/SectionContext";

export const Section = () => {
  const { section } = useSection();
  console.log(section)
  return (
    <section className="p-6 flex-1">
      <h1 className="text-secondary text-5xl italic">{section.toUpperCase()}</h1>
      {section === 'home' && <Working />}
      {section === 'sobre' && <AboutSection />}
      {section === 'projetos' && <ProjectsSection />}
      {section == 'fórum' && <Working />}
      {section === 'contato' && <ContactSection />}
    </section>
  )
};