import { useState } from "react"
import TaskListHeader from "./TaskListHeader/TaskListHeader"
import TaskListBody from "./TaskListBody/TaskListBody"
import AddCardButton from "../UI/Buttons/AddCardButton/AddCardButton"
// import AddTaskModal from "../ModalComponent/AddTaskModal/AddTaskModal"
import TaskCardModel from "../../models/TaskCard.model"

type TaskListProps = {
   tasks: TaskCardModel[]
   task_list_name: string
   task_list_id: string
   searchQuery: string
}

export default function TaskList({
   tasks,
   task_list_name,
   task_list_id,
   searchQuery,
}: TaskListProps) {
   const [open, setOpen] = useState(false)
   const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false)
   const taskListName = task_list_name

   const filteredTasks = tasks.filter(
      (task) =>
         task.task_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         task.task_description.toLowerCase().includes(searchQuery.toLowerCase())
   )

   function handleAddTaskModalOpen() {
      setAddTaskModalIsOpen(true)
   }

   function handleAddTaskModalClose() {
      setAddTaskModalIsOpen(false)
   }

   return (
      <div className="flex flex-col space-y-2 w-full gap-2">
         <TaskListHeader
            onAddTask={handleAddTaskModalOpen}
            taskListName={taskListName}
            taskListCardsAmount={tasks.length}
            taskListId={task_list_id}
         />
         <AddCardButton onClick={handleAddTaskModalOpen} />
         <TaskListBody tasks={filteredTasks} />

         {/* <AddTaskModal
            isOpen={addTaskModalIsOpen}
            onClose={handleAddTaskModalClose}
            taskListId={task_list_id}
         /> */}
      </div>
   )
}
