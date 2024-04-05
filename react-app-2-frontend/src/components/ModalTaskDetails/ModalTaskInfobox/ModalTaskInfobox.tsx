import FromDropdown from "@/components/UI/Form/FormDropdown/FormDropdown"
import InfoboxItem from "./InfoboxItem/InfoboxItem"
import { useState } from "react"
import DatePicker from "tailwind-datepicker-react"
import dayjs from "dayjs"

type ModalTaskInfoboxProps = {
   info: { dueDate: string; priority: string; list: string }
}

export default function ModalTaskInfobox({ info }: ModalTaskInfoboxProps) {
   const [selectedList, setSelectedList] = useState("")
   const [selectedPriority, setSelectedPriority] = useState(info.priority)
   const [dueDate, setDueDate] = useState(info.dueDate)
   const [showDatepicker, setShowDatepicker] = useState(false)

   const handleChangeDueDate = (date: Date) => {
      setDueDate(date.toISOString())
   }

   const taskLists = [
      { key: "1", value: "List 1" },
      { key: "2", value: "List 2" },
      { key: "3", value: "List 3" },
   ]

   const priorities = [
      { key: "low", value: "LOW" },
      { key: "medium", value: "MEDIUM" },
      { key: "high", value: "HIGH" },
   ]

   const listInfo = (
      <FromDropdown
         options={taskLists}
         setSelectedOpt={setSelectedList}
         selectedOpt={selectedList}
         label={"Current list"}
      />
   )

   const dueDateInfo = (
      <DatePicker
         show={showDatepicker}
         setShow={setShowDatepicker}
         onChange={handleChangeDueDate}
         value={new Date(dueDate)}
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
      <FromDropdown
         options={priorities}
         setSelectedOpt={setSelectedPriority}
         selectedOpt={selectedPriority}
         label={"Priority"}
      />
   )

   return (
      <div className="flex flex-col gap-4 pl-8">
         <InfoboxItem icon={"question-circle"} infoType={listInfo} />
         <InfoboxItem icon={"calendar"} infoType={dueDateInfo} />
         <InfoboxItem icon={"tag"} infoType={priorityInfo} />
      </div>
   )
}
