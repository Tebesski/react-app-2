import { Card, Typography } from "@material-tailwind/react"
import ModalButton from "../Buttons/ModalButton/ModalButton"
import { useDispatch, useSelector } from "react-redux"
import { deleteBoard } from "@/api/board.api"
import { deleteCurrentBoard, setCurrentBoard } from "@/reducers/board.reducer"
import { RootState } from "@/reducers/root.reducer"

type TableProps = {
   tableHead: string[]
   tableRows: { name: string | JSX.Element; date: string; board_id: string }[]
   handleEditBoard: () => void
}

export default function Table({
   tableHead,
   tableRows,
   handleEditBoard,
}: TableProps) {
   const dispatch = useDispatch()
   const { boards } = useSelector((state: RootState) => state.boardSlice)

   async function handleDeleteBoard(boardId: string) {
      const nextBoard = boards.find((board) => board.board_id !== boardId)
      await deleteBoard(boardId)
      dispatch(deleteCurrentBoard(boardId))
      if (nextBoard) {
         dispatch(setCurrentBoard(nextBoard))
         localStorage.setItem("currentBoard", JSON.stringify(nextBoard))
      } else {
         dispatch(setCurrentBoard(undefined))
         localStorage.removeItem("currentBoard")
      }
   }

   return (
      <Card
         className="h-full w-full overflow-auto shadow-none border-0 rounded-none max-h-96"
         data-testid="modal-table"
      >
         <table className="w-full text-left">
            <thead>
               <tr>
                  {tableHead.map((head, index) => (
                     <th
                        key={`${head}-${index}`}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                     >
                        <Typography
                           variant="paragraph"
                           color="blue-gray"
                           className="font-normal leading-none"
                        >
                           {head}
                        </Typography>
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {tableRows.map(({ name, date, board_id }, index) => {
                  const isLast = index === tableRows.length - 1
                  const classes = isLast
                     ? "p-4"
                     : "p-4 border-b border-blue-gray-50"

                  return (
                     <tr key={board_id}>
                        {/* BOARD NAME */}
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                           >
                              {name}
                           </Typography>
                        </td>
                        {/* BOARD DATE */}
                        <td className={classes}>
                           <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                           >
                              {date}
                           </Typography>
                        </td>
                        <td className={classes}>
                           {/* EDIT BOARD BUTTON */}
                           <ModalButton
                              text={"Edit"}
                              icon={"file-edit"}
                              color="main"
                              onClick={handleEditBoard}
                           />
                        </td>

                        {/* DELETE BOARD BUTTON */}
                        <td className={classes}>
                           <ModalButton
                              text={"Delete"}
                              icon={"trash"}
                              color="red-600"
                              onClick={() => handleDeleteBoard(board_id)}
                           />
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </Card>
   )
}
