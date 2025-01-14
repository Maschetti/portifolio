import { ProjectCard } from "@/components/_ui/ProjectCard"

export const Projects = () => {
  return (
    <section className="flex-1 grid grid-cols-2 gap-x-2 gap-y-2 p-6">
      {[...Array(2)].map((_, index) => (
        
        <ProjectCard key={index} src='/images/portifolio.png' />
      ))}
    </section>
  )
}