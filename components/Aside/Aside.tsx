import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import IconButton from "../_ui/IconButton";

export const Aside = () => {

  return (
    <aside className="max-w-xs divide-y flex flex-col sticky top-32 z-10 self-start">
      <div className="text-pretty pb-10">
        <h1>Welcome</h1>
        <p>I am Mateus, a Computer Science Student at PUC Minas. I created this site to use as a portifolio for my work and experiences</p>
      </div>

      <div className="flex flex-row justify-evenly py-8">
        <IconButton>
          <Mail />
        </IconButton>
        <IconButton>
          <Github />
        </IconButton>
        <IconButton>
          <Linkedin />
        </IconButton>
        
      </div>
    </aside>
  );
};
