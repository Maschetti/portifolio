type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
  required?: boolean;
  border?: boolean;
  type?: 'email' | 'text';
}

export const TextInput = ({ value, onChange, placeholder, id, border = false, type = 'text' }: TextInputProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        text-sm
        sm:text-lg
        bg-transparent
        text-text
        focus:outline-none
        focus:border-transparent
        rounded-sm
        p-2
        w-full
        ${border ? 'border border-border' : 'border-none'}
        transition
        delay-150
      `}
    />
  )
}