import "./TaskDescription.css"

type TaskDescriptionProps = {
   taskDescription: string
   onOpenTaskDetails: () => void
}

export default function TaskDescription({
   taskDescription,
   onOpenTaskDetails,
}: TaskDescriptionProps) {
   return (
      <div
         className="w-full min-h-24 max-h-24 cursor-pointer flare p-2 select-none"
         title="Click to open task details"
         onClick={onOpenTaskDetails}
      >
         <p className="text-sm">
            {taskDescription.length > 120
               ? taskDescription.substring(0, 120) + "..."
               : taskDescription}
         </p>
      </div>
   )
}
