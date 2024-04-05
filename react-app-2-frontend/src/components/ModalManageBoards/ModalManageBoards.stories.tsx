import type { Meta, StoryObj } from "@storybook/react"
import ModalManageBoards from "./ModalManageBoards"

const meta: Meta<typeof ModalManageBoards> = {
   title: "ModalManageBoards/ModalManageBoards",
   component: ModalManageBoards,
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div className="w-screen h-screen">
            <Story />
         </div>
      ),
   ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isOpened: true,
   },
}
