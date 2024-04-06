import { Dialog } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import Table from "../UI/Table/Table"
import { closeModal } from "@/reducers/modal.reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { createRef, useState } from "react"
import dayjs from "dayjs"

export default function ModalManageBoards() {
   const dispatch = useDispatch()
   const { boardManagerModal } = useSelector(
      (state: RootState) => state.modalSlice
   )
   const { boards } = useSelector((state: RootState) => state.boardSlice)

   const closeBoardManagerModal = () => {
      dispatch(closeModal("boardManagerModal"))
   }

   const TABLE_HEAD = ["Table", "Created at", "", ""]
   const inputRef = createRef<HTMLInputElement>()
   const [editingMode, setEditingMode] = useState(false)
   const [newTableName, setNewTableName] = useState("")

   const handleEditBoard = () => {
      setEditingMode(true)
   }

   const handleSubmitTableName = () => {
      setEditingMode(false)
   }

   const handleCancelEdit = () => {
      setNewTableName("")
      setEditingMode(false)
   }

   const tableData = boards.map((board) => ({
      name: editingMode ? (
         <div className="flex justify-between w-full">
            <input
               ref={inputRef}
               value={newTableName}
               onChange={(e) => setNewTableName(e.target.value)}
               className="bg-gray-200 rounded p-1 text-sm"
            />

            <button
               onClick={handleSubmitTableName}
               className="focus:outline-none"
            >
               <i className="fas fa-check text-green-500"></i>
            </button>
            <button onClick={handleCancelEdit} className="focus:outline-none">
               <i className="fas fa-times text-red-500"></i>
            </button>
         </div>
      ) : (
         board.board_name
      ),
      date: dayjs(board.board_creation_time).format("DD-MM-YYYY"),
      board_id: board.board_id,
   }))

   const mainContent = (
      <Table
         tableHead={TABLE_HEAD}
         tableRows={tableData}
         handleEditBoard={handleEditBoard}
      />
   )

   return (
      <Dialog
         open={boardManagerModal}
         handler={closeBoardManagerModal}
         size="md"
         className="max-h-5/6"
      >
         <Modal
            onClose={closeBoardManagerModal}
            title={"Manage boards"}
            mainContent={mainContent}
            headerPaddingY={6}
            fullHeight
            contentFullWidth
            contentPadding={0}
         />
      </Dialog>
   )
}
