type ContactLinkProps = {
  link: string;
  href: string;
  label: string;
}

export const ContactLink = ({ link, label, href }: ContactLinkProps) => {
  return (
    <div className="flex flex-row">
      <label>{label}:</label>
      <a href={href} target="_blank" className=" text-secondary">{link}</a>
    </div>
  )
};