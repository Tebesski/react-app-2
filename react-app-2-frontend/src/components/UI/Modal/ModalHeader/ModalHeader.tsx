import { IconButton } from "@material-tailwind/react"

type ModalHeaderProps = {
   onCloseModal?: () => void
   title?: string
   paddingY?: number
}

export default function ModalHeader({
   onCloseModal,
   title,
   paddingY = 6,
}: ModalHeaderProps) {
   return (
      <div
         className={`bg-main h-4 flex items-center justify-between py-${paddingY} px-4 w-full`}
      >
         <p className="text-light font-semibold text-lg">{title || null}</p>

         <IconButton
            className={`focus:outline-none h-7 w-7 max-w-[30px] max-h-[30px] rounded-lg font-size-[10px] line-height-[14px]`}
            onClick={onCloseModal}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
         >
            <i className="fas fa-times text-light text-xl"></i>
         </IconButton>
      </div>
   )
}
