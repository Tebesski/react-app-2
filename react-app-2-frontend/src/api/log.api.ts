import LogModel from "@/models/Log.model"
import { AxiosResponse } from "axios"
import client from "./client"
import handleError from "./utilities/handleError.api"

// Fetch logs by Board ID
export async function fetchLogsByBoardId(
   board_id: string
): Promise<LogModel[] | undefined> {
   try {
      const res: AxiosResponse<LogModel[]> = await client.get(
         `/log/${board_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Fetch logs by Task ID
export async function fetchLogByTaskId(
   task_id: string
): Promise<LogModel[] | undefined> {
   try {
      const res: AxiosResponse<LogModel[]> = await client.get(`/log/${task_id}`)
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}
