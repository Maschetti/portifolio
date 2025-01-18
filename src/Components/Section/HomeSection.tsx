import { ProjectCard } from "../_ui/ProjectCard"

export const HomeSection = () => {

  return (
    <div className="p-4 w-full flex flex-col gap-8">

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-secondary">Projetos principais...</h2>
        <div className="grid grid-cols-2 w-full">
          {[...Array(2)].map((_, index) => (
            <ProjectCard key={index} src='/images/portifolio.png' />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-secondary">Ultimos projetos...</h2>
        <div className="grid grid-cols-2 w-full">
          {[...Array(4)].map((_, index) => (
            <ProjectCard key={index} src='/images/portifolio.png' />
          ))}
        </div>
      </div>
    </div>
  )
}