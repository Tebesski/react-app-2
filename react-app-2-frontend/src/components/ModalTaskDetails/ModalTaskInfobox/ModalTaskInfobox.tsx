import FormDropdown from "@/components/UI/Form/FormDropdown/FormDropdown"
import InfoboxItem from "./InfoboxItem/InfoboxItem"
import { useEffect, useState } from "react"
import DatePicker from "tailwind-datepicker-react"
import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import {
   moveTask,
   updateTaskPriority,
   updateTaskDueDate,
} from "@/reducers/task.reducer"
import {
   moveTaskCard,
   updateTaskCardPriority,
   updateTaskCardDueDate,
} from "@/api/task.api"
import TaskCardModel from "@/models/TaskCard.model"

type ModalTaskInfoboxProps = {
   task: TaskCardModel | null
}

export default function ModalTaskInfobox({ task }: ModalTaskInfoboxProps) {
   const dispatch = useDispatch()
   const { currentTaskList } = useSelector(
      (state: RootState) => state.taskListSlice
   )

   const listName = currentTaskList.find(
      (list) => list.task_list_id === task?.task_list_id
   )?.task_list_name

   const [selectedList, setSelectedList] = useState(`🗎 ${listName}`)
   const [selectedPriority, setSelectedPriority] = useState(task?.task_priority)
   const [dueDate, setDueDate] = useState(task?.task_due_date)
   const [showDatepicker, setShowDatepicker] = useState(false)

   async function handleChangeDueDate(date: Date) {
      const dueDate = date.toISOString()
      setDueDate(dueDate)
      dispatch(
         updateTaskDueDate({ task_id: task!.task_id, task_due_date: dueDate })
      )
      updateTaskCardDueDate(task!.task_id, dueDate)
   }

   async function handleChangePriority(value: string) {
      setSelectedPriority(value)
      const priority = value.toUpperCase()
      dispatch(
         updateTaskPriority({ task_id: task!.task_id, task_priority: priority })
      )
      updateTaskCardPriority(task!.task_id, priority)
   }

   async function handleChangeList(listName: string) {
      setSelectedList(listName)
   }

   useEffect(() => {
      if (selectedList !== `🗎 ${listName}`) {
         const listId = currentTaskList.find(
            (list) => `🗎 ${list.task_list_name}` === selectedList
         )?.task_list_id

         if (!listId) return
         dispatch(moveTask({ task_id: task!.task_id, task_list_id: listId }))
         moveTaskCard(task!.task_id, listId)
      }
   }, [selectedList])

   const priorities = [
      { id: "low", value: "LOW" },
      { id: "medium", value: "MEDIUM" },
      { id: "high", value: "HIGH" },
   ]

   const listInfo = (
      <FormDropdown
         options={currentTaskList.map((list) => {
            return {
               value: `🗎 ${list.task_list_name}`,
               id: list.task_list_id,
            }
         })}
         submitChangeHandler={handleChangeList}
         selectedOpt={selectedList!}
         label={"Current list"}
      />
   )

   const dueDateInfo = (
      <DatePicker
         show={showDatepicker}
         setShow={setShowDatepicker}
         onChange={handleChangeDueDate}
         value={new Date(dueDate!)}
      >
         <input
            type="text"
            className="bg-transparent min-w-60 h-[38px] border-main rounded-md ml-0.5"
            placeholder="Select Date"
            value={dayjs(dueDate).format("ddd D, MMMM")}
            onFocus={() => setShowDatepicker(true)}
            readOnly
         />
      </DatePicker>
   )

   const priorityInfo = (
      <FormDropdown
         submitChangeHandler={handleChangePriority}
         options={priorities}
         selectedOpt={selectedPriority!}
         label={"Priority"}
      />
   )

   return (
      <div
         className="flex flex-col gap-4 pl-8"
         data-testid="modal-task-infobox"
      >
         <InfoboxItem icon={"question-circle"} infoType={listInfo} />
         <InfoboxItem icon={"calendar"} infoType={dueDateInfo} />
         <InfoboxItem icon={"tag"} infoType={priorityInfo} />
      </div>
   )
}
