interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'; // Define a orientação do separador
  noSpacingStart?: boolean; // Remove o espaçamento no início
  noSpacingEnd?: boolean; // Remove o espaçamento no final
  children?: React.ReactNode; // Conteúdo opcional a ser exibido no separador
}

export const Separator = ({
  orientation = 'horizontal',
  noSpacingStart = false,
  noSpacingEnd = false,
  children,
}: SeparatorProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`flex items-center justify-center ${
        isHorizontal
          ? `${noSpacingStart ? '' : 'mt-4'} ${noSpacingEnd ? '' : 'mb-4'}` // Espaçamento vertical
          : `flex-col ${noSpacingStart ? '' : 'ml-4'} ${noSpacingEnd ? '' : 'mr-4'}` // Espaçamento horizontal
      }`}
    >
      {isHorizontal ? (
        <div className="relative w-full flex items-center">
          <div className="flex-1 h-[1px] bg-secondary"></div>
            {children && <span className="px-4 text-secondary whitespace-nowrap">{children}</span>}
          <div className="flex-1 h-[1px] bg-secondary"></div>
        </div>
      ) : (
        <div className="relative h-full flex flex-col items-center">
          <div className="w-[1px] flex-1 bg-secondary"></div>
            {children && <span className="py-4 text-secondary whitespace-nowrap transform rotate-90">{children}</span>}
          <div className="w-[1px] flex-1 bg-secondary"></div>
        </div>
      )}
    </div>
  );
};
