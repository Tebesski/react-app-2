import TaskBoardManager from "../TaskBoardManager/TaskBoardManager"
import AddListButton from "@/components/UI/Buttons/AddListButton/AddListButton"
import HistoryButton from "@/components/UI/Buttons/HistoryButton/HistoryButton"
import { openModal } from "@/reducers/modal.reducer"
import { useDispatch } from "react-redux"

export default function TaskBoardHeader() {
   const dispatch = useDispatch()

   function onOpenAddList() {
      dispatch(openModal("addTaskListModal"))
   }

   function onOpenHistory() {
      dispatch(openModal("logHistoryModal"))
   }

   return (
      <div className="flex justify-between items-center w-full pt-6">
         <div className="flex justify-center items-center gap-4">
            <h1 className="font-bold text-xl">Task Board 3000</h1>
            <TaskBoardManager />
         </div>

         <div className="flex justify-between items-center gap-4">
            <HistoryButton onClick={onOpenHistory} />
            <AddListButton onClick={onOpenAddList} />
         </div>
      </div>
   )
}
