import type { Meta, StoryObj } from "@storybook/react"
import TaskDescription from "./TaskDescription"

const meta: Meta<typeof TaskDescription> = {
   title: "TaskCard/TaskDescription",
   component: TaskDescription,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskDescription:
         "This is a task description. This is a task description. This is a task description. This is a task description. This is a task description.",
   },
}
