
interface HeaderButtonProps {
  text: string;
  onClick: (section: string) => void;
  navKey: string;
}

export const HeaderButton = ({text, onClick, navKey}: HeaderButtonProps) => {
  return (
    <li className="hover:cursor-pointer" onClick={() => onClick(navKey)}>
      <p className="text-lg uppercase">
        {text.toUpperCase()}
      </p>
    </li>
  );
}
