import { Separator } from "@/Components/_ui/Separator";
import { Section } from "@/constants/dictionaries/DictionaryType";
import ContactForm from "./ContactForm";
import { ContactLink } from "./ContactLink";

type ContactSectionProps = {
  messages: Section
};

export const ContactSection = ({ messages }: ContactSectionProps) => {

  return (
    <div className="p-4 w-full">
      <p className="pb-2">{messages.first}</p>

      <div className="flex flex-col gap-2 max-w-2xl mx-auto">
        <ContactLink
          label="Email"
          href="mateusvmaschietto@gmail.com"
          link="mateusvmaschietto@gmail.com"
        />
        <ContactLink
          label="Linkedin"
          href="https://www.linkedin.com/in/mateus-viana-maschietto/"
          link="https://www.linkedin.com/in/mateus-viana-maschietto/"
        />
        <ContactLink
          label={messages['mobile']}
          href="tel:31985470266"
          link="(31)985470266"
        />
      </div>

      <Separator gradient>{messages.or}</Separator>

      <p className="pb-4">{messages.second}</p>
      <ContactForm />
    </div>
  );
};