import type { Meta, StoryObj } from "@storybook/react"
import TaskList from "./TaskList"

const meta: Meta<typeof TaskList> = {
   title: "TaskList/TaskList",
   component: TaskList,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      tasks: [
         {
            task_name: "Task 1",
            task_description: "This is a description for task 1.",
            task_due_date: "2022-01-31",
            task_priority: "High",
            task_id: "1",
            task_list_id: "1",
            task_creation_date: "2022-01-01",
         },
      ],
      task_list_name: "Sample List",
      task_list_id: "1",
      searchQuery: "",
   },
}
