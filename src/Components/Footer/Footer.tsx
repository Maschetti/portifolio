import { useLanguage } from "@/hooks/LanguageContext";

export const Footer = () => {
  const { getMessages } = useLanguage();
  const messages = getMessages('footer');

  return (
    <footer className="p-10 w-full">
      <p className="text-pretty max-w-2xl text-xs font-extralight">
        {messages.text}{" "}
        <span className="inline-block relative">
          <a
            href="mailto:mateusvmaschietto@gmail.com"
            target="_blank"
            className="
              text-secondary
              text-sm
              transition-all
              duration-500
              ease-in-out
              inline-block
              transform-gpu
              scale-100
              hover:scale-110
              hover:ml-2
            "
          >
            {messages.email}
          </a>
        </span>
      </p>
    </footer>
  );
};
