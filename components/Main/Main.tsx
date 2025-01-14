import { Aside } from "../Aside/Aside";
import { ProjectCard } from "./ProjectCard";

export const Main = () => {

  return (
    <main className="flex flex-row flex-1 px-10">
      <section className="flex-1 grid grid-cols-2 gap-x-2 gap-y-2 relative p-6">
        {[...Array(10)].map((_, index) => (
          
          <ProjectCard key={index} src='/images/portifolio.png' />
        ))}
      </section>
      <Aside />
    </main>
  );
};