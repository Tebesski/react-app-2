import { IsNotEmpty } from 'class-validator';

export default class CreateBoardDto {
  @IsNotEmpty()
  board_name: string;
}
