import type { Meta, StoryObj } from "@storybook/react"
import AddCardButton from "./AddCardButton"

const meta: Meta<typeof AddCardButton> = {
   title: "Buttons/AddCardButton",
   component: AddCardButton,
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
