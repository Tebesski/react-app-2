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
   const [description, setDescription] = useState<string>(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio. Donec et nunc at felis. Nullam ac nisi. Donec non nisi. Nullam sit amet turpis elementum ligula vehicula consequat. Nullam sit amet turpis elementum ligula vehicula consequat... Nullam sit amet turpis elementum ligula vehicula consequat. Nullam sit amet turpis elementum ligula vehicula consequat... Nullam sit amet turpis elementum ligula vehicula consequat. Nullam sit amet turpis elementum ligula vehicula consequat..."
   )

   function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setDescription(e.target.value)
   }

   const logs: LogModel[] = [
      {
         log_id: "1",
         log_action: "CREATE",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "2",
         log_action: "MOVE",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
      {
         log_id: "3",
         log_action: "RENAME",
         log_date: new Date(),
         new_value: "1",
         old_value: "2",
         entity_field: "task_name",
         entity_id: "1",
         entity_type: "Task",
      },
   ]

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
         <ModalTaskTitle title={task.task_name} />
         <ModalTaskInfobox
            info={{
               dueDate: task.task_due_date,
               priority: task.task_priority,
               list: task.task_list_id,
            }}
         />
         <ModalTaskDescription
            description={description}
            changeDescription={handleChangeDescription}
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
