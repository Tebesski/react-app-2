import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskState, UpdateTaskState } from "@/types/reducer.types"
import TaskCardModel from "../models/TaskCard.model"

const initialState: TaskState = {
   tasks: [],
}

const taskSlice = createSlice({
   name: "taskReducer",
   initialState,
   reducers: {
      setTasks(state, action: PayloadAction<TaskState>) {
         state.tasks = action.payload.tasks
      },

      addTask(state, action: PayloadAction<TaskCardModel>) {
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

      updateTask(state, action: PayloadAction<UpdateTaskState>) {
         const task = state.tasks.find(
            (task) => task.task_id === action.payload.task_id
         )

         if (task) {
            Object.keys(action.payload).forEach((key) => {
               if (action.payload[key as keyof UpdateTaskState] !== undefined) {
                  task[key as keyof TaskCardModel] =
                     action.payload[key as keyof UpdateTaskState]
               }
            })
         }
      },
   },
})

export const { setTasks, addTask, deleteTask, moveTask, updateTask } =
   taskSlice.actions

export default taskSlice.reducer
