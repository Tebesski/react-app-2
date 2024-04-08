import { render } from "@testing-library/react"
import { EnhancedStore, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import taskReducer from "@/reducers/task.reducer"
import taskListReducer from "@/reducers/task-list.reducer"
import logReducer from "@/reducers/log.reducer"
import boardReducer from "@/reducers/board.reducer"
import modalReducer from "@/reducers/modal.reducer"
import notificationReducer from "@/reducers/notification.reducer"
import React from "react"
import { RootState } from "@/reducers/root.reducer"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export function getDefaultPreloadedState() {
   return {
      taskSlice: {
         tasks: [],
         selectedTask: null,
      },
      taskListSlice: {
         taskLists: [],
         currentTaskList: [],
      },
      logSlice: {
         logs: [],
      },
      boardSlice: {
         boards: [],
         currentBoard: undefined,
      },
      modalSlice: {
         addTaskModal: false,
         addTaskListModal: false,
         addBoardModal: false,
         logHistoryModal: false,
         boardManagerModal: false,
         taskDetailsModal: false,
         cardPopover: false,
         listPopover: false,
      },
      notificationSlice: {
         notifications: [],
      },
   } as RootState
}

export function renderWithProviders(
   ui: React.ReactElement,
   {
      preloadedState = {} as RootState,
      store = configureStore({
         reducer: {
            taskSlice: taskReducer,
            taskListSlice: taskListReducer,
            logSlice: logReducer,
            boardSlice: boardReducer,
            modalSlice: modalReducer,
            notificationSlice: notificationReducer,
         },
         preloadedState,
      }) as EnhancedStore<RootState>,
      ...renderOptions
   } = {}
) {
   const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
      return (
         <Provider store={store}>
            <QueryClientProvider client={queryClient}>
               {children}
            </QueryClientProvider>
         </Provider>
      )
   }

   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
