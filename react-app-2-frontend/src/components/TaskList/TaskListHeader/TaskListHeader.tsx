import PopOverButton from "@/components/UI/Buttons/PopOverButton/PopOverButton"
import PopOver from "@/components/UI/PopOver/PopOver"
import { createRef, useState } from "react"

type TaskListHeaderProps = {
   onAddTask: () => void
   taskListName: string
   taskListCardsAmount: number
   taskListId: string
}

export default function TaskListHeader({
   onAddTask,
   taskListName,
   taskListCardsAmount,
   taskListId,
}: TaskListHeaderProps) {
   const inputRef = createRef<HTMLInputElement>()
   const [editingMode, setEditingMode] = useState(false)
   const [newListName, setNewListName] = useState(taskListName)
   const listName = taskListName

   const handleEditList = () => {
      setEditingMode(true)
   }

   const handleDeleteList = () => {
      console.log("Deleting list with id: ", taskListId)
   }

   const handleAddCard = () => {
      onAddTask()
   }

   const handleSubmitListName = () => {
      setEditingMode(false)
   }

   const handleCancelEdit = () => {
      setNewListName(taskListName)
      setEditingMode(false)
   }

   const Name = editingMode ? (
      <div className="flex justify-between w-full">
         <input
            ref={inputRef}
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="bg-gray-200 rounded p-1 text-sm"
         />

         <button onClick={handleSubmitListName} className="focus:outline-none">
            <i className="fas fa-check text-green-500"></i>
         </button>
         <button onClick={handleCancelEdit} className="focus:outline-none">
            <i className="fas fa-times text-red-500"></i>
         </button>
      </div>
   ) : (
      <p className="text-dark text-sm">{listName}</p>
   )

   return (
      <div className="bg-transparent border-t-2 border-b-2 border-opacity-20 border-[#222020] flex items-center justify-between py-2 px-4">
         {/* ----------------------------- LIST NAME ----------------------------- */}
         {Name}

         {/* ----------------------------- LIST OPTIONS ----------------------------- */}
         {editingMode ? null : (
            <div className="flex gap-2 items-center">
               <p className="text-dark">{taskListCardsAmount}</p>

               <PopOver>
                  <PopOverButton
                     text="Edit"
                     icon="file-edit"
                     color={"main"}
                     onClick={handleEditList}
                  />
                  <PopOverButton
                     text="Add new task"
                     icon="plus"
                     color={"main"}
                     onClick={handleAddCard}
                  />
                  <PopOverButton
                     text="Delete"
                     icon="trash"
                     color={"red-600"}
                     onClick={handleDeleteList}
                  />
               </PopOver>
            </div>
         )}
      </div>
   )
}
