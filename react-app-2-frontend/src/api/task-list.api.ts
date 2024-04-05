import { AxiosResponse } from "axios"
import client from "./client"
import TaskListModel from "@/models/TaskList.model"
import handleError from "./utilities/handleError.api"

// Fetch all task lists
export async function fetchTaskLists(): Promise<TaskListModel[] | undefined> {
   try {
      const res: AxiosResponse<TaskListModel[]> = await client.get("/task-list")
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Fetch task list by id
export async function fetchTaskListByBoardId(
   board_id: string
): Promise<TaskListModel[] | undefined> {
   try {
      const res: AxiosResponse<TaskListModel[]> = await client.get(
         `/task-list/${board_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Create a new task list
export async function createTaskList(
   task_list_name: string
): Promise<TaskListModel | undefined> {
   try {
      const res: AxiosResponse<TaskListModel> = await client.post(
         "/task-list",
         { task_list_name }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Delete a task list
export async function deleteTaskList(
   task_list_id: string
): Promise<TaskListModel | undefined> {
   try {
      const res: AxiosResponse<TaskListModel> = await client.delete(
         `/task-list/${task_list_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Update a task list
export async function updateTaskListName(
   task_list_id: string,
   task_list_name: string
): Promise<TaskListModel | undefined> {
   if (task_list_name.length > 24) {
      console.error("Task list name must be less than 25 characters")
      return
   }

   try {
      const res: AxiosResponse<TaskListModel> = await client.patch(
         `/task-list/${task_list_id}/task_list_name`,
         { task_list_name }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}
