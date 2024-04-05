import { Dialog } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import Table from "../UI/Table/Table"
import { closeModal } from "@/reducers/modal.reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { createRef, useState } from "react"

export default function ModalManageBoards() {
   const dispatch = useDispatch()
   const { boardManagerModal } = useSelector(
      (state: RootState) => state.modalSlice
   )

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

   const TABLE_ROWS = [
      {
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
               <button
                  onClick={handleCancelEdit}
                  className="focus:outline-none"
               >
                  <i className="fas fa-times text-red-500"></i>
               </button>
            </div>
         ) : (
            "Table 1"
         ),
         date: "23/04/18",
      },
   ]

   const mainContent = (
      <Table
         tableHead={TABLE_HEAD}
         tableRows={TABLE_ROWS}
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
            headerPaddingY={8}
            fullHeight
            contentFullWidth
            contentPadding={0}
         />
      </Dialog>
   )
}
