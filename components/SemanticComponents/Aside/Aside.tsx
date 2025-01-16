import IconButton from "@/components/_ui/IconButton";
import { Separator } from "@/components/_ui/Separator";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Aside = () => {

  return (
    <aside className="max-w-xs flex flex-col sticky top-32 z-10 self-start">
      <div className="text-pretty">
        <h1>Welcome</h1>
        <p className="italic">I am Mateus, a Computer Science Student at PUC Minas. I created this site to use as a portifolio for my work and experiences</p>
      </div>

      <Separator gradient />

      <div className="flex flex-row justify-evenly">
        <IconButton>
          <Mail />
        </IconButton>
        <IconButton>
          <Github />
        </IconButton>
        <IconButton>
          <Linkedin />
        </IconButton>
        <IconButton>
          <FileUser />
        </IconButton>
        
      </div>
    </aside>
  );
};
