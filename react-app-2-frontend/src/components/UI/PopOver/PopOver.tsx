import {
   Popover,
   PopoverHandler,
   PopoverContent,
   IconButton,
} from "@material-tailwind/react"

type PopOverProps = { children: React.ReactNode }

export default function PopOver({ children }: PopOverProps) {
   return (
      <Popover placement="bottom-start" data-testid="popover">
         <PopoverHandler>
            <IconButton
               variant="text"
               size="sm"
               style={{ backgroundColor: "transparent", fontSize: 16 }}
               ripple={false}
            >
               <i className="fas fa-ellipsis-v"></i>
            </IconButton>
         </PopoverHandler>
         <PopoverContent className="p-2">{children}</PopoverContent>
      </Popover>
   )
}
