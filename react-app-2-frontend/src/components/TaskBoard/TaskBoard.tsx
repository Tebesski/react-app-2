import TaskBoardHeader from "./TaskBoardHeader/TaskBoardHeader"
import TaskBoardBody from "../TaskBoard/TaskBoardBody/TaskBoardBody"
import LogHistory from "../LogHistory/LogHistory"
import ModalAddBoard from "../ModalAddBoard/ModalAddBoard"
import ModalAddList from "../ModalAddList/ModalAddList"
import NotificationContainer from "../UI/Notification/NotificationContainer"
import ModalManageBoards from "../ModalManageBoards/ModalManageBoards"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { fetchTaskListByBoardId } from "@/api/task-list.api"
import { setCurrentTaskList } from "@/reducers/task-list.reducer"

export default function TaskBoard() {
   const [taskListLoading, setTaskListLoading] = useState(false)
   const dispatch = useDispatch()

   const { currentBoard } = useSelector((state: RootState) => state.boardSlice)
   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )

   useEffect(() => {
      async function fetchTaskList() {
         if (!currentBoard) return
         setTaskListLoading(true)

         const currentTaskList = await fetchTaskListByBoardId(
            currentBoard.board_id
         )

         setTaskListLoading(false)

         if (!currentTaskList) return
         dispatch(setCurrentTaskList(currentTaskList))
      }
      fetchTaskList()
   }, [currentBoard])

   return (
      <div className="mt-2 flex flex-col items-center mx-auto w-3/4 m-auto gap-6">
         <div className="w-full">
            <TaskBoardHeader />
         </div>
         <div className="w-full flex-grow overflow-auto">
            <TaskBoardBody
               taskList={currentTaskList}
               taskListLoading={taskListLoading}
            />
         </div>

         <LogHistory />
         <ModalManageBoards />
         <ModalAddBoard />
         <ModalAddList currentBoard={currentBoard?.board_id} />
         <NotificationContainer />
      </div>
   )
}
