'use client'

import { useState } from "react";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection.tsx/ContactSection";
import { Working } from "../_ui/Working";

export const Section = () => {
  const [section] = useState('about');

  return (
    <section className="p-6 flex-1">
      <h1 className="text-secondary text-5xl italic">{section.toUpperCase()}</h1>
      {section === 'home' && <Working />}
      {section === 'about' && <AboutSection />}
      {section === 'projects' && <ProjectsSection />}
      {section === 'forúm' && <Working />}
      {section === 'contact' && <ContactSection />}
    </section>
  )
};