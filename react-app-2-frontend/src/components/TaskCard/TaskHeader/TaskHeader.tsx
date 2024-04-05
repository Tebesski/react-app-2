import PopOverButton from "@/components/UI/Buttons/PopOverButton/PopOverButton"
import PopOver from "@/components/UI/PopOver/PopOver"
import dayjs from "dayjs"

type TaskHeaderProps = {
   taskName: string
   taskId: string
   taskCreationTime: string
   onOpenTaskDetails: () => void
}

export default function TaskHeader({
   taskName,
   taskCreationTime,
   onOpenTaskDetails,
}: TaskHeaderProps) {
   return (
      <div className="p-2 border-b border-gray-200 flex justify-between">
         <div className="flex items-center justify-between">
            <div>
               <h2 className="font-semibold">{taskName}</h2>
               <p className="text-sm text-gray-500">
                  created on: {dayjs(taskCreationTime).format("MMM D, h:mm A")}
               </p>
            </div>
         </div>
         <PopOver>
            <PopOverButton
               text="Edit"
               icon="file-edit"
               color={"main"}
               onClick={onOpenTaskDetails}
            />
            <PopOverButton
               text="Delete"
               icon="trash"
               color={"red-600"}
               onClick={() => {}}
            />
         </PopOver>
      </div>
   )
}
