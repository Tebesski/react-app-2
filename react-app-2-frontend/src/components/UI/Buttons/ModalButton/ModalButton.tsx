type ModalButtonProps = {
   text: string
   icon: string
   width?: string | number
   onClick?: () => void
   color?: string
   activeBgColor?: string
   activeBorderColor?: string
   activeColor?: string
}

export default function ModalButton({
   text,
   icon,
   color = "main",
   activeBgColor = "main-darker",
   activeColor = "light",
   activeBorderColor = "main",
   onClick,
   width,
}: ModalButtonProps) {
   return (
      <button
         onClick={onClick}
         className={`btn small-btn icon-btn w-${width} text-${color} border-${color} border-dashed hover:bg-light hover:border-main active:bg-${activeBgColor} active:border-${activeBorderColor} active:text-${activeColor} transition-colors duration-200 ease-in-out`}
      >
         <i className={`fa-solid fa-${icon}`} />
         <span>{text}</span>
      </button>
   )
}
