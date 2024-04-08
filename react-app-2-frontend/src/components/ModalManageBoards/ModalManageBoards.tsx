import { Dialog } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import Table from "../UI/Table/Table"
import { closeModal } from "@/reducers/modal.reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { createRef, useState } from "react"
import dayjs from "dayjs"
import { renameBoard } from "@/reducers/board.reducer"
import { updateBoardName } from "@/api/board.api"
import NotificationModel from "@/models/Notification.model"
import {
   addNotification,
   toggleNotification,
} from "@/reducers/notification.reducer"

export default function ModalManageBoards() {
   const dispatch = useDispatch()
   const { boardManagerModal } = useSelector(
      (state: RootState) => state.modalSlice
   )
   const { boards } = useSelector((state: RootState) => state.boardSlice)

   const closeBoardManagerModal = () => {
      dispatch(closeModal("boardManagerModal"))
      setEditingMode(false)
   }

   const TABLE_HEAD = ["Table", "Created at", "", ""]
   const inputRef = createRef<HTMLInputElement>()
   const [editingMode, setEditingMode] = useState(false)
   const [newBoardName, setNewBoardName] = useState("")

   const handleEditBoard = () => {
      setEditingMode(true)
      inputRef.current?.focus()
   }

   async function handleSubmitTableName(board_id: string) {
      try {
         setEditingMode(false)
         await updateBoardName(board_id, newBoardName)
         dispatch(renameBoard({ board_id, board_name: newBoardName }))

         const notification = new NotificationModel(
            `Board name was changed to ${newBoardName}`,
            "green",
            false,
            "check-circle"
         )
         dispatch(addNotification(notification))
         dispatch(toggleNotification(notification.id))

         setNewBoardName("")
      } catch (error) {
         console.error("Error updating board name")
         const notification = new NotificationModel(
            `Board name was not changed`,
            "red",
            false,
            "exclamation-circle"
         )
         dispatch(addNotification(notification))
         dispatch(toggleNotification(notification.id))
      }
   }

   const handleCancelEdit = () => {
      setNewBoardName("")
      setEditingMode(false)
   }

   const tableData = boards.map((board) => ({
      name: editingMode ? (
         <span className="flex justify-between w-full">
            <input
               ref={inputRef}
               value={newBoardName || board.board_name}
               onChange={(e) => setNewBoardName(e.target.value)}
               className="bg-gray-200 rounded p-1 text-sm"
            />

            <button
               onClick={() => handleSubmitTableName(board.board_id)}
               className="focus:outline-none"
            >
               <i className="fas fa-check text-green-500"></i>
            </button>
            <button onClick={handleCancelEdit} className="focus:outline-none">
               <i className="fas fa-times text-red-500"></i>
            </button>
         </span>
      ) : (
         board.board_name
      ),
      date: dayjs(board.board_creation_time).format("DD-MM-YYYY"),
      board_id: board.board_id,
   }))

   // DELETE BOARD FUNCTIONALITY IS THERE:
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
         data-testid="modal-manage-boards"
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
