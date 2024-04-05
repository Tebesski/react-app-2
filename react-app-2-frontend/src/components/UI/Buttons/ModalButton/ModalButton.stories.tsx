import type { Meta, StoryObj } from "@storybook/react"
import ModalButton from "./ModalButton"

const meta: Meta<typeof ModalButton> = {
   title: "Buttons/ModalButton",
   component: ModalButton,
   parameters: {
      layout: "centered",
   },

   argTypes: {
      onClick: { action: "clicked" },
      color: { control: "color" },
      activeBgColor: { control: "color" },
      activeBorderColor: { control: "color" },
      activeColor: { control: "color" },
      text: { control: "text" },
      width: { control: "text" },
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
      activeBgColor: "slate-900",
      activeColor: "slate-300",
      activeBorderColor: "slate",
   },
}
