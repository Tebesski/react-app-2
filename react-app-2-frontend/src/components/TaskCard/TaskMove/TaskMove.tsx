import { useState } from "react"
import { Select, Option } from "@material-tailwind/react"

type TaskMoveProps = { taskListName: string; taskId: string }

// Mocked task list data
const taskList = [
   { task_list_id: "1", task_list_name: "List 1" },
   { task_list_id: "2", task_list_name: "List 2" },
   { task_list_id: "3", task_list_name: "List 3" },
]

export default function TaskMove({ taskListName, taskId }: TaskMoveProps) {
   const [newTaskList, setNewTaskList] = useState<string>("")

   function handleChange(taskListName: string | undefined) {
      if (!taskListName) return
      setNewTaskList(taskListName)
      console.log(`Moving task ${taskId} to list ${taskListName}`)
   }

   return (
      <div className="w-60">
         <Select
            label={newTaskList || "Move to:"}
            onChange={(value) => handleChange(value)}
         >
            {taskList
               .filter((task) => task.task_list_name !== taskListName)
               .map((task) => (
                  <Option key={task.task_list_id} value={task.task_list_name}>
                     {task.task_list_name}
                  </Option>
               ))}
         </Select>
      </div>
   )
}
