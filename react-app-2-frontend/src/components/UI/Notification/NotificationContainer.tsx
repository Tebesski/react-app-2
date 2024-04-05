import { useSelector } from "react-redux"
import Notification from "./Notification"
import { RootState } from "@/reducers/root.reducer"

function NotificationContainer() {
   const notifications = useSelector(
      (state: RootState) => state.notificationSlice.notifications
   )

   return (
      <div>
         {notifications.map((notification) => (
            <Notification key={notification.id} {...notification} />
         ))}
      </div>
   )
}

export default NotificationContainer
