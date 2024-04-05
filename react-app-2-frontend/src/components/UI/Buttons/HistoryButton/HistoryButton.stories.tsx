import type { Meta, StoryObj } from "@storybook/react"
import HistoryButton from "./HistoryButton"

const meta: Meta<typeof HistoryButton> = {
   title: "Buttons/HistoryButton",
   component: HistoryButton,
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
