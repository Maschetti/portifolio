interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'; // Define a orientação do separador
  noSpacingStart?: boolean; // Remove o espaçamento no início
  noSpacingEnd?: boolean; // Remove o espaçamento no final
}

export const Separator = ({
  orientation = 'horizontal',
  noSpacingStart = false,
  noSpacingEnd = false,
}: SeparatorProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`${
        isHorizontal
          ? `w-full h-[1px] ${noSpacingStart ? '' : 'mt-4'} ${
              noSpacingEnd ? '' : 'mb-4'
            }` // Controle do espaçamento vertical
          : `h-full w-[1px] ${noSpacingStart ? '' : 'ml-4'} ${
              noSpacingEnd ? '' : 'mr-4'
            }` // Controle do espaçamento horizontal
      } bg-separator`}
    ></div>
  );
};
