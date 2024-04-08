import { IconName } from "@fortawesome/fontawesome-svg-core"

type CommonProps = {
   hasText?: boolean
   text?: string
   onClick: () => void
   disabled: boolean
   disabledText: string
}

export type SubmitButtonProps =
   | ({ hasIcon: false; icon?: never } & CommonProps)
   | ({ hasIcon: true; icon: IconName } & CommonProps)

export default function SubmitButton({
   onClick,
   disabled,
   text,
   icon,
   disabledText,
}: SubmitButtonProps) {
   return (
      <button
         data-testid="submit-button"
         onClick={onClick}
         disabled={disabled}
         className={`${
            disabled
               ? "bg-gray-300 border-gray-300 text-dark-soft"
               : "text-light bg-main border-main hover:bg-dark active:bg-light active:border-main active:text-dark transform active:scale-90 transition-transform"
         } btn icon-btn large-btn w-80 px-5 gap-2`}
      >
         {disabled ? (
            <span>{disabledText}</span>
         ) : (
            <>
               {icon && <i className={`fa-solid fa-${icon}`} />}
               {text && <span>{text}</span>}
            </>
         )}
      </button>
   )
}
