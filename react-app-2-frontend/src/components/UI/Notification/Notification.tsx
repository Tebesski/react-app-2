import { Alert, IconButton } from "@material-tailwind/react"

type NotificationProps = {
   notificationText: string
   notificationType: "green" | "red" | "blue" | "yellow"
   notificationShown: boolean
   closeNotification: () => void
   icon?: string
}

export default function Notification({
   notificationText,
   notificationType,
   icon,
   notificationShown = false,
   closeNotification,
}: NotificationProps) {
   return (
      <Alert
         open={notificationShown}
         icon={<i className={`fa fa-${icon}`} />}
         color={notificationType}
         animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
         }}
         className="h-10 min-w-60 items-center"
         action={
            <IconButton
               variant="text"
               color="white"
               size="sm"
               className="!absolute top-1 right-3"
               onClick={closeNotification}
            >
               <i className="fa fa-times" />
            </IconButton>
         }
      >
         {notificationText}
      </Alert>
   )
}
