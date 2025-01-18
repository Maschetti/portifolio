import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import IconButton from "../_ui/IconButton";
import { Separator } from "../_ui/Separator";

export const Aside = () => {

  return (
    <aside className="max-w-xs flex flex-col sticky top-32 z-10 self-start">
      <div className="text-pretty">
        <h1>Welcome</h1>
        <p className="italic">I am Mateus, a Computer Science Student at PUC Minas. I created this site to use as a portifolio for my work and experiences</p>
      </div>

      <Separator gradient />

      <div className="flex flex-row justify-evenly">
        <a
          title="Send me an email"
          href="mailto:mateusvmaschietto@gmail.com"
          target="_blank"
        >
          <IconButton>
            <Mail />
          </IconButton>
        </a>

        <a
          title="Check my Github"
          href="https://github.com/Maschetti"
          target="_blank"
        >
          <IconButton>
            <Github />
          </IconButton>
        </a>

        <a
          title="Check my Linkedin"
          href="https://www.linkedin.com/in/mateus-viana-maschietto"
          target="_blank"
        >
          <IconButton>
            <Linkedin />
          </IconButton>
        </a>

        <a
          title="Check my Resume"
          href="/files/MateusVianaCVC.pdf"
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