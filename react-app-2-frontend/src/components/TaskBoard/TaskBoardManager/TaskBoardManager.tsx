import { useState } from "react"
import { Select, Option } from "@material-tailwind/react"
import IconOnlyButton from "@/components/UI/Buttons/IconOnlyButton/IconOnlyButton"
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "@/reducers/modal.reducer"
import BoardModel from "@/models/Board.model"
import { setCurrentBoard } from "@/reducers/board.reducer"
import { RootState } from "@/reducers/root.reducer"

type BoardProps = { boards: BoardModel[] }

export default function BoardSelector({ boards }: BoardProps) {
   const [selectedBoard, setSelectedBoard] = useState<string>("")
   const dispatch = useDispatch()

   const { currentBoard } = useSelector((state: RootState) => state.boardSlice)

   function handleChange(boardName: string | undefined) {
      if (!boardName) return

      const selectedBoardFromList = boards.find(
         (board) => board.board_name === boardName
      )
      if (!selectedBoardFromList) return
      setSelectedBoard(boardName)
      dispatch(setCurrentBoard(selectedBoardFromList))
   }

   function handleManageBoards() {
      dispatch(openModal("boardManagerModal"))
   }

   function addNewBoard() {
      dispatch(openModal("addBoardModal"))
   }

   const label = () => {
      if (currentBoard) {
         return "Current board"
      } else if (!boards) {
         return "You have no boards created"
      } else {
         return "Select a board"
      }
   }

   return (
      <div className="flex items-center">
         <div className="w-60">
            <Select
               label={label()}
               onChange={(value) => handleChange(value)}
               disabled={boards.length < 1 ? true : false}
               value={selectedBoard}
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
