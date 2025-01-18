import { ProjectCard } from "./../_ui/ProjectCard"

export const ProjectsSection = () => {
  return (
    <div className="grid grid-cols-1 p-4 w-full lg:grid-cols-2">
      {[...Array(2)].map((_, index) => (

        <ProjectCard key={index} src='./images/portifolio.png' />
      ))}
    </div>
  )
}