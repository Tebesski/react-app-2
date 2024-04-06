import { AxiosResponse } from "axios"
import client from "./client"
import handleError from "./utilities/handleError.api"
import BoardModel from "@/models/Board.model"

// Fetch all boards
export async function fetchBoardList(): Promise<BoardModel[] | undefined> {
   try {
      const res: AxiosResponse<BoardModel[]> = await client.get("/board")
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Fetch board by id
export async function fetchBoardById(
   board_id: string
): Promise<BoardModel | undefined> {
   try {
      const res: AxiosResponse<BoardModel> = await client.get(
         `/board/${board_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Create a new board
export async function createBoard(
   board_name: string
): Promise<BoardModel | undefined> {
   try {
      const res: AxiosResponse<BoardModel> = await client.post("/board", {
         board_name,
      })
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Delete a board
export async function deleteBoard(
   board_id: string
): Promise<BoardModel | undefined> {
   try {
      const res: AxiosResponse<BoardModel> = await client.delete(
         `/board/${board_id}`
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}

// Rename board
export async function updateBoardName(
   board_id: string,
   board_name: string
): Promise<BoardModel | undefined> {
   try {
      const res: AxiosResponse<BoardModel> = await client.patch(
         `/board/${board_id}`,
         { board_name }
      )
      return res.data
   } catch (error: any) {
      handleError(error)
   }
}
