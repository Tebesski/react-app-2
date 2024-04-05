import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LogState } from "@/types/reducer.types"
import LogModel from "../models/Log.model"

const initialState: LogState = {
   logs: [],
}

const logSlice = createSlice({
   name: "logReducer",
   initialState,
   reducers: {
      setLogs(state, action: PayloadAction<LogState>) {
         state.logs = action.payload.logs
      },

      addLog(state, action: PayloadAction<LogModel>) {
         state.logs = [action.payload, ...state.logs]
      },
   },
})

export const { setLogs, addLog } = logSlice.actions

export default logSlice.reducer
