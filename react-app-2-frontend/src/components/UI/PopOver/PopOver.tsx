import {
   Popover,
   PopoverHandler,
   PopoverContent,
   IconButton,
} from "@material-tailwind/react"

type PopOverProps = { children: React.ReactNode }

export default function PopOver({ children }: PopOverProps) {
   return (
      <Popover placement="bottom-start">
         <PopoverHandler>
            <IconButton
               variant="text"
               size="sm"
               style={{ backgroundColor: "transparent", fontSize: 16 }}
               ripple={false}
               placeholder={undefined}
               onPointerEnterCapture={undefined}
               onPointerLeaveCapture={undefined}
            >
               <i className="fas fa-ellipsis-v"></i>
            </IconButton>
         </PopoverHandler>
         <PopoverContent
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="p-2"
         >
            {children}
         </PopoverContent>
      </Popover>
   )
}
