import { Dialog } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import Table from "../UI/Table/Table"

type ModalManageBoardsProps = { isOpened: boolean }

export default function ModalManageBoards({
   isOpened,
}: ModalManageBoardsProps) {
   const TABLE_HEAD = ["Table", "Created at", "", ""]

   const TABLE_ROWS = [
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
   ]

   const mainContent = <Table tableHead={TABLE_HEAD} tableRows={TABLE_ROWS} />

   return (
      <Dialog
         open={isOpened}
         handler={() => {}}
         size="sm"
         className="max-h-5/6"
      >
         <Modal
            title={"Manage boards"}
            mainContent={mainContent}
            headerPaddingY={8}
            fullHeight
            contentFullWidth
            contentPadding={0}
         />
      </Dialog>
   )
}
