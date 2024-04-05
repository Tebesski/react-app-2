import type { Meta, StoryObj } from "@storybook/react"
import SubmitButton, { SubmitButtonProps } from "./SubmitButton"

const meta: Meta<typeof SubmitButton> = {
   title: "Buttons/SubmitButton",
   component: SubmitButton,
   parameters: {
      layout: "centered",
   },

   argTypes: {
      onClick: { action: "clicked" },
      hasText: { control: "boolean" },
      text: { control: "text" },
      disabled: { control: "boolean" },
      disabledText: { control: "text" },
      hasIcon: { control: "boolean" },
      icon: { control: "text" },
   },
}

export default meta

type Story = StoryObj<typeof meta>

type SubmitButtonStory = Omit<Story, "args"> & { args?: SubmitButtonProps }

export const NoIcon: SubmitButtonStory = {
   args: {
      onClick: () => console.log("Clicked"),
      text: "SUBMIT",
      disabled: true,
      disabledText: "PLEASE, FILL THE FORM",
      hasText: true,
      hasIcon: false,
   },
}

export const WithIcon: SubmitButtonStory = {
   args: {
      onClick: () => console.log("Clicked"),
      text: "SUBMIT",
      icon: "check",
      disabled: false,
      disabledText: "Disabled",
      hasText: true,
      hasIcon: true,
   },
}
