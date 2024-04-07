import { Select, Option } from "@material-tailwind/react"
type FromDropdownProps = {
   options: { id: string; value: string }[]
   submitChangeHandler: (id: string) => void
   selectedOpt: string
   label: string
}
export default function FromDropdown({
   options,
   submitChangeHandler,
   selectedOpt,
   label,
}: FromDropdownProps) {
   function handleChange(value: string | undefined) {
      if (value) {
         submitChangeHandler(value)
      }
   }

   return (
      <div className="min-w-60">
         <Select
            label={label}
            defaultValue={options[0].value}
            value={selectedOpt}
            onChange={handleChange}
         >
            {options.map((opt) => (
               <Option key={opt.id} value={opt.value}>
                  {opt.value}
               </Option>
            ))}
         </Select>
      </div>
   )
}
