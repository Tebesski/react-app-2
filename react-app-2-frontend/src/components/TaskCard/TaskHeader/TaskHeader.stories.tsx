import type { Meta, StoryObj } from "@storybook/react"
import TaskHeader from "./TaskHeader"

const meta: Meta<typeof TaskHeader> = {
   title: "TaskCard/TaskHeader",
   component: TaskHeader,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskName: "Task 1",
      taskId: "1",
      taskCreationTime: new Date().toISOString(),
   },
}
