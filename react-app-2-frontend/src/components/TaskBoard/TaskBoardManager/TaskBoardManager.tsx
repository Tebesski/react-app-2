import { useState } from "react"
import { Select, Option } from "@material-tailwind/react"
import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import { useDispatch } from "react-redux"
import { openModal } from "@/reducers/modal.reducer"
import BoardModel from "@/models/Board.model"
import { setCurrentBoard } from "@/reducers/board.reducer"

type BoardProps = { boards: BoardModel[] }

export default function BoardSelector({ boards }: BoardProps) {
   const [selectedBoard, setSelectedBoard] = useState<string>("")
   const dispatch = useDispatch()

   function handleChange(boardName: string | undefined) {
      if (!boardName) return
      setSelectedBoard(boardName)

      const currentBoard = boards.find(
         (board) => board.board_name === boardName
      )
      if (!currentBoard) return
      dispatch(setCurrentBoard(currentBoard))
   }

   function handleManageBoards() {
      dispatch(openModal("boardManagerModal"))
   }

   function addNewBoard() {
      dispatch(openModal("addBoardModal"))
   }

   return (
      <div className="flex items-center">
         <div className="w-60">
            <Select
               label={selectedBoard || "Select Board"}
               onChange={(value) => handleChange(value)}
            >
               {boards.map((board) => (
                  <Option key={board.board_id} value={board.board_name}>
                     {board.board_name}
                  </Option>
               ))}
            </Select>
         </div>
         <IconOnlyButton
            onClick={handleManageBoards}
            size={"3xl"}
            icon={"table-list"}
            customClasses="ml-1"
         />
         <IconOnlyButton
            onClick={addNewBoard}
            size={"3xl"}
            icon={"plus-square"}
            customClasses="ml-1"
         />
      </div>
   )
}
