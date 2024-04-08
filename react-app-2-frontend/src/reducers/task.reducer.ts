import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskState } from "@/types/reducer.types"
import TaskCardModel from "../models/TaskCard.model"

export const initialState: TaskState = {
   tasks: [],
   selectedTask: null,
}

const taskSlice = createSlice({
   name: "taskReducer",
   initialState,
   reducers: {
      setTasks(state, action: PayloadAction<TaskState>) {
         state.tasks = action.payload.tasks
      },

      setSelectedTask(state, action: PayloadAction<TaskCardModel | null>) {
         state.selectedTask = action.payload
      },

      addNewTask(state, action: PayloadAction<TaskCardModel>) {
         state.tasks.push(action.payload)
      },

      deleteTask(state, action: PayloadAction<string>) {
         state.tasks = state.tasks.filter(
            (task) => task.task_id !== action.payload
         )
      },

      moveTask(
         state,
         action: PayloadAction<{ task_id: string; task_list_id: string }>
      ) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )
         if (task) {
            task.task_list_id = action.payload.task_list_id
         }
      },

      updateTaskName(
         state,
         action: PayloadAction<{ task_id: string; task_name: string }>
      ) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )
         if (task) {
            task.task_name = action.payload.task_name
         }
      },

      updateTaskDescription(
         state,
         action: PayloadAction<{ task_id: string; task_description: string }>
      ) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )
         if (task) {
            task.task_description = action.payload.task_description
         }
      },

      updateTaskDueDate(
         state,
         action: PayloadAction<{ task_id: string; task_due_date: string }>
      ) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )
         if (task) {
            task.task_due_date = action.payload.task_due_date
         }
      },

      updateTaskPriority(
         state,
         action: PayloadAction<{ task_id: string; task_priority: string }>
      ) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )
         if (task) {
            task.task_priority = action.payload.task_priority
         }
      },
   },
})

export const {
   setTasks,
   addNewTask,
   deleteTask,
   moveTask,
   updateTaskName,
   updateTaskDescription,
   updateTaskDueDate,
   updateTaskPriority,
   setSelectedTask,
} = taskSlice.actions

export default taskSlice.reducer
