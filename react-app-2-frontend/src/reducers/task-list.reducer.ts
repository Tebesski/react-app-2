import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskListState } from "@/types/reducer.types"
import TaskListModel from "../models/TaskList.model"

const initialState: TaskListState = {
   taskLists: [],
   currentTaskList: [],
}

const tasksListSlice = createSlice({
   name: "taskListReducer",
   initialState,
   reducers: {
      setTaskList(state, action: PayloadAction<TaskListState>) {
         state.taskLists = action.payload.taskLists
      },

      setCurrentTaskList(state, action: PayloadAction<TaskListModel[]>) {
         state.currentTaskList = action.payload
      },

      addNewTaskList(state, action: PayloadAction<TaskListModel>) {
         state.taskLists.push(action.payload)
      },

      addNewCurrentTaskList(state, action: PayloadAction<TaskListModel>) {
         state.currentTaskList.push(action.payload)
      },

      deleteList(state, action: PayloadAction<string>) {
         state.taskLists = state.taskLists.filter(
            (task) => task.task_list_id !== action.payload
         )
      },

      deleteCurrentList(state, action: PayloadAction<string>) {
         state.currentTaskList = state.currentTaskList.filter(
            (task) => task.task_list_id !== action.payload
         )
      },

      renameTaskList(
         state,
         action: PayloadAction<{ task_list_id: string; task_list_name: string }>
      ) {
         const taskList = state.taskLists.find(
            (taskList) => taskList.task_list_id === action.payload.task_list_id
         )
         if (taskList) {
            taskList.task_list_name = action.payload.task_list_name
         }
      },

      renameCurrentTaskList(
         state,
         action: PayloadAction<{ task_list_id: string; task_list_name: string }>
      ) {
         const taskList = state.currentTaskList.find(
            (taskList) => taskList.task_list_id === action.payload.task_list_id
         )
         if (taskList) {
            taskList.task_list_name = action.payload.task_list_name
         }
      },
   },
})

export const {
   setTaskList,
   addNewTaskList,
   addNewCurrentTaskList,
   deleteList,
   deleteCurrentList,
   renameTaskList,
   renameCurrentTaskList,
   setCurrentTaskList,
} = tasksListSlice.actions

export default tasksListSlice.reducer
