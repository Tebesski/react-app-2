import type { Meta, StoryObj } from "@storybook/react"
import TaskBoardManager from "./TaskBoardManager"

const meta: Meta<typeof TaskBoardManager> = {
   title: "TaskBoard/TaskBoardManager",
   component: TaskBoardManager,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      setSearchQuery: (query: string) => console.log(query),
   },
}
