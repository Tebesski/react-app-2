import TaskBoardManager from "../TaskBoardManager/TaskBoardManager"
import AddListButton from "@/components/UI/Buttons/AddListButton/AddListButton"
import HistoryButton from "@/components/UI/Buttons/HistoryButton/HistoryButton"

type TaskBoardHeaderProps = {
   onOpenHistory: () => void
   onOpenAddList: () => void
   setSearchQuery: (query: string) => void
}

export default function TaskBoardHeader({
   onOpenHistory,
   onOpenAddList,
}: TaskBoardHeaderProps) {
   return (
      <div className="flex justify-between items-center w-full">
         <div className="flex justify-between items-center gap-4">
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
