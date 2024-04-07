import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import { Typography } from "@material-tailwind/react"

type ModalTaskTitleProps = {
   name: string
   handleEditName: () => void
   handleCancelEdit: () => void
   handleSubmitNewName: () => void
   setNewName: (value: string) => void
   newName: string
   editingName: boolean
}

export default function ModalTaskTitle({
   name,
   editingName,
   handleCancelEdit,
   handleEditName,
   handleSubmitNewName,
   newName,
   setNewName,
}: ModalTaskTitleProps) {
   return (
      <div className="flex items-center pl-4">
         <Typography variant="h3" color="blue-gray">
            {editingName ? (
               <div className="flex justify-between w-full">
                  <input
                     value={newName || name}
                     onChange={(e) => setNewName(e.target.value)}
                     className="bg-gray-200 rounded p-1 text-sm"
                  />

                  <button
                     onClick={handleSubmitNewName}
                     className="focus:outline-none"
                  >
                     <i className="fas fa-check text-green-500"></i>
                  </button>
                  <button
                     onClick={handleCancelEdit}
                     className="focus:outline-none"
                  >
                     <i className="fas fa-times text-red-500"></i>
                  </button>
               </div>
            ) : (
               newName || name
            )}
         </Typography>

         <IconOnlyButton
            onClick={handleEditName}
            size={"xl"}
            icon={"file-edit"}
         />
      </div>
   )
}
