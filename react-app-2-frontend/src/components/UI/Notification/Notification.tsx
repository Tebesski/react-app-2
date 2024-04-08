import { Alert, IconButton } from "@material-tailwind/react"
import { INotification } from "@/models/Notification.model"
import { useDispatch } from "react-redux"
import {
   removeNotification,
   toggleNotification,
} from "@/reducers/notification.reducer"
import { useEffect } from "react"

export default function Notification({
   id,
   notificationText,
   notificationType,
   icon,
   notificationShown = false,
}: INotification) {
   const dispatch = useDispatch()

   useEffect(() => {
      const timer = setTimeout(() => {
         dispatch(removeNotification(id))
         dispatch(toggleNotification(id))
      }, 3000)

      return () => {
         clearTimeout(timer)
      }
   }, [dispatch, id])

   return (
      <Alert
         data-testid="notification-element"
         open={notificationShown}
         icon={<i className={`fa fa-${icon}`} />}
         color={notificationType}
         animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
         }}
         className="h-12 w-60 items-center fixed top-5 right-5 z-50"
         action={
            <IconButton
               variant="text"
               color="white"
               size="sm"
               className="!absolute top-1 right-3"
               onClick={() => dispatch(removeNotification(id))}
            >
               <i className="fa fa-times" />
            </IconButton>
         }
      >
         {notificationText}
      </Alert>
   )
}
