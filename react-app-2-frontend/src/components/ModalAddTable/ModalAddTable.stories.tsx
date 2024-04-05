import type { Meta, StoryObj } from "@storybook/react"
import ModalAddTable from "./ModalAddTable"

const meta: Meta<typeof ModalAddTable> = {
   title: "ModalAddTable/ModalAddTable",
   component: ModalAddTable,
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
