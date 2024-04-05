// TaskBoard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import TaskBoard from "./TaskBoard"

const meta: Meta<typeof TaskBoard> = {
   title: "TaskBoard/TaskBoard",
   component: TaskBoard,
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div className="h-screen w-screen flex justify-center items-center">
            <Story />
         </div>
      ),
   ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {},
}
