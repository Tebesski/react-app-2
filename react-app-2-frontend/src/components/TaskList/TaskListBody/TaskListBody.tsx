import ModalTaskDetails from "@/components/ModalTaskDetails/ModalTaskDetails"
import TaskCard from "@/components/TaskCard/TaskCard"
import TaskCardModel from "@/models/TaskCard.model"
import { closeModal, openModal } from "@/reducers/modal.reducer"
import { RootState } from "@/reducers/root.reducer"
import { setSelectedTask } from "@/reducers/task.reducer"
import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type TaskListBodyProps = {
   tasks: TaskCardModel[]
   taskListName: string
}

export default function TaskListBody({
   tasks,
   taskListName,
}: TaskListBodyProps) {
   const dispatch = useDispatch()
   const { taskDetailsModal } = useSelector(
      (state: RootState) => state.modalSlice
   )
   const { selectedTask } = useSelector((state: RootState) => state.taskSlice)

   function handleCloseTaskDetailsModal() {
      dispatch(closeModal("taskDetailsModal"))
      dispatch(setSelectedTask(undefined))
   }

   function handleOpenTaskDetailsModal(task: TaskCardModel) {
      dispatch(openModal("taskDetailsModal"))
      dispatch(setSelectedTask(task))
   }

   return (
      <div className="max-h-[500px] overflow-y-scroll taskListBody-scrollbar-hide">
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
         {selectedTask && (
            <ModalTaskDetails
               task={selectedTask}
               isOpen={taskDetailsModal}
               onClose={handleCloseTaskDetailsModal}
            />
         )}
      </div>
   )
}
