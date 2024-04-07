import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moveTask } from "@/reducers/task.reducer"
import { Select, Option } from "@material-tailwind/react"
import { RootState } from "@/reducers/root.reducer"
import { moveTaskCard } from "@/api/task.api"

type TaskMoveProps = { taskListName: string; taskId: string }

export default function TaskMove({ taskListName, taskId }: TaskMoveProps) {
   const dispatch = useDispatch()
   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )
   const [newTaskList, setNewTaskList] = useState<string>("")

   function handleChange(taskListName: string | undefined) {
      if (!taskListName) return
      setNewTaskList(`🗎 ${taskListName}`)
      const taskListId = currentTaskList.find(
         (task) => `🗎 ${task.task_list_name}` === `🗎 ${taskListName}`
      )?.task_list_id
      if (!taskListId) return
      moveTaskCard(taskId, taskListId)
      dispatch(
         moveTask({
            task_id: taskId,
            task_list_id: taskListId,
         })
      )
   }

   return (
      <div className="w-60">
         <Select
            label={newTaskList || "Move to:"}
            onChange={(value) => handleChange(value)}
         >
            {currentTaskList
               .filter(
                  (task) => `🗎 ${task.task_list_name}` !== `🗎 ${taskListName}`
               )
               .map((task) => (
                  <Option key={task.task_list_id} value={task.task_list_name}>
                     {`🗎 ${task.task_list_name}`}
                  </Option>
               ))}
         </Select>{" "}
      </div>
   )
}
