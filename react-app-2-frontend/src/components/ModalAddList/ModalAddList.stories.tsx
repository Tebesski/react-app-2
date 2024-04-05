import type { Meta, StoryObj } from "@storybook/react"
import ModalAddList from "./ModalAddList"

const meta: Meta<typeof ModalAddList> = {
   title: "ModalAddList/ModalAddList",
   component: ModalAddList,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isOpened: true,
   },
}
