import { IsNotEmpty } from 'class-validator';

export default class RenameBoardDto {
  @IsNotEmpty()
  board_name: string;
}
