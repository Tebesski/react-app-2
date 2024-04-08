import { deleteTaskList, updateTaskListName } from "@/api/task-list.api"
import PopOverButton from "@/components/UI/Buttons/PopOverButton/PopOverButton"
import PopOver from "@/components/UI/PopOver/PopOver"
import { openModal } from "@/reducers/modal.reducer"
import {
   deleteCurrentList,
   deleteList,
   renameCurrentTaskList,
} from "@/reducers/task-list.reducer"
import { createRef, useState } from "react"
import { useDispatch } from "react-redux"

type TaskListHeaderProps = {
   taskListName: string
   taskListCardsAmount: number
   taskListId: string
}

export default function TaskListHeader({
   taskListName,
   taskListCardsAmount,
   taskListId,
}: TaskListHeaderProps) {
   const inputRef = createRef<HTMLInputElement>()
   const dispatch = useDispatch()
   const [editingMode, setEditingMode] = useState(false)
   const [newListName, setNewListName] = useState(taskListName)

   const handleEditList = () => {
      setEditingMode(true)
      inputRef.current?.focus()
   }

   async function handleDeleteList() {
      await deleteTaskList(taskListId)
      dispatch(deleteList(taskListId))
      dispatch(deleteCurrentList(taskListId))
   }

   const handleAddCard = () => {
      dispatch(openModal("addTaskModal"))
   }

   async function handleSubmitListName() {
      setEditingMode(false)
      await updateTaskListName(taskListId, newListName)
      dispatch(
         renameCurrentTaskList({
            task_list_id: taskListId,
            task_list_name: newListName,
         })
      )
      setNewListName("")
   }

   const handleCancelEdit = () => {
      setEditingMode(false)
      setNewListName("")
   }

   const Name = editingMode ? (
      <div
         className="flex justify-between w-full"
         data-testid="task-list-editing-mode-on"
      >
         <input
            ref={inputRef}
            value={newListName || taskListName}
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
      <p className="text-dark text-sm" data-testid="task-list-editing-mode-off">
         {taskListName}
      </p>
   )

   return (
      <div
         className="bg-transparent border-t-2 border-b-2 border-opacity-20 border-[#222020] flex items-center justify-between py-2 px-4"
         data-testid="task-list-header"
      >
         {/* ----------------------------- LIST NAME ----------------------------- */}
         {Name}

         {/* ----------------------------- LIST OPTIONS ----------------------------- */}
         {editingMode ? null : (
            <div
               className="flex gap-2 items-center"
               data-testid="task-list-options-editing-mode-off"
            >
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
