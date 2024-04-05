import { AxiosResponse } from "axios"
import client from "./client"
import TaskCardModel from "@/models/TaskCard.model"
import handleError from "./utilities/handleError.api"

export async function fetchTasks(): Promise<TaskCardModel[] | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel[]> = await client.get("/tasks")
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function fetchTaskByTaskId(
   task_id: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.get(
         `/tasks/${task_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function createTaskCard(
   taskCard: TaskCardModel
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.post(
         "/tasks",
         taskCard
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function deleteTaskCard(
   task_id: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.delete(
         `/tasks/${task_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function moveTaskCard(
   task_id: string,
   task_list_id: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.patch(
         `/tasks/${task_id}/task_list_id`,
         { task_list_id }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function updateTaskCardName(
   task_id: string,
   task_name: string
): Promise<TaskCardModel | undefined> {
   if (task_name.length > 24) {
      console.error("Task name must be less than 25 characters")
      return
   }
   try {
      const res: AxiosResponse<TaskCardModel> = await client.patch(
         `/tasks/${task_id}/task_name`,
         { task_name }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function updateTaskCardDescription(
   task_id: string,
   task_description: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.patch(
         `/tasks/${task_id}/task_description`,
         { task_description }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function updateTaskCardDueDate(
   task_id: string,
   task_due_date: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.patch(
         `/tasks/${task_id}/task_due_date`,
         { task_due_date }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

export async function updateTaskCardPriority(
   task_id: string,
   task_priority: string
): Promise<TaskCardModel | undefined> {
   try {
      const res: AxiosResponse<TaskCardModel> = await client.patch(
         `/tasks/${task_id}/task_priority`,
         { task_priority }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}
