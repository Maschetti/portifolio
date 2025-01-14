
interface HeaderButtonProps {
  text: string
}

export const HeaderButton = ({text}: HeaderButtonProps) => {
  return (
    <li className="hover:cursor-pointer">
      <p className="text-lg font-extralight">
        {text}
      </p>
    </li>
  );
}
