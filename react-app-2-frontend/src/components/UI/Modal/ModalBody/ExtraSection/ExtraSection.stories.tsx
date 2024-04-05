import type { Meta, StoryObj } from "@storybook/react"
import ExtraSection from "./ExtraSection"

const meta: Meta<typeof ExtraSection> = {
   title: "Modal/ExtraSection",
   component: ExtraSection,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      extraSectionContent: {
         title: "Extra Section Title",
         component: "Extra section content",
      },
   },
}
