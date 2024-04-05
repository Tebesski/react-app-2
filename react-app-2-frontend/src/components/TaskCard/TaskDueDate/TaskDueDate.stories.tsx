import type { Meta, StoryObj } from "@storybook/react"
import TaskDueDate from "./TaskDueDate"

const meta: Meta<typeof TaskDueDate> = {
   title: "TaskCard/TaskDueDate",
   component: TaskDueDate,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskDueDate: "2022-12-31",
   },
}
