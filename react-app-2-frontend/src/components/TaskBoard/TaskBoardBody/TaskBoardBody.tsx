import TaskList from "@/components/TaskList/TaskList"
import { ITaskList } from "@/models/TaskList.model"

type TaskBoardBodyProps = {
   taskLists: ITaskList[]
}

export default function TaskBoardBody({ taskLists }: TaskBoardBodyProps) {
   const tasks = [
      {
         task_name: "Task 1",
         task_description: "This is a description for task 1.",
         task_due_date: "2022-01-31",
         task_priority: "High",
         task_id: "1",
         task_list_id: "1",
         task_creation_date: "2022-01-01",
      },
   ]
   return (
      <div className="flex flex-row justify-start items-start gap-4 overflow-auto pb-5 w-full">
         {taskLists.map((taskList) => (
            <div className="flex-basis-22">
               <TaskList
                  key={taskList.task_list_id}
                  tasks={tasks}
                  searchQuery={""}
                  {...taskList}
               />
            </div>
         ))}
      </div>
   )
}
