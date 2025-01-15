import { ProjectCard } from "@/components/_ui/ProjectCard"

export const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-2 w-full">
      {[...Array(2)].map((_, index) => (
        
        <ProjectCard key={index} src='/images/portifolio.png' />
      ))}
    </div>
  )
}