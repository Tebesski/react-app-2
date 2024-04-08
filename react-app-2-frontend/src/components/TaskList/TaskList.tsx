import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListBody from "./TaskListBody/TaskListBody"
import AddCardButton from "../UI/Buttons/AddCardButton/AddCardButton"

import { useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"

type TaskListProps = {
   task_list_name: string
   task_list_id: string
   onAddTask: () => void
}

export default function TaskList({
   task_list_name,
   task_list_id,
   onAddTask,
}: TaskListProps) {
   const { tasks } = useSelector((state: RootState) => state.taskSlice)
   const filteredTasks = tasks.filter((i) => i.task_list_id === task_list_id)

   function handleAddTask() {
      onAddTask()
   }

   return (
      <div
         className="flex flex-col space-y-2 w-full min-w-[275.2px] max-h-[550px] gap-2"
         data-testid="task-list"
      >
         <TaskListHeader
            taskListName={task_list_name}
            taskListCardsAmount={filteredTasks.length}
            taskListId={task_list_id}
         />
         <AddCardButton onClick={handleAddTask} />
         <TaskListBody tasks={filteredTasks} taskListName={task_list_name} />
      </div>
   )
}
