import { Input, Textarea } from "@material-tailwind/react"

type FormInputProps<T extends HTMLInputElement | HTMLTextAreaElement> = {
   inputLabel: string
   value: string
   multiline?: boolean
   required: boolean
   variant: "standard" | "outlined" | "static"
   changeHandler: (e: React.ChangeEvent<T>) => void
   rows?: number
   classes?: string
}

type FormInputPropsInput = FormInputProps<HTMLInputElement>
type FormInputPropsTextarea = FormInputProps<HTMLTextAreaElement>

export default function FormInput({
   inputLabel,
   multiline,
   required,
   variant,
   changeHandler,
   value,
   rows = 4,
   classes,
}: FormInputPropsInput | FormInputPropsTextarea) {
   const noBorder = variant === "static" || variant === "standard"

   return multiline ? (
      <Textarea
         rows={rows}
         label={inputLabel}
         required={required}
         color="teal"
         variant={variant}
         value={value}
         className={`focus:ring-0 focus:outline-none ${noBorder ? "border-0 border-bottom-1" : ""} ${classes}`}
         onChange={
            changeHandler as React.ChangeEventHandler<HTMLTextAreaElement>
         }
      />
   ) : (
      <Input
         label={inputLabel}
         required={required}
         color="teal"
         variant={variant}
         value={value}
         onChange={changeHandler as React.ChangeEventHandler<HTMLInputElement>}
      />
   )
}
