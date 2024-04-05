import { combineReducers } from "@reduxjs/toolkit"
import taskListReducer from "./task-list.reducer"
import taskReducer from "./task.reducer"
import logReducer from "./log.reducer"
import boardReducer from "./board.reducer"
import modalReducer from "./modal.reducer"
import notificationReducer from "./notification.reducer"

const rootReducer = combineReducers({
   boardSlice: boardReducer,
   taskSlice: taskReducer,
   taskListSlice: taskListReducer,
   logSlice: logReducer,
   modalSlice: modalReducer,
   notificationSlice: notificationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
