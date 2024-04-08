import TaskCard from "@/components/TaskCard/TaskCard"
import TaskCardModel from "@/models/TaskCard.model"
import { openModal } from "@/reducers/modal.reducer"
import { setSelectedTask } from "@/reducers/task.reducer"
import { useDispatch } from "react-redux"

type TaskListBodyProps = {
   tasks: TaskCardModel[]
   taskListName: string
}

export default function TaskListBody({
   tasks,
   taskListName,
}: TaskListBodyProps) {
   const dispatch = useDispatch()

   function handleOpenTaskDetailsModal(task: TaskCardModel) {
      dispatch(openModal("taskDetailsModal"))
      dispatch(setSelectedTask(task))
   }

   return (
      <div
         className="max-h-[500px] overflow-y-scroll taskListBody-scrollbar-hide"
         data-testid="task-list-body"
      >
         <div className="space-y-2">
            {tasks.map((task) => (
               <TaskCard
                  key={task.task_id}
                  taskName={task.task_name}
                  taskCreationTime={task.task_creation_date}
                  taskDescription={task.task_description}
                  taskDueDate={task.task_due_date}
                  taskPriority={task.task_priority}
                  taskListName={taskListName}
                  taskId={task.task_id}
                  onOpenTaskDetails={() => handleOpenTaskDetailsModal(task)}
               />
            ))}
         </div>
      </div>
   )
}
