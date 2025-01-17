import { Wrench } from "lucide-react"

export const Working = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <Wrench size={100} className="text-secondary" />
      <h1 className="text-3xl">In progress...</h1>
    </div>
  )
}