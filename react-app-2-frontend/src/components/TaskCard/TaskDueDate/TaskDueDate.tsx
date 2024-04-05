import dayjs from "dayjs"

type TaskDueDateProps = {
   taskDueDate: string
}

export default function TaskDueDate({ taskDueDate }: TaskDueDateProps) {
   return (
      <div className="flex gap-2 items-center text-dark">
         <i className="fas fa-calendar"></i>

         <p className="text-sm">{dayjs(taskDueDate).format("ddd, DD MMM")}</p>
      </div>
   )
}
