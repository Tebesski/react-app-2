import type { Meta, StoryObj } from "@storybook/react"
import Modal from "./Modal"

const meta: Meta<typeof Modal> = {
   title: "Modal/Modal",
   component: Modal,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      onClose: () => {},
      mainContent: "Modal body content",
      title: "Modal Title",
      extraSectionContent: {
         title: "Extra Section Title",
         component: "Test",
      },
      rounded: true,
   },
}

export const WithoutExtraSection: Story = {
   args: {
      onClose: () => {},
      mainContent: "Modal body content",
      title: "Modal Title",
      rounded: true,
   },
}
