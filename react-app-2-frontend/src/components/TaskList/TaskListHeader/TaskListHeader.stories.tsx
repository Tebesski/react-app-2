// TaskListHeader.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import TaskListHeader from "./TaskListHeader"

const meta: Meta<typeof TaskListHeader> = {
   title: "TaskList/TaskListHeader",
   component: TaskListHeader,
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
      onAddTask: () => console.log("Add task clicked"),
      taskListName: "Sample List",
      taskListCardsAmount: 5,
      taskListId: "1",
   },
}
