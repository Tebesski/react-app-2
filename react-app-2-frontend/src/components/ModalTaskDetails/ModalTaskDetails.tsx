import TaskCardModel from "@/models/TaskCard.model"
import Modal from "../UI/Modal/Modal"
import { Dialog } from "@material-tailwind/react"
import TaskActivityItem from "./TaskActivityItem/TaskActivityItem"
import LogModel from "@/models/Log.model"
import ModalTaskTitle from "./ModalTaskTitle/ModalTaskTitle"
import ModalTaskInfobox from "./ModalTaskInfobox/ModalTaskInfobox"
import ModalTaskDescription from "./ModalTaskDescription/ModalTaskDescription"
import { useState } from "react"

type ModalTaskDetailsProps = {
   task: TaskCardModel
   onClose: () => void
   isOpen: boolean
}

export default function ModalTaskDetails({
   task,
   onClose,
   isOpen,
}: ModalTaskDetailsProps) {
   const [name, setName] = useState<string>(task.task_name)
   const [description, setDescription] = useState<string>(task.task_description)
   const [dueDate, setDueDate] = useState<string>(task.task_due_date)
   const [priority, setPriority] = useState<string>(task.task_priority)
   const [list, setList] = useState<string>(task.task_list_id)

   const logs: LogModel[] = []

   const Activity = logs.map((logItem: LogModel) => (
      <TaskActivityItem key={logItem.log_id} logItem={logItem} />
   ))
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
         <ModalTaskTitle title={name} />
         <ModalTaskInfobox
            info={{
               dueDate: dueDate,
               priority: priority,
               list: list,
            }}
         />
         <ModalTaskDescription
            description={description}
            changeDescription={() => setDescription(description)}
            toggleEdit={() => {}}
            editMode={false}
         />
      </div>
   )

   return (
      <Dialog open={isOpen} handler={onClose} size="xl" className="max-h-5/6">
         <Modal
            onClose={onClose}
            title={""}
            mainContent={mainContent}
            extraSectionContent={extraSectionContent}
            headerPaddingY={8}
            fullHeight
         />
      </Dialog>
   )
}
