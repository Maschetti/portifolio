
interface HeaderButtonProps {
  text: string
}

export const HeaderButton = ({text}: HeaderButtonProps) => {
  return (
    <li className="hover:cursor-pointer ital">
      <p className="text-lg font-extralight uppercase">
        {text}
      </p>
    </li>
  );
}
