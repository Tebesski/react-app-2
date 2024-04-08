import { useEffect, useState } from "react"
import SubmitButton from "../UI/Buttons/SubmitButton/SubmitButton"
import FormInput from "../UI/Form/FormInput/FormInput"
import Modal from "../UI/Modal/Modal"
import { Dialog, Option, Select } from "@material-tailwind/react"
import Datepicker from "tailwind-datepicker-react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { closeModal } from "@/reducers/modal.reducer"
import { TaskPriorityEnum } from "@/types/TaskPriorityEnum"
import { addNewTask } from "@/reducers/task.reducer"
import TaskCardModel from "@/models/TaskCard.model"
import { createTaskCard } from "@/api/task.api"
import NotificationModel from "@/models/Notification.model"
import {
   addNotification,
   toggleNotification,
} from "@/reducers/notification.reducer"

type ModalAddTaskProps = { taskListId: string }

export default function ModalAddTask({ taskListId }: ModalAddTaskProps) {
   const dispatch = useDispatch()
   const { addTaskModal } = useSelector((state: RootState) => state.modalSlice)
   const { currentBoard } = useSelector((state: RootState) => state.boardSlice)

   const closeAddTaskModal = () => {
      dispatch(closeModal("addTaskModal"))
   }

   const [taskName, setTaskName] = useState("")
   const [taskDescription, setTaskDescription] = useState<string>("")
   const [dueDate, setDueDate] = useState(new Date())
   const [priority, setPriority] = useState<TaskPriorityEnum | "">("")
   const [showDatepicker, setShowDatepicker] = useState(false)
   const priorities = [
      { id: "low", value: "LOW" },
      { id: "medium", value: "MEDIUM" },
      { id: "high", value: "HIGH" },
   ]
   const [newTask, setNewTask] = useState<TaskCardModel>()

   useEffect(() => {
      if (newTask) {
         dispatch(addNewTask(newTask))
         closeAddTaskModal()
      }
   }, [newTask])

   function handleTaskSubmit() {
      async function addTask() {
         try {
            const newCard = await createTaskCard({
               task_list_id: taskListId,
               task_name: taskName,
               task_description: taskDescription,
               task_due_date: dueDate.toISOString(),
               task_priority: priority,
               board_id: currentBoard!.board_id,
            })
            setNewTask(newCard)
            setTaskName("")
            setTaskDescription("")
            setDueDate(new Date())
            setPriority("")

            const notification = new NotificationModel(
               `Task ${taskName} added`,
               "green",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))
         } catch (error) {
            console.error("Error adding task")
            const notification = new NotificationModel(
               "Error adding task",
               "red",
               false
            )
            dispatch(addNotification(notification))
            dispatch(toggleNotification(notification.id))
         }
      }
      addTask()
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
         <div className="min-w-60">
            <Select
               label="Priority"
               defaultValue={priorities[0].value}
               value={priority}
               onChange={handleChangePriority}
            >
               {priorities.map((opt) => (
                  <Option key={opt.id} value={opt.value}>
                     {opt.value}
                  </Option>
               ))}
            </Select>
         </div>
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
