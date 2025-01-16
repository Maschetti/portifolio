"use client"
interface SectionProps {
  children: React.ReactNode,
  title: string
}

export const Section = ({children, title}: SectionProps) => {
  return (
    <section className="p-6 flex-1">
      <h1 className="text-secondary text-5xl italic">{title}</h1>
      {children}
    </section>
  )
};