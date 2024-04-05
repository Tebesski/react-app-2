import type { Meta, StoryObj } from "@storybook/react"
import BackdropLoading from "./BackdropLoading"

const meta: Meta<typeof BackdropLoading> = {
   title: "BackdropLoading/BackdropLoading",
   component: BackdropLoading,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isOpen: true,
   },
}
