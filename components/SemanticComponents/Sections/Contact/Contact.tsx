import { Separator } from "@/components/_ui/Separator";
import { ContactLink } from "./ContactLink";
import ContactForm from "./ContactForm";

export const Contact = () => {
  
  return (
    <div className="p-4">
      <p className="pb-2">Feel free to reach out to me through the following methods:</p>

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
          label="Mobile"
          href="tel:31985470266"
          link="(31)985470266"
        />
      </div>

      <Separator gradient>OR</Separator>

      <p className="pb-4">You can use the contact form below:</p>
      <ContactForm />  
    </div>
  );
};
