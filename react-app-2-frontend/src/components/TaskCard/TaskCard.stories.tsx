import type { Meta, StoryObj } from "@storybook/react"
import TaskCard from "./TaskCard"

const meta: Meta<typeof TaskCard> = {
   title: "TaskCard/TaskCard",
   component: TaskCard,
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div style={{ width: "300px", height: "320px" }}>
            <Story />
         </div>
      ),
   ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskName: "Sample Task",
      taskCreationTime: "2022-01-01",
      taskDescription:
         "This is a sample task description. This is a sample task description. This is a sample task description. This is a sample task description.",
      taskDueDate: "2022-01-31",
      taskListName: "List 1",
      taskPriority: "High",
      taskId: "1",
   },
}
