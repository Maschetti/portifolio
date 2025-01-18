import { Languages } from "lucide-react";
import IconButton from "./../_ui/IconButton";

type LanguageSwitcherProps = {
  changeLanguage: () => void;
  tooltip?: string;
};

export const LanguageSwitcher = ({ changeLanguage, tooltip }: LanguageSwitcherProps) => {

  return (
    <div
      className="hover:cursor-pointer"
      title={tooltip}
      onClick={changeLanguage}
    >
      <IconButton>
        <Languages />
      </IconButton>
    </div>
  );
};