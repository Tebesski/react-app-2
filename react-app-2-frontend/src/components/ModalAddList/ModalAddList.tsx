import { useEffect, useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "@/reducers/modal.reducer"
import { RootState } from "@/reducers/root.reducer"
import { createTaskList } from "@/api/task-list.api"
import {
   addNewCurrentTaskList,
   addNewTaskList,
} from "@/reducers/task-list.reducer"
import TaskListModel from "@/models/TaskList.model"
import NotificationModel from "@/models/Notification.model"
import {
   addNotification,
   toggleNotification,
} from "@/reducers/notification.reducer"

type ModalAddListProps = { currentBoard: string | undefined }

export default function ModalAddList({ currentBoard }: ModalAddListProps) {
   const dispatch = useDispatch()
   const { addTaskListModal } = useSelector(
      (state: RootState) => state.modalSlice
   )

   const [listName, setListName] = useState("")
   const [newList, setNewList] = useState<TaskListModel>()

   const closeAddListModal = () => {
      dispatch(closeModal("addTaskListModal"))
   }

   useEffect(() => {
      if (newList) {
         dispatch(addNewTaskList(newList))
         dispatch(addNewCurrentTaskList(newList))
         closeAddListModal()
      }
   }, [newList])

   function handleListSubmit() {
      async function addNewList() {
         try {
            if (!currentBoard) return
            const newTaskList = await createTaskList(listName, currentBoard)
            setNewList(newTaskList)

            const notification = new NotificationModel(
               `Task list ${listName} added`,
               "green",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))
            setListName("")
         } catch (error) {
            console.error("Error adding task list")
            const notification = new NotificationModel(
               "Error adding task list",
               "red",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))
         }
      }
      addNewList()
   }

   function handleListNameChange<T extends HTMLInputElement>(
      e: React.ChangeEvent<T>
   ) {
      setListName(e.target.value)
   }

   const listNameInput = (
      <div className="flex flex-col gap-6">
         <FormInput
            inputLabel={"Enter task list name"}
            value={listName}
            changeHandler={handleListNameChange}
            required={true}
            variant="standard"
         />
         <SubmitButton
            onClick={() => handleListSubmit()}
            hasIcon={false}
            text="Add"
            disabled={!listName.trim()}
            disabledText="Please, enter a list name"
         />
      </div>
   )

   return (
      <Dialog
         open={addTaskListModal}
         handler={closeAddListModal}
         size="xs"
         data-testid="modal-task-add-list"
      >
         <Modal
            mainContent={listNameInput}
            title={""}
            contentCentered={true}
            onClose={closeAddListModal}
         />
      </Dialog>
   )
}
