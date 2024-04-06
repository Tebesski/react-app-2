import { fetchTasks } from "@/api/task.api"
import ModalAddTask from "@/components/ModalAddTask/ModalAddTask"
import TaskList from "@/components/TaskList/TaskList"
import TaskListModel from "@/models/TaskList.model"
import { openModal } from "@/reducers/modal.reducer"
import { RootState } from "@/reducers/root.reducer"
import { setTasks } from "@/reducers/task.reducer"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type TaskBoardBodyProps = {
   taskList: TaskListModel[] | []
   taskListLoading: boolean
}

export default function TaskBoardBody({
   taskList,
   taskListLoading,
}: TaskBoardBodyProps) {
   const dispatch = useDispatch()
   const { tasks } = useSelector((state: RootState) => state.taskSlice)

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
               currentTasks: [],
               selectedTask: undefined,
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
      <div className="flex flex-row justify-start items-start gap-4 overflow-auto pb-5 w-full">
         {taskList!.map((taskList) => (
            <div className="flex-basis-22" key={taskList.task_list_id}>
               <TaskList
                  {...taskList}
                  tasks={tasks}
                  onAddTask={() => handleAddTask(taskList.task_list_id)}
               />
            </div>
         ))}
         {currentTaskListId && <ModalAddTask taskListId={currentTaskListId} />}
      </div>
   )
}
