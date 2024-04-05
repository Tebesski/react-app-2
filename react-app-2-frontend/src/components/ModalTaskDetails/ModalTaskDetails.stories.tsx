import type { Meta, StoryObj } from "@storybook/react"
import ModalTaskDetails from "./ModalTaskDetails"

const meta: Meta<typeof ModalTaskDetails> = {
   title: "ModalTaskDetails/ModalTaskDetails",
   component: ModalTaskDetails,
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div className="w-screen h-screen">
            <Story />
         </div>
      ),
   ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      task: {
         task_name: "Task 1",
         task_description: "Task description",
         task_due_date: new Date().toISOString(),
         task_creation_date: new Date().toISOString(),
         task_id: "53589375693746937954",
         task_list_id: "6476390870586049",
         task_priority: "low",
      },
      isOpened: true,
   },
}
