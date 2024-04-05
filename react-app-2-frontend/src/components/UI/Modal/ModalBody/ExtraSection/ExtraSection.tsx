import { ReactNode } from "react"

type ExtraSectionProps = {
   extraSectionContent: {
      title: string
      component: ReactNode
   }
}

export default function ExtraSection({
   extraSectionContent,
}: ExtraSectionProps) {
   const { component, title } = extraSectionContent
   return (
      <div className="flex flex-col bg-light-secondary overflow-auto py-5 w-full">
         <h6 className="font-semibold text-dark text-xl px-5">{title}</h6>
         <div className="flex flex-col gap-2 pt-6 px-10">{component}</div>
      </div>
   )
}
