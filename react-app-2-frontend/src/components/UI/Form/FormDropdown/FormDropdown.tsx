import { Select, Option } from "@material-tailwind/react"

type FromDropdownProps = {
   options: { key: string; value: string }[]
   setSelectedOpt: React.Dispatch<string>
   selectedOpt: string
   label: string
}

export default function FromDropdown({
   options,
   setSelectedOpt,
   selectedOpt,
   label,
}: FromDropdownProps) {
   function handleChange(optValue: string | undefined) {
      setSelectedOpt(optValue!)
   }

   return (
      <div className="min-w-60">
         <Select
            label={label}
            defaultValue={options[0].value}
            onChange={handleChange}
            value={selectedOpt}
         >
            {options.map((opt) => (
               <Option key={opt.key} value={opt.value}>
                  {opt.value}
               </Option>
            ))}
         </Select>
      </div>
   )
}
