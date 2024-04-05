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
      id: string,
      notificationText: string,
      notificationType: "green" | "red" | "blue" | "yellow",
      notificationShown: boolean,
      icon?: string
   ) {
      this.id = id
      this.notificationText = notificationText
      this.notificationType = notificationType
      this.notificationShown = notificationShown
      this.icon = icon
   }
}
