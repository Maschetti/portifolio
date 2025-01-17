import { ProjectCard } from "./../_ui/ProjectCard"

export const ProjectsSection = () => {
  return (
    <div className="grid grid-cols-2 p-4 w-full">
      {[...Array(2)].map((_, index) => (

        <ProjectCard key={index} src='./images/portifolio.png' />
      ))}
    </div>
  )
}