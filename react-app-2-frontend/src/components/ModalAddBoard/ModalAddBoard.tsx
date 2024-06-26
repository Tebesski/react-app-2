import { useEffect, useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import { closeModal } from "@/reducers/modal.reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { addBoard, setCurrentBoard } from "@/reducers/board.reducer"
import BoardModel from "@/models/Board.model"
import { createBoard } from "@/api/board.api"
import NotificationModel from "@/models/Notification.model"
import {
   addNotification,
   toggleNotification,
} from "@/reducers/notification.reducer"

export default function ModalAddBoard() {
   const dispatch = useDispatch()
   const { addBoardModal } = useSelector((state: RootState) => state.modalSlice)

   const [boardName, setBoardName] = useState("")
   const [newBoard, setNewBoard] = useState<BoardModel>()

   useEffect(() => {
      if (newBoard) {
         dispatch(addBoard(newBoard))
         closeAddBoardModal()
      }
   }, [newBoard])

   function handleBoardSubmit() {
      async function addTask() {
         try {
            const newBoard = await createBoard(boardName)
            setNewBoard(newBoard)
            dispatch(setCurrentBoard(newBoard))

            const notification = new NotificationModel(
               `Board ${boardName} added`,
               "green",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))

            setBoardName("")
         } catch (error) {
            const notification = new NotificationModel(
               "Error adding board",
               "red",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))
         }
      }
      addTask()
   }

   const closeAddBoardModal = () => {
      dispatch(closeModal("addBoardModal"))
   }

   function handleBoardNameChange<T extends HTMLInputElement>(
      e: React.ChangeEvent<T>
   ) {
      setBoardName(e.target.value)
   }

   const listNameInput = (
      <div className="flex flex-col gap-6">
         <FormInput
            inputLabel={"Enter a new board name"}
            value={boardName}
            changeHandler={handleBoardNameChange}
            required={true}
            variant="standard"
         />
         <SubmitButton
            onClick={handleBoardSubmit}
            hasIcon={false}
            text="Add"
            disabled={!boardName.trim()}
            disabledText="Please, enter table name"
         />
      </div>
   )

   return (
      <Dialog
         open={addBoardModal}
         handler={closeAddBoardModal}
         size="xs"
         data-testid="modal-add-board"
      >
         <Modal
            mainContent={listNameInput}
            title={""}
            contentCentered={true}
            onClose={closeAddBoardModal}
         />
      </Dialog>
   )
}
