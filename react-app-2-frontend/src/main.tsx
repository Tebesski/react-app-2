import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import store from "./store/store.ts"

import App from "./App.tsx"
import "./index.css"
import NotificationContainer from "./components/UI/Notification/NotificationContainer.tsx"
import LogHistory from "./components/LogHistory/LogHistory.tsx"
import ModalAddBoard from "./components/ModalAddBoard/ModalAddBoard.tsx"
import ModalAddList from "./components/ModalAddList/ModalAddList.tsx"
import ModalAddTask from "./components/ModalAddTask/ModalAddTask.tsx"
import ModalTaskDetails from "./components/ModalTaskDetails/ModalTaskDetails.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
)
