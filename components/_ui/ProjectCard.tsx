import Image from 'next/image';


export const ProjectCard = ({src}: {src: string}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 hover:cursor-pointer hover:shadow-secondary hover:shadow-lg rounded-sm transition-shadow">
      <Image  
        src={src}
        alt="Print do aplicativo"
        width={1920}
        height={1080}
        className="rounded-xs border border-border object-cover"
      />
      <h2 className='text-base underline underline-offset-2 uppercase font-light text-secondary'>Portifolio</h2>
      <p className='text-sm'>This app is a way to share my experiences.</p>
      <p className='text-xs'>Tech: Nextjs, React, Typescript and Tailwindcss.</p>
    </div>
  )
};