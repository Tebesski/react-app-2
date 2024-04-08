import { v4 as uuidv4 } from "uuid"

export interface INotification {
   id: string
   notificationText: string
   notificationType: "green" | "red" | "blue" | "yellow"
   notificationShown: boolean
   icon?: string
}

export default class NotificationModel implements INotification {
   id: string
   notificationText: string
   notificationType: "green" | "red" | "blue" | "yellow"
   notificationShown: boolean
   icon?: string

   constructor(
      notificationText: string,
      notificationType: "green" | "red" | "blue" | "yellow",
      notificationShown: boolean,
      icon?: string
   ) {
      this.id = uuidv4()
      this.notificationText = notificationText
      this.notificationType = notificationType
      this.notificationShown = notificationShown
      this.icon = icon
   }
}
