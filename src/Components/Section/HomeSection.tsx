import { basePath } from "@/constants/basePath";
import { Section } from "@/constants/dictionaries/DictionaryType";
import { ProjectCard } from "../_ui/ProjectCard";
import { Separator } from "../_ui/Separator";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="text-xl text-secondary sm:text-3xl">{text}</h2>
  );
};

type HomeSectionProps = {
  messages: Section;
}

export const HomeSection = ({ messages }: HomeSectionProps) => {

  return (
    <div className="p-4 w-full flex flex-col gap-8">

      <div className="flex flex-col gap-2">
        <Title text={messages.first} />
        <div className="grid grid-cols-1 w-full lg:grid-cols-2">
          {[...Array(2)].map((_, index) => (
            <ProjectCard key={index} src={`${basePath}images/portifolio.png`} />
          ))}
        </div>
      </div>

      <Separator gradient />

      <div className="flex flex-col gap-2">
        <Title text={messages.second} />
        <div className="grid grid-cols-1 w-full lg:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <ProjectCard key={index} src={`${basePath}images/portifolio.png`} />
          ))}
        </div>
      </div>
    </div>
  );
};