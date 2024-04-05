import LogModel from "@/models/Log.model"
import TaskCardModel from "../../../models/TaskCard.model"
import TaskListModel from "../../../models/TaskList.model"
import dayjs from "dayjs"

export default function LogHistoryItem({ logItem }: { logItem: LogModel }) {
   const {
      entity_field,
      entity_id,
      entity_type,
      log_action,
      log_date,
      new_value,
      old_value,
   } = logItem

   const taskList: TaskListModel[] = [
      { task_list_id: "1", task_list_name: "List 1" },
      { task_list_id: "2", task_list_name: "List 2" },
   ]

   const tasks: TaskCardModel[] = [
      {
         task_id: "1",
         task_name: "Task 1",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "2",
         task_name: "Task 2",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "3",
         task_name: "Task 3",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "4",
         task_name: "Task 4",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "5",
         task_name: "Task 5",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "6",
         task_name: "Task 6",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
      {
         task_id: "7",
         task_name: "Task 7",
         task_list_id: "",
         task_description: "",
         task_due_date: "",
         task_priority: "",
         task_creation_date: "",
      },
   ]

   const oldList: TaskListModel | undefined = taskList.find(
      (list) => list.task_list_id === old_value
   )
   const newList: TaskListModel | undefined = taskList.find(
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
      UPD_DESCRIPTION: `${getField(entity_field)} from ${old_value} to ${new_value}`,
      UPD_DUE_DATE: `${getField(entity_field)} from ${old_value} to ${new_value}`,
      MOVE: ` from 🗎 ${oldList?.task_list_name} to 🗎 ${newList?.task_list_name}`,
   }

   const getEntityNameText = (type: string, id: string) => {
      if (type === "Task") {
         const task: TaskCardModel | undefined = tasks.find(
            (task) => task.task_id === id
         )
         return "◎ " + (task?.task_name || old_value || new_value)
      } else if (type === "Task list") {
         const list: TaskListModel | undefined = taskList.find(
            (list) => list.task_list_id === id
         )
         return "🗎 " + (list?.task_list_name || old_value || new_value)
      } else {
         return "_"
      }
   }

   const logMessage = {
      actionText: `You ${actionTexts[log_action] || "performed unknown action on"}`,
      entityNameText: getEntityNameText(entity_type, entity_id),
      additionalText: additionalTexts[log_action] || "",
   }

   const textStyles = {
      actionText: "text-gray-500",
      entityNameText: "text-black font-semibold",
      additionalText: "text-gray-500 italic font-medium",
   }

   return (
      <li>
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
