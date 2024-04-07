import { fetchBoardList } from "@/api/board.api"
import TaskBoardManager from "../TaskBoardManager/TaskBoardManager"
import AddListButton from "@/components/UI/Buttons/AddListButton/AddListButton"
import HistoryButton from "@/components/UI/Buttons/HistoryButton/HistoryButton"
import { openModal } from "@/reducers/modal.reducer"
import { RootState } from "@/reducers/root.reducer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBoards } from "@/reducers/board.reducer"
import { Typography } from "@material-tailwind/react"
import phrases from "@/phrases"

export default function TaskBoardHeader() {
   const dispatch = useDispatch()
   const { boards, currentBoard } = useSelector(
      (state: RootState) => state.boardSlice
   )
   const [taskBoardLoading, setTaskBoardLoading] = useState(true)

   useEffect(() => {
      async function fetchBoards() {
         setTaskBoardLoading(true)
         const boards = await fetchBoardList()
         if (boards) {
            dispatch(
               setBoards({
                  boards,
                  currentBoard: undefined,
               })
            )
            setTaskBoardLoading(false)
         }
      }
      fetchBoards()
   }, [])

   function onOpenAddList() {
      dispatch(openModal("addTaskListModal"))
   }

   function onOpenHistory() {
      dispatch(openModal("logHistoryModal"))
   }

   return (
      <div className="flex justify-between items-center w-full pt-6">
         <div className="flex justify-center items-center gap-4">
            <h1 className="font-bold text-xl">
               TASK BOARD 4000
               <Typography variant="small" className="overflow-hidden w-54">
                  {phrases()}
               </Typography>
            </h1>
            <TaskBoardManager boards={boards} />
         </div>

         <div className="flex justify-between items-center gap-4">
            <HistoryButton onClick={onOpenHistory} />
            <AddListButton onClick={onOpenAddList} />
         </div>
      </div>
   )
}
