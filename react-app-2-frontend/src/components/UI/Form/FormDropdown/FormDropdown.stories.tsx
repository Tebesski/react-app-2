import type { Meta, StoryObj } from "@storybook/react"
import FormDropdown from "./FormDropdown"

const meta: Meta<typeof FormDropdown> = {
   title: "Form/FormDropdown",
   component: FormDropdown,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      options: [
         { key: "1", value: "Option 1" },
         { key: "2", value: "Option 2" },
         { key: "3", value: "Option 3" },
      ],
   },
}
