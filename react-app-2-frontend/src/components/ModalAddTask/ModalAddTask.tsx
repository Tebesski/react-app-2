import { useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import FromDropdown from "../UI/Form/FormDropdown/FormDropdown"
import Datepicker from "tailwind-datepicker-react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { closeModal } from "@/reducers/modal.reducer"
import { TaskPriorityEnum } from "@/types/TaskPriorityEnum"

export default function ModalAddTask() {
   const dispatch = useDispatch()
   const { addTaskModal } = useSelector((state: RootState) => state.modalSlice)

   const closeAddTaskModal = () => {
      dispatch(closeModal("addTaskModal"))
   }

   const [taskName, setTaskName] = useState("")
   const [taskDescription, setTaskDescription] = useState<string>("")
   const [dueDate, setDueDate] = useState(new Date())
   const [priority, setPriority] = useState<TaskPriorityEnum | "">("")
   const [showDatepicker, setShowDatepicker] = useState(false)
   const priorities = [
      { key: "low", value: "LOW" },
      { key: "medium", value: "MEDIUM" },
      { key: "high", value: "HIGH" },
   ]

   function handleTaskSubmit() {
      console.log("List name: ", taskName)
   }

   function handleChangeTaskName<T extends HTMLInputElement>(
      e: React.ChangeEvent<T>
   ) {
      setTaskName(e.target.value)
   }

   function handleChangeTaskDescription<T extends HTMLTextAreaElement>(
      e: React.ChangeEvent<T>
   ) {
      setTaskDescription(e.target.value)
   }

   const handleChangeDueDate = (date: Date) => {
      setDueDate(date)
   }

   function handleChangePriority(priority: string | undefined) {
      setPriority(priority as TaskPriorityEnum)
   }

   const listNameInput = (
      <div className="flex flex-col gap-6">
         <FormInput
            inputLabel={"Enter card name"}
            value={taskName}
            changeHandler={handleChangeTaskName}
            required={true}
            variant="standard"
         />
         <FormInput
            inputLabel={"Enter card description"}
            value={taskDescription}
            changeHandler={handleChangeTaskDescription}
            required={true}
            variant="outlined"
         />
         <FromDropdown
            options={priorities}
            setSelectedOpt={handleChangePriority}
            label={"Priority"}
            selectedOpt={priority}
         />
         <Datepicker
            show={showDatepicker}
            setShow={setShowDatepicker}
            onChange={handleChangeDueDate}
         />
         <SubmitButton
            onClick={() => handleTaskSubmit()}
            hasIcon={false}
            text="Add task"
            disabled={
               !taskName.trim() ||
               !taskDescription.trim() ||
               !dueDate ||
               !priority
            }
            disabledText="Please, fill the form"
         />
      </div>
   )

   return (
      <Dialog open={addTaskModal} handler={closeAddTaskModal} size="xs">
         <Modal
            mainContent={listNameInput}
            title={""}
            contentCentered={true}
            onClose={closeAddTaskModal}
         />
      </Dialog>
   )
}
