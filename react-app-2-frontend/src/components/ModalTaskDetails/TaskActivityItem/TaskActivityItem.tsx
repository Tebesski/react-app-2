import LogModel from "@/models/Log.model"
import TaskListModel from "../../../models/TaskList.model"
import dayjs from "dayjs"

export default function TaskActivityItem({ logItem }: { logItem: LogModel }) {
   const { log_action, log_date, new_value, old_value } = logItem

   const taskList: TaskListModel[] = [
      { task_list_id: "1", task_list_name: "List 1" },
      { task_list_id: "2", task_list_name: "List 2" },
   ]

   const oldList: TaskListModel | undefined = taskList.find(
      (list) => list.task_list_id === old_value
   )
   const newList: TaskListModel | undefined = taskList.find(
      (list) => list.task_list_id === new_value
   )

   const actionTexts: Record<string, string> = {
      CREATE: "created this task",
      DELETE: "deleted this task",
      RENAME: "renamed this task ",
      UPD_PRIORITY: " updated the priority of this task ",
      UPD_DESCRIPTION: "updated the description of this task ",
      UPD_DUE_DATE: "updated the due date of this task ",
      MOVE: "moved this task ",
   }

   const additionalTexts: Record<string, string> = {
      RENAME: `from ${String(old_value)} to ${String(new_value)}`,
      UPD_PRIORITY: `from ${old_value} to ${
         new_value.charAt(0).toUpperCase() + new_value.slice(1).toLowerCase()
      }`,
      UPD_DESCRIPTION: `from ${old_value} to ${new_value}`,
      UPD_DUE_DATE: `from ${old_value} to ${new_value}`,
      MOVE: `from 🗎 ${oldList?.task_list_name} to 🗎 ${newList?.task_list_name}`,
   }

   const logMessage = {
      actionText: `You ${
         actionTexts[log_action] || "performed unknown action on this task"
      }`,
      additionalText: additionalTexts[log_action] || "",
   }

   const textStyles = {
      actionText: "text-dark",
      additionalText: "text-dark italic font-medium",
   }

   return (
      <li>
         <div className="flex flex-col gap-2">
            <p className="text-sm">
               <span className={textStyles.actionText}>
                  {logMessage.actionText}
               </span>
               <span className={textStyles.additionalText}>
                  {logMessage.additionalText}
               </span>
            </p>
            <p className="ml-2 text-gray-900 opacity-80 text-xs">
               {dayjs(log_date).format("MMM D, h:mm A")}
            </p>
         </div>
      </li>
   )
}
