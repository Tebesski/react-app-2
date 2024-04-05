import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BoardService } from './board.service';
import Board from './board.entity';
import CreateBoardDto from './dto/create-board.dto';
import RenameBoardDto from './dto/rename-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  public async getBoards(): Promise<Board[]> {
    return await this.boardService.getBoards();
  }

  @Get('/:id')
  public async getBoardById(@Param('id') id: string): Promise<Board> {
    return await this.boardService.getBoardById(id);
  }

  @Post()
  public async createBoard(
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return await this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:id/board_name')
  public async renameBoard(
    @Body() renameBoardDto: RenameBoardDto,
    @Param('id') id: string,
  ): Promise<Board> {
    return await this.boardService.renameBoard(renameBoardDto, id);
  }

  @Delete('/:id')
  public async deleteBoard(@Param('id') id: string): Promise<Board> {
    return await this.boardService.deleteBoard(id);
  }
}
