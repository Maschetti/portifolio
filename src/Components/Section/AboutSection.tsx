import { basePath } from '@/constants/basePath';
import { Section } from '@/constants/dictionaries/DictionaryType';
import Image from 'next/image';

type AboutSectionProps = {
  messages: Section;
};

export const AboutSection = ({ messages }: AboutSectionProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-screen-xl mx-auto w-full">
      <p>
        {messages.first}
      </p>
      <p>
        {messages.second}
      </p>
      <p>
        {messages.third}
      </p>

      <div className='max-w-xs md:max-w-sm lg:max-w-md mx-auto'>
        <Image
          layout='intrinsic'
          src={`${basePath}images/pic2.png`}
          alt={messages.alt}
          width={900}
          height={1600}
          className="rounded-xs border border-border object-cover max-w-md"
        />
      </div>


    </div>
  );
};