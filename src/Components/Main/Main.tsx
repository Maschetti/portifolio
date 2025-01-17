import { Aside } from "../Aside/Aside";
import { Section } from "./../Section/Section";
export const Main = () => {

  return (
    <main className="flex flex-row flex-1 px-10 w-full">
      <Section />
      <Aside />
    </main>
  );
};