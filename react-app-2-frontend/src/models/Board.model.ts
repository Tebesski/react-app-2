export interface IBoard {
   board_id: string
   board_name: string
   board_creation_time: string
}

export default class BoardModel implements IBoard {
   board_id: string
   board_name: string
   board_creation_time: string

   constructor(
      board_id: string,
      board_name: string,
      board_creation_time: string
   ) {
      this.board_id = board_id
      this.board_name = board_name
      this.board_creation_time = board_creation_time
   }
}
