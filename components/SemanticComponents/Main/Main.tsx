import { Aside } from "../Aside/Aside";
import { Projects } from "../Sections/Projects";

export const Main = () => {

  return (
    <main className="flex flex-row flex-1 px-10">
      <Projects />
      <Aside />
    </main>
  );
};