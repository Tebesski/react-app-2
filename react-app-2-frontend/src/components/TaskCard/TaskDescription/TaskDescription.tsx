type TaskDescriptionProps = {
   taskDescription: string
}

export default function TaskDescription({
   taskDescription,
}: TaskDescriptionProps) {
   return (
      <div className="w-full">
         <p className="text-sm">
            {taskDescription.length > 120
               ? taskDescription.substring(0, 100) + "..."
               : taskDescription}
         </p>
      </div>
   )
}
