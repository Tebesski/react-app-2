// TaskListBody.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import TaskListBody from "./TaskListBody"

const meta: Meta<typeof TaskListBody> = {
   title: "TaskList/TaskListBody",
   component: TaskListBody,
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div style={{ width: "300px", height: "100%" }}>
            <Story />
         </div>
      ),
   ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      tasks: [
         {
            taskName: "Task 1",
            taskCreationTime: "2022-01-01",
            taskDescription: "This is a description for task 1.",
            taskDueDate: "2022-01-31",
            taskPriority: "High",
            taskListName: "Sample List",
            taskId: "1",
         },
         // Add more tasks as needed
      ],
   },
}
