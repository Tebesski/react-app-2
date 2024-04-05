import TaskBoardHeader from "./TaskBoardHeader/TaskBoardHeader"
import TaskBoardBody from "../TaskBoard/TaskBoardBody/TaskBoardBody"
import LogHistory from "../LogHistory/LogHistory"
import ModalAddBoard from "../ModalAddBoard/ModalAddBoard"
import ModalAddList from "../ModalAddList/ModalAddList"
import ModalAddTask from "../ModalAddTask/ModalAddTask"
import NotificationContainer from "../UI/Notification/NotificationContainer"
import ModalManageBoards from "../ModalManageBoards/ModalManageBoards"

export default function TaskBoard() {
   const taskLists = [
      {
         task_list_id: "1",
         task_list_name: "Task List 1",
         board_id: "1",
      },
      {
         task_list_id: "2",
         task_list_name: "Task List 2",
         board_id: "1",
      },
      {
         task_list_id: "3",
         task_list_name: "Task List 2",
         board_id: "1",
      },
      {
         task_list_id: "4",
         task_list_name: "Task List 2",
         board_id: "1",
      },
   ]
   return (
      <div className="mt-2 flex flex-col items-center mx-auto w-3/4 m-auto gap-6">
         <div className="w-full">
            <TaskBoardHeader />
         </div>
         <div className="w-full flex-grow overflow-auto">
            <TaskBoardBody taskLists={taskLists} />
         </div>

         <LogHistory />
         <ModalManageBoards />
         <ModalAddBoard />
         <ModalAddList />
         <ModalAddTask />
         <NotificationContainer />
      </div>
   )
}
