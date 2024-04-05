// TaskBoardHeader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import TaskBoardHeader from "./TaskBoardHeader"

const meta: Meta<typeof TaskBoardHeader> = {
   title: "TaskBoard/TaskBoardHeader",
   component: TaskBoardHeader,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      onOpenHistory: () => console.log("Open History"),
      onOpenAddList: () => console.log("Open Add List"),
      setSearchQuery: (query: string) => console.log(query),
   },
}
