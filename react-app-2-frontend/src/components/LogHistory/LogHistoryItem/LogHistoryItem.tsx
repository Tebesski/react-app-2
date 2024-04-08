import LogModel from "@/models/Log.model"
import TaskCardModel from "../../../models/TaskCard.model"
import TaskListModel from "../../../models/TaskList.model"
import dayjs from "dayjs"
import { RootState } from "@/reducers/root.reducer"
import { useSelector } from "react-redux"

type LogHistoryItemProps = {
   logItem: LogModel
}

export default function LogHistoryItem({ logItem }: LogHistoryItemProps) {
   const {
      entity_field,
      entity_id,
      entity_type,
      log_action,
      log_date,
      new_value,
      old_value,
   } = logItem

   const { tasks } = useSelector((state: RootState) => state.taskSlice)
   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )

   const oldList: TaskListModel | undefined = currentTaskList.find(
      (list) => list.task_list_id === old_value
   )
   const newList: TaskListModel | undefined = currentTaskList.find(
      (list) => list.task_list_id === new_value
   )

   function getField(field: string) {
      if (!field) {
         return ""
      }
      return field.replace(/^(task_|task_list_)/, " ").replace(/_/g, " ")
   }

   const actionTexts: Record<string, string> = {
      CREATE: "created ",
      DELETE: "deleted ",
      RENAME: "renamed ",
      UPDATE: "renamed ",
      UPD_PRIORITY: "updated ",
      UPD_DESCRIPTION: "updated ",
      UPD_DUE_DATE: "updated ",
      MOVE: "moved ",
   }

   const additionalTexts: Record<string, string> = {
      RENAME: ` to ${new_value}`,
      UPDATE: ` to ${new_value}`,
      UPD_PRIORITY: `${getField(entity_field)} from ${old_value} to ${
         ["MEDIUM", "HIGH", "LOW"].includes(new_value)
            ? new_value.charAt(0).toUpperCase() +
              new_value.slice(1).toLowerCase()
            : new_value
      }`,
      UPD_DESCRIPTION: `${getField(
         entity_field
      )} from ${old_value} to ${new_value}`,
      UPD_DUE_DATE: `${getField(
         entity_field
      )} from ${old_value} to ${new_value}`,
      MOVE: ` from 🗎 ${oldList?.task_list_name} to 🗎 ${newList?.task_list_name}`,
   }

   const getEntityNameText = (type: string, id: string) => {
      if (type === "Task") {
         const task: TaskCardModel | undefined = tasks.find(
            (task) => task.task_id === id
         )
         return "◎ " + (task?.task_name || "_")
      } else if (type === "Task list") {
         const list: TaskListModel | undefined = currentTaskList.find(
            (list) => list.task_list_id === id
         )
         return "🗎 " + (list?.task_list_name || "_")
      } else {
         return "_"
      }
   }

   const logMessage = {
      actionText: `You ${
         actionTexts[log_action] || "performed unknown action on"
      }`,
      entityNameText: getEntityNameText(entity_type, entity_id),
      additionalText: additionalTexts[log_action] || "",
   }

   const textStyles = {
      actionText: "text-gray-500",
      entityNameText: "text-black font-semibold",
      additionalText: "text-gray-500 italic font-medium",
   }

   return (
      <li data-testid="log-history-item">
         <div className="flex items-center gap-2">
            <p className="text-sm">
               <span className={textStyles.actionText}>
                  {logMessage.actionText}
               </span>
               <span className={textStyles.entityNameText}>
                  {logMessage.entityNameText}
               </span>
               <span className={textStyles.additionalText}>
                  {logMessage.additionalText}
               </span>
            </p>
         </div>
         <p className="ml-2 text-gray-500 opacity-80 text-xs">
            {dayjs(log_date).format("MMM D, h:mm A")}
         </p>
      </li>
   )
}
