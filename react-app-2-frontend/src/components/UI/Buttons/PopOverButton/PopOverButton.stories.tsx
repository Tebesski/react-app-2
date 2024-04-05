import type { Meta, StoryObj } from "@storybook/react"
import PopOverButton from "./PopOverButton"

const meta: Meta<typeof PopOverButton> = {
   title: "Buttons/PopOverButton",
   component: PopOverButton,
   parameters: {
      layout: "centered",
   },

   argTypes: {
      onClick: { action: "clicked" },
      color: { control: "color" },
      text: { control: "text" },
      icon: { control: "text" },
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      onClick: () => console.log("Clicked"),
      text: "EDIT",
      icon: "check",
      color: "slate",
   },
}
