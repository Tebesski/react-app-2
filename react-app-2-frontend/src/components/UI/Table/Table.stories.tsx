import type { Meta, StoryObj } from "@storybook/react"
import Table from "./Table"

const meta: Meta<typeof Table> = {
   title: "Table/Table",
   component: Table,
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
      tableHead: ["Name", "Date"],
      tableRows: [
         {
            name: "Table 1",
            date: "23/04/18",
         },
         {
            name: "Table 2",
            date: "23/04/18",
         },
         {
            name: "Table 3",
            date: "23/04/18",
         },
         {
            name: "Table 4",
            date: "23/04/18",
         },
         {
            name: "Table 5",
            date: "23/04/18",
         },
         {
            name: "Table 5",
            date: "23/04/18",
         },
         {
            name: "Table 5",
            date: "23/04/18",
         },
         {
            name: "Table 5",
            date: "23/04/18",
         },
      ],
   },
}
