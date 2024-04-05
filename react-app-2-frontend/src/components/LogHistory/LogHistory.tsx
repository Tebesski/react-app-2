import { Drawer } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import LogHistoryItem from "./LogHistoryItem/LogHistoryItem"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { closeModal } from "@/reducers/modal.reducer"

export default function LogHistory() {
   const dispatch = useDispatch()
   const { logHistoryModal } = useSelector(
      (state: RootState) => state.modalSlice
   )

   const closeHistory = () => {
      dispatch(closeModal("logHistoryModal"))
   }

   const logItems = [
      {
         id: 1,
         logItem: {
            entity_field: "task_name",
            entity_id: "1",
            entity_type: "Task",
            log_action: "CREATE",
            log_date: new Date(),
            new_value: "Task 1",
            old_value: "",
            log_id: "1",
         },
      },
      {
         id: 2,
         logItem: {
            entity_field: "task_name",
            entity_id: "2",
            entity_type: "Task",
            log_action: "DELETE",
            log_date: new Date(),
            new_value: "",
            old_value: "Task 2",
            log_id: "2",
         },
      },
      {
         id: 3,
         logItem: {
            entity_field: "task_name",
            entity_id: "3",
            entity_type: "Task",
            log_action: "RENAME",
            log_date: new Date(),
            new_value: "Task 3",
            old_value: "Task 2",
            log_id: "3",
         },
      },
      {
         id: 4,
         logItem: {
            entity_field: "task_priority",
            entity_id: "4",
            entity_type: "Task",
            log_action: "UPD_PRIORITY",
            log_date: new Date(),
            new_value: "HIGH",
            old_value: "MEDIUM",
            log_id: "4",
         },
      },
      {
         id: 5,
         logItem: {
            entity_field: "task_description",
            entity_id: "5",
            entity_type: "Task",
            log_action: "UPD_DESCRIPTION",
            log_date: new Date(),
            new_value: "New description",
            old_value: "Old description",
            log_id: "5",
         },
      },
      {
         id: 6,
         logItem: {
            entity_field: "task_due_date",
            entity_id: "6",
            entity_type: "Task",
            log_action: "UPD_DUE_DATE",
            log_date: new Date(),
            new_value: "2022-12-31",
            old_value: "2022-01-01",
            log_id: "6",
         },
      },
      {
         id: 7,
         logItem: {
            entity_field: "task_list_id",
            entity_id: "7",
            entity_type: "Task",
            log_action: "MOVE",
            log_date: new Date(),
            new_value: "2",
            old_value: "1",
            log_id: "7",
         },
      },
   ]

   const mainContent = logItems.map((i) => (
      <LogHistoryItem key={i.logItem.log_id} logItem={i.logItem} />
   ))

   const list = (
      <ul
         role="list"
         className="marker:text-main list-disc pl-5 space-y-3 text-slate-500"
      >
         {mainContent.map((log) => log)}
      </ul>
   )

   return (
      <Drawer
         placement="right"
         open={logHistoryModal}
         className="p-0 bg-transparent"
      >
         <Modal
            rounded={false}
            onClose={closeHistory}
            mainContent={list}
            title={"History"}
            headerPaddingY={8}
            fullHeight={true}
         />
      </Drawer>
   )
}
