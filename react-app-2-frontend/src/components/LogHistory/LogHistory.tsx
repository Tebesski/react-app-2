import { Drawer } from "@material-tailwind/react"
import Modal from "../UI/Modal/Modal"
import LogHistoryItem from "./LogHistoryItem/LogHistoryItem"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/reducers/root.reducer"
import { closeModal } from "@/reducers/modal.reducer"
import { setCurrentLogs } from "@/reducers/log.reducer"
import { fetchLogsByBoardId } from "@/api/log.api"
import { useEffect } from "react"
import { useQuery } from "react-query"
import BackdropLoading from "../UI/BackdropLoading/BackdropLoading"

export default function LogHistory() {
   const dispatch = useDispatch()

   const { logHistoryModal } = useSelector(
      (state: RootState) => state.modalSlice
   )
   const { currentBoard } = useSelector((state: RootState) => state.boardSlice)

   async function fetchLogs() {
      if (!currentBoard) return []
      const currentLogs = await fetchLogsByBoardId(currentBoard.board_id)
      return currentLogs || []
   }

   const { data: logs, isLoading } = useQuery(
      ["logs", currentBoard?.board_id],
      fetchLogs,
      {
         enabled: !!currentBoard && logHistoryModal,
      }
   )

   useEffect(() => {
      if (logs) {
         dispatch(setCurrentLogs({ logs }))
      }
   }, [logs, dispatch])

   const closeHistory = () => {
      dispatch(closeModal("logHistoryModal"))
   }

   const mainContent =
      !isLoading && logs ? (
         <ul
            role="list"
            className="marker:text-main list-disc space-y-3 text-slate-500"
         >
            {logs.map((log) => (
               <LogHistoryItem key={log.log_id} logItem={log} />
            ))}
         </ul>
      ) : (
         <BackdropLoading isOpen={isLoading} />
      )

   return (
      <Drawer
         placement="right"
         open={logHistoryModal}
         className="p-0"
         onClose={closeHistory}
      >
         <Modal
            overflow="auto"
            rounded={false}
            onClose={closeHistory}
            mainContent={mainContent}
            title={"History"}
            headerPaddingY={8}
            fullHeight={true}
         />
      </Drawer>
   )
}
