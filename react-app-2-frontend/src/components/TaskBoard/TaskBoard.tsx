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
import ModalTaskDetails from "../ModalTaskDetails/ModalTaskDetails"
import { Typography } from "@material-tailwind/react"
import IconOnlyButton from "../UI/Buttons/IconOnlyButton/IconOnlyButton"
import { setCurrentBoard } from "@/reducers/board.reducer"

export default function TaskBoard() {
   const [taskListLoading, setTaskListLoading] = useState(false)
   const dispatch = useDispatch()

   const { selectedTask } = useSelector((state: RootState) => state.taskSlice)
   const { currentBoard, boards } = useSelector(
      (state: RootState) => state.boardSlice
   )
   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )

   useEffect(() => {
      const cachedBoard = localStorage.getItem("currentBoard")
      if (cachedBoard) {
         dispatch(setCurrentBoard(JSON.parse(cachedBoard)))
      }
   }, [])

   useEffect(() => {
      if (currentBoard) {
         localStorage.setItem("currentBoard", JSON.stringify(currentBoard))
      }
   }, [currentBoard])

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

   const boardName = (
      <Typography variant="h6">
         {currentBoard && `You are using board: `}
         {currentBoard && <b>[ {currentBoard?.board_name} ]</b>}
      </Typography>
   )

   return (
      <div className="mt-2 flex flex-col items-center mx-auto w-3/4 m-auto gap-6">
         <div className="w-full">
            <TaskBoardHeader />
         </div>

         {boardName}

         <div className="w-full flex-grow overflow-auto">
            {currentBoard ? (
               <TaskBoardBody
                  taskList={currentTaskList}
                  taskListLoading={taskListLoading}
               />
            ) : (
               <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center mt-20"
               >
                  You don't have any boards yet! Come one, click on that big
                  fancy{" "}
                  <IconOnlyButton
                     onClick={() => {}}
                     size={"3xl"}
                     icon={"plus-square"}
                     customClasses="ml-1"
                  />
                  {"  "}
                  and create one!
               </Typography>
            )}
         </div>
         <LogHistory />
         <ModalManageBoards />
         <ModalAddBoard />
         <ModalAddList currentBoard={currentBoard?.board_id} />
         <ModalTaskDetails task={selectedTask} />
         <NotificationContainer />
      </div>
   )
}
