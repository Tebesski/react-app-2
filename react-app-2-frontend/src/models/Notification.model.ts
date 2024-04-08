import { v4 as uuidv4 } from "uuid"

export interface INotification {
   id: string
   notificationText: string
   notificationType: "green" | "red" | "blue" | "yellow"
   notificationShown: boolean
   icon?: string
}

export default function createNotification(
   notificationText: string,
   notificationType: "green" | "red" | "blue" | "yellow",
   notificationShown: boolean,
   icon?: string
) {
   return {
      id: uuidv4(),
      notificationText,
      notificationType,
      notificationShown,
      icon,
   }
}
