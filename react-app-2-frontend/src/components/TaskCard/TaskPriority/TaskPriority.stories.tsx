import type { Meta, StoryObj } from "@storybook/react"
import TaskPriority from "./TaskPriority"

const meta: Meta<typeof TaskPriority> = {
   title: "TaskCard/TaskPriority",
   component: TaskPriority,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskPriority: "MEDIUM",
   },
}
