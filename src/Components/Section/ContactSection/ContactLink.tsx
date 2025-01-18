type ContactLinkProps = {
  link: string;
  href: string;
  label: string;
}

export const ContactLink = ({ link, label, href }: ContactLinkProps) => {
  return (
    <div className="flex items-start gap-2">
      <span className="font-normal w-24">{label}:</span>
      <a href={href} target="_blank" className="text-secondary hyphens-auto break-all">{link}</a>
    </div>
  )
};