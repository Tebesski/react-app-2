import { TaskPriorityEnum } from "./TaskPriorityEnum"
import TaskListModel from "@/models/TaskList.model"
import TaskCardModel from "../models/TaskCard.model"
import BoardModel from "@/models/Board.model"
import LogModel from "@/models/Log.model"
import NotificationModel from "@/models/Notification.model"

export type TaskState = {
   tasks: TaskCardModel[]
}

export type TaskListState = {
   taskLists: TaskListModel[]
}

export type LogState = {
   logs: LogModel[]
}

export type BoardState = { boards: BoardModel[] }

export type NotificationState = {
   notifications: NotificationModel[]
}

export type UpdateTaskState = {
   task_id: string
   name: string
   description: string
   due_date: string
   priority: TaskPriorityEnum
   task_list_id: string
}

export type ModalState = {
   addTaskModal: boolean
   addTaskListModal: boolean
   addBoardModal: boolean
   logHistoryModal: boolean
   boardManagerModal: boolean
   cardPopover: boolean
   listPopover: boolean
}
