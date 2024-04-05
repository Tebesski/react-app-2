import type { Meta, StoryObj } from "@storybook/react"
import ModalBody from "./ModalBody"

const meta: Meta<typeof ModalBody> = {
   title: "Modal/ModalBody",
   component: ModalBody,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: "Modal body content",
      extraSectionContent: {
         title: "Extra Section Title",
         component: "Extra section content",
      },
   },
}

export const WithoutExtraSection: Story = {
   args: {
      children: "Modal body content",
   },
}
