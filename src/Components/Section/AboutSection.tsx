import Image from 'next/image';

export const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-screen-xl mx-auto w-full">
      <p>
        Hello, I&apos;m Mateus Viana, a Computer Science student. Welcome to my portifolio, where I share a bit of my
        projects and past experiences.
      </p>
      <p>
        I launched this portfolio as a way to gain experience, explore new ideas, and develop projects that interest me.
        Along the way, I decided to share my experiences to help others who might be going through similar journeys.
      </p>

      <div className='w-full flex justify-center'>
        <Image
          src={'/images/pic2.png'}
          alt="Print do aplicativo"
          width={900}
          height={1600}
          className="rounded-xs border border-border object-cover max-w-md"
        />
      </div>


    </div>
  );
};