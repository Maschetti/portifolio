import { ProjectsSection } from "./ProjectsSection";

export const Section = () => {
  const section = "projects";

  return (
    <section className="p-6 flex-1">
      <h1 className="text-secondary text-5xl italic">{section.toUpperCase()}</h1>
      {section ? <ProjectsSection /> : 'section'}
    </section>
  )
};