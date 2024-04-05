import type { Meta, StoryObj } from "@storybook/react"
import LogHistoryItem from "./LogHistoryItem"

const meta: Meta<typeof LogHistoryItem> = {
   title: "LogHistory/LogHistoryItem",
   component: LogHistoryItem,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      logItem: {
         log_id: "12345",
         log_date: new Date(),
         log_action: "CREATE",
         entity_type: "Task",
         entity_id: "457567567567567",
         entity_field: "",
         new_value: "Task 1",
         old_value: "",
      },
   },
}
