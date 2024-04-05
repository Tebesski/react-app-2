import type { Meta, StoryObj } from "@storybook/react"
import AddListButton from "./AddListButton"

const meta: Meta<typeof AddListButton> = {
   title: "Buttons/AddListButton",
   component: AddListButton,
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
