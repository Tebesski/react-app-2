import { fetchTasks } from "@/api/task.api"
import ModalAddTask from "@/components/ModalAddTask/ModalAddTask"
import TaskList from "@/components/TaskList/TaskList"
import TaskListModel from "@/models/TaskList.model"
import { openModal } from "@/reducers/modal.reducer"
import { setTasks } from "@/reducers/task.reducer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

type TaskBoardBodyProps = {
   taskList: TaskListModel[] | []
   taskListLoading: boolean
}

export default function TaskBoardBody({
   taskList,
   taskListLoading,
}: TaskBoardBodyProps) {
   const dispatch = useDispatch()

   const [currentTaskListId, setCurrentTaskListId] = useState<string | null>(
      null
   )

   useEffect(() => {
      async function fetchAllTasks() {
         const tasks = await fetchTasks()

         if (!tasks) return
         dispatch(
            setTasks({
               tasks: tasks,
               selectedTask: null,
            })
         )
      }
      if (!taskListLoading) fetchAllTasks()
   }, [taskList, taskListLoading])

   function handleAddTask(taskListId: string) {
      setCurrentTaskListId(taskListId)
      dispatch(openModal("addTaskModal"))
   }

   return (
      <div
         className="flex flex-row justify-start items-start gap-4 overflow-auto pb-5 w-full"
         data-testid="task-board-body"
      >
         {taskList!.map((taskList) => (
            <div className="flex-basis-22" key={taskList.task_list_id}>
               <TaskList
                  {...taskList}
                  onAddTask={() => handleAddTask(taskList.task_list_id)}
               />
            </div>
         ))}
         <ModalAddTask taskListId={currentTaskListId!} />
      </div>
   )
}
