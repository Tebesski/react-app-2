import type { Meta, StoryObj } from "@storybook/react"
import EditCardModalButton from "./EditCardModalButton"

const meta: Meta<typeof EditCardModalButton> = {
   title: "Buttons/EditCardModalButton",
   component: EditCardModalButton,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      onClick: () => console.log("Clicked"),
   },
}
