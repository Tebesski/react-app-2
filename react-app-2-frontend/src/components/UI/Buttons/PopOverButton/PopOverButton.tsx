type PopOverButtonProps = {
   text: string
   icon: string
   color: string
   onClick: () => void
}

export default function PopOverButton({
   text,
   icon,
   color,
   onClick,
}: PopOverButtonProps) {
   return (
      <button
         onClick={onClick}
         className={`btn icon-btn small-btn justify-start min-w-11/12 h-7 p-2 m-1 text-xs font-semibold text-${color} gap-2 transition-colors duration-200 ease-in-out hover:bg-light active:bg-gray-300 active:border-gray-400 active:text-dark`}
      >
         <i className={`fas fa-${icon}`} />
         {text}
      </button>
   )
}
