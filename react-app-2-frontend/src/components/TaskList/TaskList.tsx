import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListBody from "./TaskListBody/TaskListBody"
import AddCardButton from "../UI/Buttons/AddCardButton/AddCardButton"
import TaskCardModel from "../../models/TaskCard.model"

type TaskListProps = {
   task_list_name: string
   task_list_id: string
   tasks: TaskCardModel[]
   onAddTask: () => void
}

export default function TaskList({
   task_list_name,
   task_list_id,
   tasks,
   onAddTask,
}: TaskListProps) {
   function handleAddTask() {
      onAddTask()
   }

   return (
      <div className="flex flex-col space-y-2 w-full max-h-[550px] gap-2">
         <TaskListHeader
            taskListName={task_list_name}
            taskListCardsAmount={tasks.length}
            taskListId={task_list_id}
         />
         <AddCardButton onClick={handleAddTask} />
         <TaskListBody
            tasks={tasks.filter((i) => i.task_list_id === task_list_id)}
            taskListName={task_list_name}
         />
      </div>
   )
}
