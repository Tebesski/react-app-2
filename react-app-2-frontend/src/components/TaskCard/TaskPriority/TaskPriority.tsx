type TaskPriorityProps = {
   taskPriority: string
}

const priorityColorMap: Record<string, string> = {
   low: "text-priority-low",
   medium: "text-priority-medium",
   high: "text-priority-high",
}

export default function TaskPriority({ taskPriority }: TaskPriorityProps) {
   const priorityColor = priorityColorMap[taskPriority.toLowerCase()]

   return (
      <div className="flex flex-row items-center justify-center gap-4 w-36 h-5 bg-gray-200 rounded-full p-3 select-none">
         <i
            className={`fas fa-circle ${priorityColor}`}
            style={{ fontSize: 7 }}
         ></i>

         <span className="text-sm mt-[-1.5px]">
            {taskPriority.charAt(0).toUpperCase() +
               taskPriority.slice(1).toLowerCase()}
         </span>
      </div>
   )
}
