"use client"

import { TextInput } from "@/Components/_ui/TextInput";
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
        max-w-sm
        sm:max-w-md
        md:max-w-md
        lg:max-w-lg
        xl:max-w-xl
      "
    >

      <div>
        <label htmlFor="name" className="block text-sm font-medium">Nome</label>
        <TextInput
          id='name'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder='Your name...'
          border
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
        <TextInput
          type='email'
          id='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email...'
          border
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium">Assunto</label>
        <TextInput
          id='subject'
          value={subject}
          required
          onChange={(e) => setSubject(e.target.value)}
          placeholder='What is the message about...'
          border
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          placeholder='What is your message?'
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
          Enviar
        </button>
      </div>

    </form>
  );
};

export default ContactForm;