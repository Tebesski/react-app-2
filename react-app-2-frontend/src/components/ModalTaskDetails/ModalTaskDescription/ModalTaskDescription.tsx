import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import FormInput from "@/components/UI/Form/FormInput/FormInput"

type ModalTaskDescriptionProps = {
   description: string
   changeDescription: (value: string) => void
   toggleEdit: () => void
   cancelEdit: () => void
   submitNewDescription: () => void
   newDescription: string
   editingDescription: boolean
}

export default function ModalTaskDescription({
   description,
   changeDescription,
   toggleEdit,
   cancelEdit,
   submitNewDescription,
   newDescription,
   editingDescription,
}: ModalTaskDescriptionProps) {
   const handleEditDescription = (description: string) => {
      changeDescription(description)
   }

   const displayDescription = editingDescription ? (
      <div className="flex items-start">
         <FormInput
            multiline
            inputLabel="Description"
            value={newDescription || description}
            required
            variant="outlined"
            changeHandler={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
               handleEditDescription(e.target.value)
            }
            rows={6}
         />
         <IconOnlyButton
            onClick={submitNewDescription}
            size={"5xl"}
            icon={"check-square"}
            customClasses="mt-1"
         />
         <IconOnlyButton
            onClick={cancelEdit}
            size={"5xl"}
            icon={"times"}
            customClasses="mt-1"
         />
      </div>
   ) : (
      <div className="flex items-start gap-4">
         <p className="text-dark overflow-auto max-h-40 text-sm">
            {description}
         </p>
         <IconOnlyButton
            onClick={toggleEdit}
            size={"4xl"}
            icon={"file-edit"}
            customClasses="mt-1"
         />
      </div>
   )

   return <div className="pl-4 w-5/6">{displayDescription}</div>
}
