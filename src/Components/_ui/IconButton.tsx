type IconProps = {
  children?: React.ReactNode | string;
  tooltip?: string; // Texto a ser exibido no tooltip
};

const IconButton: React.FC<IconProps> = ({ children, tooltip }) => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer hover:bg-secondary rounded-full p-2" title={tooltip}>
      {children}
    </div>
  );
};

export default IconButton;