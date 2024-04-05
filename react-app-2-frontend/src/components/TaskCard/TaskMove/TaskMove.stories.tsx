import type { Meta, StoryObj } from "@storybook/react"
import TaskMove from "./TaskMove"

const meta: Meta<typeof TaskMove> = {
   title: "TaskCard/TaskMove",
   component: TaskMove,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskListName: "List 1",
      taskId: "1",
   },
}
