import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import FormInput from "@/components/UI/Form/FormInput/FormInput"

type ModalTaskDescriptionProps = {
   description: string
   changeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
   toggleEdit: () => void
   editMode: boolean
}

export default function ModalTaskDescription({
   description,
   changeDescription,
   toggleEdit,
   editMode,
}: ModalTaskDescriptionProps) {
   const displayDescription = editMode ? (
      <div className="flex items-start">
         <FormInput
            multiline
            inputLabel="Description"
            value={description}
            required
            variant="outlined"
            changeHandler={changeDescription}
            rows={6}
         />
         <IconOnlyButton
            onClick={() => console.log("edit")}
            size={"5xl"}
            icon={"check-square"}
            customClasses="mt-1"
         />
      </div>
   ) : (
      <div className="flex items-start gap-4">
         <p className="text-dark overflow-auto max-h-40 text-main text-sm">
            {description}
         </p>
         <IconOnlyButton
            onClick={() => console.log("edit")}
            size={"4xl"}
            icon={"file-edit"}
            customClasses="mt-1"
         />
      </div>
   )

   return <div className="pl-4 w-5/6">{displayDescription}</div>
}
