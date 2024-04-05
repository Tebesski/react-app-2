import { ReactNode } from "react"
import ExtraSection from "./ExtraSection/ExtraSection"

type ModalBodyProps = {
   children: ReactNode
   extraSectionContent?: {
      title: string
      component: ReactNode
   }
   fullHeight?: boolean
   contentCentered?: boolean
   contentFullWidth?: boolean
   contentPadding?: number
}

export default function ModalBody({
   children,
   extraSectionContent,
   fullHeight,
   contentCentered = true,
   contentFullWidth,
   contentPadding = 5,
}: ModalBodyProps) {
   return (
      <div
         className={`bg-light flex flex-row justify-center gap-2 p-0 ${
            fullHeight ? "h-full" : "min-h-40"
         } w-full`}
      >
         <div
            className={`p-${contentPadding} flex ${
               contentFullWidth ? "w-full" : "w-2/3"
            } ${contentCentered && "mx-auto"} justify-center`}
         >
            {children}
         </div>

         {extraSectionContent && (
            <div className="flex w-1/3">
               <ExtraSection extraSectionContent={extraSectionContent} />
            </div>
         )}
      </div>
   )
}
