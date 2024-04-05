import { IconName } from "@fortawesome/fontawesome-svg-core"
import { IconButton } from "@material-tailwind/react"

type IconOnlyButtonProps = {
   onClick: () => void
   size:
      | "xs"
      | "sm"
      | "base"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl"
   icon: IconName
   customClasses?: string
}

export default function IconOnlyButton({
   onClick,
   size,
   icon,
   customClasses,
}: IconOnlyButtonProps) {
   return (
      <IconButton
         ripple={false}
         size="sm"
         onClick={onClick}
         className={`ml-4 bg-transparent text-main shadow-none hover:shadow-none ${customClasses}`}
      >
         <i className={`fa fa-${icon} text-${size}`} />
      </IconButton>
   )
}
