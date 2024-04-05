import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListBody from "./TaskListBody/TaskListBody"
import AddCardButton from "../UI/Buttons/AddCardButton/AddCardButton"
import TaskCardModel from "../../models/TaskCard.model"

type TaskListProps = {
   tasks: TaskCardModel[]
   task_list_name: string
   task_list_id: string
   searchQuery: string
}

export default function TaskList({
   tasks,
   task_list_name,
   task_list_id,
   searchQuery,
}: TaskListProps) {
   const taskListName = task_list_name

   const filteredTasks = tasks.filter(
      (task) =>
         task.task_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         task.task_description.toLowerCase().includes(searchQuery.toLowerCase())
   )

   return (
      <div className="flex flex-col space-y-2 w-full gap-2">
         <TaskListHeader
            onAddTask={() => {}}
            taskListName={taskListName}
            taskListCardsAmount={tasks.length}
            taskListId={task_list_id}
         />
         <AddCardButton onClick={() => {}} />
         <TaskListBody tasks={filteredTasks} />
      </div>
   )
}
