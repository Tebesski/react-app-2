import { useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "@/reducers/modal.reducer"
import { RootState } from "@/reducers/root.reducer"

export default function ModalAddList() {
   const dispatch = useDispatch()
   const { addTaskListModal } = useSelector(
      (state: RootState) => state.modalSlice
   )

   const closeAddListModal = () => {
      dispatch(closeModal("addTaskListModal"))
   }

   const [listName, setListName] = useState("")

   function handleListSubmit() {
      console.log("List name: ", listName)
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
      <Dialog open={addTaskListModal} handler={closeAddListModal} size="xs">
         <Modal
            mainContent={listNameInput}
            title={""}
            contentCentered={true}
            onClose={closeAddListModal}
         />
      </Dialog>
   )
}
