import type { Meta, StoryObj } from "@storybook/react"
import LogHistory from "./LogHistory"

const meta: Meta<typeof LogHistory> = {
   title: "LogHistory/LogHistory",
   component: LogHistory,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      historyOpened: true,
      closeHistory: () => {},
   },
}
