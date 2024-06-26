import TaskDescription from "./TaskDescription/TaskDescription"
import TaskDueDate from "./TaskDueDate/TaskDueDate"
import TaskPriority from "./TaskPriority/TaskPriority"
import TaskMove from "./TaskMove/TaskMove"
import TaskHeader from "./TaskHeader/TaskHeader"

export type TaskCardProps = {
   taskName: string
   taskCreationTime: string
   taskDueDate: string
   taskPriority: string
   taskDescription: string
   taskListName: string
   taskId: string
   onOpenTaskDetails: () => void
}

export default function TaskCard({
   taskName,
   taskCreationTime,
   taskDescription,
   taskDueDate,
   taskListName,
   taskPriority,
   taskId,
   onOpenTaskDetails,
}: TaskCardProps) {
   return (
      <div className="w-full border-2 border-gray-300" data-testid="task-card">
         {/* ========= CARD HEADER ========= */}
         <TaskHeader
            taskName={taskName}
            taskId={taskId}
            taskCreationTime={taskCreationTime}
            onOpenTaskDetails={onOpenTaskDetails}
         />

         {/* ========= CARD CONTENT ========= */}
         <div className="flex flex-col gap-4 justify-center items-start p-4">
            <TaskDescription
               taskDescription={taskDescription}
               onOpenTaskDetails={onOpenTaskDetails}
            />
            <TaskDueDate taskDueDate={taskDueDate} />
            <TaskPriority taskPriority={taskPriority} />
            <TaskMove taskListName={taskListName} taskId={taskId} />
         </div>
      </div>
   )
}
