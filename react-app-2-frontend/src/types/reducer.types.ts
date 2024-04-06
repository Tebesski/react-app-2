import { TaskPriorityEnum } from "./TaskPriorityEnum"
import TaskListModel from "@/models/TaskList.model"
import TaskCardModel from "../models/TaskCard.model"
import BoardModel from "@/models/Board.model"
import LogModel from "@/models/Log.model"
import NotificationModel from "@/models/Notification.model"

export type TaskState = {
   tasks: TaskCardModel[]
   currentTasks: TaskCardModel[]
   selectedTask: TaskCardModel | undefined
}

export type TaskListState = {
   taskLists: TaskListModel[]
   currentTaskList: TaskListModel[]
}

export type LogState = {
   logs: LogModel[]
}

export type BoardState = {
   boards: BoardModel[]
   currentBoard: BoardModel | undefined
}

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
   taskDetailsModal: boolean
   cardPopover: boolean
   listPopover: boolean
}
