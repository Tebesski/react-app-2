import type { Meta, StoryObj } from "@storybook/react"
import Notification from "./Notification"

const meta: Meta<typeof Notification> = {
   title: "Notification/Notification",
   component: Notification,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      notificationText: "Error",
      notificationType: "red",
      icon: "exclamation-circle",
      notificationShown: true,
   },
}
