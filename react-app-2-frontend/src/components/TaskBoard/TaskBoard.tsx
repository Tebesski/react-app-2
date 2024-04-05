import TaskBoardHeader from "./TaskBoardHeader/TaskBoardHeader"
import TaskBoardBody from "../TaskBoard/TaskBoardBody/TaskBoardBody"

export default function TaskBoard() {
   return (
      <div className="mt-2 flex flex-col items-center w-full m-auto gap-6">
         <div className="w-full">
            <TaskBoardHeader
               onOpenHistory={() => {}}
               onOpenAddList={() => {}}
               setSearchQuery={() => {}}
            />
         </div>
         <div className="w-full flex-grow overflow-auto">
            <TaskBoardBody
               taskLists={[
                  {
                     task_list_id: "1",
                     task_list_name: "Task List 1",
                  },
                  {
                     task_list_id: "2",
                     task_list_name: "Task List 2",
                  },
                  {
                     task_list_id: "3",
                     task_list_name: "Task List 2",
                  },
                  {
                     task_list_id: "4",
                     task_list_name: "Task List 2",
                  },
               ]}
            />
         </div>
      </div>
   )
}
