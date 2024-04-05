export interface IBoard {
   board_id: string
   board_name: string
}

export default class BoardModel implements IBoard {
   board_id: string
   board_name: string

   constructor(board_id: string, board_name: string) {
      this.board_id = board_id
      this.board_name = board_name
   }
}
