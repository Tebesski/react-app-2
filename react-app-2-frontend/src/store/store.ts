import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "@/reducers/task.reducer"
import taskListReducer from "@/reducers/task-list.reducer"
import logReducer from "@/reducers/log.reducer"
import boardReducer from "@/reducers/board.reducer"
import modalReducer from "@/reducers/modal.reducer"
import notificationReducer from "@/reducers/notification.reducer"

const store = configureStore({
   reducer: {
      taskSlice: taskReducer,
      taskListSlice: taskListReducer,
      logSlice: logReducer,
      boardSlice: boardReducer,
      modalSlice: modalReducer,
      notificationSlice: notificationReducer,
   },
})

export default store
