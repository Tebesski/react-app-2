import ModalTaskDetails from "@/components/ModalTaskDetails/ModalTaskDetails"
import TaskCard from "@/components/TaskCard/TaskCard"
import { useState } from "react"

type TaskListBodyProps = {
   tasks: any[]
}

export default function TaskListBody({ tasks }: TaskListBodyProps) {
   const [taskDetailsModal, setTaskDetailsModal] = useState(false)

   function handleCloseTaskDetailsModal() {
      setTaskDetailsModal(false)
   }

   function handleOpenTaskDetailsModal() {
      setTaskDetailsModal(true)
   }

   return (
      <div className="max-h-[500px] overflow-y-scroll taskListBody-scrollbar-hide">
         <div className="space-y-2">
            {tasks.map((task, index) => (
               <>
                  <TaskCard
                     key={index}
                     taskName={`Task ${index + 1}`}
                     taskCreationTime="2022-01-01"
                     taskDescription={`This is a description for task ${
                        index + 1
                     }.`}
                     taskDueDate="2022-01-31"
                     taskPriority="High"
                     taskListName="Sample List"
                     taskId={task.task_id}
                     onOpenTaskDetails={handleOpenTaskDetailsModal}
                  />
                  <ModalTaskDetails
                     task={task}
                     isOpen={taskDetailsModal}
                     onClose={handleCloseTaskDetailsModal}
                  />
               </>
            ))}
         </div>
      </div>
   )
}
