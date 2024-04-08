import { useState } from "react"
import "./TaskDescription.css"

type TaskDescriptionProps = {
   taskDescription: string
   onOpenTaskDetails: () => void
}

export default function TaskDescription({
   taskDescription,
   onOpenTaskDetails,
}: TaskDescriptionProps) {
   const [isHovered, setIsHovered] = useState(false)

   return (
      <div
         data-testid="task-description"
         className={`w-full min-h-24 max-h-24 cursor-pointer p-2 select-none ${
            isHovered ? "flare" : ""
         }`}
         title="Click to open task details"
         onClick={onOpenTaskDetails}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <p className="text-sm">
            {taskDescription.length > 120
               ? taskDescription.substring(0, 120) + "..."
               : taskDescription}
         </p>
      </div>
   )
}
