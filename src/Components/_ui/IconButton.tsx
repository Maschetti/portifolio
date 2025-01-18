type IconProps = {
  children?: React.ReactNode | string;
};

const IconButton: React.FC<IconProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer hover:bg-secondary rounded-full p-2">
      {children}
    </div>
  );
};

export default IconButton;