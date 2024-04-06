import { Card, Typography } from "@material-tailwind/react"
import ModalButton from "../Buttons/ModalButton/ModalButton"
import { useDispatch } from "react-redux"
import { deleteBoard } from "@/api/board.api"
import { deleteCurrentBoard } from "@/reducers/board.reducer"

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

   async function handleDeleteBoard(boardId: string) {
      await deleteBoard(boardId)
      dispatch(deleteCurrentBoard(boardId))
   }

   return (
      <Card className="h-full w-full overflow-auto shadow-none border-0 rounded-none max-h-96">
         <table className="w-full text-left">
            <thead>
               <tr>
                  {tableHead.map((head) => (
                     <th
                        key={head}
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
                     <tr key={index}>
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
