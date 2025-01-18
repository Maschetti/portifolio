'use client'

import { useSection } from "@/hooks/SectionContext";
import { Working } from "../_ui/Working";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";

export const Section = () => {
  const { section } = useSection();

  return (
    <section
      className="
        flex-1 
        py-4 
        sm:py-6 
        transition-all
        duration-200
        ease-in-out
      "
    >
      <h1 className="text-secondary text-3xl sm:text-5xl italic ">{section.toUpperCase()}</h1>
      {section === 'home' && <HomeSection />}
      {section === 'sobre' && <AboutSection />}
      {section === 'projetos' && <ProjectsSection />}
      {section == 'fórum' && <Working />}
      {section === 'contato' && <ContactSection />}
    </section>
  )
};