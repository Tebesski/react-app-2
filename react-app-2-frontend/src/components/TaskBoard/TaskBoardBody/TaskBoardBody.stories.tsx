// TaskBoardBody.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import TaskBoardBody from "./TaskBoardBody"

const meta: Meta<typeof TaskBoardBody> = {
   title: "TaskBoard/TaskBoardBody",
   component: TaskBoardBody,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      taskLists: [
         {
            task_list_name: "Sample List",
            task_list_id: "1",
         },
      ],
   },
}
