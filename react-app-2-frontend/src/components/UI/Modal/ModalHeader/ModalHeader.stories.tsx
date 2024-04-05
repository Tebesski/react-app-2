import type { Meta, StoryObj } from "@storybook/react"
import ModalHeader from "./ModalHeader"

const meta: Meta<typeof ModalHeader> = {
   title: "Modal/ModalHeader",
   component: ModalHeader,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      onCloseModal: () => {
         console.log(`Closing modal window`)
      },
      title: "Modal title",
   },
}
