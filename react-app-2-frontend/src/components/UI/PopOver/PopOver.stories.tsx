import type { Meta, StoryObj } from "@storybook/react"
import PopOver from "./PopOver"
import PopOverButton from "../Buttons/PopOverButton/PopOverButton"

const meta: Meta<typeof PopOver> = {
   title: "PopOver/PopOver",
   component: PopOver,
   parameters: {
      layout: "centered",
   },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      children: (
         <PopOverButton
            text="Button Text"
            icon="check"
            color="blue"
            onClick={() => {}}
         />
      ),
   },
}

export const WithMultipleButtons: Story = {
   args: {
      children: (
         <div>
            <PopOverButton
               text="Button 1"
               icon="check"
               color="blue"
               onClick={() => {}}
            />
            <PopOverButton
               text="Button 2"
               icon="times"
               color="red"
               onClick={() => {}}
            />
            <PopOverButton
               text="Button 3"
               icon="exclamation"
               color="yellow"
               onClick={() => {}}
            />
         </div>
      ),
   },
}
