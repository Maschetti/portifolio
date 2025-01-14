
interface HeaderButtonProps {
  text: string
}

export const HeaderButton = ({text}: HeaderButtonProps) => {
  return (
    <li className="hover:cursor-pointer">
      <p className="text-lg uppercase">
        {text}
      </p>
    </li>
  );
}
