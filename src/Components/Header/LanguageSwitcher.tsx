import { Languages } from "lucide-react";
import IconButton from "./../_ui/IconButton";


export const LanguageSwitcher = () => {

  return (
    <div
      className="hover:cursor-pointer"
      title="Change Language"
    >
      <IconButton>
        <Languages />
      </IconButton>
    </div>
  );
};