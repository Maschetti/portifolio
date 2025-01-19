import { basePath } from "@/constants/basePath";
import { Section } from "@/constants/dictionaries/DictionaryType";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import IconButton from "../_ui/IconButton";
import { Separator } from "../_ui/Separator";

type AsideProps = {
  messages: Section,
};

export const Aside = ({ messages }: AsideProps) => {

  return (
    <aside
      className="
        flex-col
        sticky
        top-32
        z-10 
        self-start

        transition-all
        duration-200
        ease-in-out

        text-sm
        max-w-44

        hidden

        md:flex
        md:max-w-64
        md:text-base


        lg:text-lg
        lg:max-w-xs
      "
    >
      <div className="text-pretty">
        <h1>{messages.greeting}</h1>
        <p className="italic">{messages.text}</p>
      </div>

      <Separator gradient />

      <div className="flex flex-row justify-evenly">
        <a
          title={messages.email}
          href="mailto:mateusvmaschietto@gmail.com"
          target="_blank"
        >
          <IconButton>
            <Mail />
          </IconButton>
        </a>

        <a
          title={messages.github}
          href="https://github.com/Maschetti"
          target="_blank"
        >
          <IconButton>
            <Github />
          </IconButton>
        </a>

        <a
          title={messages.linkedin}
          href="https://www.linkedin.com/in/mateus-viana-maschietto"
          target="_blank"
        >
          <IconButton>
            <Linkedin />
          </IconButton>
        </a>

        <a
          title={messages.resume}
          href={`${basePath}files/MateusVianaCVC.pdf`}
          download
        >
          <IconButton>
            <FileUser />
          </IconButton>
        </a>

      </div>
    </aside>
  );
};