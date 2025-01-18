'use client'

import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { Working } from "../_ui/Working";
import { useSection } from "@/hooks/SectionContext";
import { HomeSection } from "./HomeSection";

export const Section = () => {
  const { section } = useSection();

  return (
    <section className="p-6 flex-1">
      <h1 className="text-secondary text-5xl italic">{section.toUpperCase()}</h1>
      {section === 'home' && <HomeSection />}
      {section === 'sobre' && <AboutSection />}
      {section === 'projetos' && <ProjectsSection />}
      {section == 'fórum' && <Working />}
      {section === 'contato' && <ContactSection />}
    </section>
  )
};