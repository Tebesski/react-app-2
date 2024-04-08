import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NotificationState } from "@/types/reducer.types"
import NotificationModel from "@/models/Notification.model"

export const initialState: NotificationState = {
   notifications: [],
}

const notificationSlice = createSlice({
   name: "notification",
   initialState,
   reducers: {
      addNotification: (state, action: PayloadAction<NotificationModel>) => {
         state.notifications.push(action.payload)
      },

      removeNotification: (state, action: PayloadAction<string>) => {
         state.notifications = state.notifications.filter(
            (notification) => notification.id !== action.payload
         )
      },

      toggleNotification: (state, action: PayloadAction<string>) => {
         const notification = state.notifications.find(
            (notification) => notification.id === action.payload
         )
         if (notification) {
            notification.notificationShown = !notification.notificationShown
         }
      },
   },
})

export const { addNotification, removeNotification, toggleNotification } =
   notificationSlice.actions

export default notificationSlice.reducer
