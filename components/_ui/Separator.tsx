interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'; // Define a orientação do separador
  noSpacingStart?: boolean; // Remove o espaçamento no início
  noSpacingEnd?: boolean; // Remove o espaçamento no final
  children?: React.ReactNode; // Conteúdo opcional a ser exibido no separador
  gradient?: boolean; // Define se o gradiente será aplicado
}

export const Separator = ({
  orientation = 'horizontal',
  noSpacingStart = false,
  noSpacingEnd = false,
  children,
  gradient = false,
}: SeparatorProps) => {
  const isHorizontal = orientation === 'horizontal';

  // Classes base para as linhas
  const lineBaseClasses = isHorizontal
    ? "h-[1px]"
    : "w-[1px]";

  // Gradientes aplicados nas bordas
  const startGradient = gradient
    ? isHorizontal
      ? "from-transparent via-transparent via-5% to-secondary"
      : "from-transparent via-transparent via-5% to-secondary"
    : "bg-secondary";

  const endGradient = gradient
    ? isHorizontal
      ? "from-secondary via-transparent via-95% to-transparent"
      : "from-secondary via-transparent via-95% to-transparent"
    : "bg-secondary";

  return (
    <div
      className={`flex items-center justify-center ${
        isHorizontal
          ? `${noSpacingStart ? '' : 'mt-4'} ${noSpacingEnd ? '' : 'mb-4'}`
          : `flex-col ${noSpacingStart ? '' : 'ml-4'} ${noSpacingEnd ? '' : 'mr-4'}`
      }`}
    >
      <div
        className={`relative flex ${
          isHorizontal ? 'w-full items-center' : 'h-full flex-col items-center'
        }`}
      >
        {/* Linha inicial com gradiente */}
        <div className={`flex-1 ${lineBaseClasses} bg-gradient-to-r ${startGradient}`}></div>

        {/* Conteúdo opcional */}
        {children && (
          <span
            className={`
              ${
                isHorizontal
                  ? 'px-4 text-secondary whitespace-nowrap'
                  : 'py-4 text-secondary whitespace-nowrap transform rotate-90'
              }
              text-xl font-normal
            `}
          >
            {children}
          </span>
        )}

        {/* Linha final com gradiente */}
        <div className={`flex-1 ${lineBaseClasses} bg-gradient-to-r ${endGradient}`}></div>
      </div>
    </div>
  );
};
