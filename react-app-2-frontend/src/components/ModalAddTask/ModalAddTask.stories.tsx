import type { Meta, StoryObj } from "@storybook/react"
import ModalAddTask from "./ModalAddTask"

const meta: Meta<typeof ModalAddTask> = {
   title: "ModalAddTask/ModalAddTask",
   component: ModalAddTask,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isOpened: true,
   },
}
