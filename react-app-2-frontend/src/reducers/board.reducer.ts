import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BoardState } from "@/types/reducer.types"
import BoardModel from "../models/Board.model"

export const initialState: BoardState = {
   boards: [],
   currentBoard: undefined,
}

const boardSlice = createSlice({
   name: "boardReducer",
   initialState,
   reducers: {
      setBoards(state, action: PayloadAction<BoardState>) {
         state.boards = action.payload.boards
      },

      setCurrentBoard(state, action: PayloadAction<BoardModel | undefined>) {
         state.currentBoard = action.payload
      },

      addBoard(state, action: PayloadAction<BoardModel>) {
         state.boards.push(action.payload)
      },

      deleteCurrentBoard(state, action: PayloadAction<string>) {
         state.boards = state.boards.filter(
            (board) => board.board_id !== action.payload
         )
      },

      renameBoard(
         state,
         action: PayloadAction<{ board_id: string; board_name: string }>
      ) {
         const board = state.boards.find(
            (board) => board.board_id === action.payload.board_id
         )
         if (board) {
            board.board_name = action.payload.board_name
         }
      },
   },
})

export const {
   setBoards,
   addBoard,
   deleteCurrentBoard,
   renameBoard,
   setCurrentBoard,
} = boardSlice.actions

export default boardSlice.reducer
