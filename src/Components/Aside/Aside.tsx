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
        <div title="Send me an email">
          <IconButton>
            <Mail />
          </IconButton>
        </div>

        <div title="Check my Github">
          <IconButton>
            <Github />
          </IconButton>
        </div>

        <div title="Check my Linkedin">
          <IconButton>
            <Linkedin />
          </IconButton>
        </div>

        <div title="Check my Resume">
          <IconButton>
            <FileUser />
          </IconButton>
        </div>

      </div>
    </aside>
  );
};