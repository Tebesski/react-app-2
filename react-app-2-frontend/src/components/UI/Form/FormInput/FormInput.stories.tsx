import type { Meta, StoryObj } from "@storybook/react"
import FormInput from "../FormInput/FormInput"

const meta: Meta<typeof FormInput> = {
   title: "Form/FormInput",
   component: FormInput,
   parameters: {
      layout: "centered",
   },
   args: {
      value: "",
      changeHandler: () => {},
      inputLabel: "Placeholder",
      required: true,
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      value: "",
      changeHandler: () => {},
      multiline: false,
      required: true,
      inputLabel: "Placeholder",
   },
}
