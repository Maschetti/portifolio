import { Section as SectionType } from "@/constants/dictionaries/DictionaryType";
import { Working } from "../_ui/Working";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";

type SectionProps = {
  messages: SectionType,
  section: string,
}

export const Section = ({ messages, section }: SectionProps) => {
  const title = messages.title;
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
      <h1 className="text-secondary text-3xl sm:text-5xl italic ">{title.toUpperCase()}</h1>
      {section === 'home' && <HomeSection messages={messages} />}
      {section === 'about' && <AboutSection messages={messages} />}
      {section === 'projects' && <ProjectsSection />}
      {section == 'forum' && <Working />}
      {section === 'contact' && <ContactSection messages={messages} />}
    </section>
  )
};