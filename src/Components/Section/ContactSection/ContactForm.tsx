"use client"

import { TextInput } from "@/Components/_ui/TextInput";
import { useLanguage } from "@/hooks/LanguageContext";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário
    console.log({ name, email, subject, message });
  };

  const { getMessages } = useLanguage();
  const formMessages = getMessages('contactForm');

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        mx-auto
        rounded-lg
        flex
        flex-col
        gap-4
        max-w-2xl
      "
    >

      <div>
        <label htmlFor="name" className="block text-sm font-medium">{formMessages.name}</label>
        <TextInput
          id='name'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder={formMessages.namePlaceholder}
          border
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">{formMessages.email}</label>
        <TextInput
          type='email'
          id='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder={formMessages.emailPlaceholder}
          border
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium">{formMessages.about}</label>
        <TextInput
          id='subject'
          value={subject}
          required
          onChange={(e) => setSubject(e.target.value)}
          placeholder={formMessages.aboutPlaceholder}
          border
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">{formMessages.message}</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder={formMessages.messagePlaceholder}
          className="
            text-sm
            sm:text-lg

            block
            w-full
            p-2
            border
            border-border
            rounded-sm
            shadow-sm
            bg-transparent
            focus:border-transparent
            focus:outline-none
            ring-transparent
            transition-transform
            delay-150
            ease-linear
            
          "
        />
      </div>

      <div className='flex items-center'>
        <button
          type="submit"
          className="
            w-full
            max-w-xs
            p-2
            font-normal
            rounded-md
            hover:bg-secondary 
            focus:outline-none
            transition-colors
            delay-150
            m-auto
          "
        >
          {formMessages.submit}
        </button>
      </div>

    </form>
  );
};

export default ContactForm;