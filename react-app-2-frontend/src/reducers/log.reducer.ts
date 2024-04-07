import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LogState } from "@/types/reducer.types"

const initialState: LogState = {
   logs: [],
}

const logSlice = createSlice({
   name: "logReducer",
   initialState,
   reducers: {
      setCurrentLogs(state, action: PayloadAction<LogState>) {
         state.logs = action.payload.logs
      },
   },
})

export const { setCurrentLogs } = logSlice.actions

export default logSlice.reducer
