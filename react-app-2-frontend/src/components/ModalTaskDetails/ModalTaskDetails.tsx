import { useQuery } from "react-query"
import TaskCardModel from "@/models/TaskCard.model"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import TaskActivityItem from "./TaskActivityItem/TaskActivityItem"
import LogModel from "@/models/Log.model"
import ModalTaskTitle from "./ModalTaskTitle/ModalTaskTitle"
import ModalTaskInfobox from "./ModalTaskInfobox/ModalTaskInfobox"
import ModalTaskDescription from "./ModalTaskDescription/ModalTaskDescription"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { closeModal } from "@/reducers/modal.reducer"
import {
   setSelectedTask,
   updateTaskDescription,
   updateTaskName,
} from "@/reducers/task.reducer"
import { updateTaskCardDescription, updateTaskCardName } from "@/api/task.api"
import { fetchLogByTaskId } from "@/api/log.api"
import BackdropLoading from "../UI/BackdropLoading/BackdropLoading"

type ModalTaskDetailsProps = {
   task: TaskCardModel | null
}

export default function ModalTaskDetails({ task }: ModalTaskDetailsProps) {
   const dispatch = useDispatch()
   const { taskDetailsModal } = useSelector(
      (state: RootState) => state.modalSlice
   ) || { taskDetailsModal: false }

   const [name, setName] = useState<string>("")
   const [newName, setNewName] = useState<string>("")
   const [editingName, setEditingName] = useState<boolean>(false)

   const [description, setDescription] = useState<string>("")
   const [newDescription, setNewDescription] = useState<string>("")
   const [editingDescription, setEditingDescription] = useState<boolean>(false)

   function handleEditName() {
      setEditingName(true)
   }

   function handleCancelEditName() {
      setNewName("")
      setEditingName(false)
   }

   async function handleSubmitNewName() {
      setEditingName(false)

      dispatch(
         updateTaskName({
            task_id: task!.task_id,
            task_name: newName,
         })
      )

      await updateTaskCardName(task!.task_id, newName)
      setName(newName)
      setNewName("")
   }

   function handleEditDescription() {
      setEditingDescription(true)
   }

   function handleCancelEditDescription() {
      setNewDescription("")
      setEditingDescription(false)
   }

   async function handleSubmitNewDescription() {
      setEditingDescription(false)

      dispatch(
         updateTaskDescription({
            task_id: task!.task_id,
            task_description: newDescription,
         })
      )

      await updateTaskCardDescription(task!.task_id, newDescription)
      setDescription(newDescription)
      setNewDescription("")
   }

   function handleCloseTaskDetailsModal() {
      setNewName("")
      dispatch(closeModal("taskDetailsModal"))
      dispatch(setSelectedTask(null))
   }

   useEffect(() => {
      setName(task?.task_name || "")
      setDescription(task?.task_description || "")
   }, [task])

   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )

   async function fetchLogs() {
      if (!task) return []
      const currentLogs = await fetchLogByTaskId(task.task_id)
      return currentLogs || []
   }

   const { data: logs, isLoading } = useQuery(
      ["logs", task?.task_id],
      fetchLogs,
      {
         enabled: !!task && taskDetailsModal,
      }
   )

   const Activity =
      isLoading || !logs ? (
         <BackdropLoading data-testid="backdrop" isOpen={isLoading} />
      ) : (
         logs.map((logItem: LogModel) => (
            <TaskActivityItem
               key={logItem.log_id}
               logItem={logItem}
               taskList={currentTaskList}
            />
         ))
      )

   const extraSectionContent = {
      title: "Activity",
      component: (
         <ul className="flex flex-col gap-6 overflow-y-auto max-h-96 min-h-96 min-w-72">
            {Activity}
         </ul>
      ),
   }

   const mainContent = (
      <div className="flex flex-col w-full gap-10">
         <ModalTaskTitle
            name={name}
            handleEditName={handleEditName}
            handleCancelEdit={handleCancelEditName}
            handleSubmitNewName={handleSubmitNewName}
            setNewName={setNewName}
            newName={newName}
            editingName={editingName}
         />
         <ModalTaskInfobox task={task} />
         <ModalTaskDescription
            description={description}
            changeDescription={setNewDescription}
            toggleEdit={handleEditDescription}
            cancelEdit={handleCancelEditDescription}
            submitNewDescription={handleSubmitNewDescription}
            newDescription={newDescription}
            editingDescription={editingDescription}
         />
      </div>
   )

   return (
      <Dialog
         open={taskDetailsModal}
         handler={handleCloseTaskDetailsModal}
         size="xl"
         className="max-h-5/6"
         data-testid="modal-task-details"
      >
         <Modal
            onClose={handleCloseTaskDetailsModal}
            title={""}
            mainContent={mainContent}
            extraSectionContent={extraSectionContent}
            headerPaddingY={8}
            fullHeight
         />
      </Dialog>
   )
}
